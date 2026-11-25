import { T as addAttribute, d as renderComponent, v as renderTemplate, y as maybeRenderHead } from "./server_B46-sQ6m.mjs";
import { a as createComponent, i as createAstro, n as $$Icon } from "./BaseLayout_CFwgR6Jf.mjs";
// src/components/RepoCard.astro
createAstro("https://guyuezhicheng.github.io");
var $$RepoCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$RepoCard;
	const { repo } = Astro.props;
	const Tag = repo.url ? "a" : "div";
	return renderTemplate`${renderComponent($$result, "Tag", Tag, {
		"class": "repo-card",
		"href": repo.url,
		"target": repo.url ? "_blank" : void 0,
		"rel": repo.url ? "noopener" : void 0
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="repo-head">${renderComponent($$result, "Icon", $$Icon, {
		"name": "github",
		"size": 16
	})}<span class="repo-name">${repo.title}</span><span${addAttribute(`repo-badge${repo.isPrivate ? " is-private" : ""}`, "class")}>${repo.isPrivate ? "私有" : "公开"}</span></div><p class="repo-desc">${repo.desc}</p><div class="repo-foot"><span class="repo-dot"></span><span>${repo.lang}</span><span class="dot-sep"></span><span>更新于 ${repo.updated}</span>${repo.url ? renderTemplate`<span class="repo-link"${addAttribute(repo.isPrivate ? "私有仓库，面试时可开权限" : void 0, "title")}>${repo.isPrivate ? "私有 · 可开权限" : "看源码"} ${renderComponent($$result, "Icon", $$Icon, {
		"name": "arrow-up-right",
		"size": 13
	})}</span>` : renderTemplate`<span class="repo-link" style="color:var(--text-faint)">暂未公开</span>`}</div>` })}`;
}, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/components/RepoCard.astro", void 0);
export { $$RepoCard as t };
