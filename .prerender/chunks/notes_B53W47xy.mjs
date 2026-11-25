// src/data/notes.ts
var tracks = [
	{
		name: "金融入门 15 天",
		slug: "finance",
		group: "兴趣",
		desc: "为零基础学习者设计的连续课程，每天一课、按天推进，覆盖金融基础概念。",
		cadence: "每日一课 · 10:00",
		color: "violet",
		icon: "chart"
	},
	{
		name: "心理学入门每日一讲",
		slug: "psychology",
		group: "兴趣",
		desc: "带社会心理学视角的心理学入门课，面向零基础，用简体中文逐讲拆解。",
		cadence: "每日一讲 · 10:00",
		color: "teal",
		icon: "heart"
	},
	{
		name: "AI 工程师培养计划",
		slug: "ai-engineer",
		group: "专业",
		desc: "AI 工程师成长的每日授课计划，按知识模块编排，持续积累工程化能力。",
		cadence: "每日一课 · 10:00",
		color: "blue",
		icon: "sparkle"
	},
	{
		name: "AI Agent 开发",
		slug: "agent",
		group: "专业",
		desc: "大模型应用方向：LLM / Agent 原理、Function Calling 与 Tool Calling、RAG，以及小艺开放平台上的垂直 Agent 实践。",
		cadence: "持续学习",
		color: "violet",
		icon: "robot"
	},
	{
		name: "每日晚报",
		slug: "news",
		group: "兴趣",
		desc: "汇总国内外新闻、节日与重要事件节点，附考试、国考等时间提醒。",
		cadence: "每日 · 23:00",
		color: "amber",
		icon: "newspaper"
	},
	{
		name: "健身",
		slug: "fitness",
		group: "兴趣",
		desc: "减脂增肌，把身体当成长期项目来经营。",
		cadence: "持续",
		color: "teal",
		icon: "dumbbell"
	},
	{
		name: "摄影",
		slug: "photo",
		group: "兴趣",
		desc: "用镜头记录生活，从构图到后期的持续练习。",
		cadence: "持续",
		color: "rose",
		icon: "camera"
	},
	{
		name: "社交",
		slug: "social",
		group: "兴趣",
		desc: "从 i 人到 e 人的蜕变：主动表达、与人连接，慢慢走出舒适区。",
		cadence: "持续",
		color: "violet",
		icon: "users"
	}
];
var trackBySlug = (slug) => tracks.find((t) => t.slug === slug);
export { tracks as n, trackBySlug as t };
