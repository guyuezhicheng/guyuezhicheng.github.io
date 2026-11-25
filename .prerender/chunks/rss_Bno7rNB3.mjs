import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { a as sortedPosts } from "./posts_CoX731U0.mjs";
import { t as site } from "./site_CXkpeGzV.mjs";
// src/pages/rss.xml.ts
var rss_xml_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
var GET = () => {
	const base = `https://${site.domain}`;
	const items = sortedPosts.map((p) => {
		const link = p.original?.url ?? `${base}/writing#${p.slug}`;
		return `    <item>
      <title>${esc(p.title)}</title>
      <link>${esc(link)}</link>
      <guid isPermaLink="false">${base}/posts/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description>${esc(p.summary)}</description>
${p.tags.map((t) => `      <category>${esc(t)}</category>`).join("\n")}
    </item>`;
	}).join("\n");
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${esc(site.name)}的文章</title>
    <link>${base}</link>
    <description>${esc(site.description)}</description>
    <language>zh-CN</language>
    <lastBuildDate>${(/* @__PURE__ */ new Date()).toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/rss+xml; charset=utf-8",
		"Cache-Control": "public, max-age=3600"
	} });
};
// \0virtual:astro:page:src/pages/rss.xml@_@ts
var page = () => rss_xml_exports;
export { page };
