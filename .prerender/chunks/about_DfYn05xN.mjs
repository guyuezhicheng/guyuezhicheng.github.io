import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { T as addAttribute, d as renderComponent, f as Fragment, v as renderTemplate, y as maybeRenderHead } from "./server_B46-sQ6m.mjs";
import { a as createComponent, n as $$Icon, t as $$BaseLayout } from "./BaseLayout_DY_FmqeT.mjs";
import { t as site } from "./site_CXkpeGzV.mjs";
import { t as resume } from "./resume_DiADfwsz.mjs";
import { i as projects, n as honors } from "./honors_Cl__7kuk.mjs";
import { r as posts } from "./posts_CoX731U0.mjs";
import { n as repos } from "./repos_CsnUSrpw.mjs";
// src/pages/about.astro
var about_exports = /* @__PURE__ */ __exportAll({
	default: () => $$About,
	file: () => $$file,
	url: () => $$url
});
var $$About = createComponent(($$result, $$props, $$slots) => {
	const techIcon = {
		Java: {
			id: "java",
			color: "#e76f00"
		},
		SpringBoot: {
			id: "spring",
			color: "#6db33f"
		},
		MySQL: {
			id: "mysql",
			color: "#4479a1"
		},
		Redis: {
			id: "redis",
			color: "#dc382d"
		},
		MongoDB: {
			id: "mongodb",
			color: "#47a248"
		},
		Vue3: {
			id: "vuejs",
			color: "#41b883"
		},
		JavaScript: {
			id: "javascript",
			color: "#c9a800"
		},
		"HTML + CSS": {
			id: "html5",
			color: "#e34f26"
		},
		Astro: {
			id: "astro",
			color: "#ff5d01"
		},
		Python: {
			id: "python",
			color: "#3776ab"
		},
		"C 语言": {
			id: "c",
			color: "#5a7fa8"
		},
		"C++": {
			id: "cplusplus",
			color: "#00599c"
		},
		ArkTS: {
			id: "typescript",
			color: "#3178c6"
		}
	};
	const contactList = [
		{
			icon: "mail",
			label: "邮箱",
			value: site.email,
			href: `mailto:${site.email}`
		},
		{
			icon: "phone",
			label: "电话",
			value: site.phone,
			href: `tel:${site.phone}`
		},
		{
			icon: "github",
			label: "GitHub",
			value: site.github,
			href: `https://github.com/${site.github}`
		},
		{
			icon: "juejin",
			label: "掘金",
			value: "技术文章",
			href: "https://juejin.cn/user/3146115124573648/posts"
		},
		{
			icon: "csdn",
			label: "CSDN",
			value: "同步归档",
			href: "https://blog.csdn.net/huge_cheng"
		},
		{
			icon: "huawei",
			label: "华为开发者",
			value: "社区文章",
			href: site.socials.find((s) => s.icon === "huawei").href
		}
	];
	const siteInfo = [
		{
			k: "文章",
			v: `${posts.length} 篇`
		},
		{
			k: "项目",
			v: `${projects.length} 个`
		},
		{
			k: "仓库",
			v: `${repos.length} 个`
		},
		{
			k: "荣誉",
			v: `${honors.length} 项`
		}
	];
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "关于",
		"active": "about",
		"description": "关于胡志成：教育背景、技术栈、实习与竞赛经历、联系方式。"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="wrap section"><div class="section-head"><div class="eyebrow">About</div><h1 class="section-title">关于我</h1></div><!-- 简介 + 头像 --><div class="about-block glass about-intro" data-guide="about-intro"><div class="portrait-wrap"><img class="portrait"${addAttribute(site.avatar, "src")}${addAttribute(`${site.name}的照片`, "alt")} loading="lazy"></div><div style="min-width:0"><p style="margin:0;font-size:1.05rem;line-height:1.8">${site.intro}</p><p style="margin:1rem 0 0;color:var(--text-soft)">${resume.education.school} · ${resume.education.period}</p><p style="margin:.4rem 0 0;color:var(--text-faint);font-size:.9rem">${resume.education.note}</p><div class="chips" style="margin-top:.9rem">${resume.education.extra.map((e) => renderTemplate`<span><strong style="color:var(--accent)">${e.label}</strong> ${e.value}</span>`)}<span><strong style="color:var(--accent)">绩点</strong> 3.83 · 核心课 91.38</span></div></div></div><!-- 技术栈：图标网格 --><div class="about-block glass" data-guide="about-skills"><h2>技术栈</h2>${resume.skills.map((s) => renderTemplate`<div class="skill-block"><div class="skill-group-title">${s.group}</div>${s.items.some((i) => techIcon[i]) ? renderTemplate`<div class="tech-grid">${s.items.map((i) => {
		const ic = techIcon[i];
		const short = /^[\x20-\x7e]/.test(i) ? i.replace(/\s/g, "").slice(0, 2) : i.slice(0, 1);
		return renderTemplate`<div class="tech-item"${addAttribute(i, "title")}>${ic ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<img${addAttribute(`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${ic.id}/${ic.id}-original.svg`, "src")}${addAttribute(i, "alt")} loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><span class="ti-fallback" style="display:none">${short}</span>` })}` : renderTemplate`<span class="ti-fallback" style="display:grid">${short}</span>`}<span>${i}</span></div>`;
	})}</div>` : renderTemplate`<div class="chips skill-chips">${s.items.map((i) => renderTemplate`<span>${i}</span>`)}</div>`}</div>`)}</div><!-- 证书 + 荣誉 --><div class="grid-2" data-guide="about-honors"><div class="about-block glass"><h2>证书</h2><ul class="list-clean icon-list">${resume.certificates.map((c) => renderTemplate`<li>${renderComponent($$result, "Icon", $$Icon, {
		"name": "medal",
		"size": 15
	})}<span>${c}</span></li>`)}</ul><h2 style="margin-top:1.4rem">荣誉</h2><ul class="list-clean icon-list">${resume.honors.map((h) => renderTemplate`<li>${renderComponent($$result, "Icon", $$Icon, {
		"name": "star",
		"size": 15
	})}<span>${h}</span></li>`)}</ul></div><div class="about-block glass"><h2>实习经历</h2>${resume.experience.map((e) => renderTemplate`<div class="exp-item"><div class="exp-head"><span>${e.org} · ${e.role}</span><span class="period">${e.period}</span></div><div class="exp-detail">${e.detail}</div><ul class="list-clean" style="margin-top:.5rem">${e.bullets.map((b) => renderTemplate`<li>${b}</li>`)}</ul></div>`)}<h2 style="margin-top:1.4rem">校园经历</h2>${resume.campus.map((c) => renderTemplate`<div class="exp-item"><div class="exp-head"><span>${c.org} · ${c.role}</span><span class="period">${c.period}</span></div><div class="exp-detail">${c.detail}</div></div>`)}</div></div><!-- 竞赛 + 自我评价 --><div class="grid-2"><div class="about-block glass"><h2>竞赛</h2>${resume.competitions.map((c) => renderTemplate`<div class="exp-item"><div class="exp-head"><span>${c.name}</span><span class="period">${c.date}</span></div><div class="exp-detail"><strong style="color:var(--accent)">${c.award}</strong> · ${c.role}</div></div>`)}</div><div class="about-block glass"><h2>自我评价</h2><p style="margin:0;color:var(--text-soft);font-size:.92rem;line-height:1.78">${resume.selfReview}</p><h2 style="margin-top:1.4rem">这个站点</h2><div class="site-info">${siteInfo.map((s) => renderTemplate`<div><strong>${s.v}</strong><span>${s.k}</span></div>`)}<div><strong data-days>—</strong><span>运行天数</span></div></div><p style="margin:.9rem 0 0;font-size:.84rem;color:var(--text-faint)">${site.built.stack} 手写，没有套主题模板 · 建站于 ${site.built.since} · 访问量见页脚</p></div></div><!-- 求学轨迹 --><div class="about-block glass" data-guide="about-journey"><h2>求学轨迹</h2><div class="journey">${resume.journey.map((j, i) => renderTemplate`<div class="journey-item"><div class="journey-stage">${j.stage}</div><div class="journey-school">${j.school}</div><div class="journey-years">${j.years}</div>${i < resume.journey.length - 1 && renderTemplate`<span class="journey-line"></span>`}</div>`)}</div></div><!-- 联系 --><div class="contact-box glass" data-guide="about-contact" id="contact"><h2 class="section-title" style="font-size:1.4rem">找我</h2><p>${resume.contactHint}</p><div class="contact-grid">${contactList.map((c) => renderTemplate`<a class="contact-item"${addAttribute(c.href, "href")}${addAttribute(c.href.startsWith("http") ? "_blank" : void 0, "target")} rel="noopener"><span class="ci-ico">${renderComponent($$result, "Icon", $$Icon, {
		"name": c.icon,
		"size": 20
	})}</span><strong>${c.label}</strong><span>${c.value}</span></a>`)}</div><div class="hero-actions" style="justify-content:center;margin-top:1.6rem"><a class="btn btn-primary" href="/relations/#guestbook">${renderComponent($$result, "Icon", $$Icon, {
		"name": "chat",
		"size": 16
	})}去留言板说两句</a><a class="btn btn-ghost" href="/resume/">${renderComponent($$result, "Icon", $$Icon, {
		"name": "book",
		"size": 16
	})}看简历</a></div></div></div>` })}`;
}, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/pages/about.astro", void 0);
var $$file = "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/pages/about.astro";
var $$url = "/about";
// \0virtual:astro:page:src/pages/about@_@astro
var page = () => about_exports;
export { page };
