import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { d as renderComponent, v as renderTemplate, y as maybeRenderHead } from "./server_B46-sQ6m.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_DY_FmqeT.mjs";
import { t as now } from "./now_B1hIFUBm.mjs";
// src/pages/now.astro
var now_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Now,
	file: () => $$file,
	url: () => $$url
});
var $$Now = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "此刻",
		"active": "now",
		"description": "现在正在做的事、在找的机会，以及留下足迹的时间线。"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="wrap section" data-guide="now"><div class="section-head"><div class="eyebrow">Now</div><h1 class="section-title">此刻</h1><p class="section-sub">最近更新于 ${now.updated}。这一页会常改，让站点像个活着的人。</p></div><p class="now-lead">${now.lead}</p><div style="margin-bottom:2.2rem">${now.items.map((it) => renderTemplate`<div class="now-item glass"><div class="now-tag">${it.tag}</div><div class="now-text">${it.text}</div></div>`)}</div><div class="section-head"><div class="eyebrow">Timeline</div><h2 class="section-title">足迹</h2><p class="section-sub">只记能对上证书和简历的事。</p></div><ul class="timeline">${now.timeline.map((t) => renderTemplate`<li><div class="tl-date">${t.date}</div><div class="tl-text">${t.text}</div></li>`)}</ul></div>` })}`;
}, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/pages/now.astro", void 0);
var $$file = "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/pages/now.astro";
var $$url = "/now";
// \0virtual:astro:page:src/pages/now@_@astro
var page = () => now_exports;
export { page };
