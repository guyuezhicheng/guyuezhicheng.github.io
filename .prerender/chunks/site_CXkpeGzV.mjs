// src/data/site.ts
var site = {
	name: "胡志成",
	nameEn: "Hu Zhicheng",
	email: "1759536382@qq.com",
	phone: "15337227981",
	avatar: "/avatar.jpg",
	domain: "guyuezhicheng.github.io",
	github: "guyuezhicheng",
	title: "胡志成 · 全栈与鸿蒙开发者",
	description: "武昌工学院信息工程学院计算机科学与技术专业，全栈开发 / HarmonyOS 应用开发。这里放项目、文章和正在做的事。",
	tagline: "Where there is a will, there is a way.",
	intro: "武昌工学院信息工程学院计科 2302 班，写 Java / SpringBoot，也写 ArkTS 和鸿蒙应用。计科 2302 班班长、校学生会外联部部长，辅修工程管理。做过分布式日程、记账 App，正在找全栈或鸿蒙方向的实习机会。",
	availability: {
		open: true,
		text: "正在找实习 · 全栈 / 鸿蒙 / Agent",
		detail: "合肥优先，远程亦可",
		resumeUrl: "/resume.pdf"
	},
	location: "湖北 武汉",
	edu: "武昌工学院 · 计算机科学与技术 · 2026 届",
	socials: [
		{
			label: "GitHub",
			href: "https://github.com/guyuezhicheng",
			icon: "github"
		},
		{
			label: "掘金",
			href: "https://juejin.cn/user/3146115124573648/posts",
			icon: "juejin"
		},
		{
			label: "CSDN",
			href: "https://blog.csdn.net/huge_cheng",
			icon: "csdn"
		},
		{
			label: "华为开发者联盟",
			href: "https://developer.huawei.com/consumer/cn/personalcenter/myCommunity/communityPublish/article?uid=a220d6e2a356467fb531456c8908224b",
			icon: "huawei"
		},
		{
			label: "邮箱",
			href: "mailto:1759536382@qq.com",
			icon: "mail"
		}
	],
	nav: [
		{
			label: "首页",
			href: "/"
		},
		{
			label: "项目",
			href: "/projects"
		},
		{
			label: "开源",
			href: "/opensource"
		},
		{
			label: "博客",
			href: "/writing"
		},
		{
			label: "蜕变",
			href: "/notes"
		},
		{
			label: "荣誉",
			href: "/honors"
		},
		{
			label: "此刻",
			href: "/now"
		},
		{
			label: "关于",
			href: "/about"
		},
		{
			label: "致谢",
			href: "/relations"
		}
	],
	built: {
		since: "2026.11",
		stack: "Astro"
	},
	keywords: [
		"胡志成",
		"全栈开发",
		"HarmonyOS",
		"鸿蒙",
		"SpringBoot",
		"Java",
		"ArkTS",
		"武昌工学院"
	]
};
export { site as t };
