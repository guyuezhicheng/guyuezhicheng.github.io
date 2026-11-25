import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { a as sortedPosts } from "./posts_CoX731U0.mjs";
import { t as site } from "./site_CXkpeGzV.mjs";
// src/pages/api/posts.json.ts
var posts_json_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var GET = () => {
	const body = JSON.stringify({
		site: site.name,
		domain: site.domain,
		updated: (/* @__PURE__ */ new Date()).toISOString(),
		count: sortedPosts.length,
		posts: sortedPosts.map((p) => ({
			slug: p.slug,
			title: p.title,
			date: p.date,
			series: p.series ?? null,
			seriesNo: p.seriesNo ?? null,
			summary: p.summary,
			tags: p.tags,
			readMin: p.readMin,
			url: p.original?.url ?? `https://${site.domain}/writing#${p.slug}`
		}))
	}, null, 2);
	return new Response(body, { headers: {
		"Content-Type": "application/json; charset=utf-8",
		"Cache-Control": "public, max-age=3600"
	} });
};
// \0virtual:astro:page:src/pages/api/posts.json@_@ts
var page = () => posts_json_exports;
export { page };
