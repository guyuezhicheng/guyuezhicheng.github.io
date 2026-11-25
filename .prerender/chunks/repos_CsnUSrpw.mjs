// src/data/repos.ts
var repos = [
	{
		name: "QiMiaoJiZhangBen",
		title: "奇妙记账本",
		desc: "用 HarmonyOS ArkTS 仿写的记账 App，收支录入、分类统计、本地数据持久化，面试练习项目。",
		stack: [
			"ArkTS",
			"ArkUI",
			"HarmonyOS"
		],
		lang: "TypeScript",
		url: "https://github.com/guyuezhicheng/QiMiaoJiZhangBen",
		isPrivate: false,
		updated: "2026.11"
	},
	{
		name: "XieZhiPoWang",
		title: "獬豸 · 破妄",
		desc: "多端联动的反诈科普平台。Spring Boot + Vue3 三端分角色，接火山方舟大模型做可疑话术识别。",
		stack: [
			"Spring Boot",
			"Vue3",
			"MySQL",
			"豆包"
		],
		lang: "Java",
		url: "https://github.com/guyuezhicheng/XieZhiPoWang",
		isPrivate: true,
		updated: "2026.11"
	},
	{
		name: "LingXiBoZhan",
		title: "灵犀博栈 · 博客内容平台",
		desc: "前后端分离的博客平台。Node.js + Express + MongoDB，Socket.io 实时聊天，PC / 移动端双套界面。",
		stack: [
			"Express",
			"Vue3",
			"MongoDB",
			"Socket.io"
		],
		lang: "JavaScript",
		url: "https://github.com/guyuezhicheng/LingXiBoZhan",
		isPrivate: true,
		updated: "2026.11"
	},
	{
		name: "DistriAgenda",
		title: "小嘀嗒 · 行程协同",
		desc: "鸿蒙端 + Web 管理端 + SpringBoot 后端的三人协同日程系统，毕设进行中，尚未公开。",
		stack: [
			"ArkTS",
			"Vue3",
			"Spring Boot"
		],
		lang: "ArkTS",
		isPrivate: true,
		updated: "2026.11"
	},
	{
		name: "LeiWangYiYunYinYue",
		title: "音你猩动 · 跨设备音乐播放器",
		desc: "第四届湖北省大学生信创大赛（鸿蒙）三等奖。ArkTS + @ohos/axios 做的鸿蒙音乐 App，首页、音乐库、播客、播放页齐全。",
		stack: [
			"ArkTS",
			"ArkUI",
			"axios"
		],
		lang: "ArkTS",
		url: "https://github.com/guyuezhicheng/LeiWangYiYunYinYue",
		isPrivate: true,
		updated: "2026.11"
	},
	{
		name: "LeiDouYin",
		title: "类抖音短视频平台",
		desc: "实习项目。HarmonyOS 短视频 App，VideoController 滑动播放，@kit.NetworkKit 封装请求。",
		stack: [
			"ArkTS",
			"NetworkKit",
			"VideoController"
		],
		lang: "ArkTS",
		url: "https://github.com/guyuezhicheng/LeiDouYin",
		isPrivate: true,
		updated: "2026.11"
	},
	{
		name: "LeiFanQieXiaoShuo",
		title: "类番茄小说平台",
		desc: "实习项目。鸿蒙端 + Spring Boot 后端，MyBatis-Plus、MySQL、Redis，邮箱验证码登录。",
		stack: [
			"ArkTS",
			"Spring Boot",
			"MySQL",
			"Redis"
		],
		lang: "Java",
		url: "https://github.com/guyuezhicheng/LeiFanQieXiaoShuo",
		isPrivate: true,
		updated: "2026.11"
	},
	{
		name: "XiaoZhuXiaoZhu",
		title: "小猪小猪 · 鸿蒙生活助手",
		desc: "记账、资讯、待办、听歌四个子应用聚合的鸿蒙原生 App，统一主题与模块化架构。",
		stack: [
			"ArkTS",
			"ArkUI",
			"HarmonyOS"
		],
		lang: "ArkTS",
		url: "https://github.com/guyuezhicheng/XiaoZhuXiaoZhu",
		isPrivate: true,
		updated: "2026.05"
	},
	{
		name: "NongFengZhuNong",
		title: "农丰助农 · 助农服务网站",
		desc: "Vue3 + Spring Boot 前后端分离，农户 / 商户 / 管理员三端，种植信息、农技讲座、咨询订单全覆盖。",
		stack: [
			"Vue3",
			"Spring Boot",
			"MySQL",
			"JWT"
		],
		lang: "Java",
		url: "https://github.com/guyuezhicheng/NongFengZhuNong",
		isPrivate: true,
		updated: "2026.03"
	},
	{
		name: "guyuezhicheng.github.io",
		title: "本站源码",
		desc: "你现在看的这个站点。Astro 手写组件，没有用主题模板，配色和动效都是自己调的。",
		stack: [
			"Astro",
			"TypeScript",
			"CSS"
		],
		lang: "Astro",
		url: "https://github.com/guyuezhicheng/guyuezhicheng.github.io",
		isPrivate: false,
		updated: "2026.11"
	}
];
var publicRepos = repos.filter((r) => !r.isPrivate);
export { repos as n, publicRepos as t };
