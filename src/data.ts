type Website = {
  title: string
  description?: string
  address: string
}

type Collection = {
  name: string
  websites: Website[]
}

const data: Collection[] = [
  {
    name: '颜色',
    websites: [
      {
        title: 'Flat UI Colors',
        description: '280 handpicked colors ready for COPY & PASTE',
        address: 'https://flatuicolors.com/',
      },
      {
        title: 'RGB颜色值与十六进制颜色码转换工具',
        address: 'https://www.sioe.cn/yingyong/yanse-rgb-16/',
      },
    ],
  },
  {
    name: '图标',
    websites: [
      {
        title: 'iconfont-阿里巴巴矢量图标库',
        description:
          'iconfont-国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能。阿里巴巴体验团队倾力打造，设计和前端开发的便捷工具',
        address: 'https://www.iconfont.cn/',
      },
      {
        title: 'Octicons | Interface guidelines',
        description: 'Principles, standards, and usage guidelines for designing GitHub interfaces.',
        address: 'https://primer.style/design/foundations/icons/',
      },
      {
        title: 'Tabler Icons - 1400+ Open source free SVG icons',
        description:
          '1400+ open source free SVG icons. No attribution required - Tabler Icons. Configurable stroke, color and size.',
        address: 'https://tablericons.com/',
      },
      {
        title: 'Tabler Icons: over 3250 vector icons for web design',
        description:
          '3271 free and open source SVG icons designed with attention to detail to make your design stand out. Highly customizable. No attribution required. For commercial use.',
        address: 'https://tabler-icons.io/',
      },
      {
        title: 'Vector Icons and Stickers - PNG, SVG, EPS, PSD and CSS',
        description:
          'Download Free Icons and Stickers for your projects. Images made by and for designers in PNG, SVG, EPS, PSD and CSS formats',
        address: 'https://www.flaticon.com/',
      },
      {
        title: 'Mutant Standard',
        description: 'An experimental emoji set with new twists.',
        address: 'https://mutant.tech/',
      },
      {
        title: 'Iconoir | Free Icons',
        description: 'The Simple and Definitive hand-crafted SVG Icons library.',
        address: 'https://iconoir.com/',
      },
      {
        title: 'unDraw - Open source illustrations for any idea',
        description:
          'The design project with open-source illustrations for any idea you can imagine and create. Create beautiful websites, products and applications with your color, for free.',
        address: 'https://undraw.co/',
      },
      {
        title: 'ByteDance IconPark',
        description: 'IconPark, park your icon. Made by ByteDance',
        address: 'https://iconpark.oceanengine.com/official',
      },
      {
        title: 'SpinKit | Simple CSS Spinners',
        description: 'Simple CSS Spinners',
        address: 'https://tobiasahlin.com/spinkit/',
      },
      {
        title: 'Emoji Kitchen',
        description:
          "Unique illustrations of combined emoji, cooked up in Google's Emoji Kitchen, and comprehensively available on the web",
        address: 'https://emojikitchen.dev/',
      },
    ],
  },
]

export default data
