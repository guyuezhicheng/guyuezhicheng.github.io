import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { T as addAttribute, d as renderComponent, v as renderTemplate, y as maybeRenderHead } from "./server_B46-sQ6m.mjs";
import { a as createComponent, n as $$Icon, t as $$BaseLayout } from "./BaseLayout_CFwgR6Jf.mjs";
import { t as $$RepoCard } from "./RepoCard_BiqpgckN.mjs";
import { n as repos, t as publicRepos } from "./repos_CsnUSrpw.mjs";
import { t as site } from "./site_CXkpeGzV.mjs";
// src/pages/opensource.astro
var opensource_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Opensource,
	file: () => $$file,
	url: () => $$url
});
var $$Opensource = createComponent(($$result, $$props, $$slots) => {
	const privateRepos = repos.filter((r) => r.isPrivate);
	const privateCount = privateRepos.length;
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "开源",
		"active": "opensource",
		"description": "开源仓库与项目源码：公开的能直接看，私有的是比赛和毕设，面试可开权限。"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="wrap section" data-guide="opensource"><div class="section-head"><div class="eyebrow">Open source</div><h1 class="section-title">开源</h1><p class="section-sub">写过的代码基本都在 GitHub 上。公开的仓库点开就能读，私有的是比赛和毕设项目，面试时可以单独开权限。</p></div><div class="honor-stats" style="margin-bottom:1.8rem"><div class="stat glass"><strong>${repos.length}</strong><span>个仓库</span></div><div class="stat glass"><strong>${publicRepos.length}</strong><span>公开可读</span></div><div class="stat glass"><strong>${privateCount}</strong><span>私有仓库</span></div></div><div class="series-group"><div class="series-label"><h2>公开可读</h2><span class="group-hint">点开就能读源码</span><span class="group-count">${publicRepos.length} 个</span></div><div class="repo-grid">${publicRepos.map((r) => renderTemplate`${renderComponent($$result, "RepoCard", $$RepoCard, { "repo": r })}`)}</div></div><div class="series-group"><div class="series-label"><h2>私有仓库</h2><span class="group-hint">比赛、实习和毕设，面试时可开权限</span><span class="group-count">${privateCount} 个</span></div><div class="repo-grid">${privateRepos.map((r) => renderTemplate`${renderComponent($$result, "RepoCard", $$RepoCard, { "repo": r })}`)}</div></div><div class="about-block glass" style="margin-top:1.6rem;display:flex;align-items:center;gap:.9rem;flex-wrap:wrap">${renderComponent($$result, "Icon", $$Icon, {
		"name": "github",
		"size": 22
	})}<div style="flex:1;min-width:220px"><strong style="font-size:.95rem">GitHub 主页还有历史提交和 star</strong><p style="margin:.25rem 0 0;font-size:.84rem;color:var(--text-soft)">仓库列表是手工挑的，想看全部提交记录直接去主页。</p></div><a class="btn btn-primary"${addAttribute(`https://github.com/${site.github}`, "href")} target="_blank" rel="noopener">打开 GitHub${renderComponent($$result, "Icon", $$Icon, {
		"name": "arrow-up-right",
		"size": 15
	})}</a></div></div>` })}`;
}, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/pages/opensource.astro", void 0);
var $$file = "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/pages/opensource.astro";
var $$url = "/opensource";
// \0virtual:astro:page:src/pages/opensource@_@astro
var page = () => opensource_exports;
export { page };
