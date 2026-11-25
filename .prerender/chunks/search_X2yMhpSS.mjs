import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { r as posts } from "./posts_CoX731U0.mjs";
import { i as projects, n as honors } from "./honors_Cl__7kuk.mjs";
import { n as repos } from "./repos_CsnUSrpw.mjs";
// src/pages/api/search.json.ts
var search_json_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var GET = () => {
	const items = [
		...posts.map((p) => ({
			type: p.kind === "tech" ? "文章" : "蜕变",
			title: p.title,
			sub: p.summary,
			href: p.kind === "tech" ? `/posts/${p.slug}/` : "/notes/",
			keys: [
				p.title,
				p.summary,
				p.series ?? "",
				...p.tags
			].join(" ")
		})),
		...projects.map((p) => ({
			type: "项目",
			title: p.name,
			sub: p.summary,
			href: "/projects/",
			keys: [
				p.name,
				p.summary,
				p.problem,
				...p.stack,
				...p.highlights
			].join(" ")
		})),
		...honors.map((h) => ({
			type: "荣誉",
			title: h.title,
			sub: `${h.issuer} · ${h.date} · ${h.category}`,
			href: "/honors/",
			keys: [
				h.title,
				h.issuer,
				h.category,
				h.level
			].join(" ")
		})),
		...repos.map((r) => ({
			type: "开源",
			title: r.title,
			sub: r.desc,
			href: "/opensource/",
			keys: [
				r.title,
				r.name,
				r.desc,
				...r.stack,
				r.lang
			].join(" ")
		}))
	];
	return new Response(JSON.stringify(items), { headers: { "Content-Type": "application/json; charset=utf-8" } });
};
// \0virtual:astro:page:src/pages/api/search.json@_@ts
var page = () => search_json_exports;
export { page };
