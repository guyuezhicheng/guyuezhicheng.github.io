import { T as addAttribute, d as renderComponent, v as renderTemplate, y as maybeRenderHead } from "./server_B46-sQ6m.mjs";
import { a as createComponent, i as createAstro, n as $$Icon } from "./BaseLayout_DY_FmqeT.mjs";
// src/components/BackBar.astro
createAstro("https://guyuezhicheng.github.io");
var $$BackBar = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BackBar;
	const { href = "/", label = "返回", fixed = false } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="wrap back-bar">${fixed ? renderTemplate`<a class="back-btn"${addAttribute(href, "href")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": "arrow-left",
		"size": 16
	})}<span>${label}</span></a>` : renderTemplate`<button class="back-btn" type="button" data-back${addAttribute(href, "data-fallback")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": "arrow-left",
		"size": 16
	})}<span>${label}</span></button>`}</div>`;
}, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/components/BackBar.astro", void 0);
export { $$BackBar as t };
