import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { T as addAttribute, d as renderComponent, v as renderTemplate, y as maybeRenderHead } from "./server_B46-sQ6m.mjs";
import { a as createComponent, n as $$Icon, t as $$BaseLayout } from "./BaseLayout_DY_FmqeT.mjs";
import { t as $$ProjectCard } from "./ProjectCard_Cyr6FkNx.mjs";
import { t as $$PostCard } from "./PostCard_FBPO5xXm.mjs";
import { t as $$RepoCard } from "./RepoCard_DxNToqex.mjs";
import { t as site } from "./site_CXkpeGzV.mjs";
import { i as projects } from "./honors_Cl__7kuk.mjs";
import { o as techPosts } from "./posts_CoX731U0.mjs";
import { t as now } from "./now_B1hIFUBm.mjs";
import { n as repos } from "./repos_CsnUSrpw.mjs";
// src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const featuredProjects = projects.filter((p) => p.featured);
	const featuredPosts = techPosts.filter((p) => p.featured).slice(0, 3);
	const featuredRepos = repos.slice(0, 2);
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "active": "" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="wrap"><!-- ===== 首屏 ===== --><section class="hero" data-guide="home-hero"><div class="hero-grid"><div>${site.availability.open && renderTemplate`<span class="status-pill"><span class="status-dot"></span>${site.availability.text}</span>`}<h1>你好，我是<span class="grad">${site.name}</span>。</h1><p class="hero-slogan">${site.tagline}</p><p class="tagline">全栈开发 · HarmonyOS 应用 · AI / Agent</p><p class="intro">${site.intro}</p><div class="hero-actions"><a class="btn btn-primary" href="/projects">看我的项目<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a><a class="btn btn-ghost" href="/resume/">看简历<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"></path></svg></a><a class="btn btn-ghost" href="/relations/#guestbook">给我留言${renderComponent($$result, "Icon", $$Icon, {
		"name": "chat",
		"size": 17
	})}</a></div><!-- 社交入口：放开源和博客的第一层 --><div class="social-row">${site.socials.map((s) => renderTemplate`<a${addAttribute(s.href, "href")} target="_blank" rel="noopener"${addAttribute(s.label, "title")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": s.icon,
		"size": 16
	})}<span>${s.label}</span></a>`)}<a href="/opensource">${renderComponent($$result, "Icon", $$Icon, {
		"name": "code",
		"size": 16
	})}<span>代码仓库</span></a></div></div><aside class="id-card glass"><div class="avatar-ring"><img class="avatar-photo"${addAttribute(site.avatar, "src")}${addAttribute(`${site.name}的头像`, "alt")}></div><div class="id-row"><span class="k">身份</span><span class="v">计算机专业大四</span></div><div class="id-row"><span class="k">坐标</span><span class="v">${site.location}</span></div><div class="id-row"><span class="k">现居</span><span class="v">武汉</span></div><div class="id-row"><span class="k">教育</span><span class="v">武昌工学院 · 计科 2302</span></div><div class="id-row"><span class="k">职务</span><span class="v">班长 · 外联部部长</span></div><div class="id-row"><span class="k">状态</span><span class="v">${site.availability.open ? "开放实习机会" : "暂不看机会"}</span></div><div class="id-row"><span class="k">方向</span><span class="v">全栈 · 鸿蒙 · Agent</span></div><div class="id-contact"><button class="ic-btn" type="button"${addAttribute(site.email, "data-copy")} data-copy-label="邮箱"><span class="k">邮箱</span><span class="v">${site.email}</span><span class="ic-tag">复制</span></button><button class="ic-btn" type="button"${addAttribute(site.phone, "data-copy")} data-copy-label="手机号"><span class="k">电话</span><span class="v">${site.phone}</span><span class="ic-tag">复制</span></button></div></aside></div></section><!-- ===== 精选项目 ===== --><section class="section" data-guide="home-projects"><div class="section-head"><div class="eyebrow">Selected work</div><h2 class="section-title">拿得出手的项目</h2><p class="section-sub">从毕设到练习项目，都是真动手写过的。</p></div><div class="grid-2">${featuredProjects.map((p) => renderTemplate`${renderComponent($$result, "ProjectCard", $$ProjectCard, { "project": p })}`)}</div><div style="margin-top:1.2rem"><a class="btn btn-ghost" href="/projects">全部项目 →</a></div></section><!-- ===== 开源仓库 ===== --><section class="section" data-guide="home-repos"><div class="section-head"><div class="eyebrow">Open source</div><h2 class="section-title">代码放在这</h2><p class="section-sub">公开仓库直接点进去看源码；私有仓库是比赛和毕设，面试时可以给你开权限。</p></div><div class="repo-grid">${featuredRepos.map((r) => renderTemplate`${renderComponent($$result, "RepoCard", $$RepoCard, { "repo": r })}`)}</div><div style="margin-top:1.2rem"><a class="btn btn-ghost" href="/opensource">全部仓库 →</a></div></section><!-- ===== 最新文章 ===== --><section class="section" data-guide="home-writing"><div class="section-head"><div class="eyebrow">Writing</div><h2 class="section-title">最近在写</h2><p class="section-sub">按栏目更新，个人站是大本营，平台负责分发。</p></div><div class="grid-3">${featuredPosts.map((p) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "post": p })}`)}</div><div style="margin-top:1.2rem"><a class="btn btn-ghost" href="/writing">全部文章 →</a></div></section><!-- ===== 此刻快照 ===== --><section class="section" data-guide="home-now"><div class="section-head"><div class="eyebrow">Now</div><h2 class="section-title">此刻在忙什么</h2></div><div class="glass" style="padding:1.4rem"><p style="margin:0 0 1rem;color:var(--text-soft)">${now.lead}</p><div class="grid-2">${now.items.slice(0, 4).map((it) => renderTemplate`<div class="now-item glass" style="margin:0"><div class="now-tag">${it.tag}</div><div class="now-text">${it.text}</div></div>`)}</div><div style="margin-top:1rem"><a class="btn btn-ghost" href="/now">看看时间线 →</a></div></div></section></div>` })}`;
}, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/pages/index.astro", void 0);
var $$file = "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/pages/index.astro";
// \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
export { page };
