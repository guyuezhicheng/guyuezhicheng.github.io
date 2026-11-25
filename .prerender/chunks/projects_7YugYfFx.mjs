import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { d as renderComponent, v as renderTemplate, y as maybeRenderHead } from "./server_B46-sQ6m.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_CFwgR6Jf.mjs";
import { t as $$ProjectCard } from "./ProjectCard_CzbWQE6m.mjs";
import { i as projects } from "./honors_Cl__7kuk.mjs";
// src/pages/projects.astro
var projects_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Projects,
	file: () => $$file,
	url: () => $$url
});
var $$Projects = createComponent(($$result, $$props, $$slots) => {
	const groups = Array.from(new Set(projects.map((p) => p.category)));
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "项目",
		"active": "projects",
		"description": "做过的项目，从毕设到练习，每个都写清楚要解决什么、做成了什么。"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="wrap section" data-guide="projects"><div class="section-head"><div class="eyebrow">Projects</div><h1 class="section-title">项目</h1><p class="section-sub">不堆技术名词，先说解决什么问题，再说怎么做的。</p></div>${groups.map((g) => {
		const list = projects.filter((p) => p.category === g);
		return list.length ? renderTemplate`<div class="series-group"><div class="series-label"><h2>${g}</h2><span>${list.length} 个</span></div><div class="grid-2">${list.map((p) => renderTemplate`${renderComponent($$result, "ProjectCard", $$ProjectCard, { "project": p })}`)}</div></div>` : null;
	})}</div>` })}`;
}, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/pages/projects.astro", void 0);
var $$file = "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/pages/projects.astro";
var $$url = "/projects";
// \0virtual:astro:page:src/pages/projects@_@astro
var page = () => projects_exports;
export { page };
