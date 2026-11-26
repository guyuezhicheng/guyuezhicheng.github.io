import { T as addAttribute, v as renderTemplate, y as maybeRenderHead } from "./server_B46-sQ6m.mjs";
import { a as createComponent, i as createAstro } from "./BaseLayout_DY_FmqeT.mjs";
import { t as hasContent } from "./posts_CoX731U0.mjs";
import { n as tracks } from "./notes_B53W47xy.mjs";
// src/components/PostCard.astro
createAstro("https://guyuezhicheng.github.io");
var $$PostCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PostCard;
	const { post } = Astro.props;
	const local = hasContent(post.slug);
	const trackSlug = post.kind === "note" ? tracks.find((t) => t.name === post.track)?.slug : void 0;
	const fallback = trackSlug ? `/notes/${trackSlug}/` : "/writing/";
	const href = local ? `/posts/${post.slug}/` : post.original?.url ?? fallback;
	const external = !local && !!post.original;
	return renderTemplate`${maybeRenderHead($$result)}<a class="post-card glass"${addAttribute(href, "href")}${addAttribute(external ? "_blank" : void 0, "target")}${addAttribute(external ? "noopener" : void 0, "rel")}>${post.cover && renderTemplate`<div class="post-thumb"><img${addAttribute(post.cover, "src")} alt="" loading="lazy"></div>`}<div class="post-date">${post.date}${external ? ` · 首发于 ${post.original.platform}` : local ? " · 站内全文" : post.kind === "note" ? " · 方向记录" : ""}</div><h3>${post.series ? `[${post.series}${post.seriesNo ? ` #${post.seriesNo}` : ""}] ` : ""}${post.title}</h3><p>${post.summary}</p><div class="post-foot">${post.series && renderTemplate`<span class="series-badge">${post.series}</span>`}${post.tags.map((t) => renderTemplate`<span>#${t}</span>`)}<span>· ${post.readMin} 分钟</span></div></a>`;
}, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/components/PostCard.astro", void 0);
export { $$PostCard as t };
