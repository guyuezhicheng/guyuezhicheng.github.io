import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { T as addAttribute, d as renderComponent, n as templateEnter, r as templateExit, v as renderTemplate, y as maybeRenderHead } from "./server_B46-sQ6m.mjs";
import { a as createComponent, n as $$Icon, r as renderScript, t as $$BaseLayout } from "./BaseLayout_CFwgR6Jf.mjs";
import { t as site } from "./site_CXkpeGzV.mjs";
// src/components/Guestbook.astro
var $$Guestbook = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="gb-mini" id="guestbook" data-guide="guestbook"><form class="gb-mini-form" data-gb-form${addAttribute("", "data-endpoint")}><label class="gb-mini-label" for="gb-text">留一句，飘进后面的星轨</label><textarea id="gb-text" class="gb-mini-text" data-gb-text rows="2" maxlength="80" placeholder="随便说点什么，夸我也行，骂我也行。" required></textarea><div class="gb-mini-row"><button type="button" class="gb-mini-anon" data-gb-anon>匿名</button><input class="gb-mini-name" data-gb-name type="text" maxlength="12" placeholder="名字"><select class="gb-mini-rel" data-gb-rel aria-label="我们的关系">${[
		"同学",
		"室友",
		"朋友",
		"老师",
		"学长学姐",
		"网友",
		"家人"
	].map((r) => renderTemplate`<option${addAttribute(r, "value")}>${r}</option>`)}<option value="__custom">其他…</option></select></div><input class="gb-mini-rel-custom" data-gb-rel-custom type="text" maxlength="10" placeholder="自己填，比如「隔壁工位的」" hidden><div class="gb-mini-foot"><span class="gb-mini-count"><span data-gb-count>0</span>/80</span><button class="gb-mini-submit" type="submit">送进星轨${renderComponent($$result, "Icon", $$Icon, {
		"name": "arrow-right",
		"size": 13
	})}</button></div><p class="gb-mini-tip" data-gb-tip hidden></p></form><button class="gb-mini-stat" type="button" data-gb-manage hidden>还没有人留言，第一句就是你的。</button></div><!-- 管理弹层：不占页面高度，点统计那行才出来 --><div class="gb-overlay" data-gb-overlay hidden><div class="gb-panel" role="dialog" aria-modal="true" aria-label="我的留言"><div class="gbp-head"><strong>我留在星轨上的话</strong><button class="gbp-close" type="button" data-gb-close aria-label="关闭">×</button></div><div class="gbp-list" data-gb-list></div><p class="gbp-note">留言只存在这台设备的浏览器里，删掉就没了。</p></div></div>${renderScript($$result, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/components/Guestbook.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/components/Guestbook.astro", void 0);
// src/data/thanks.ts
var thanksQuote = {
	lead: "火箭飞上天，最用力的是第一级。",
	paragraphs: [
		"有些人，只陪你一段路。可没有那一段，你到不了这里。",
		"土星五号的第一级，占了整枚火箭四分之三的重量，却只燃烧两分多钟，把火箭推到六十多公里高。然后燃烧完、分离，火箭掉进了大西洋。",
		"为什么非扔掉它不可？因为烧空的燃料箱只剩下重量，带着它，谁都飞不上去。每一枚火箭，都是一路扔掉东西才飞上天的。",
		"人这一辈子，也有很多个第一级。",
		"教你骑车的人，在你身后松了手；陪你熬过高三的人，去了另一座城市；说好一直走下去的人，在某个路口下了车。",
		"你以为是自己把他们弄丢了，其实是他们把力气用完了，用最用力的那一段，把你推了上来。",
		"别怪那个离开的人，也别怪那个没能一直陪着谁的自责的自己。我们都是，某个人的第一级。",
		"你的\"第一级\"又是谁呢？"
	],
	reference: "参考：NASA Saturn V（S-IC 第一级满载约 2214 吨、燃烧约 168 秒；整箭起飞约 2900 吨）"
};
// src/data/credits.ts
var credits = [
	{
		name: "HJH",
		relation: "爸爸"
	},
	{
		name: "LL",
		relation: "妈妈"
	},
	{
		name: "HZY",
		relation: "弟弟"
	},
	{
		name: "LBR",
		relation: "外公"
	},
	{
		name: "WLZ",
		relation: "外婆"
	},
	{
		name: "HYZ",
		relation: "爷爷"
	},
	{
		name: "DGJ",
		relation: "奶奶"
	},
	{
		name: "HQS",
		relation: "大伯"
	},
	{
		name: "HHB",
		relation: "姑妈"
	},
	{
		name: "XW",
		relation: "姑爷"
	},
	{
		name: "HJ",
		relation: "堂姐"
	},
	{
		name: "XY",
		relation: "表姐"
	},
	{
		name: "ZSM",
		relation: "小学语文老师"
	},
	{
		name: "CSY",
		relation: "小学数学老师"
	},
	{
		name: "LLX",
		relation: "初中英语老师"
	},
	{
		name: "CGJ",
		relation: "高中语文老师"
	},
	{
		name: "XYH",
		relation: "高中生物老师"
	},
	{
		name: "DJC",
		relation: "高中化学老师"
	},
	{
		name: "XYF",
		relation: "导师"
	},
	{
		name: "LQ",
		relation: "导员"
	},
	{
		name: "LXR",
		relation: "导员"
	},
	{
		name: "LJ",
		relation: "老师"
	},
	{
		name: "STT",
		relation: "特别的人",
		feature: true
	}
];
// src/pages/relations.astro
var relations_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Relations,
	file: () => $$file,
	url: () => $$url
});
var $$Relations = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "致谢",
		"active": "relations",
		"description": "致谢一路同行的人，也留一句话给我。"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="credit-stage" id="stage" data-guide="relations"><canvas id="particle-canvas"></canvas><!-- 名字轨道：围绕头像公转 --><div class="name-orbit" id="name-orbit" aria-hidden="true">${credits.map((c) => renderTemplate`<div${addAttribute(`orbit-name ${c.feature ? "is-feature" : ""}`, "class")}><span class="on-name">${c.name}</span><span class="on-rel">${c.relation}</span></div>`)}</div><!-- 左右两栏：左头像，右引语 --><div class="credit-layout"><div class="credit-anchor"><div class="anchor-halo"></div><img class="anchor-avatar"${addAttribute(site.avatar, "src")}${addAttribute(site.name, "alt")}><div class="anchor-name">${site.name}</div><div class="anchor-tag">Where there is a will, there is a way.</div><!-- 留言：就在头像下面，提交后飘进背景星轨 -->${renderComponent($$result, "Guestbook", $$Guestbook, {})}</div><!-- 引语：整篇作为一个连续文字流逐字打出 --><div class="credit-copy"><div class="credit-flow" data-flow data-speed="28"></div><p class="credit-ref" data-type data-speed="18">${thanksQuote.reference}</p></div></div><template id="flow-source">${templateEnter($$result)}<p class="credit-lead">${thanksQuote.lead}</p>${thanksQuote.paragraphs.map((p) => renderTemplate`<p>${p}</p>`)}${templateExit($$result)}</template><div class="credit-scroll-hint">移动鼠标 · 看看谁在注视你 · 留言会飘进星轨</div></div>${renderScript($$result, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/pages/relations.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/pages/relations.astro", void 0);
var $$file = "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/pages/relations.astro";
var $$url = "/relations";
// \0virtual:astro:page:src/pages/relations@_@astro
var page = () => relations_exports;
export { page };
