import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { T as addAttribute, d as renderComponent, v as renderTemplate, y as maybeRenderHead } from "./server_B46-sQ6m.mjs";
import { a as createComponent, i as createAstro, n as $$Icon, t as $$BaseLayout } from "./BaseLayout_CFwgR6Jf.mjs";
import { t as $$BackBar } from "./BackBar_DJBmRgJe.mjs";
import { n as honors } from "./honors_Cl__7kuk.mjs";
// src/pages/honors/[id].astro
var _id__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Id,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://guyuezhicheng.github.io");
function getStaticPaths() {
	return honors.map((h, i) => ({
		params: { id: (h.file.split("/").pop() || "").replace(/\.pdf$/i, "") },
		props: {
			honor: h,
			index: i
		}
	}));
}
var $$Id = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Id;
	function certId(file) {
		return (file.split("/").pop() || "").replace(/\.pdf$/i, "");
	}
	const { honor, index } = Astro.props;
	const prev = index > 0 ? honors[index - 1] : null;
	const next = index < honors.length - 1 ? honors[index + 1] : null;
	const prevId = prev ? certId(prev.file) : null;
	const nextId = next ? certId(next.file) : null;
	const levelClass = {
		"国家级": "lv-national",
		"省级": "lv-province",
		"校级": "lv-school",
		"院级": "lv-college",
		"认证": "lv-cert"
	};
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": honor.title,
		"active": "honors",
		"description": `${honor.issuer} · ${honor.date} · ${honor.category}`
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "BackBar", $$BackBar, {
		"href": "/honors/",
		"label": "返回荣誉"
	})}${maybeRenderHead($$result)}<div class="wrap section" data-guide="cert"><div class="cert-layout"><figure class="cert-figure glass"><img${addAttribute(honor.img, "src")}${addAttribute(`${honor.title} 证书`, "alt")}></figure><aside class="cert-info"><div class="cert-tags"><span${addAttribute(`honor-level ${levelClass[honor.level]}`, "class")}>${honor.level}</span><span class="cert-cat">${honor.category}</span></div><h1 class="cert-title">${honor.title}</h1><div class="cert-rows"><div><span>颁发机构</span><strong>${honor.issuer}</strong></div><div><span>获得时间</span><strong>${honor.date}</strong></div><div><span>证书编号</span><strong>${index + 1} / ${honors.length}</strong></div></div><div class="cert-actions"><a class="btn btn-primary"${addAttribute(honor.file, "href")} target="_blank" rel="noopener">${renderComponent($$result, "Icon", $$Icon, {
		"name": "arrow-up-right",
		"size": 15
	})}打开 PDF 原件</a><a class="btn btn-ghost" href="/honors/">${renderComponent($$result, "Icon", $$Icon, {
		"name": "arrow-left",
		"size": 15
	})}返回荣誉</a></div></aside></div><nav class="post-nav" style="margin-top:2rem">${prevId ? renderTemplate`<a class="post-nav-item"${addAttribute(`/honors/${prevId}/`, "href")}><span>上一张证书</span><strong>${prev.title}</strong></a>` : renderTemplate`<span class="post-nav-item is-empty"></span>`}${nextId && renderTemplate`<a class="post-nav-item is-next"${addAttribute(`/honors/${nextId}/`, "href")}><span>下一张证书</span><strong>${next.title}</strong></a>`}</nav></div>` })}`;
}, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/pages/honors/[id].astro", void 0);
var $$file = "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/pages/honors/[id].astro";
var $$url = "/honors/[id]";
// \0virtual:astro:page:src/pages/honors/[id]@_@astro
var page = () => _id__exports;
export { page };
