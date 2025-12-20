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

  // 图片处理
  {
    title: 'Dither Me This - Online Image Dithering Tool',
    description:
      'Use this tool to reduce image file sizes… but in a stylish, old-school way. Upload an image and Dither Me This will transform it.',
    address: 'https://doodad.dev/dither-me-this/',
    keywords: ['图片处理'],
  },
  {
    title: '美图秀秀官网_免费在线P图抠图拼图_证件照制作',
    description:
      '美图秀秀P图软件提供图片美化工具、人像美容、添加文字、抠图软件、拼图、批量处理图片大小、证件照换底色、图片压缩等好用的功能，还有海报设计、平面设计、广告设计、贴纸素材、边框等丰富的内容，可制作PPT图片、简历、GIF动图等，支持Windows、Mac、Linux及网页版。',
    address: 'https://pc.meitu.com/',
    keywords: ['图片处理'],
  },
  {
    title: '电子包浆 图片做旧工具 赛博包浆虚拟器 - 神奇海螺实验室',
    description: '给表情赋予年份',
    address: 'https://magiconch.com/patina/',
    keywords: ['图片处理'],
  },
  {
    title: '蒸 気 機 - 蒸汽波 - 蒸汽波图片生成器 - 虚拟信号风格化影像后期工具',
    description: '虚拟信号蒸汽波风格化影像后期工具。',
    address: 'https://magiconch.com/vaporwave/',
    keywords: ['图片处理'],
  },
  {
    title:
      'One Last Image - 卢浮宫生成器 - One Last Kiss 风格 封面生成 图片转线稿 - 神奇海螺实验室',
    description: 'One Last Kiss 卢浮宫生成器 风格 图片转线稿 封面生成 宇多田光 神奇海螺实验室',
    address: 'https://lab.magiconch.com/one-last-image/',
    keywords: ['图片处理'],
  },
  {
    title: 'cssFilters.co - Custom and Instagram like photo filters for CSS',
    description:
      'Visual playground for generating CSS for custom and Instagram like photo filters. Experiment with your own uploaded photo or select one from the Unsplash collection.',
    address: 'https://www.cssfilters.co/',
    keywords: ['图片处理'],
  },
  {
    title: 'remove.bg',
    description:
      'remove.bg在线抠图软件轻松实现一键抠图，只需上传图片，无需其他操作，即可100%自动去除图片背景。',
    address: 'https://www.remove.bg/zh',
    keywords: ['图片处理'],
  },
  {
    title: 'Imglarger Logo',
    description:
      'AI Image Enlarger 是一款免費的在線圖像放大器，可以自動放大和增強小圖像。使 jpg/png 圖片變大而不損失質量。',
    address: 'https://imglarger.com/zh-tw',
    keywords: ['图片处理'],
  },

  // 图像格式
  {
    title: 'Convertio — 文件转换器',
    description:
      'Convertio - 在线转换文件的简单工具。支持超过309种不同的文档、图像、电子表格、电子书、文档、演示文稿、音频和视频格式。',
    address: 'https://convertio.co/zh/',
    keywords: ['图像格式'],
  },
  {
    title: 'TinyPNG – Compress WebP, PNG and JPEG images intelligently',
    description:
      'Make your website faster and save bandwidth. TinyPNG optimizes your WebP, PNG and JPEG images by 50-80% while preserving full transparency!',
    address: 'https://tinypng.com/',
    keywords: ['图像格式'],
  },
  {
    title: 'PNG转ICO - 在线转换图标文件',
    description:
      'PNG转ICO - 免费在线转换PNG(Portable Network Graphics)文件到ICO(Microsoft icon)文件 - 在线转换图标文件。',
    address: 'https://www.aconvert.com/cn/icon/png-to-ico/',
    keywords: ['图像格式'],
  },
  {
    title: 'Squoosh',
    description:
      'Squoosh is the ultimate image optimizer that allows you to compress and compare images with different codecs in your browser.',
    address: 'https://squoosh.app/',
    keywords: ['图像格式'],
  },
  {
    title: 'Convert Image to Base64',
    description: 'Convert Image to Base64',
    address: 'https://image-to-base64.gutianhuang.red/',
    keywords: ['图像格式'],
  },

  // 图片资源
  {
    title: 'Lexica',
    description: 'The Stable Diffusion search engine',
    address: 'https://lexica.art/',
    keywords: ['图片资源'],
  },
  {
    title: '404 Illustrations',
    description:
      'Make a unique journey through 404 error pages on your website Use these illustrations that describe better than words',
    address: 'https://error404.fun/',
    keywords: ['图片资源'],
  },
  {
    title: 'Unsplash - Beautiful Free Images & Pictures',
    description:
      'Beautiful, free images and photos that you can download and use for any project. Better than any royalty free or stock photos.',
    address: 'https://unsplash.com/',

    keywords: ['图片资源'],
  },
  {
    title: 'AI-Generated Bible Art',
    description: 'All these images were generated by DALL·E 2, an AI that converts text to images.',
    address: 'https://www.openbible.info/labs/ai-bible-art/',
    keywords: ['图片资源'],
  },
  {
    title: 'Gradient Hunt - Beautiful Color Gradients',
    description:
      'Thousands of trendy color gradients in a curated collection that is updated daily. Get a fresh color gradient for your next design project and save all the gradients you like.',
    address: 'https://gradienthunt.com/',
    keywords: ['图片资源'],
  },
  {
    title: 'Dribbble - Discover the World’s Top Designers & Creative Professionals',
    description:
      'Find Top Designers & Creative Professionals on Dribbble. We are where designers gain inspiration, feedback, community, and jobs. Your best resource to discover and connect with designers worldwide.',
    address: 'https://dribbble.com/',
    keywords: ['图片资源'],
  },
  {
    title: '百度图像搜索极简版',
    description: '一个极简的百度图片搜索工具！',
    address: 'https://lab.magiconch.com/baidu-images/',
    keywords: ['图片资源'],
  },

  // 视频生成
  {
    title: 'Shotstack - The Cloud Video Editing API',
    description:
      'Generate, automate, edit and personalise videos, at scale, in the cloud, using the Shotstack video editing API',
    address: 'https://shotstack.io/',
    keywords: ['视频生成'],
  },

  // 音频
  {
    title: 'musicForProgramming',
    description:
      'Datassette presents a series of mixes intended for listening while programming to focus the brain and inspire the mind (also compatible with other activities).',
    address: 'https://musicforprogramming.net/',
    keywords: ['音频'],
  },

  // 多媒体综合
  {
    title: 'Vididoo',
    description: 'The simplest way to edit your media files.',
    address: 'https://vididoo.vercel.app/',
    keywords: ['多媒体综合', '可能需要 VPN'],
  },
  {
    title: '爱给网_音效配乐_3D模型_视频素材_免费下载',
    description:
      '中国最大的数字娱乐免费素材下载网站,免费提供免费的音效配乐|3D模型|视频|游戏素材资源下载。',
    address: 'https://www.aigei.com/',
    keywords: ['多媒体综合', '可能需要 VPN'],
  },
  {
    title: 'CloudConvert',
    description:
      '>File converter service - more than 200 different audio, video, document, ebook, archive, image, spreadsheet and presentation formats supported.',
    address: 'https://cloudconvert.com/',
    keywords: ['多媒体综合', '可能需要 VPN'],
  },

  // 搜索引擎
  {
    title: 'Yep – the private, revenue-sharing search engine',
    description:
      'When you search with Yep, you’re putting actual dollars in the pockets of your favorite content creators.',
    address: 'https://yep.com/',
    keywords: ['搜索引擎'],
  },

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

  // 画板
  {
    title: 'diagram',
    description:
      'Sketch lines and shapes, write your text, preview and export to the Microsoft PowerPoint format.',
    address: 'https://webdemo.myscript.com/views/diagram/index.html#/',
    keywords: ['画板'],
  },
  {
    title: 'Excalidraw - Online whiteboard collaboration made easy',
    description:
      'Whiteboarding tool with hand drawn like experience. Ideal for conducting interviews, drawing diagrams, prototypes or sketches and much more!',
    address:
      'https://plus.excalidraw.com/plus?utm_source=excalidraw&utm_medium=banner&utm_campaign=launch',
    keywords: ['画板'],
  },
  {
    title: 'paint-board',
    description:
      'Canvas based drawing board, including free drawing, eraser, text, select, layer, undo, redo, clear, save, drag',
    address: 'https://songlh.top/paint-board/',
    keywords: ['画板'],
  },

  // API
  {
    title: 'Lorem Picsum',
    description: 'Lorem Ipsum... but for photos',
    address: 'https://picsum.photos/',
    keywords: ['API'],
  },
  {
    title: 'Open-Meteo.com - Free Open-Source Weather API',
    description:
      'Weather Forecast APIs with weather models from multiple national weather providers, combining the best models for accurate forecasts worldwide. Explore the API documentation to learn more about the available weather models, their origin countries, resolutions, forecast lengths, and update frequencies. Get detailed JSON hourly weather forecasts for up to 7 or 16 days by specifying the geographical coordinates and desired weather variables in the API endpoint. Discover the comprehensive list of URL parameters for customizing your weather forecast requests.',
    address: 'https://open-meteo.com/',
    keywords: ['API'],
  },
  {
    title: '{placekitten} - Placeholder kitten images for developers',
    description: 'Kitten-themed placeholder images for developers :3',
    address: 'https://placekitten.com/',
    keywords: ['API'],
  },

  // 编程
  {
    title: 'Regexper',
    description: 'Regular expression visualizer using railroad diagrams',
    address: 'https://regexper.com/',
    keywords: ['编程', '正则表达式'],
  },
  {
    title: 'Graphtoy',
    description: 'Graphtoy - easy graphing of functions.',
    address: 'https://graphtoy.com/',
    keywords: ['编程', '数学', '可视化', '图形学'],
  },
  {
    title: 'AST explorer',
    description: 'An online AST explorer.',
    address: 'https://astexplorer.net/',
    keywords: ['编程', 'AST'],
  },
  {
    title: 'nginx playground',
    description:
      "It's like codepen for nginx -- you paste in an nginx config, and then a server starts nginx for you and runs any curl or http command you want against that nginx server.",
    address: 'https://nginx-playground.wizardzines.com/',
    keywords: ['编程', 'NGINX'],
  },
  {
    title: 'I18n Translation Search Engine - Free i18n Tools for App&Web',
    description:
      'i18ns provide a free and easy app international translation service, it can be used in android app, ios app or web app i18n translation.',
    address: 'https://i18ns.com/zh/',
    keywords: ['编程', 'I18N'],
  },
  {
    title: 'JavaScript Rising Stars',
    description:
      'A complete overview of the JavaScript landscape: trends about frontend, fullstack and Node.js frameworks, React and Vue.js ecosystems, build tools, state management...',
    address: 'https://risingstars.js.org',
    keywords: ['编程', '前端', 'JavaScript', '博客'],
  },
  {
    title: '前端助手',
    description:
      '前端助手是面向前端开发工程师的资源分享平台，通过工具。文档，游戏，摸鱼，案例等板块，建立一个完整的前端资源体系，提高前端开发者的开发效率，免费造福前端开发者的工具平台',
    address: 'https://web-abin.github.io/abinWeb/',
    keywords: ['导航', '编程'],
  },
  {
    title: 'Unicode 符号表 SYMBL',
    description:
      'Unicode (萬國碼、國際碼、統一碼) 字符搜索Web服务。 查找并复制您最喜欢的角色：😎表情符号，▶Ar箭头，✪星星，💲货币，🈂️书写系统等🚩',
    address: 'https://symbl.cc/cn/unicode/table/',
    keywords: ['编程', 'Unicode'],
  },
  {
    title: 'cryptography',
    description: 'Online Cryptography Toolbox',
    address: 'https://crypto-online.cn/',
    keywords: ['编程', '加密'],
  },

  // 3D
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
  {
    title: 'iCraft Editor - 人人都能轻松上手的 3D 场景设计平台',
    description:
      'iCraft 是一个在线 3D 信息图、场景图设计平台，用 iCraft 轻松快速构建 3D 架构图、流程图、产品演示和 3D 信息场景，让你的想法更直观、出色。既可可视化展示，也可作为前端组件直接集成。',
    address: 'https://icraft.gantcloud.com/',
    keywords: ['3D'],
  },

  // Fun
  {
    title: '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili',
    description:
      '哔哩哔哩（bilibili.com)是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。',
    address: 'https://www.bilibili.com/',
    keywords: ['Fun'],
  },
  {
    title: '腾讯视频-中国领先的在线视频媒体平台,海量高清视频在线观看',
    description:
      '腾讯视频致力于打造中国领先的在线视频媒体平台，以丰富的内容、极致的观看体验、便捷的登录方式、多平台无缝应用体验以及快捷分享的产品特性，主要满足用户在线观看视频的需求。',
    address: 'https://v.qq.com/',
    keywords: ['Fun'],
  },
  {
    title: '哈哩哈哩官网_halihali_哈哩哈哩动漫',
    description: 'Halihali.tv: 哈哩哈哩-让你爱不离手的温馨小站(H站)',
    address: 'http://halihali5.com/',
    keywords: ['Fun'],
  },
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
  {
    title: 'Staggering Beauty',
    description: 'WARNING: CONTAINS FLASHING IMAGES 包含闪烁的图像',
    address: 'http://www.staggeringbeauty.com/',
    keywords: ['Fun'],
  },
  {
    title: 'Strobe Illusion - Hallucinate with this amazing optical illusion!',
    description:
      'You will hallucinate! This mind-melting optical illusion will warp and distort your vision. Hallucinations without drugs!',
    address: 'https://strobe.cool/',
    keywords: ['Fun'],
  },

  // 音乐
  {
    title: '自由钢琴 - AutoPiano - 在线钢琴，键盘钢琴，模拟钢琴，多种乐器选择，好听又好玩',
    description:
      '自由钢琴(AutoPiano)是利用HTML5技术开发的在线钢琴应用，致力于为钢琴爱好者、音乐爱好者提供一个优雅、简洁的平台，在学习工作之余可以在线弹钢琴，享受音乐、生活的美好。自由钢琴支持自动演奏和手动演奏，简单易学，快来试试吧~',
    address: 'https://www.autopiano.cn/',
    keywords: ['音乐'],
  },

  // 游戏
  {
    title: 'Welcome to Steam',
    description: 'games on steam - 欢迎来到 Steam',
    address: 'https://store.steampowered.com/',
    keywords: ['游戏', '游戏综合网站', '可能需要 VPN'],
  },
  {
    title: '朝游夕拾—全球游戏试玩中心',
    description: '本站提供包括单机游戏 STEAM游戏 mac游戏 分享下载，每日更新最新热门游戏资源',
    address: 'https://zhaoyouxishi.vip/',
    keywords: ['游戏', '游戏综合网站'],
  },
  {
    title: '合成北宇治',
    description: '俄罗斯方块似的消除游戏',
    address: 'https://magiconch.com/mix-eupho/',
    keywords: ['游戏', 'web'],
  },
  {
    title: '绘谜',
    description:
      '支持 断线重连、无限撤销、压感笔刷、智能提示、只能参考、画廊投稿、导出视频 的在线多人你画我猜 ',
    address: 'https://enazo.cn/',
    keywords: ['游戏', 'web'],
  },
  {
    title: 'slow roads',
    description: 'endless driving zen in your browser',
    address: 'https://slowroads.io/',
    keywords: ['游戏', 'web'],
  },
  {
    title: 'Sheep Fucking Sheep',
    description: 'A simple elimination game',
    address: 'https://sheep-fucking-sheep.gutianhuang.red/',
    keywords: ['游戏', 'web'],
  },
  {
    title: 'PCOL - SNOOKER',
    description: 'Play high quality Snooker game now just in your browser.',
    address: 'http://www.heyzxz.me/pcol/',
    keywords: ['游戏', 'web'],
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
  {
    title: '沃特碧们的Colg - COLG社区',
    description:
      'COLG玩家社区是网游、手游综合资讯站点，同时作为地下城与勇士官方合作资料站，提供DNF国服和韩服的最新爆料、DNF攻略及资料查询，COLG还提供装备流派模拟器、计算器及APP下载，丰厚活动全年不间断，更多DNF及热门游戏内容，就在COLG玩家社区。 ',
    address: 'https://bbs.colg.cn/',
    keywords: ['DNF', '游戏'],
  },
  {
    title: '心悦特权 游戏专区 - DNF-官方网站-腾讯游戏-格斗网游王者之作,500万同时在线',
    description: '心悦会员俱乐部',
    address: 'https://xinyue.qq.com/act/a20210317dnf/index_pc.html',
    keywords: ['DNF', '游戏'],
  },

  // 软件
  {
    title: 'Bandisoft - Bandizip, Honeycam, Honeyview',
    description: 'Home of Bandisoft',
    address: 'https://www.bandisoft.com/',
    keywords: ['软件'],
  },
  {
    title: 'Sublime Text - Text Editing, Done Right',
    description:
      "Sublime Text is a sophisticated text editor for code, markup and prose. You'll love the slick user interface, extraordinary features and amazing performance.",
    address: 'https://www.sublimetext.com/',
    keywords: ['软件'],
  },
  {
    title: 'voidtools',
    description: 'Everything - 基于名称快速定位文件和文件夹。',
    address: 'https://www.voidtools.com/zh-cn/',
    keywords: ['软件'],
  },
  {
    title: '网易UU加速器——不止快，还很稳',
    description:
      '网易UU加速器，独家自研多项黑科技，提供“不止快，还很稳”的加速服务！为游戏玩家解决延迟、掉线、卡机，高ping等网络问题，有效提升网络稳定性，极致降低延迟。',
    address: 'https://uu.163.com/',
    keywords: ['软件'],
  },
  {
    title: 'Shadowsocks.com',
    description: 'Lightweight and fast, take easy and have a nice day.',
    address: 'https://shadowsocks.nu/',
    keywords: ['软件'],
  },
  {
    title: 'Redis',
    description:
      'Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache, and message broker. Redis provides data structures …',
    address: 'https://redis.io/',
    keywords: ['软件'],
  },
  {
    title: 'Topaz Labs - AI Image Quality Software',
    description:
      'Photo and video enhancement software powered by deep learning gets you the best image quality available for noise reduction, sharpening, upscaling, and more.',
    address: 'https://www.topazlabs.com/',
    keywords: ['软件'],
  },
  {
    title: 'Download AS SSD Benchmark - Alex Intelligent Software',
    description: '',
    address:
      'https://www.alex-is.de/PHP/fusion/infusions/downloads/downloads.php?cat_id=4&download_id=9',
    keywords: ['软件'],
  },
  {
    title: 'VMware Workstation Pro',
    description:
      '借助 VMware Workstation Pro，您可以将多个操作系统作为虚拟机（包括 Windows 虚拟机）在单台 Windows 或 Linux PC 上运行 | VMware CN',
    address: 'https://www.vmware.com/cn/products/workstation-pro.html',
    keywords: ['软件'],
  },
  {
    title: 'App news and reviews, best software downloads and discovery - Softonic',
    description:
      'Softonic is the place to discover the best applications for your device, offering you reviews, news, articles and free downloads. Welcome to your app guide!',
    address: 'https://en.softonic.com/',
    keywords: ['软件'],
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
  {
    title: '秘塔AI搜索',
    description: '秘塔AI搜索，没有广告，直达结果',
    address: 'https://metaso.cn/',
    keywords: ['AI'],
  },
  {
    title: 'DeepSeek - 深度求索',
    description:
      '深度求索（DeepSeek），成立于2023年，专注于研究世界领先的通用人工智能底层模型与技术，挑战人工智能前沿性难题。基于自研训练框架、自建智算集群和万卡算力等资源，深度求索团队仅用半年时间便已发布并开源多个百亿级参数大模型，如DeepSeek-LLM通用大语言模型、DeepSeek-Coder代码大模型，并在2024年1月率先开源国内首个MoE大模型（DeepSeek-MoE），各大模型在公开评测榜单及真实样本外的泛化效果均有超越同级别模型的出色表现。和 DeepSeek AI 对话，轻松接入 API。',
    address: 'https://www.deepseek.com/',
    keywords: ['AI'],
  },

  // 翻译
  {
    title: '网易有道',
    description:
      '网易有道是中国领先的智能学习公司，致力于提供100%以用户为导向的学习产品和服务。有道成立于2006年，打造了一系列深受用户喜欢的口碑型大众学习工具产品，例如：网易有道词典、有道精品课、有道翻译官、有道云笔记等。2014年，网易有道宣布正式进军互联网教育行业。2018年4月，网易有道完成首次战略融资，投后估值11.2亿美金，跻身独角兽阵营。2019年10月，网易有道成功登陆纽交所，股票代码为“DAO”，成为网易集团首个独立上市的公司。',
    address: 'https://www.youdao.com/',
    keywords: ['翻译'],
  },
  {
    title: '百度翻译-200种语言互译、沟通全世界',
    description:
      '百度翻译提供即时免费200+语言翻译服务，拥有网页、APP、API产品，支持文本翻译、文档翻译、图片翻译等特色功能，满足用户查词翻译、文献翻译、合同翻译等需求，随时随地沟通全世界',
    address: 'https://fanyi.baidu.com/',
    keywords: ['翻译'],
  },

  // 邮箱
  {
    title: '登录QQ邮箱',
    description:
      'QQ邮箱，为亿万用户提供高效稳定便捷的电子邮件服务。你可以在电脑网页、iOS/iPad客户端、及Android客户端上使用它，通过邮件发送3G的超大附件，体验文件中转站、日历、记事本、漂流瓶等特色功能。QQ邮箱，常联系。',
    address: 'https://wx.mail.qq.com/?cancel_login=true&from=upexpected_login_redirect',
    keywords: ['邮箱'],
  },

  // 下载
  {
    title: '微博秒拍视频下载',
    description: '微博视频下载,秒拍视频下载,视频在线下载工具,批量视频解析下载,视频下载工具',
    address: 'https://weibomiaopai.com/',
    keywords: ['下载', '视频'],
  },

  // 可视化
  {
    title: 'Datawrapper - Create charts, maps, and tables',
    description:
      'Create interactive, responsive & beautiful data visualizations with the online tool Datawrapper — no code required. Used by the UN, New York Times, SPIEGEL, and more.',
    address: 'https://www.datawrapper.de/',
    keywords: ['可视化', '数据', '可以登录'],
  },

  // 数学
  {
    title: 'Microsoft数学求解器-数学问题求解器和计算器',
    description:
      '在线数学求解器，为你免费解答代数，微积分等数学问题。浏览在线网页或下载数学求解器app获取帮助。',
    address: 'https://mathsolver.microsoft.com/zh',
    keywords: ['数学'],
  },
  {
    title: 'MathB.in - Share Mathematics with LaTeX and Markdown',
    address: 'https://mathb.in/1',
    description:
      '[MathB.in] is a website meant for sharing snippets of mathematical text with others on the web.',
    keywords: ['数学'],
  },
  {
    title: 'GeoGebra - 风靡世界, 过亿师生沉迷使用的免费数学软件',
    description: '免费的课堂活动数字工具, 用于绘图计算, 几何作图, 白板协作等等',
    address: 'https://www.geogebra.org/',
    keywords: ['数学'],
  },

  // 声音
  {
    title: 'Introducing Peregrine - Realistic Text to Speech Model with Emotion',
    description:
      'Play.ht introduces realistic AI Text to Speech voice models that can express emotions and laughter. Create engaging voiceovers from text.',
    address:
      'https://play.ht/blog/introducing-truly-realistic-text-to-speech-with-emotion-and-laughter/',
    keywords: ['声音'],
  },
  {
    title: 'Adobe Podcast - AI audio recording and editing, all on the web',
    description:
      'Next generation audio from Adobe is here. Record, transcribe, edit, share. Crisp and clear, every time.',
    address: 'https://podcast.adobe.com/',
    keywords: ['声音'],
  },
  {
    title: 'AI Music Generator - SOUNDRAW',
    description: 'Your personal AI music generator.',
    address: 'https://soundraw.io/create_music',
    keywords: ['声音', 'AI'],
  },
  {
    title: '语音转文字,录音转文字,语音识别– 在线语音转换文字软件 - 迅捷PDF转换器在线免费版',
    description:
      '迅捷在线语音转文字转换器,提供语音转文字、录音转文字等语音识别功能,支持的格式包括MP3、M4A、AAC、FLAC、APE、WAV等,是个非常实用的语音转换文字软件.',
    address: 'https://app.xunjiepdf.com/ja/voice2text/',
    keywords: ['声音', '转换'],
  },

  // PDF
  {
    title: 'Sejda helps with your PDF tasks',
    description:
      'Sejda helps with your PDF tasks. Quick and simple online service, no installation required! Split, merge or convert PDF to images, alternate mix or split scans and many other.',
    address: 'https://www.sejda.com/',
    keywords: ['PDF'],
  },

  // 工具
  {
    title: '帮小忙，腾讯QQ浏览器在线工具箱平台',
    description:
      '帮小忙，腾讯QQ浏览器在线工具箱平台，提供证件照生成，表情包制作，PDF转换，文字提取，二维码生成，数据校验、照片修复、插件安装等在线服务，让你无忧生活。帮小忙-全部分类工具',
    address: 'https://tool.browser.qq.com/',
    keywords: ['工具'],
  },
  {
    title: '电子发票提取助手',
    description: '在线的免费的发票提取工具，支持电子发票一键批量提取到Excel表中。',
    address: 'https://airegex.cn/',
    keywords: ['工具', '发票'],
  },
]

export default websites
