import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { T as addAttribute, d as renderComponent, v as renderTemplate, y as maybeRenderHead } from "./server_B46-sQ6m.mjs";
import { a as createComponent, n as $$Icon, t as $$BaseLayout } from "./BaseLayout_CFwgR6Jf.mjs";
import { n as tracks } from "./notes_B53W47xy.mjs";
import { n as notePosts } from "./posts_CoX731U0.mjs";
// src/pages/notes.astro
var notes_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Notes,
	file: () => $$file,
	url: () => $$url
});
var $$Notes = createComponent(($$result, $$props, $$slots) => {
	const groups = [{
		key: "专业",
		label: "专业提升",
		hint: "和职业方向相关的持续投入"
	}, {
		key: "兴趣",
		label: "兴趣拓展",
		hint: "纯粹好奇，顺手记下来"
	}];
	const countOf = (name) => notePosts.filter((p) => p.track === name).length;
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "蜕变",
		"active": "notes",
		"description": "从零开始探索的方向：每个方向单独一页，这里只放入口。"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="wrap section" data-guide="notes"><div class="section-head"><div class="eyebrow">Notes</div><h1 class="section-title">蜕变</h1><p class="section-sub">这些是从零起步在学的方向，一个方向一页。这里只放入口，点进去看那个方向的全部记录。</p></div>${groups.map((g) => {
		const list = tracks.filter((t) => t.group === g.key);
		return list.length ? renderTemplate`<div class="series-group"><div class="series-label"><h2>${g.label}</h2><span class="group-hint">${g.hint}</span><span class="group-count">${list.length} 个方向</span></div><div class="track-entries">${list.map((t) => renderTemplate`<a class="track-entry glass"${addAttribute(`/notes/${t.slug}/`, "href")}><span${addAttribute(`te-ico dot-${t.color}`, "class")}>${renderComponent($$result, "Icon", $$Icon, {
			"name": t.icon,
			"size": 19
		})}</span><span class="te-body"><span class="te-title">${t.name}</span><span class="te-desc">${t.desc}</span><span class="te-meta">${countOf(t.name) > 0 ? `${countOf(t.name)} 篇` : "还没开讲"}<span class="dot-sep"></span>${t.cadence}</span></span>${renderComponent($$result, "Icon", $$Icon, {
			"name": "arrow-right",
			"size": 16
		})}</a>`)}</div></div>` : null;
	})}</div>` })}`;
}, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/pages/notes.astro", void 0);
var $$file = "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/pages/notes.astro";
var $$url = "/notes";
// \0virtual:astro:page:src/pages/notes@_@astro
var page = () => notes_exports;
export { page };
