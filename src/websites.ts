export type Website = {
  title: string
  description: string
  address: string
  keywords: string[]
}

const websites: Website[] = [
  // Colors
  {
    title: 'Flat UI Colors',
    description: '280 handpicked colors ready for COPY & PASTE',
    address: 'https://flatuicolors.com/',
    keywords: ['颜色'],
  },
  {
    title: 'Material UI Colors',
    description: 'Color Palette for Material Design',
    address: 'https://materialuicolors.co/',
    keywords: ['颜色'],
  },
  {
    title: 'Coolors',
    description: 'Generate or browse beautiful color combinations for your designs.',
    address: 'https://coolors.co/',
    keywords: ['颜色', '可以登录', '有付费内容'],
  },
  {
    title: 'ColorBox',
    description: 'Create amazing color sets superfast',
    address: 'https://colorbox.io/',
    keywords: ['颜色'],
  },
  {
    title: 'Adobe Color',
    description: '使用色輪或影像建立調色盤，或瀏覽 Adobe Color 社群中的數千個顏色組合。',
    address: 'https://color.adobe.com/zh/',
    keywords: ['颜色', '需要账号'],
  },
  {
    title: 'RGB颜色值与十六进制颜色码转换工具',
    description: '朴实无华的颜色转换工具',
    address: 'https://www.sioe.cn/yingyong/yanse-rgb-16/',
    keywords: ['颜色'],
  },

  // Icons
  {
    title: 'iconfont',
    description:
      '由阿里维护的功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能。',
    address: 'https://www.iconfont.cn/',
    keywords: ['图标'],
  },
  {
    title: 'Octicons',
    description: 'Principles, standards, and usage guidelines for designing GitHub interfaces.',
    address: 'https://primer.style/design/foundations/icons/',
    keywords: ['图标'],
  },
  {
    title: 'Tabler Icons',
    description:
      '3271 free and open source SVG icons designed with attention to detail to make your design stand out. Highly customizable. No attribution required. For commercial use.',
    address: 'https://tabler-icons.io/',
    keywords: ['图标'],
  },
  {
    title: 'Vector Icons and Stickers',
    description:
      'Download Free Icons and Stickers for your projects. Images made by and for designers in PNG, SVG, EPS, PSD and CSS formats',
    address: 'https://www.flaticon.com/',
    keywords: ['图标'],
  },
  {
    title: 'Mutant Standard',
    description: 'An experimental emoji set with new twists.',
    address: 'https://mutant.tech/',
    keywords: ['图标'],
  },
  {
    title: 'Iconoir',
    description: 'The Simple and Definitive hand-crafted SVG Icons library.',
    address: 'https://iconoir.com/',
    keywords: ['图标'],
  },
  {
    title: 'unDraw',
    description:
      'The design project with open-source illustrations for any idea you can imagine and create. Create beautiful websites, products and applications with your color, for free.',
    address: 'https://undraw.co/',
    keywords: ['图标'],
  },
  {
    title: 'ByteDance IconPark',
    description: 'IconPark, park your icon. Made by ByteDance',
    address: 'https://iconpark.oceanengine.com/official',
    keywords: ['图标'],
  },
  {
    title: 'Emoji Kitchen',
    description:
      "Unique illustrations of combined emoji, cooked up in Google's Emoji Kitchen, and comprehensively available on the web",
    address: 'https://emojikitchen.dev/',
    keywords: ['图标'],
  },
  {
    title: 'SpinKit',
    description: 'Simple CSS Spinners',
    address: 'https://tobiasahlin.com/spinkit/',
    keywords: ['图标', 'CSS'],
  },

  // CSS
  {
    title: 'CSS Shadow Palette Generator',
    description: 'Friendly tutorials for developers. Focus on React, CSS, Animation, and more!',
    address: 'https://www.joshwcomeau.com/shadow-palette/',
    keywords: ['CSS'],
  },
  {
    title: 'Shape Divider App',
    description: 'Create fully responsive shape dividers for your next web project',
    address: 'https://www.shapedivider.app/',
    keywords: ['CSS'],
  },
  {
    title: 'Animista - On-Demand CSS Animations Library',
    description:
      'Animista is a CSS animation library and a place where you can play with a collection of ready-made CSS animations and download only those you will use.',
    address: 'https://animista.net/',
    keywords: ['CSS'],
  },
  {
    title: 'CSS3 Generator',
    description: 'CSS3 Generator',
    address: 'http://css3generator.com/',
    keywords: ['CSS'],
  },
  {
    title: 'Fancy Border Radius Generator',
    description:
      'A visual generator to build organic looking shapes with the help of CSS3 border-radius property',
    address: 'https://9elements.github.io/fancy-border-radius/',
    keywords: ['CSS'],
  },
  {
    title: 'Clippy — CSS clip-path maker',
    description: 'Shape up your website with CSS clip-paths',
    address: 'https://bennettfeely.com/clippy/',
    keywords: ['CSS'],
  },

  // 图像生成
  {
    title: 'Gradient Generator — Create CSS, SVG and PNG color gradients',
    description:
      'Use this tool to create linear, radial, and conic gradient backgrounds. Export as CSS, SVG, PNG, and JPEG for use on your website, social media, or wallpaper.',
    address: 'https://doodad.dev/gradient-generator/',
    keywords: ['图像生成'],
  },
  {
    title: 'Pattern Generator - Create Seamless, Royalty-Free Patterns',
    description:
      'Generate seamless, unique, royalty-free patterns to use for free in any project. Export as SVG, JPEG, or PNG.',
    address: 'https://doodad.dev/pattern-generator/',
    keywords: ['图像生成'],
  },

  {
    title: 'ASCII Generator',
    description: 'Generate a ASCII graphic from a word or text. More than 130 fonts.',
    keywords: ['图像生成'],
    address: 'http://www.network-science.de/ascii/',
  },
  {
    title: '字符字生成器 - 神奇海螺实验室',
    description: '字符生成字符字工具，你搁这搁这呢？',
    address: 'https://magiconch.com/fontfont/',
    keywords: ['图像生成'],
  },
  {
    title: 'Shields.io',
    description: 'Concise, consistent, and legible badges',
    address: 'https://shields.io/',
    keywords: ['图像生成'],
  },
  {
    title: 'CSS Sprites Generator Tool',
    description:
      'Generate CSS image sprites from multiple images with our easy-to-use uploading tool. Get started for free.',
    address: 'https://www.toptal.com/developers/css/sprite-generator/',
    keywords: ['图像生成'],
  },
  {
    title: 'Blobmaker - Make organic SVG shapes for your next design',
    description:
      'Make organic SVG shapes for your next design. Modify the complexity, contrast, and color, to generate unique SVG blobs every time.',
    address: 'https://www.blobmaker.app/',
    keywords: ['图像生成'],
  },
  {
    title: 'Get Waves – Create SVG waves for your next design',
    description:
      'A free SVG wave generator to make unique SVG waves for your next web design. Choose a curve, adjust complexity, randomize!',
    address: 'https://getwaves.io/',
    keywords: ['图像生成'],
  },
  {
    title: 'colorfu',
    description:
      'Make beautiful but also meaningful wallpapers. ColorFu is where people can use words, colors, patterns and images to make unique wallpapers to express their feelings or ideas.',
    address: 'https://pearmini.github.io/colorfu/#/',
    keywords: ['图像生成'],
  },
  {
    title: 'Video2WebP',
    description: 'Video2WebP',
    address: 'https://video2webp.mattj.io/',
    keywords: ['图像生成'],
  },
  {
    title: 'Notion 风格头像制作',
    description: '一个生成 Notion 风格头像的在线工具。',
    address: 'https://notion-avatar.vercel.app/zh',
    keywords: ['图像生成', '可能需要 VPN'],
  },
  {
    title: 'Calligrapher.ai - Realistic computer-generated handwriting',
    description:
      'Implementation of the handwriting synthesis experiments in the paper Generating Sequences with Recurrent Neural Networks by Alex Graves.',
    address: 'https://www.calligrapher.ai/',
    keywords: ['图像生成'],
  },
  {
    title: 'Trianglify.io · Low Poly Pattern Generator',
    description:
      'Trianglify.io is a tool for generating low poly triangle patterns that can be used as wallpapers and website assets.',
    address: 'https://trianglify.io/',
    keywords: ['图像生成'],
  },
  {
    title:
      'NEON GENESIS EVANGELION Rei II - 福音战士標題生成器 - Evangelion Title Card Generator - 神奇海螺实验室',
    description: 'Evangelion Title Card Generator',
    address: 'https://lab.magiconch.com/eva-title/?layout=eng-title',
    keywords: ['图像生成'],
  },
  {
    title: '梗图生成器 - 神奇海螺',
    description: '一个支持电子包浆的所见即所得的梗图生成器',
    address: 'https://x.magiconch.com/',
    keywords: ['图像生成'],
  },
  {
    title: 'Create beautiful images of your code',
    description:
      'Turn your code into beautiful images. Choose from a range of syntax colors, hide or show the background, and toggle between a dark and light window.',
    address: 'https://www.ray.so/',
    keywords: ['图像生成'],
  },
  {
    title: '微博切九图 - 微博、朋友圈、空间 切九图 工具 - 在线切九宫格、四宫格 - 神奇海螺',
    description: '在线切九宫格工具',
    address: 'https://v.magiconch.com/sns-image',
    keywords: ['图像生成'],
  },
  {
    title: 'Hysli.io',
    description: '绘制带有彩色绘画的二维码',
    address: 'https://hysli.io',
    keywords: ['图像生成'],
  },

  // {
  //   name: '图像处理',
  //   websites: [
  //     {
  //       title: 'Dither Me This | Online Image Dithering Tool',
  //       description:
  //         'Use this tool to reduce image file sizes… but in a stylish, old-school way. Upload an image and Dither Me This will transform it.',
  //       address: 'https://doodad.dev/dither-me-this/',
  //     },
  //     {
  //       title: '美图秀秀官网_免费在线P图抠图拼图_证件照制作',
  //       description:
  //         '美图秀秀P图软件提供图片美化工具、人像美容、添加文字、抠图软件、拼图、批量处理图片大小、证件照换底色、图片压缩等好用的功能，还有海报设计、平面设计、广告设计、贴纸素材、边框等丰富的内容，可制作PPT图片、简历、GIF动图等，支持Windows、Mac、Linux及网页版。',
  //       address: 'https://pc.meitu.com/',
  //     },
  //     {
  //       title: '电子包浆 图片做旧工具 赛博包浆虚拟器 - 神奇海螺实验室',
  //       address: 'https://magiconch.com/patina/',
  //     },
  //     {
  //       title: '蒸 気 機 - 蒸汽波 - 蒸汽波图片生成器 - 虚拟信号风格化影像后期工具',
  //       address: 'https://magiconch.com/vaporwave/',
  //     },
  //     {
  //       title:
  //         'One Last Image - 卢浮宫生成器 - One Last Kiss 风格 封面生成 图片转线稿 - 神奇海螺实验室',
  //       description: 'One Last Kiss 卢浮宫生成器 风格 图片转线稿 封面生成 宇多田光 神奇海螺实验室',
  //       address: 'https://lab.magiconch.com/one-last-image/',
  //     },
  //     {
  //       title: 'cssFilters.co - Custom and Instagram like photo filters for CSS',
  //       description:
  //         'Visual playground for generating CSS for custom and Instagram like photo filters. Experiment with your own uploaded photo or select one from the Unsplash collection.',
  //       address: 'https://www.cssfilters.co/',
  //     },
  //     {
  //       title: 'remove.bg',
  //       description:
  //         'remove.bg在线抠图软件轻松实现一键抠图，只需上传图片，无需其他操作，即可100%自动去除图片背景。',
  //       address: 'https://www.remove.bg/zh',
  //     },
  //     {
  //       title: 'Imglarger Logo',
  //       description:
  //         'AI Image Enlarger 是一款免費的在線圖像放大器，可以自動放大和增強小圖像。使 jpg/png 圖片變大而不損失質量。',
  //       address: 'https://imglarger.com/zh-tw',
  //     },
  //   ],
  // },
  // {
  //   name: '图像格式转换',
  //   websites: [
  //     {
  //       title: '制作ico图标 | 在线ico图标转换工具 方便制作favicon.ico - 比特虫 - Bitbug.net',
  //       description:
  //         '轻松制作ico图标,在线提供ico图标转换工具,可以将jpg、jpeg、gif、png等图像转换成ico图像,方便浏览器制作并生成favicon.ico图标,提供ico图标下载,png to ico,jpg to ico,gif to ico',
  //       address: 'https://www.bitbug.net/',
  //     },
  //     {
  //       title: 'Convertio — 文件转换器',
  //       description:
  //         'Convertio - 在线转换文件的简单工具。支持超过309种不同的文档、图像、电子表格、电子书、文档、演示文稿、音频和视频格式。',
  //       address: 'https://convertio.co/zh/',
  //     },
  //     {
  //       title: 'TinyPNG – Compress WebP, PNG and JPEG images intelligently',
  //       description:
  //         'Make your website faster and save bandwidth. TinyPNG optimizes your WebP, PNG and JPEG images by 50-80% while preserving full transparency!',
  //       address: 'https://tinypng.com/',
  //     },
  //     {
  //       title: 'PNG转ICO - 在线转换图标文件',
  //       description:
  //         'PNG转ICO - 免费在线转换PNG(Portable Network Graphics)文件到ICO(Microsoft icon)文件 - 在线转换图标文件。',
  //       address: 'https://www.aconvert.com/cn/icon/png-to-ico/',
  //     },
  //     {
  //       title: 'Squoosh',
  //       description:
  //         'Squoosh is the ultimate image optimizer that allows you to compress and compare images with different codecs in your browser.',
  //       address: 'https://squoosh.app/',
  //     },
  //     {
  //       title: 'Convert Image to Base64',
  //       description: 'Convert Image to Base64',
  //       address: 'https://image-to-base64.gutianhuang.red/',
  //     },
  //   ],
  // },
  // {
  //   name: '图片资源',
  //   websites: [
  //     {
  //       title: 'Lexica',
  //       description: 'The Stable Diffusion search engine',
  //       address: 'https://lexica.art/',
  //     },
  //     { title: '404 Illustrations', address: 'https://error404.fun/' },
  //     {
  //       title: 'Beautiful Free Images & Pictures | Unsplash',
  //       description:
  //         'Beautiful, free images and photos that you can download and use for any project. Better than any royalty free or stock photos.',
  //       address: 'https://unsplash.com/',
  //       mayNeedVPN: true,
  //     },
  //     { title: 'AI-Generated Bible Art', address: 'https://www.openbible.info/labs/ai-bible-art/' },
  //     {
  //       title: 'Gradient Hunt - Beautiful Color Gradients',
  //       description:
  //         'Thousands of trendy color gradients in a curated collection that is updated daily. Get a fresh color gradient for your next design project and save all the gradients you like.',
  //       address: 'https://gradienthunt.com/',
  //     },
  //     {
  //       title: 'Dribbble - Discover the World’s Top Designers & Creative Professionals',
  //       description:
  //         'Find Top Designers & Creative Professionals on Dribbble. We are where designers gain inspiration, feedback, community, and jobs. Your best resource to discover and connect with designers worldwide.',
  //       address: 'https://dribbble.com/',
  //     },
  //     { title: 'PP制造计划 开源表情包', address: 'https://www.v2fy.com/asset/0i/ChineseBQB/' },
  //     { title: '百度图像搜索极简版', address: 'https://lab.magiconch.com/baidu-images/' },
  //   ],
  // },
  // {
  //   name: '视频生成',
  //   websites: [
  //     {
  //       title: 'Shotstack - The Cloud Video Editing API',
  //       description:
  //         'Generate, automate, edit and personalise videos, at scale, in the cloud, using the Shotstack video editing API',
  //       address: 'https://shotstack.io/',
  //     },
  //   ],
  // },

  // 音频
  {
    title: 'musicForProgramming',
    description:
      'Datassette presents a series of mixes intended for listening while programming to focus the brain and inspire the mind (also compatible with other activities).',
    address: 'https://musicforprogramming.net/',
    keywords: ['音频'],
  },

  // {
  //   name: '多媒体综合',
  //   websites: [
  //     {
  //       title: 'Vididoo',
  //       description: 'The simplest way to edit your media files.',
  //       address: 'https://vididoo.vercel.app/',
  //       mayNeedVPN: true,
  //     },
  //     {
  //       title: '爱给网_音效配乐_3D模型_视频素材_免费下载',
  //       description:
  //         '中国最大的数字娱乐免费素材下载网站,免费提供免费的音效配乐|3D模型|视频|游戏素材资源下载。',
  //       address: 'https://www.aigei.com/',
  //     },
  //     {
  //       title: 'CloudConvert',
  //       description:
  //         '>File converter service - more than 200 different audio, video, document, ebook, archive, image, spreadsheet and presentation formats supported.',
  //       address: 'https://cloudconvert.com/',
  //     },
  //   ],
  // },
  // {
  //   name: '搜索引擎',
  //   websites: [
  //     {
  //       title: 'Yep – the private, revenue-sharing search engine',
  //       description:
  //         'When you search with Yep, you’re putting actual dollars in the pockets of your favorite content creators.',
  //       address: 'https://yep.com/',
  //     },
  //     { title: 'Neeva - Ad-free, private search', address: 'https://neeva.com/' },
  //   ],
  // },

  // 语言
  {
    title: '多邻国',
    description: '人人都可免费使用多邻国的网站和移动应用。小口小口啃中文（粤语），科学又有趣！',
    address: 'https://www.duolingo.com/learn',
    keywords: ['语言'],
  },
  {
    title: 'Qwerty Learner',
    description:
      '为键盘工作者设计的单词记忆与英语肌肉记忆锻炼软件 / Words learning and English muscle memory training software designed for keyboard workers',
    address: 'https://qwerty.kaiyi.cool/',
    keywords: ['语言'],
  },

  // 博客
  {
    title: '分淼必争',
    description: '心有所向，日复一日，必有精进',
    address: 'https://blog.gutianhuang.red/',
    keywords: ['博客'],
  },
  {
    title: 'Overreacted — A blog by Dan Abramov',
    description: 'Personal blog by Dan Abramov. I explain with words and code.',
    address: 'https://overreacted.io/',
    keywords: ['博客'],
  },
  {
    title: '阮一峰的个人网站',
    description: '阮一峰的个人网站',
    address: 'https://www.ruanyifeng.com/',
    keywords: ['博客'],
  },
  {
    title: 'Anthony Fu',
    description: "Anthony Fu's Portfolio",
    address: 'https://antfu.me/',
    keywords: ['博客'],
  },
  {
    title: 'Josh W Comeau',
    description: 'Friendly tutorials for developers. Focus on React, CSS, Animation, and more!',
    address: 'https://www.joshwcomeau.com/',
    keywords: ['博客'],
  },

  // {
  //   name: '图表',
  //   websites: [
  //     { title: 'diagram', address: 'https://webdemo.myscript.com/views/diagram/' },
  //     {
  //       title: 'Excalidraw+ | Online whiteboard collaboration made easy',
  //       description:
  //         'Whiteboarding tool with hand drawn like experience. Ideal for conducting interviews, drawing diagrams, prototypes or sketches and much more!',
  //       address:
  //         'https://plus.excalidraw.com/plus?utm_source=excalidraw&utm_medium=banner&utm_campaign=launch',
  //     },
  //   ],
  // },
  // {
  //   name: 'API',
  //   websites: [
  //     {
  //       title: 'Lorem Picsum',
  //       description: 'Lorem Ipsum... but for photos',
  //       address: 'https://picsum.photos/',
  //     },
  //     { title: 'Weather Forecast API | Open-Meteo.com', address: 'https://open-meteo.com/en/docs' },
  //     {
  //       title: '{placekitten} - Placeholder kitten images for developers',
  //       description: 'Kitten-themed placeholder images for developers :3',
  //       address: 'https://placekitten.com/',
  //     },
  //   ],
  // },
  // {
  //   name: '编程',
  //   websites: [
  //     {
  //       title: 'Regexper',
  //       description: 'Regular expression visualizer using railroad diagrams',
  //       address: 'https://regexper.com/',
  //     },
  //     {
  //       title: 'Graphtoy',
  //       description: 'Graphtoy - easy graphing of functions.',
  //       address: 'https://graphtoy.com/',
  //     },
  //     {
  //       title: 'AST explorer',
  //       description: 'An online AST explorer.',
  //       address: 'https://astexplorer.net/',
  //     },
  //     { title: 'nginx playground', address: 'https://nginx-playground.wizardzines.com/' },
  //     {
  //       title: 'I18n Translation Search Engine| Free i18n Tools for App&Web',
  //       description:
  //         'i18ns provide a free and easy app international translation service, it can be used in android app, ios app or web app i18n translation.',
  //       address: 'https://i18ns.com/zh/',
  //     },
  //   ],
  // },

  {
    title: 'glTF Viewer',
    description: 'Drag-and-drop preview tool for glTF 2.0 3D models.',
    address: 'https://gltf-viewer.donmccurdy.com/',
    keywords: ['3D'],
  },
  {
    title: 'Online 3D Viewer',
    description:
      'A free and open source web solution to visualize and explore 3D models right in your browser. Supported file formats: obj, 3ds, stl, ply, gltf, glb, off, 3dm, fbx, dae, wrl, 3mf, brep, step, iges, fcstd, ifc, bim.',
    address: 'https://3dviewer.net/',
    keywords: ['3D'],
  },
  {
    title: '3D溜溜网',
    description:
      '3D溜溜网提供：3D模型库、SU模型库、3D贴图材质、3DMax脚本光域网免费高速下载，国内外数万精品稀缺3D素材，纯手工整理，每小时更新',
    address: 'https://www.3d66.com/',
    keywords: ['3D'],
  },

  // Fun
  {
    title: '能不能好好说话',
    description: '拼音首字母缩写释义工具',
    address: 'https://lab.magiconch.com/nbnhhsh/',
    keywords: ['Fun'],
  },
  {
    title: '申论生成器',
    description: '提供一个主题，生成一段废话',
    address: 'https://sojo.im/slscq/',
    keywords: ['Fun'],
  },

  // Web 游戏
  {
    title: '合成北宇治',
    description: '俄罗斯方块似的消除游戏',
    address: 'https://magiconch.com/mix-eupho/',
    keywords: ['Web 游戏'],
  },
  {
    title: '绘谜',
    description:
      '支持 断线重连、无限撤销、压感笔刷、智能提示、只能参考、画廊投稿、导出视频 的在线多人你画我猜 ',
    address: 'https://enazo.cn/',
    keywords: ['Web 游戏'],
  },
  {
    title: 'slow roads',
    description: 'endless driving zen in your browser',
    address: 'https://slowroads.io/',
    keywords: ['Web 游戏'],
  },
  {
    title: 'Sheep Fucking Sheep',
    description: 'A simple elimination game',
    address: 'https://sheep-fucking-sheep.gutianhuang.red/',
    keywords: ['Web 游戏'],
  },
  {
    title: 'PCOL - SNOOKER',
    description: 'Play high quality Snooker game now just in your browser.',
    address: 'http://www.heyzxz.me/pcol/',
    keywords: ['Web 游戏'],
  },

  // 魂系列
  {
    title: 'SoulsPlanner',
    description:
      '黑暗之魂加点模拟器，基于原版 SoulsPlanner 的 fork，无 Build, Top，支持本地离线使用',
    address: 'https://souls-planner.gutianhuang.red/',
    keywords: ['魂系列', '游戏'],
  },
  {
    title: '黑暗之魂3武器防具中日英译名对照表',
    description: '方便在外网 wiki 查找武器、戒指、防具用！也可以方便翻译视频用',
    address: 'https://www.bilibili.com/read/cv11669817?spm_id_from=333.999.0.0',
    keywords: ['魂系列', '游戏', '博客'],
  },
  {
    title: 'Elden Ring Weapon Calculator',
    description:
      'Elden Ring weapon attack calculator updated for patch 1.09, Elden Ring Reforged, and The Convergence Mod',
    address: 'https://eldenring.tclark.io/',
    keywords: ['魂系列', '游戏'],
  },
  {
    title: '老头环地图',
    description: '艾尔登法环在线协作多人编辑地图',
    address: 'https://www.elpwc.com/eldenringmap/',
    keywords: ['魂系列', '游戏'],
  },

  // DNF
  {
    title: '无名空岛',
    description: '无名空岛 | 一个与DNF有缘的小岛',
    address: 'https://skycity.top/',
    keywords: ['DNF', '游戏'],
  },
  {
    title: 'DNF计算器',
    description: '又称纸飞机计算器，有模拟装备，自定义对比，贴膜打造等多种功能，在码云上开源',
    address: 'https://www.dnftools.com/',
    keywords: ['DNF', '游戏'],
  },
  {
    title: 'DNF网页云游戏',
    description: '在 web 端玩 DNF，数据与端游互通，有免费时长',
    address: 'https://start.qq.com/game/dnf/',
    keywords: ['DNF', '游戏'],
  },

  // IP
  {
    title: 'IPAddress',
    description:
      'What is my IP address? IP Lookup, IP Location, IP Tracker & IP Tracer. The best IP address tools for free.',
    address: 'https://www.ipaddress.com/',
    keywords: ['IP'],
  },

  // 虚拟
  {
    title: 'SMS-Activate',
    description:
      '使用SMS-Activate的虚拟号码来在线接受短信。可以在600个多服务注册的一次性号码。短信即刻送到给你，低价',
    address: 'https://sms-activate.org/',
    keywords: ['虚拟', '可能需要 VPN', '付费', '需要账号'],
  },

  // AI
  {
    title: '文心一言',
    description:
      '文心一言是百度研发的知识增强大语言模型，能够与人对话互动，回答问题，协助创作，高效便捷地帮助人们获取信息、知识和灵感。',
    address: 'https://yiyan.baidu.com/',
    keywords: ['AI'],
  },

  // 导航
  {
    title: '前端助手',
    description:
      '前端助手是面向前端开发工程师的资源分享平台，通过工具。文档，游戏，摸鱼，案例等板块，建立一个完整的前端资源体系，提高前端开发者的开发效率，免费造福前端开发者的工具平台',
    address: 'https://web-abin.github.io/abinWeb/',
    keywords: ['导航', '开发'],
  },

  // 开发
  {
    title: 'JavaScript Rising Stars',
    description:
      'A complete overview of the JavaScript landscape: trends about frontend, fullstack and Node.js frameworks, React and Vue.js ecosystems, build tools, state management...',
    address: 'https://risingstars.js.org',
    keywords: ['开发'],
  },
]

export default websites
