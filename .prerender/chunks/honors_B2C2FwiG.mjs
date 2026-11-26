import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { T as addAttribute, d as renderComponent, v as renderTemplate, y as maybeRenderHead } from "./server_B46-sQ6m.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_DY_FmqeT.mjs";
import { n as honors, r as honorsOfGroup, t as honorGroups } from "./honors_Cl__7kuk.mjs";
// src/pages/honors.astro
var honors_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Honors,
	file: () => $$file,
	url: () => $$url
});
var $$Honors = createComponent(($$result, $$props, $$slots) => {
	const levelClass = {
		"国家级": "lv-national",
		"省级": "lv-province",
		"校级": "lv-school",
		"院级": "lv-college",
		"认证": "lv-cert"
	};
	const provinceUp = honors.filter((h) => h.level === "省级" || h.level === "国家级").length;
	const compCount = honors.filter((h) => h.category === "竞赛获奖").length;
	const scholarCount = honors.filter((h) => h.category === "奖学金" || h.category === "评优评先").length;
	const groups = honorGroups.map((g) => ({
		g,
		list: honorsOfGroup(g)
	})).filter((x) => x.list.length > 0);
	const certId = (file) => (file.split("/").pop() || "").replace(/\.pdf$/i, "");
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "荣誉",
		"active": "honors",
		"description": "按级别分类的竞赛奖项，以及奖学金、评优评先、专业认证与项目立项，共 {honors.length} 项，附原始证书。"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="wrap section" data-guide="honors"><div class="section-head"><div class="eyebrow">Honors</div><h1 class="section-title">荣誉</h1><p class="section-sub">按级别和类别分开列：竞赛分省级、校级、院级；奖学金与评优评先各算各的。共 ${honors.length} 项，点卡片看原始证书。</p></div><div class="honor-stats"><div class="stat glass"><strong>${honors.length}</strong><span>项荣誉</span></div><div class="stat glass"><strong>${provinceUp}</strong><span>省级及以上</span></div><div class="stat glass"><strong>${compCount}</strong><span>竞赛奖项</span></div><div class="stat glass"><strong>${scholarCount}</strong><span>奖学金与评优</span></div></div>${groups.map(({ g, list }) => renderTemplate`<div class="series-group"><div class="series-label"><h2>${g.label}</h2><span class="group-hint">${g.hint}</span><span class="group-count">${list.length} 项</span></div><div class="grid-3">${list.map((h) => renderTemplate`<a class="honor-card glass"${addAttribute(`/honors/${certId(h.file)}/`, "href")}><img class="honor-bg"${addAttribute(h.img, "src")} alt="" loading="lazy" aria-hidden="true"><div class="honor-top"><span${addAttribute(`honor-level ${levelClass[h.level]}`, "class")}>${h.level}</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"></path></svg></div><h3>${h.title}</h3><div class="honor-foot"><span>${h.issuer}</span><span class="dot-sep"></span><span>${h.date}</span></div></a>`)}</div></div>`)}</div>` })}`;
}, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/pages/honors.astro", void 0);
var $$file = "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/pages/honors.astro";
var $$url = "/honors";
// \0virtual:astro:page:src/pages/honors@_@astro
var page = () => honors_exports;
export { page };
