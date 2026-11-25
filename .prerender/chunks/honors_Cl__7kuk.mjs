// src/data/projects.ts
var projects = [
	{
		slug: "distriagenda",
		name: "小嘀嗒 · 鸿蒙行程协同管家",
		enName: "DistriAgenda",
		category: "毕设 / 主项目",
		status: "进行中",
		year: "2026.06 – 至今",
		summary: "基于 HarmonyOS Next 的智能日程系统，鸿蒙移动端 + Vue 管理端 + 小艺 Agent，文本语义解析行程。",
		problem: "日程散落在多端，录入靠手填、团队无法协同，跨设备同步割裂。",
		result: "做成三端一体：鸿蒙端 + Vue3 网页管理端 + SpringBoot 后端，接入小艺开放平台做垂直行程 Agent，实现文本语义解析、团队权限管控、多端数据同步，用 Vibe Coding 意图驱动模式快速迭代。",
		stack: [
			"ArkTS",
			"ArkUI",
			"Vue3",
			"SpringBoot",
			"MySQL",
			"SQLite",
			"Redis",
			"小艺 Agent"
		],
		highlights: [
			"接入小艺开放平台，一句话解析成结构化日程",
			"鸿蒙端 + Web 端 + 后端三端数据实时同步",
			"团队权限管控，Vibe Coding 意图驱动开发"
		],
		repo: "",
		cover: "cover-indigo",
		featured: true
	},
	{
		slug: "xiezhai",
		name: "獬豸破妄反诈平台",
		enName: "Xiezhai Anti-Fraud",
		category: "全栈作品",
		status: "已完成",
		year: "大三",
		summary: "多端联动的反诈科普与识诈防护平台：AI 识诈把关、反诈文章、在线考试、积分排行，用户 / 推广员 / 管理员三种角色分端管理。",
		problem: "反诈科普形式单一，缺一条「内容生产 → 审核 → 反馈」的完整链路，学习效果也没法量化。",
		result: "协作开发前后端分离全栈：Vue3 + Element Plus 做三套角色端，Spring Boot + MyBatis-Plus 提供 20 组接口、10 张表，JWT 三角色鉴权。接入火山方舟豆包大模型做可疑话术风险识别，未登录或没配 Key 时自动降级到本地规则引擎。获第十九届中国大学生计算机设计大赛中南地区赛三等奖。",
		stack: [
			"Vue3",
			"Vite",
			"Pinia",
			"Element Plus",
			"ECharts",
			"Spring Boot",
			"MyBatis-Plus",
			"MySQL",
			"JWT",
			"豆包大模型"
		],
		highlights: [
			"AI 识诈检测：输入可疑话术，豆包大模型判风险，失败自动降级本地规则",
			"三角色分端：用户看内容做题、推广员发文、管理员审内容",
			"反诈考试 + 积分排行榜，把科普效果量化"
		],
		repo: "https://github.com/guyuezhicheng/XieZhiPoWang",
		imgs: [
			"/projects/xiezhi/xiezhi-01.jpg",
			"/projects/xiezhi/xiezhi-02.jpg",
			"/projects/xiezhi/xiezhi-05.jpg",
			"/projects/xiezhi/xiezhi-06.jpg"
		],
		cover: "cover-rose",
		featured: true
	},
	{
		slug: "xiaozhu-ledger",
		name: "小猪小猪 · 鸿蒙生活助手",
		category: "鸿蒙应用",
		status: "已完成",
		year: "大三",
		summary: "基于 HarmonyOS 的 ArkTS 原生生活工具 App，把记账、资讯、待办、听歌四个高频场景聚合到一个应用里。",
		problem: "把日常高频的小工具聚合成一个鸿蒙原生 App，练手多模块架构与统一主题设计。",
		result: "用小边记账、小橘快讯、龟龟代办、比熊听歌四个独立模块搭好整体架构，统一 XiaozhuTheme 主题；快讯模块走 HTTP 接口拿分类和新闻数据，配置文件集中管理后端地址。",
		stack: [
			"HarmonyOS",
			"ArkTS",
			"ArkUI"
		],
		highlights: [
			"四个子应用模块化架构，统一主题",
			"记账 / 资讯 / 待办 / 听歌一站式聚合",
			"快讯模块 HTTP 接口对接与分类浏览"
		],
		repo: "https://github.com/guyuezhicheng/XiaoZhuXiaoZhu",
		imgs: [
			"/projects/xiaozhu/02_首页.jpeg",
			"/projects/xiaozhu/03_小边记账.jpeg",
			"/projects/xiaozhu/05_小橘快讯.jpeg",
			"/projects/xiaozhu/09_比熊听歌.jpeg"
		],
		cover: "cover-teal",
		featured: true
	},
	{
		slug: "qimiao-ledger",
		name: "奇妙记账本",
		enName: "QiMiao Ledger",
		category: "鸿蒙应用",
		status: "已完成",
		year: "2026",
		summary: "面试实战项目：HarmonyOS Next 原生记账 App，支持收支记录、分类统计与账目可视化。",
		problem: "面试需要一份完整可运行的鸿蒙原生项目，把 ArkTS、ArkUI 与本地数据持久化串起来。",
		result: "实现记账录入、分类管理、收支统计与图表看板，采用 ArkTS + ArkUI 构建界面，本地持久化保存账目数据，已开源到 GitHub。",
		stack: [
			"HarmonyOS",
			"ArkTS",
			"ArkUI"
		],
		highlights: [
			"鸿蒙原生记账与分类统计",
			"本地数据持久化",
			"完整开源可运行"
		],
		repo: "https://github.com/guyuezhicheng/QiMiaoJiZhangBen",
		visibility: "public",
		imgs: [
			"/projects/qimiao/qimiao-01.jpg",
			"/projects/qimiao/qimiao-08.jpg",
			"/projects/qimiao/qimiao-06.jpg",
			"/projects/qimiao/qimiao-13.jpg"
		],
		cover: "cover-emerald",
		featured: false
	},
	{
		slug: "yinni-music",
		name: "音你猩动 · 跨设备音乐播放器",
		category: "鸿蒙应用",
		status: "已完成",
		year: "大二",
		summary: "基于 HarmonyOS 的分布式音乐播放器，界面参考网易云音乐：首页推荐、音乐库、播客、有声书、播放页齐全，支持歌词同步与跨设备音频接续。获第四届湖北省大学生信创大赛（鸿蒙赛道）三等奖。",
		problem: "音乐播放场景在手机与平板间切换会中断，需要一个界面完整、能跨设备接续的鸿蒙音乐客户端。",
		result: "用 ArkTS + ArkUI 做完整个客户端，@ohos/axios 封装统一请求与 token 拦截；覆盖首页、音乐库、播客、有声书、漫游和播放页，实现歌词同步、音效调节和分布式音频接续。获第四届湖北省大学生信创大赛「软通动力」操作系统赛道（鸿蒙）三等奖。",
		stack: [
			"HarmonyOS",
			"ArkTS",
			"ArkUI",
			"@ohos/axios",
			"分布式软总线"
		],
		highlights: [
			"鸿蒙分布式音频接续，歌词同步与音效调节",
			"首页 / 音乐库 / 播客 / 有声书 / 播放页全覆盖",
			"第四届湖北省大学生信创大赛（鸿蒙）三等奖"
		],
		repo: "https://github.com/guyuezhicheng/LeiWangYiYunYinYue",
		imgs: [
			"/projects/heimacloud/home.jpg",
			"/projects/heimacloud/mainindex.jpg",
			"/projects/heimacloud/music.jpg",
			"/projects/heimacloud/play.jpg"
		],
		cover: "cover-amber",
		featured: true
	},
	{
		slug: "lingxi",
		name: "灵犀博栈 · 博客内容平台",
		category: "全栈作品",
		status: "已完成",
		year: "大二",
		summary: "前后端分离的博客平台，PC 和移动端各一套界面，支持富文本发文、评论点赞、实时聊天和后台内容管理。",
		problem: "传统博客移动端体验差、互动弱，从发文到评论的链路是断的，后台也缺一套统一的内容和用户管理。",
		result: "后端 Node.js + Express + MongoDB，JWT 鉴权 + RSA 加密传输密码，Socket.io 做实时聊天与在线广播；前端 Vue3 + Vite + Pinia，PC 端用 Element Plus、移动端用 Vant，两套界面共用一套接口，ECharts 做标签分布统计。后台可管理文章与用户。获第十八届中国大学生计算机设计大赛中南地区赛三等奖。",
		stack: [
			"Vue3",
			"Vite",
			"Pinia",
			"Element Plus",
			"Vant",
			"ECharts",
			"Node.js",
			"Express",
			"MongoDB",
			"Socket.io"
		],
		highlights: [
			"PC / 移动端双套界面，共用一套后端接口",
			"Socket.io 实时聊天，消息广播 + 在线状态",
			"RSA 加密密码传输 + JWT 鉴权，后台管文章也管用户"
		],
		repo: "https://github.com/guyuezhicheng/LingXiBoZhan",
		imgs: [
			"/projects/lingxi/lingxi-01.jpg",
			"/projects/lingxi/lingxi-05.jpg",
			"/projects/lingxi/lingxi-04.jpg",
			"/projects/lingxi/lingxi-02.jpg"
		],
		cover: "cover-slate",
		featured: false
	},
	{
		slug: "nongchanpin",
		name: "乐农优品 · 农产品销售平台",
		category: "全栈作品",
		status: "已完成",
		year: "大三",
		summary: "助农电商平台：前台能逛能买，购物车、订单、收藏、论坛齐全，后台管农产品、订单、商家和用户。",
		problem: "农产品缺一条统一的线上销售渠道，订单、库存、商家信息散在各处，对账全靠人工。",
		result: "Spring Boot + MyBatis-Plus 做后端，Shiro 管权限，14 张表、15 组接口，覆盖商品、购物车、订单、收藏、论坛、公告全链路；前台 layui 静态页，后台 Vue2 + Element UI 独立打包。",
		stack: [
			"Spring Boot",
			"MyBatis-Plus",
			"Shiro",
			"MySQL",
			"layui",
			"Vue2",
			"Element UI"
		],
		highlights: [
			"前台商城 + 后台管理双端，权限按角色分",
			"商品 → 购物车 → 订单 → 评价完整闭环",
			"论坛、公告、收藏这些边角功能也都齐"
		],
		repo: "https://github.com/guyuezhicheng/NongChanPinGouWu",
		imgs: [
			"/projects/nc/nc-04.jpg",
			"/projects/nc/nc-05.jpg",
			"/projects/nc/nc-01.jpg",
			"/projects/nc/nc-06.jpg"
		],
		cover: "cover-emerald",
		featured: false
	},
	{
		slug: "xinli",
		name: "心屿 · 心理健康教育平台",
		category: "全栈作品",
		status: "已完成",
		year: "大二",
		summary: "面向高校的心理健康平台：知识科普、咨询师介绍、心理测评、在线预约，后台管学生档案和内容。",
		problem: "高校心理中心靠线下登记，测评、预约、档案分散，学生有顾虑也不愿意当面问。",
		result: "Node.js + Express + Sequelize 搭后端，MySQL 17 张表、Redis 存会话，JWT 鉴权；前台和后台是两套独立的 Vue2 + Element UI 工程；测评答卷、咨询申请流转、问卷记录都在后台可查。",
		stack: [
			"Node.js",
			"Express",
			"Sequelize",
			"MySQL",
			"Redis",
			"JWT",
			"Vue2",
			"Element UI"
		],
		highlights: [
			"知识 / 咨询师 / 测评 / 申请四条主线",
			"前后台分离，两套 Vue 工程各自打包",
			"学生档案与问卷记录统一进后台"
		],
		repo: "https://github.com/guyuezhicheng/XinLiJianKangPingTai",
		imgs: [
			"/projects/xl/xl-01.jpg",
			"/projects/xl/xl-04.jpg",
			"/projects/xl/xl-06.jpg",
			"/projects/xl/xl-10.jpg"
		],
		cover: "cover-teal",
		featured: false
	},
	{
		slug: "leidouyin",
		name: "类抖音短视频平台 · HarmonyOS 客户端",
		category: "鸿蒙应用",
		status: "已完成",
		year: "2025.06 – 2025.07",
		summary: "百里半（武汉）网络技术有限公司鸿蒙应用开发实习期间完成：参考抖音的首页推荐、搜索、消息、商城和个人页，视频滑动切换播放。",
		problem: "短视频的核心体验是滑动切换和即时播放，要在鸿蒙端把播放器、列表和交互状态串起来。",
		result: "用 VideoController 做播放控制，@kit.NetworkKit 封装请求，完成首页推荐、搜索、关注、消息、商城、我的和登录注册流程，token 存 AppStorage。",
		stack: [
			"HarmonyOS",
			"ArkTS",
			"ArkUI",
			"@kit.NetworkKit",
			"VideoController"
		],
		highlights: [
			"VideoController 滑动播放与状态管理",
			"验证码 + 密码两套登录，token 存 AppStorage",
			"首页 / 搜索 / 消息 / 商城 / 我的完整流程"
		],
		repo: "https://github.com/guyuezhicheng/LeiDouYin",
		imgs: [
			"/projects/leidouyin/01_首页-推荐.jpg",
			"/projects/leidouyin/05_搜索.jpg",
			"/projects/leidouyin/03_消息.jpg",
			"/projects/leidouyin/06_登录.jpg"
		],
		cover: "cover-rose",
		featured: true
	},
	{
		slug: "leifanqie",
		name: "类番茄小说平台 · 鸿蒙端 + 后端",
		category: "鸿蒙应用",
		status: "已完成",
		year: "2025.06 – 2025.07",
		summary: "百里半（武汉）网络技术有限公司鸿蒙应用开发实习期间完成：鸿蒙端做书城、分类、目录、搜索和登录注册，Spring Boot 后端管用户和验证码。",
		problem: "小说阅读平台要同时有客户端和后端，把书城浏览、目录、搜索和账号体系连成一条线。",
		result: "鸿蒙端 ArkTS 做书城 / 分类 / 目录 / 搜索 / 登录注册；后端 Spring Boot 3.4.7 + MyBatis-Plus + MySQL + Redis，邮箱验证码走 Spring Mail，数据库脚本一并放进仓库。",
		stack: [
			"HarmonyOS",
			"ArkTS",
			"Spring Boot",
			"MyBatis-Plus",
			"MySQL",
			"Redis",
			"Spring Mail"
		],
		highlights: [
			"鸿蒙端 + Spring Boot 后端双工程",
			"邮箱验证码登录与注册，Redis 缓存",
			"MySQL 建表脚本随仓库一起交付"
		],
		repo: "https://github.com/guyuezhicheng/LeiFanQieXiaoShuo",
		imgs: [
			"/projects/leifanqie/01_书城首页.png",
			"/projects/leifanqie/02_验证码登录.png",
			"/projects/leifanqie/03_密码登录.png",
			"/projects/leifanqie/04_注册.png"
		],
		cover: "cover-indigo",
		featured: true
	},
	{
		slug: "nongfeng",
		name: "农丰助农 · 助农服务网站",
		category: "全栈作品",
		status: "已完成",
		year: "大三",
		summary: "前后端分离的助农服务平台，农户、商户、管理员三种角色分端使用，覆盖种植信息、农技讲座、商户服务、咨询订单和平台审核。",
		problem: "农户种什么、怎么种、找谁卖散在各处，缺一个把种植资料、农技讲座和商户服务串起来的平台。",
		result: "Vue3 + Element Plus 做三套角色界面，Spring Boot 2.7 + Spring Security + JWT 做鉴权，MyBatis-Plus + MySQL 存数据；农户端管种植与咨询订单，商户端管服务与数据统计，管理端审内容与用户，32 张界面截图。",
		stack: [
			"Vue3",
			"Vite",
			"Element Plus",
			"Pinia",
			"ECharts",
			"Spring Boot",
			"Spring Security",
			"JWT",
			"MyBatis-Plus",
			"MySQL"
		],
		highlights: [
			"农户 / 商户 / 管理员三端分角色，权限按角色分",
			"种植信息 → 资料 → 讲座 → 商户服务完整链路",
			"Knife4j 接口文档，数据统计分析"
		],
		repo: "https://github.com/guyuezhicheng/NongFengZhuNong",
		imgs: [
			"/projects/nongfeng/01-平台首页.png",
			"/projects/nongfeng/04-农户端-首页.png",
			"/projects/nongfeng/16-商户端-首页.png",
			"/projects/nongfeng/23-管理端-首页.png"
		],
		cover: "cover-emerald",
		featured: false
	}
];
// src/data/honors.ts
var honors = [
	{
		title: "中国高校计算机大赛 · 团体程序设计天梯赛湖北省「珠峰争鼎」组 · 团队三等奖",
		issuer: "中国高校计算机大赛",
		date: "2025.05.06",
		level: "省级",
		category: "竞赛获奖",
		file: "/certs/cert01.pdf",
		img: "/certs/img/cert01.jpg"
	},
	{
		title: "第二十一届百度之星程序设计大赛校内选拔赛 · 一等奖",
		issuer: "武昌工学院",
		date: "2025.11",
		level: "校级",
		category: "竞赛获奖",
		file: "/certs/cert02.pdf",
		img: "/certs/img/cert02.jpg"
	},
	{
		title: "第十一届全国大学生统计建模大赛校内选拔赛 · 二等奖",
		issuer: "武昌工学院",
		date: "2025.06",
		level: "校级",
		category: "竞赛获奖",
		file: "/certs/cert03.pdf",
		img: "/certs/img/cert03.jpg"
	},
	{
		title: "第十八届中国大学生计算机设计大赛中南地区赛 · 三等奖",
		issuer: "中国大学生计算机设计大赛",
		date: "2025.06",
		level: "省级",
		category: "竞赛获奖",
		file: "/certs/cert04.pdf",
		img: "/certs/img/cert04.jpg"
	},
	{
		title: "中国高校计算机大赛 · 团体程序设计天梯赛湖北省「珠峰争鼎」组 · 团队三等奖",
		issuer: "中国高校计算机大赛",
		date: "2026.05.06",
		level: "省级",
		category: "竞赛获奖",
		file: "/certs/cert05.pdf",
		img: "/certs/img/cert05.jpg"
	},
	{
		title: "全国大学生嵌入式芯片与系统设计竞赛校内选拔赛 · 一等奖",
		issuer: "全国大学生嵌入式芯片与系统设计竞赛",
		date: "2026.05",
		level: "校级",
		category: "竞赛获奖",
		file: "/certs/cert06.pdf",
		img: "/certs/img/cert06.jpg"
	},
	{
		title: "全国大学生计算机设计大赛校内选拔赛 · 三等奖",
		issuer: "中国大学生计算机设计大赛",
		date: "2026.04",
		level: "校级",
		category: "竞赛获奖",
		file: "/certs/cert07.pdf",
		img: "/certs/img/cert07.jpg"
	},
	{
		title: "大学生创新创业训练计划项目立项证书",
		issuer: "武昌工学院",
		date: "2026.09 – 2027.08",
		level: "校级",
		category: "项目立项",
		file: "/certs/cert08.pdf",
		img: "/certs/img/cert08.jpg"
	},
	{
		title: "大学生创新训练计划项目立项",
		issuer: "武昌工学院",
		date: "2026",
		level: "校级",
		category: "项目立项",
		file: "/certs/cert09.pdf",
		img: "/certs/img/cert09.jpg"
	},
	{
		title: "第二十二届百度之星程序设计大赛校内选拔赛 · 优秀奖",
		issuer: "武昌工学院",
		date: "2026.06",
		level: "校级",
		category: "竞赛获奖",
		file: "/certs/cert10.pdf",
		img: "/certs/img/cert10.jpg"
	},
	{
		title: "第十九届中国大学生计算机设计大赛中南地区赛 · 三等奖",
		issuer: "中国大学生计算机设计大赛",
		date: "2026.06",
		level: "省级",
		category: "竞赛获奖",
		file: "/certs/cert11.pdf",
		img: "/certs/img/cert11.jpg"
	},
	{
		title: "HarmonyOS 应用开发者高级认证",
		issuer: "华为",
		date: "2026.06 – 2028.06",
		level: "认证",
		category: "专业认证",
		file: "/certs/cert12.pdf",
		img: "/certs/img/cert12.jpg"
	},
	{
		title: "校优秀团干部",
		issuer: "武昌工学院",
		date: "2024.12",
		level: "校级",
		category: "评优评先",
		file: "/certs/cert13.pdf",
		img: "/certs/img/cert13.jpg"
	},
	{
		title: "校优秀学生",
		issuer: "武昌工学院",
		date: "2024.12",
		level: "校级",
		category: "评优评先",
		file: "/certs/cert14.pdf",
		img: "/certs/img/cert14.jpg"
	},
	{
		title: "甲等奖学金",
		issuer: "武昌工学院",
		date: "2024.12",
		level: "校级",
		category: "奖学金",
		file: "/certs/cert15.pdf",
		img: "/certs/img/cert15.jpg"
	},
	{
		title: "校优秀学生标兵",
		issuer: "武昌工学院",
		date: "2025.12",
		level: "校级",
		category: "评优评先",
		file: "/certs/cert16.pdf",
		img: "/certs/img/cert16.jpg"
	},
	{
		title: "甲等奖学金",
		issuer: "武昌工学院",
		date: "2025.12",
		level: "校级",
		category: "奖学金",
		file: "/certs/cert17.pdf",
		img: "/certs/img/cert17.jpg"
	},
	{
		title: "华为云人工智能入门级开发者认证（HCCDA-AI）",
		issuer: "华为",
		date: "2025.06 – 2028.06",
		level: "认证",
		category: "专业认证",
		file: "/certs/cert18.pdf",
		img: "/certs/img/cert18.jpg"
	},
	{
		title: "第十七届蓝桥杯 Java 软件开发大学 B 组湖北赛区 · 二等奖",
		issuer: "蓝桥杯全国软件和信息技术专业人才大赛",
		date: "2026.05.08",
		level: "省级",
		category: "竞赛获奖",
		file: "/certs/cert19.pdf",
		img: "/certs/img/cert19.jpg"
	},
	{
		title: "第四届湖北省大学生信创大赛「软通动力」操作系统赛道（鸿蒙）· 三等奖",
		issuer: "湖北省大学生信创大赛",
		date: "2025.06",
		level: "省级",
		category: "竞赛获奖",
		file: "/certs/cert20.pdf",
		img: "/certs/img/cert20.jpg"
	},
	{
		title: "「挑战杯」大学生创业计划竞赛院内选拔赛 · 优秀奖",
		issuer: "武昌工学院",
		date: "2026.05",
		level: "院级",
		category: "竞赛获奖",
		file: "/certs/cert21.pdf",
		img: "/certs/img/cert21.jpg"
	},
	{
		title: "轻型民用无人驾驶航空器安全操控理论培训合格证明",
		issuer: "民用无人驾驶航空器",
		date: "2025.08 – 2027.08",
		level: "认证",
		category: "技能证书",
		file: "/certs/cert22.pdf",
		img: "/certs/img/cert22.jpg"
	}
];
var honorGroups = [
	{
		key: "comp-cn",
		label: "竞赛 · 国家级",
		hint: "国赛及全国性赛事奖项",
		category: "竞赛获奖",
		level: "国家级"
	},
	{
		key: "comp-prov",
		label: "竞赛 · 省级",
		hint: "省赛区、省级学会主办赛事",
		category: "竞赛获奖",
		level: "省级"
	},
	{
		key: "comp-school",
		label: "竞赛 · 校级",
		hint: "校内选拔赛",
		category: "竞赛获奖",
		level: "校级"
	},
	{
		key: "comp-college",
		label: "竞赛 · 院级",
		hint: "学院内选拔赛",
		category: "竞赛获奖",
		level: "院级"
	},
	{
		key: "scholarship",
		label: "奖学金",
		hint: "按期评定的学业奖学金",
		category: "奖学金"
	},
	{
		key: "praise",
		label: "评优评先",
		hint: "优秀学生、优秀团干部等荣誉",
		category: "评优评先"
	},
	{
		key: "cert",
		label: "专业认证",
		hint: "厂商技术认证",
		category: "专业认证"
	},
	{
		key: "skill",
		label: "技能证书",
		hint: "其他资格与合格证明",
		category: "技能证书"
	},
	{
		key: "project",
		label: "项目立项",
		hint: "大创等科研训练项目",
		category: "项目立项"
	}
];
function honorsOfGroup(g) {
	return honors.filter((h) => h.category === g.category && (!g.level || h.level === g.level)).sort((a, b) => b.date.localeCompare(a.date));
}
export { projects as i, honors as n, honorsOfGroup as r, honorGroups as t };
