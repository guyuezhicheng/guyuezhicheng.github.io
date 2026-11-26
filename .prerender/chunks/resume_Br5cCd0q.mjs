import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { T as addAttribute, d as renderComponent, v as renderTemplate, y as maybeRenderHead } from "./server_B46-sQ6m.mjs";
import { a as createComponent, n as $$Icon, t as $$BaseLayout } from "./BaseLayout_DY_FmqeT.mjs";
import { t as $$BackBar } from "./BackBar_BCc-svG8.mjs";
import { t as resume } from "./resume_DiADfwsz.mjs";
import { t as site } from "./site_CXkpeGzV.mjs";
// src/pages/resume.astro
var resume_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Resume,
	file: () => $$file,
	url: () => $$url
});
var $$Resume = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "简历",
		"active": "about",
		"description": "胡志成的简历：教育背景、技术栈、实习与竞赛经历。"
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "BackBar", $$BackBar, { "label": "返回" })}${maybeRenderHead($$result)}<div class="wrap section" data-guide="resume"><div class="section-head"><div class="eyebrow">Resume</div><h1 class="section-title">简历</h1><p class="section-sub">${resume.education.school} · ${resume.education.major} · ${site.availability.text}</p></div><div class="resume-bar glass"><div class="rb-text"><strong>PDF 版简历</strong><span>在线看排版和下载的是一致的，需要留档直接下。</span></div><div class="rb-actions"><a class="btn btn-primary"${addAttribute(site.availability.resumeUrl, "href")} download>${renderComponent($$result, "Icon", $$Icon, {
		"name": "arrow-down",
		"size": 15
	})}下载 PDF</a><a class="btn btn-ghost"${addAttribute(site.availability.resumeUrl, "href")} target="_blank" rel="noopener">${renderComponent($$result, "Icon", $$Icon, {
		"name": "arrow-up-right",
		"size": 15
	})}新窗口打开</a></div></div><div class="resume-frame glass"><iframe${addAttribute(`${site.availability.resumeUrl}#view=FitH`, "src")} title="简历 PDF"></iframe></div><p class="resume-tip">手机上如果 PDF 显示不全，直接点「新窗口打开」，或者回来<a href="/about/">看关于页</a>的文字版。</p></div>` })}`;
}, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/pages/resume.astro", void 0);
var $$file = "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/pages/resume.astro";
var $$url = "/resume";
// \0virtual:astro:page:src/pages/resume@_@astro
var page = () => resume_exports;
export { page };
