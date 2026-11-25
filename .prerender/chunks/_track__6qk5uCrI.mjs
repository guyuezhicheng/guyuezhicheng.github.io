import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { T as addAttribute, d as renderComponent, v as renderTemplate, y as maybeRenderHead } from "./server_B46-sQ6m.mjs";
import { a as createComponent, i as createAstro, n as $$Icon, t as $$BaseLayout } from "./BaseLayout_CFwgR6Jf.mjs";
import { t as $$BackBar } from "./BackBar_DJBmRgJe.mjs";
import { t as $$PostCard } from "./PostCard_DQh6LqsC.mjs";
import { n as tracks, t as trackBySlug } from "./notes_B53W47xy.mjs";
import { n as notePosts } from "./posts_CoX731U0.mjs";
// src/pages/notes/[track].astro
var _track__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Track,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://guyuezhicheng.github.io");
function getStaticPaths() {
	return tracks.map((t) => ({
		params: { track: t.slug },
		props: { track: t }
	}));
}
var $$Track = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Track;
	const { track } = Astro.props;
	const list = notePosts.filter((p) => p.track === track.name);
	const idx = tracks.findIndex((t) => t.slug === track.slug);
	const prev = idx > 0 ? tracks[idx - 1] : null;
	const next = idx < tracks.length - 1 ? tracks[idx + 1] : null;
	const exists = !!trackBySlug(track.slug);
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": track.name,
		"active": "notes",
		"description": `${track.name}：${track.desc}`
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "BackBar", $$BackBar, {
		"href": "/notes/",
		"label": "返回蜕变",
		"fixed": true
	})}${maybeRenderHead($$result)}<div class="wrap section" data-guide="track"><header class="track-hero glass"><span${addAttribute(`te-ico is-lg dot-${track.color}`, "class")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": track.icon,
		"size": 26
	})}</span><div class="th-body"><div class="th-kicker"><span>${track.group === "专业" ? "专业提升" : "兴趣拓展"}</span></div><h1 class="th-title">${track.name}</h1><p class="th-desc">${track.desc}</p><div class="th-meta"><span>${renderComponent($$result, "Icon", $$Icon, {
		"name": "book",
		"size": 14
	})} ${track.cadence}</span><span>${renderComponent($$result, "Icon", $$Icon, {
		"name": "folder",
		"size": 14
	})} ${list.length > 0 ? `${list.length} 篇记录` : "还没开讲"}</span></div></div></header>${exists && list.length > 0 ? renderTemplate`<div class="grid-2">${list.map((p) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "post": p })}`)}</div>` : renderTemplate`<div class="track-empty glass">${renderComponent($$result, "Icon", $$Icon, {
		"name": "book",
		"size": 22
	})}<p>这个方向还在准备，第一篇还没写。有内容了我再放上来。</p><a class="btn btn-ghost" href="/notes/">先看看别的方向</a></div>`}<nav class="track-nav">${prev ? renderTemplate`<a class="post-nav-item"${addAttribute(`/notes/${prev.slug}/`, "href")}><span>上一个方向</span><strong>${prev.name}</strong></a>` : renderTemplate`<span></span>`}${next && renderTemplate`<a class="post-nav-item is-next"${addAttribute(`/notes/${next.slug}/`, "href")}><span>下一个方向</span><strong>${next.name}</strong></a>`}</nav></div>` })}`;
}, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/pages/notes/[track].astro", void 0);
var $$file = "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/pages/notes/[track].astro";
var $$url = "/notes/[track]";
// \0virtual:astro:page:src/pages/notes/[track]@_@astro
var page = () => _track__exports;
export { page };
