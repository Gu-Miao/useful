import { execFile } from 'node:child_process'
import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { promisify } from 'node:util'
import { load } from 'cheerio'
import { chromium } from 'playwright'
import prompts from 'prompts'
import sharp from 'sharp'

type Website = {
  title: string
  description: string
  address: string
  keywords: string[]
}

const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'

const REQUEST_TIMEOUT_MS = 12_000
const PAGE_GOTO_TIMEOUT_MS = 30_000
const PAGE_NETWORK_IDLE_TIMEOUT_MS = 10_000
const execFileAsync = promisify(execFile)

type CliArgs = {
  url?: string
  keywords?: string
}

function parseCliArgs(argv: string[]): CliArgs {
  const args: CliArgs = {}
  for (let index = 0; index < argv.length; index += 1) {
    const current = argv[index]
    if (current === '--url' && argv[index + 1]) {
      args.url = argv[index + 1]
      index += 1
      continue
    }
    if (current === '--keywords' && argv[index + 1]) {
      args.keywords = argv[index + 1]
      index += 1
    }
  }
  return args
}

function normalizeUrl(input: string): string {
  const trimmed = input.trim()
  if (!trimmed) {
    throw new Error('网址不能为空')
  }

  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`
  return new URL(withProtocol).toString()
}

function parseKeywords(raw: string): string[] {
  const segments = raw
    .split(',')
    .map(item => item.trim())
    .filter(Boolean)

  return [...new Set(segments)]
}

function createSafeTitle(title: string): string {
  const normalized = title.normalize('NFKC').trim()
  const replaced = normalized.replace(/\s+/g, '_')
  const safe = replaced.replace(/[^\p{L}\p{N}_-]/gu, '')
  return safe || 'website'
}

async function fetchText(targetUrl: string): Promise<string> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    const res = await fetch(targetUrl, {
      headers: { 'User-Agent': USER_AGENT },
      signal: controller.signal,
    })
    if (!res.ok) {
      throw new Error(`页面请求失败: ${res.status} ${res.statusText}`)
    }

    return await res.text()
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error(`页面请求超时（>${REQUEST_TIMEOUT_MS / 1000}s）`)
    }
    throw error
  } finally {
    clearTimeout(timer)
  }
}

function pickTitle(html: string, pageUrl: string): string {
  const $ = load(html)
  const ogSiteName = $('meta[property="og:site_name"]').attr('content')?.trim()
  const title = $('title').first().text().trim()
  const fallbackDomain = new URL(pageUrl).hostname

  return ogSiteName || title || fallbackDomain
}

function pickDescription(html: string): string {
  const $ = load(html)
  const fromMeta = $('meta[name="description"]').attr('content')?.trim()
  const fromOg = $('meta[property="og:description"]').attr('content')?.trim()
  return fromMeta || fromOg || ''
}

async function captureWebsiteScreenshot(targetUrl: string): Promise<Buffer> {
  const browser = await chromium.launch({ headless: true })
  try {
    const page = await browser.newPage({
      userAgent: USER_AGENT,
      viewport: { width: 1366, height: 768 },
    })

    await page.goto(targetUrl, {
      waitUntil: 'domcontentloaded',
      timeout: PAGE_GOTO_TIMEOUT_MS,
    })

    try {
      await page.waitForLoadState('networkidle', { timeout: PAGE_NETWORK_IDLE_TIMEOUT_MS })
    } catch {
      // 某些站点长连接会导致 networkidle 不触发，降级继续截图。
    }

    return await page.screenshot({ type: 'png', fullPage: false })
  } finally {
    await browser.close()
  }
}

async function saveWebp(source: Buffer, outputPath: string): Promise<void> {
  await sharp(source).webp({ quality: 72, effort: 5 }).toFile(outputPath)
}

function buildWebsitesSource(websites: Website[]): string {
  const body = websites
    .map(item => {
      const title = JSON.stringify(item.title)
      const description = JSON.stringify(item.description)
      const address = JSON.stringify(item.address)
      const keywords = item.keywords.map(keyword => JSON.stringify(keyword)).join(', ')

      return `  {\n    title: ${title},\n    description: ${description},\n    address: ${address},\n    keywords: [${keywords}],\n  },`
    })
    .join('\n')

  return `export type Website = {
  title: string
  description: string
  address: string
  keywords: string[]
}

const websites: Website[] = [
${body}
]

export default websites
`
}

async function formatWithBiome(projectRoot: string, targetFile: string): Promise<void> {
  await execFileAsync('bun', ['x', 'biome', 'format', '--write', targetFile], {
    cwd: projectRoot,
    windowsHide: true,
  })
}

async function commitChanges(projectRoot: string, files: string[]): Promise<void> {
  const { stdout } = await execFileAsync('git', ['rev-parse', '--is-inside-work-tree'], {
    cwd: projectRoot,
    windowsHide: true,
  })

  if (stdout.trim() !== 'true') {
    console.warn('当前目录不是 git 仓库，已跳过自动提交。')
    return
  }

  await execFileAsync('git', ['add', ...files], { cwd: projectRoot, windowsHide: true })
  await execFileAsync('git', ['commit', '-m', 'Add website by script'], {
    cwd: projectRoot,
    windowsHide: true,
  })
}

async function main(): Promise<void> {
  const cliArgs = parseCliArgs(process.argv.slice(2))

  const answer =
    cliArgs.url && cliArgs.keywords !== undefined
      ? { url: cliArgs.url, keywords: cliArgs.keywords }
      : await prompts(
          [
            {
              type: 'text',
              name: 'url',
              message: '请输入网站地址：',
              validate: (value: string) => (value.trim() ? true : '网址不能为空'),
            },
            {
              type: 'text',
              name: 'keywords',
              message: '请输入关键词（逗号分隔）：',
            },
          ],
          {
            onCancel: () => {
              throw new Error('已取消')
            },
          },
        )

  const normalizedUrl = normalizeUrl(answer.url as string)
  const keywords = parseKeywords((answer.keywords as string) ?? '')

  const __dirname = path.dirname(fileURLToPath(import.meta.url))
  const projectRoot = path.resolve(__dirname, '..')
  const websitesFilePath = path.join(projectRoot, 'src', 'websites.ts')

  console.log('正在抓取页面信息...')
  const html = await fetchText(normalizedUrl)
  const title = pickTitle(html, normalizedUrl)
  const description = pickDescription(html)

  console.log(`页面信息抓取成功：${title}`)
  console.log('正在渲染页面并截图...')
  const imageBuffer = await captureWebsiteScreenshot(normalizedUrl)

  const safeTitle = createSafeTitle(title)
  const imageFileName = `${safeTitle}.webp`
  const imagePath = path.join(projectRoot, 'public', imageFileName)
  await saveWebp(imageBuffer, imagePath)

  const websitesModule = (await import(pathToFileURL(websitesFilePath).toString())) as {
    default: Website[]
  }
  const currentWebsites = websitesModule.default

  if (currentWebsites.some(site => site.address === normalizedUrl)) {
    throw new Error('该网址已存在于 websites.ts，已终止。')
  }

  const nextWebsites: Website[] = [
    ...currentWebsites,
    { title: safeTitle, description, address: normalizedUrl, keywords },
  ]

  await writeFile(websitesFilePath, buildWebsitesSource(nextWebsites), 'utf8')
  await formatWithBiome(projectRoot, websitesFilePath)

  console.log('正在创建 git 提交...')
  await commitChanges(projectRoot, [
    'src/websites.ts',
    `public/${imageFileName}`,
    'scripts/index.ts',
    'package.json',
    'bun.lock',
  ])

  console.log(`完成：已新增网站并生成图片 public/${imageFileName}`)
}

void main().catch(error => {
  const message = error instanceof Error ? error.message : String(error)
  console.error(`执行失败：${message}`)
  process.exitCode = 1
})
