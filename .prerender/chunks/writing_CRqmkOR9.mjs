import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { T as addAttribute, d as renderComponent, v as renderTemplate, y as maybeRenderHead } from "./server_B46-sQ6m.mjs";
import { a as createComponent, n as $$Icon, r as renderScript, t as $$BaseLayout } from "./BaseLayout_CFwgR6Jf.mjs";
import { t as $$PostCard } from "./PostCard_DQh6LqsC.mjs";
import { a as sortedPosts, i as seriesList, o as techPosts } from "./posts_CoX731U0.mjs";
// src/pages/writing.astro
var writing_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Writing,
	file: () => $$file,
	url: () => $$url
});
var $$Writing = createComponent(($$result, $$props, $$slots) => {
	const uncategorized = techPosts.filter((p) => !p.series);
	const latest = sortedPosts[0];
	const seriesCount = (s) => techPosts.filter((p) => p.series === s).length;
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "博客",
		"active": "writing",
		"description": "按栏目更新的技术文章：鸿蒙踩坑录、毕设手记、AI 笔记。"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="wrap section" data-guide="writing"><div class="section-head"><div class="eyebrow">Writing</div><h1 class="section-title">博客</h1><p class="section-sub">只放技术文章，做成栏目而不是散装教程，点开一篇就能顺着系列看下去。金融、心理等记录在「蜕变」栏。</p></div>${latest && renderTemplate`<a class="latest-strip glass"${addAttribute(`/posts/${latest.slug}/`, "href")}><span class="ls-badge">${renderComponent($$result, "Icon", $$Icon, {
		"name": "sparkle",
		"size": 13
	})} 最新</span><span class="ls-title">${latest.title}</span><span class="ls-date">${latest.date}</span>${renderComponent($$result, "Icon", $$Icon, {
		"name": "arrow-right",
		"size": 16
	})}</a>`}<div class="filter-bar" data-filter-bar><button class="filter-chip is-on" type="button" data-filter="all">全部<em>${techPosts.length}</em></button>${seriesList.map((s) => renderTemplate`<button class="filter-chip" type="button"${addAttribute(s, "data-filter")}>${s}<em>${seriesCount(s)}</em></button>`)}${uncategorized.length > 0 && renderTemplate`<button class="filter-chip" type="button" data-filter="其他">其他<em>${uncategorized.length}</em></button>`}</div>${seriesList.map((series) => {
		const list = techPosts.filter((p) => p.series === series).sort((a, b) => (a.seriesNo ?? 0) - (b.seriesNo ?? 0));
		return renderTemplate`<div class="series-group"${addAttribute(series, "data-series")}><div class="series-label"><h2>${series}</h2><span>${list.length} 篇</span></div><div class="grid-2">${list.map((p) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "post": p })}`)}</div></div>`;
	})}${uncategorized.length > 0 && renderTemplate`<div class="series-group" data-series="其他"><div class="series-label"><h2>其他</h2><span>${uncategorized.length} 篇</span></div><div class="grid-2">${uncategorized.map((p) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "post": p })}`)}</div></div>`}<p class="rss-hint">想追更新就别收藏网页了，<a href="/rss.xml" target="_blank" rel="noopener">订阅 RSS ${renderComponent($$result, "Icon", $$Icon, {
		"name": "rss",
		"size": 13
	})}</a>，更新自动推到阅读器。</p></div>${renderScript($$result, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/pages/writing.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/pages/writing.astro", void 0);
var $$file = "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/pages/writing.astro";
var $$url = "/writing";
// \0virtual:astro:page:src/pages/writing@_@astro
var page = () => writing_exports;
export { page };
