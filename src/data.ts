type Website = {
  title: string
  description?: string
  address: string
  recommended?: boolean
  mayNeedVPN?: boolean
  notFree?: boolean
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
  {
    name: 'CSS',
    websites: [
      {
        title: 'CSS Shadow Palette Generator',
        description: 'Friendly tutorials for developers. Focus on React, CSS, Animation, and more!',
        address: 'https://www.joshwcomeau.com/shadow-palette/',
      },
      {
        title: 'Shape Divider App',
        description: 'Create fully responsive shape dividers for your next web project',
        address: 'https://www.shapedivider.app/',
      },
      {
        title: 'Animista - On-Demand CSS Animations Library',
        description:
          'Animista is a CSS animation library and a place where you can play with a collection of ready-made CSS animations and download only those you will use.',
        address: 'https://animista.net/',
      },
    ],
  },
  {
    name: 'CSS/图像生成',
    websites: [
      {
        title: 'Gradient Generator — Create CSS, SVG and PNG color gradients',
        description:
          'Use this tool to create linear, radial, and conic gradient backgrounds. Export as CSS, SVG, PNG, and JPEG for use on your website, social media, or wallpaper.',
        address: 'https://doodad.dev/gradient-generator/',
      },
      {
        title: 'Pattern Generator | Create Seamless, Royalty-Free Patterns',
        description:
          'Generate seamless, unique, royalty-free patterns to use for free in any project. Export as SVG, JPEG, or PNG.',
        address: 'https://doodad.dev/pattern-generator/',
      },
    ],
  },
  {
    name: '图像生成',
    websites: [
      {
        title: 'ASCII Generator',
        description: 'Generate a ASCII graphic from a word or text. More than 130 fonts.',
        address: 'http://www.network-science.de/ascii/',
      },
      { title: '字符字生成器 - 神奇海螺实验室', address: 'https://magiconch.com/fontfont/' },
      {
        title: 'Shields.io: Quality metadata badges for open source projects',
        description:
          'We serve fast and scalable informational images as badges\nfor GitHub, Travis CI, Jenkins, WordPress and many more services. Use them to\ntrack the state of your projects, or for promotional purposes.',
        address: 'https://shields.io/',
      },
      {
        title: 'CSS Sprites Generator Tool | Toptal®',
        description:
          'Generate CSS image sprites from multiple images with our easy-to-use uploading tool. Get started for free.',
        address: 'https://www.toptal.com/developers/css/sprite-generator/',
      },
      {
        title: 'Blobmaker - Make organic SVG shapes for your next design',
        description:
          'Make organic SVG shapes for your next design. Modify the complexity, contrast, and color, to generate unique SVG blobs every time.',
        address: 'https://www.blobmaker.app/',
      },
      {
        title: 'Get Waves – Create SVG waves for your next design',
        description:
          'A free SVG wave generator to make unique SVG waves for your next web design. Choose a curve, adjust complexity, randomize!',
        address: 'https://getwaves.io/',
      },
      {
        title: 'colorfu',
        description:
          'Make beautiful but also meaningful wallpapers. ColorFu is where people can use words, colors, patterns and images to make unique wallpapers to express their feelings or ideas.',
        address: 'https://pearmini.github.io/colorfu/#/',
      },
      { title: 'Video2WebP', description: 'Video2WebP', address: 'https://video2webp.mattj.io/' },
      {
        title: 'Notion 风格头像制作',
        description: '一个生成 Notion 风格头像的在线工具。',
        address: 'https://notion-avatar.vercel.app/zh',
      },
      {
        title: 'Calligrapher.ai: Realistic computer-generated handwriting',
        address: 'https://www.calligrapher.ai/',
      },
      {
        title: 'Trianglify.io · Low Poly Pattern Generator',
        description:
          'Trianglify.io is a tool for generating low poly triangle patterns that can be used as wallpapers and website assets.',
        address: 'https://trianglify.io/',
      },
      {
        title:
          'NEON GENESIS EVANGELION Rei II - 福音战士標題生成器 - Evangelion Title Card Generator - 神奇海螺实验室',
        address: 'https://lab.magiconch.com/eva-title/?layout=eng-title',
      },
      { title: '梗图生成器 - 神奇海螺', address: 'https://x.magiconch.com/' },
      {
        title: 'Create beautiful images of your code',
        description:
          'Turn your code into beautiful images. Choose from a range of syntax colors, hide or show the background, and toggle between a dark and light window.',
        address: 'https://www.ray.so/',
      },
      {
        title: '微博切九图 - 微博、朋友圈、空间 切九图 工具 - 在线切九宫格、四宫格 - 神奇海螺',
        description: '在线切九宫格工具',
        address: 'https://v.magiconch.com/sns-image',
      },
    ],
  },
  {
    name: '图像处理',
    websites: [
      {
        title: 'Dither Me This | Online Image Dithering Tool',
        description:
          'Use this tool to reduce image file sizes… but in a stylish, old-school way. Upload an image and Dither Me This will transform it.',
        address: 'https://doodad.dev/dither-me-this/',
      },
      {
        title: '美图秀秀官网_免费在线P图抠图拼图_证件照制作',
        description:
          '美图秀秀P图软件提供图片美化工具、人像美容、添加文字、抠图软件、拼图、批量处理图片大小、证件照换底色、图片压缩等好用的功能，还有海报设计、平面设计、广告设计、贴纸素材、边框等丰富的内容，可制作PPT图片、简历、GIF动图等，支持Windows、Mac、Linux及网页版。',
        address: 'https://pc.meitu.com/',
      },
      {
        title: '电子包浆 图片做旧工具 赛博包浆虚拟器 - 神奇海螺实验室',
        address: 'https://magiconch.com/patina/',
      },
      {
        title: '蒸 気 機 - 蒸汽波 - 蒸汽波图片生成器 - 虚拟信号风格化影像后期工具',
        address: 'https://magiconch.com/vaporwave/',
      },
      {
        title:
          'One Last Image - 卢浮宫生成器 - One Last Kiss 风格 封面生成 图片转线稿 - 神奇海螺实验室',
        description: 'One Last Kiss 卢浮宫生成器 风格 图片转线稿 封面生成 宇多田光 神奇海螺实验室',
        address: 'https://lab.magiconch.com/one-last-image/',
      },
    ],
  },
  {
    name: '图像格式转换',
    websites: [
      {
        title: '制作ico图标 | 在线ico图标转换工具 方便制作favicon.ico - 比特虫 - Bitbug.net',
        description:
          '轻松制作ico图标,在线提供ico图标转换工具,可以将jpg、jpeg、gif、png等图像转换成ico图像,方便浏览器制作并生成favicon.ico图标,提供ico图标下载,png to ico,jpg to ico,gif to ico',
        address: 'https://www.bitbug.net/',
      },
      {
        title: 'Convertio — 文件转换器',
        description:
          'Convertio - 在线转换文件的简单工具。支持超过309种不同的文档、图像、电子表格、电子书、文档、演示文稿、音频和视频格式。',
        address: 'https://convertio.co/zh/',
      },
      {
        title: 'TinyPNG – Compress WebP, PNG and JPEG images intelligently',
        description:
          'Make your website faster and save bandwidth. TinyPNG optimizes your WebP, PNG and JPEG images by 50-80% while preserving full transparency!',
        address: 'https://tinypng.com/',
      },
      {
        title: 'PNG转ICO - 在线转换图标文件',
        description:
          'PNG转ICO - 免费在线转换PNG(Portable Network Graphics)文件到ICO(Microsoft icon)文件 - 在线转换图标文件。',
        address: 'https://www.aconvert.com/cn/icon/png-to-ico/',
      },
      {
        title: 'Squoosh',
        description:
          'Squoosh is the ultimate image optimizer that allows you to compress and compare images with different codecs in your browser.',
        address: 'https://squoosh.app/',
      },
      {
        title: 'Convert Image to Base64',
        description: 'Convert Image to Base64',
        address: 'https://image-to-base64.gutianhuang.red/',
      },
    ],
  },
  {
    name: '图片资源',
    websites: [
      {
        title: 'Lexica',
        description: 'The Stable Diffusion search engine',
        address: 'https://lexica.art/',
      },
      { title: '404 Illustrations', address: 'https://error404.fun/' },
      {
        title: 'Beautiful Free Images & Pictures | Unsplash',
        description:
          'Beautiful, free images and photos that you can download and use for any project. Better than any royalty free or stock photos.',
        address: 'https://unsplash.com/',
        mayNeedVPN: true,
      },
      { title: 'AI-Generated Bible Art', address: 'https://www.openbible.info/labs/ai-bible-art/' },
      {
        title: 'Gradient Hunt - Beautiful Color Gradients',
        description:
          'Thousands of trendy color gradients in a curated collection that is updated daily. Get a fresh color gradient for your next design project and save all the gradients you like.',
        address: 'https://gradienthunt.com/',
      },
      {
        title: 'Dribbble - Discover the World’s Top Designers & Creative Professionals',
        description:
          'Find Top Designers & Creative Professionals on Dribbble. We are where designers gain inspiration, feedback, community, and jobs. Your best resource to discover and connect with designers worldwide.',
        address: 'https://dribbble.com/',
      },
      { title: 'PP制造计划 开源表情包', address: 'https://www.v2fy.com/asset/0i/ChineseBQB/' },
      { title: '百度图像搜索极简版', address: 'https://lab.magiconch.com/baidu-images/' },
    ],
  },
  {
    name: '视频生成',
    websites: [
      {
        title: 'Shotstack - The Cloud Video Editing API',
        description:
          'Generate, automate, edit and personalise videos, at scale, in the cloud, using the Shotstack video editing API',
        address: 'https://shotstack.io/',
      },
    ],
  },
  {
    name: '音频资源',
    websites: [
      {
        title: 'musicForProgramming();',
        description:
          'Datassette presents a series of mixes intended for listening while programming to focus the brain and inspire the mind (also compatible with other activities).',
        address: 'https://musicforprogramming.net/',
      },
    ],
  },
  {
    name: '多媒体综合',
    websites: [
      {
        title: 'Vididoo',
        description: 'The simplest way to edit your media files.',
        address: 'https://vididoo.vercel.app/',
        mayNeedVPN: true,
      },
      {
        title: '爱给网_音效配乐_3D模型_视频素材_免费下载',
        description:
          '中国最大的数字娱乐免费素材下载网站,免费提供免费的音效配乐|3D模型|视频|游戏素材资源下载。',
        address: 'https://www.aigei.com/',
      },
      {
        title: 'CloudConvert',
        description:
          '>File converter service - more than 200 different audio, video, document, ebook, archive, image, spreadsheet and presentation formats supported.',
        address: 'https://cloudconvert.com/',
      },
    ],
  },
  {
    name: '搜索引擎',
    websites: [
      {
        title: 'Yep – the private, revenue-sharing search engine',
        description:
          'When you search with Yep, you’re putting actual dollars in the pockets of your favorite content creators.',
        address: 'https://yep.com/',
      },
      { title: 'Neeva - Ad-free, private search', address: 'https://neeva.com/' },
    ],
  },
  {
    name: '语言',
    websites: [
      {
        title: '多邻国 - 好玩高效的中文（粤语）学习途径',
        description: '人人都可免费使用多邻国的网站和移动应用。小口小口啃中文（粤语），科学又有趣！',
        address: 'https://www.duolingo.com/learn',
      },
      {
        title: 'Qwerty Learner',
        description:
          '为键盘工作者设计的单词记忆与英语肌肉记忆锻炼软件 / Words learning and English muscle memory training software designed for keyboard workers',
        address: 'https://qwerty.kaiyi.cool/',
      },
    ],
  },
  {
    name: '博客',
    websites: [
      {
        title: '分淼必争',
        description: '心有所向，日复一日，必有精进',
        address: 'https://blog.gutianhuang.red/',
      },
      {
        title: 'Overreacted — A blog by Dan Abramov',
        description: 'Personal blog by Dan Abramov. I explain with words and code.',
        address: 'https://overreacted.io/',
      },
      {
        title: 'JavaScript Rising Stars',
        description:
          'A complete overview of the JavaScript landscape: trends about frontend, fullstack and Node.js frameworks, React and Vue.js ecosystems, build tools, state management...',
        address: 'https://risingstars.js.org',
      },
      {
        title: '阮一峰的个人网站',
        description: '阮一峰的个人网站',
        address: 'https://www.ruanyifeng.com/',
      },
      { title: 'Anthony Fu', description: "Anthony Fu's Portfolio", address: 'https://antfu.me/' },
      {
        title: 'Josh W Comeau',
        description: 'Friendly tutorials for developers. Focus on React, CSS, Animation, and more!',
        address: 'https://www.joshwcomeau.com/',
      },
    ],
  },
  {
    name: '图表',
    websites: [
      { title: 'diagram', address: 'https://webdemo.myscript.com/views/diagram/' },
      {
        title: 'Excalidraw+ | Online whiteboard collaboration made easy',
        description:
          'Whiteboarding tool with hand drawn like experience. Ideal for conducting interviews, drawing diagrams, prototypes or sketches and much more!',
        address:
          'https://plus.excalidraw.com/plus?utm_source=excalidraw&utm_medium=banner&utm_campaign=launch',
      },
    ],
  },
  {
    name: 'API',
    websites: [
      {
        title: 'Lorem Picsum',
        description: 'Lorem Ipsum... but for photos',
        address: 'https://picsum.photos/',
      },
      { title: 'Weather Forecast API | Open-Meteo.com', address: 'https://open-meteo.com/en/docs' },
      {
        title: '{placekitten} - Placeholder kitten images for developers',
        description: 'Kitten-themed placeholder images for developers :3',
        address: 'https://placekitten.com/',
      },
    ],
  },
  {
    name: '编程',
    websites: [
      {
        title: 'Regexper',
        description: 'Regular expression visualizer using railroad diagrams',
        address: 'https://regexper.com/',
      },
      {
        title: 'Graphtoy',
        description: 'Graphtoy - easy graphing of functions.',
        address: 'https://graphtoy.com/',
      },
      {
        title: 'AST explorer',
        description: 'An online AST explorer.',
        address: 'https://astexplorer.net/',
      },
      { title: 'nginx playground', address: 'https://nginx-playground.wizardzines.com/' },
      {
        title: 'I18n Translation Search Engine| Free i18n Tools for App&Web',
        description:
          'i18ns provide a free and easy app international translation service, it can be used in android app, ios app or web app i18n translation.',
        address: 'https://i18ns.com/zh/',
      },
    ],
  },
  {
    name: '3D',
    websites: [
      {
        title: 'glTF Viewer',
        description: 'Drag-and-drop preview tool for glTF 2.0 3D models.',
        address: 'https://gltf-viewer.donmccurdy.com/',
      },
      {
        title: 'Online 3D Viewer',
        description:
          'A free and open source web solution to visualize and explore 3D models right in your browser. Supported file formats: obj, 3ds, stl, ply, gltf, glb, off, 3dm, fbx, dae, wrl, 3mf, brep, step, iges, fcstd, ifc, bim.',
        address: 'https://3dviewer.net/',
      },
      {
        title: '【3D模型免费下载】打造一流的3DMax模型库_3D溜溜网 3d66.com',
        description:
          '3D溜溜网提供：3D模型库、SU模型库、3D贴图材质、3DMax脚本光域网免费高速下载，国内外数万精品稀缺3D素材，纯手工整理，每小时更新，找模型上3D溜溜网，全站hold的住你！ ----www.3d66.com',
        address: 'https://www.3d66.com/',
      },
    ],
  },
  {
    name: '小玩意',
    websites: [
      {
        title: '能不能好好说话？',
        description: '拼音首字母缩写释义工具',
        address: 'https://lab.magiconch.com/nbnhhsh/',
      },
      { title: '申论生成器', address: 'https://sojo.im/slscq/' },
    ],
  },
  {
    name: '小游戏',
    websites: [
      { title: '合成北宇治', address: 'https://magiconch.com/mix-eupho/' },
      {
        title: '绘谜 - enazo - 绘谜画猜 - 你画我猜 - 神奇海螺试验场',
        description:
          '支持 断线重连、无限撤销、压感笔刷、智能提示、只能参考、画廊投稿、导出视频 的在线多人你画我猜 ',
        address: 'https://enazo.cn/',
      },
      {
        title: 's l o w  r o a d s',
        description: 'endless driving zen in your browser',
        address: 'https://slowroads.io/',
      },
      {
        title: 'Sheep Fucking Sheep',
        description: 'A simple elimination game',
        address: 'https://sheep-fucking-sheep.gutianhuang.red/',
      },
    ],
  },
  {
    name: '魂系列',
    websites: [
      {
        title: 'SoulsPlanner',
        description: 'Dark Souls character planner and calculators. 正版 SoulsPlanner',
        address: 'https://soulsplanner.com/',
      },
      {
        title: 'SoulsPlanner',
        description: 'Dark Souls character planner and calculators.',
        address: 'https://souls-planner.gutianhuang.red/',
      },
      {
        title: '【黑暗之魂3】武器防具中日英译名对照表 - 哔哩哔哩',
        description:
          '方便在外网wiki查找武器、戒指、防具用！也可以方便翻译视频用…整理起来还怪麻烦的，陆续弄了3天……',
        address: 'https://www.bilibili.com/read/cv11669817?spm_id_from=333.999.0.0',
      },
      {
        title: 'Elden Ring Weapon Calculator',
        description:
          'Elden Ring weapon guide, calculator, and optimizer for patch 1.08 invasions, duels, and colosseum',
        address: 'https://eldenring.tclark.io/',
      },
      {
        title: '老头环地图 - Elden Ring Online Map',
        description: '艾尔登法环在线协作多人编辑地图',
        address: 'https://www.elpwc.com/eldenringmap/',
      },
    ],
  },
  {
    name: 'DNF',
    websites: [
      {
        title: '无名空岛 | 一个与DNF有缘的小岛',
        description: '无名空岛 | 一个与DNF有缘的小岛',
        address: 'https://www.skycity.top:8016/',
      },
      {
        title:
          'COLG装备流派模拟器 - DNF105级装备搭配百科 - 沃特碧们的Colg - 地下城与勇士 - COLG玩家社区',
        description:
          'COLG装备流派模拟器是一款面向DNF110级版本的小工具，玩家可以通过这款工具模拟地下城与勇士105级史诗装备搭配，也可以浏览大神们的搭配攻略。',
        address: 'https://bbs.colg.cn/colg_activity_new-simulator.html',
      },
      { title: 'DNF计算器', address: 'https://dcalc.gitee.io/dnfcalculating_110/#/' },
      {
        title: 'DNF网页云游戏（beta版）',
        description: '点击立玩DNF端游，数据互通',
        address: 'https://start.qq.com/game/dnf/pc/?ADTAG=web-dnf-pc-guanwang#/',
      },
    ],
  },
  {
    name: 'IP',
    websites: [
      {
        title: 'What Is My IP Address? Free IP Lookup',
        description:
          'What is my IP address? IP Lookup, IP Location, IP Tracker & IP Tracer. The best IP address tools for free.',
        address: 'https://www.ipaddress.com/',
      },
    ],
  },
]

export default data
