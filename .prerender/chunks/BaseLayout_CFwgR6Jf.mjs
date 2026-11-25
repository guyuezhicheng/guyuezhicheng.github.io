import { D as unescapeHTML, T as addAttribute, b as renderHead, d as renderComponent, h as renderSlot, v as renderTemplate, x as createRenderInstruction, y as maybeRenderHead } from "./server_B46-sQ6m.mjs";
import { Z as AstroError, _ as InvalidComponentArgs, q as UnavailableAstroGlobal } from "./errors-data_DG2Whzs4.mjs";
import { t as site } from "./site_CXkpeGzV.mjs";
import { n as notePosts, o as techPosts } from "./posts_CoX731U0.mjs";
import { i as projects, n as honors } from "./honors_Cl__7kuk.mjs";
// node_modules/@astrojs/runtime/dist/internal/server/astro-component.js
function validateArgs(args) {
	if (args.length !== 3) return false;
	if (!args[0] || typeof args[0] !== "object") return false;
	return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
	const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
	const fn = (...args) => {
		if (!validateArgs(args)) throw new AstroError({
			...InvalidComponentArgs,
			message: InvalidComponentArgs.message(name)
		});
		return cb(...args);
	};
	Object.defineProperty(fn, "name", {
		value: name,
		writable: false
	});
	fn.isAstroComponentFactory = true;
	fn.moduleId = moduleId;
	fn.propagation = propagation;
	return fn;
}
function createComponentWithOptions(opts) {
	return baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
}
function createComponent(arg1, moduleId, propagation) {
	if (typeof arg1 === "function") return baseCreateComponent(arg1, moduleId, propagation);
	else return createComponentWithOptions(arg1);
}
// node_modules/@astrojs/runtime/dist/internal/server/astro-global.js
var ASTRO_GENERATOR = `Astro v7.4.13`;
function createError(name) {
	return new AstroError({
		...UnavailableAstroGlobal,
		message: UnavailableAstroGlobal.message(name)
	});
}
function createAstro(site) {
	return {
		get site() {
			console.warn(`Astro.site inside getStaticPaths is deprecated and will be removed in a future major version of Astro. Use import.meta.env.SITE instead`);
			return site ? new URL(site) : void 0;
		},
		get generator() {
			console.warn(`Astro.generator inside getStaticPaths is deprecated and will be removed in a future major version of Astro.`);
			return ASTRO_GENERATOR;
		},
		get callAction() {
			throw createError("callAction");
		},
		get clientAddress() {
			throw createError("clientAddress");
		},
		get cookies() {
			throw createError("cookies");
		},
		get csp() {
			throw createError("csp");
		},
		get currentLocale() {
			throw createError("currentLocale");
		},
		get getActionResult() {
			throw createError("getActionResult");
		},
		get isPrerendered() {
			throw createError("isPrerendered");
		},
		get locals() {
			throw createError("locals");
		},
		get originPathname() {
			throw createError("originPathname");
		},
		get params() {
			throw createError("params");
		},
		get preferredLocale() {
			throw createError("preferredLocale");
		},
		get preferredLocaleList() {
			throw createError("preferredLocaleList");
		},
		get props() {
			throw createError("props");
		},
		get redirect() {
			throw createError("redirect");
		},
		get request() {
			throw createError("request");
		},
		get response() {
			throw createError("response");
		},
		get rewrite() {
			throw createError("rewrite");
		},
		get routePattern() {
			throw createError("routePattern");
		},
		get self() {
			throw createError("self");
		},
		get slots() {
			throw createError("slots");
		},
		get url() {
			throw createError("url");
		},
		get session() {
			throw createError("session");
		},
		get cache() {
			throw createError("cache");
		},
		get logger() {
			throw createError("logger");
		}
	};
}
// node_modules/@astrojs/runtime/dist/internal/server/render/script.js
/**
* Relies on the `renderScript: true` compiler option
* @experimental
*/
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
var $$Icon = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Icon;
	const { name, size = 18, class: cls = "", label } = Astro.props;
	const strokeIcons = {
		"arrow-left": "<path d=\"M19 12H5M11 18l-6-6 6-6\"/>",
		"arrow-right": "<path d=\"M5 12h14M13 6l6 6-6 6\"/>",
		"arrow-down": "<path d=\"M12 4v14M6 13l6 6 6-6\"/>",
		"arrow-up-right": "<path d=\"M7 17 17 7M8 7h9v9\"/>",
		mail: "<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2.5\"/><path d=\"m3.5 7 8.5 6 8.5-6\"/>",
		phone: "<path d=\"M6.5 3h3l1.5 4.5-2 1.5a12 12 0 0 0 6 6l1.5-2 4.5 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3z\"/>",
		search: "<circle cx=\"11\" cy=\"11\" r=\"7\"/><path d=\"m16.5 16.5 4 4\"/>",
		close: "<path d=\"M6 6l12 12M18 6 6 18\"/>",
		copy: "<rect x=\"9\" y=\"9\" width=\"12\" height=\"12\" rx=\"2.5\"/><path d=\"M15 5.5A2.5 2.5 0 0 0 12.5 3H5.5A2.5 2.5 0 0 0 3 5.5v7A2.5 2.5 0 0 0 5.5 15\"/>",
		check: "<path d=\"m4 12.5 5 5L20 6.5\"/>",
		medal: "<circle cx=\"12\" cy=\"9\" r=\"5.5\"/><path d=\"M8.5 13.5 7 21l5-2.5L17 21l-1.5-7.5\"/>",
		book: "<path d=\"M4 4.5A1.5 1.5 0 0 1 5.5 3H19v15H6.5A1.5 1.5 0 0 0 5 19.5z\"/><path d=\"M5 19.5A1.5 1.5 0 0 1 6.5 18H19v3H6.5A1.5 1.5 0 0 1 5 19.5z\"/>",
		code: "<path d=\"m9 8-4 4 4 4M15 8l4 4-4 4\"/>",
		folder: "<path d=\"M3 7.5A2 2 0 0 1 5 5.5h3.5l2 2H19a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/>",
		star: "<path d=\"m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.8z\"/>",
		calendar: "<rect x=\"3.5\" y=\"5\" width=\"17\" height=\"16\" rx=\"2.5\"/><path d=\"M3.5 10h17M8 3v4M16 3v4\"/>",
		"map-pin": "<path d=\"M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z\"/><circle cx=\"12\" cy=\"10\" r=\"2.6\"/>",
		id: "<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2.5\"/><circle cx=\"9\" cy=\"11\" r=\"2.2\"/><path d=\"M5.8 16.5c.5-1.6 1.7-2.4 3.2-2.4s2.7.8 3.2 2.4M15 10h4M15 13.5h3\"/>",
		briefcase: "<rect x=\"3\" y=\"7.5\" width=\"18\" height=\"12\" rx=\"2.5\"/><path d=\"M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3 12.5h18\"/>",
		users: "<circle cx=\"9\" cy=\"8.5\" r=\"3.2\"/><path d=\"M3.5 19.5c.6-3 2.8-4.6 5.5-4.6s4.9 1.6 5.5 4.6\"/><path d=\"M16 5.6a3 3 0 0 1 0 5.8M17 14.8c2 .5 3.2 1.9 3.5 4.2\"/>",
		chat: "<path d=\"M20 12.5a7.5 7.5 0 0 1-11 6.7L4 20.5l1.3-4.2A7.5 7.5 0 1 1 20 12.5z\"/><path d=\"M9 11.5h6M9 14.5h4\"/>",
		sparkle: "<path d=\"M12 3.5 13.6 9 19 10.5 13.6 12 12 17.5 10.4 12 5 10.5 10.4 9z\"/><path d=\"M18 15.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z\"/>",
		rss: "<path d=\"M5 19h.01\"/><path d=\"M5 12.5A6.5 6.5 0 0 1 11.5 19\"/><path d=\"M5 6a13 13 0 0 1 13 13\"/>",
		sun: "<circle cx=\"12\" cy=\"12\" r=\"4.2\"/><path d=\"M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8 6 18M18 6l1.8-1.8\"/>",
		menu: "<path d=\"M4 7h16M4 12h16M4 17h16\"/>",
		chart: "<path d=\"M4 20V10M10 20V4M16 20v-7M21 20H3\"/>",
		heart: "<path d=\"M12 20.3S4.5 15.6 4.5 10.4A4.4 4.4 0 0 1 12 7.1a4.4 4.4 0 0 1 7.5 3.3c0 5.2-7.5 9.9-7.5 9.9z\"/>",
		camera: "<rect x=\"3\" y=\"7.5\" width=\"18\" height=\"12.5\" rx=\"2.5\"/><circle cx=\"12\" cy=\"13.6\" r=\"3.2\"/><path d=\"M8.6 7.5 9.9 5h4.2l1.3 2.5\"/>",
		dumbbell: "<path d=\"M4.5 9v6M7.5 7v10M16.5 7v10M19.5 9v6M7.5 12h9\"/>",
		newspaper: "<rect x=\"3.5\" y=\"5\" width=\"17\" height=\"14\" rx=\"2\"/><path d=\"M7 9h6M7 12.5h10M7 16h10\"/>",
		robot: "<rect x=\"4\" y=\"8\" width=\"16\" height=\"11\" rx=\"3\"/><path d=\"M12 4.5V8M9 13h.01M15 13h.01M9.5 16.5h5\"/><circle cx=\"12\" cy=\"3.5\" r=\"1.2\"/>"
	};
	const brandIcons = {
		github: "<path d=\"M12 .6a11.4 11.4 0 0 0-3.6 22.2c.57.1.78-.25.78-.55v-2.1c-3.18.7-3.85-1.35-3.85-1.35-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.73-1.54-2.53-.29-5.2-1.27-5.2-5.64 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.13 1.17a10.8 10.8 0 0 1 5.7 0c2.17-1.48 3.12-1.17 3.12-1.17.61 1.57.23 2.73.11 3.02.74.8 1.18 1.82 1.18 3.07 0 4.38-2.67 5.34-5.22 5.63.41.36.78 1.06.78 2.13v3.16c0 .3.2.66.79.55A11.4 11.4 0 0 0 12 .6z\"/>",
		juejin: "<path d=\"m12 14.316 7.454-5.88-2.022-1.625L12 11.1l-.004.003-5.432-4.288-2.02 1.624 7.452 5.88Zm0-7.247 2.89-2.298L12 2.453l-.004-.005-2.884 2.318 2.884 2.3Zm0 11.266-.005.002-9.975-7.87L0 12.088l.194.156 11.803 9.308 7.463-5.885L24 12.085l-2.023-1.624Z\"/>",
		csdn: "<path d=\"M4.693 13.638c-.497.568-1.363.63-1.712.63-.648 0-1.144-.164-1.474-.488-.313-.307-.478-.76-.489-1.346-.025-1.358.744-2.762 2.074-2.762.635 0 1.124.455 1.311.644a.337.337 0 0 0 .282.099.38.38 0 0 0 .241-.159c.068-.087.135-.237.138-.401s-.057-.344-.243-.49a2.642 2.642 0 0 0-1.668-.591c-.819 0-1.627.376-2.218 1.033-.621.691-.953 1.63-.935 2.646.015.815.282 1.5.773 1.982.528.518 1.3.791 2.235.791 1.097 0 1.776-.325 2.154-.597a.584.584 0 0 0 .24-.456.702.702 0 0 0-.208-.497c-.23-.248-.448-.101-.503-.037ZM9.663 11.488a7.471 7.471 0 0 0-.698-.248c-.157-.048-.309-.091-.45-.131-.922-.26-1.027-.5-1.017-.68.022-.363.515-.853 1.352-.792.607.045 1.015.509 1.205.781.149.214.371.135.434.095a.602.602 0 0 0 .309-.514.626.626 0 0 0-.209-.488 2.654 2.654 0 0 0-3.347-.273c-.456.323-.744.772-.77 1.202-.064 1.061 1.015 1.366 1.803 1.588.214.061.429.127.667.202 1.14.357 1.173.717 1.092 1.267-.082.556-.696.834-1.685.761-1.029-.076-1.464-.61-1.612-.901-.05-.098-.205-.248-.413-.156-.514.229-.473.731-.26.993.339.416 1.15 1.035 2.667 1.035 1.734 0 2.255-.875 2.378-1.64.092-.572-.022-1.028-.348-1.396-.236-.267-.592-.495-1.101-.706ZM16.44 9.323c-.598-.431-1.393-.61-2.36-.532-.712.058-1.274.243-1.335.263l-.006.002a.437.437 0 0 0-.297.379l-.47 5.201a.337.337 0 0 0 .247.35l.072.02.066.018.086.021a7.914 7.914 0 0 0 1.64.183c.972 0 1.765-.23 2.36-.684.764-.583 1.141-1.5 1.118-2.725-.021-1.135-.398-1.974-1.121-2.495Zm-.662 4.461c-.836.639-2.09.562-2.677.481a.128.128 0 0 1-.109-.137l.397-4.248a.113.113 0 0 1 .086-.1c.999-.241 1.777-.168 2.312.218.189.137.348.331.471.568.176.339.277.765.286 1.234.017.916-.24 1.583-.765 1.984ZM23.967 10.41a1.92 1.92 0 0 0-.432-.919c-.399-.465-1.029-.689-1.848-.689-.734 0-1.372.228-1.947.799.007-.086.019-.159.018-.223s-.017-.116-.066-.163c-.048-.045-.077-.067-.127-.077-.05-.01-.122-.008-.256-.006a.587.587 0 0 0-.589.54s-.325 3.874-.428 5.165a.308.308 0 0 0 .073.228.36.36 0 0 0 .26.131h.387a.224.224 0 0 0 .226-.205l.273-2.929.014-.147a1.902 1.902 0 0 1 .082-.412c.014-.045.03-.092.047-.14.245-.694.803-1.72 1.971-1.694.84.018 1.449.455 1.385 1.114-.101 1.034-.266 3.1-.358 4.14-.019.209.182.273.252.273h.304a.442.442 0 0 0 .444-.404s.185-2.127.294-3.352l.048-.532a1.959 1.959 0 0 0-.026-.5Z\"/>",
		huawei: "<path d=\"M3.67 6.14S1.82 7.91 1.72 9.78v.35c.08 1.51 1.22 2.4 1.22 2.4 1.83 1.79 6.26 4.04 7.3 4.55 0 0 .06.03.1-.01l.02-.04v-.04C7.52 10.8 3.67 6.14 3.67 6.14zM9.65 18.6c-.02-.08-.1-.08-.1-.08l-7.38.26c.8 1.43 2.15 2.53 3.56 2.2.96-.25 3.16-1.78 3.88-2.3.06-.05.04-.09.04-.09zm.08-.78C6.49 15.63.21 12.28.21 12.28c-.15.46-.2.9-.21 1.3v.07c0 1.07.4 1.82.4 1.82.8 1.69 2.34 2.2 2.34 2.2.7.3 1.4.31 1.4.31.12.02 4.4 0 5.54 0 .05 0 .08-.05.08-.05v-.06c0-.03-.03-.05-.03-.05zM9.06 3.19a3.42 3.42 0 00-2.57 3.15v.41c.03.6.16 1.05.16 1.05.66 2.9 3.86 7.65 4.55 8.65.05.05.1.03.1.03a.1.1 0 00.06-.1c1.06-10.6-1.11-13.42-1.11-13.42-.32.02-1.19.23-1.19.23zm8.299 2.27s-.49-1.8-2.44-2.28c0 0-.57-.14-1.17-.22 0 0-2.18 2.81-1.12 13.43.01.07.06.08.06.08.07.03.1-.03.1-.03.72-1.03 3.9-5.76 4.55-8.64 0 0 .36-1.4.02-2.34zm-2.92 13.07s-.07 0-.09.05c0 0-.01.07.03.1.7.51 2.85 2 3.88 2.3 0 0 .16.05.43.06h.14c.69-.02 1.9-.37 3-2.26l-7.4-.25zm7.83-8.41c.14-2.06-1.94-3.97-1.94-3.98 0 0-3.85 4.66-6.67 10.8 0 0-.03.08.02.13l.04.01h.06c1.06-.53 5.46-2.77 7.28-4.54 0 0 1.15-.93 1.21-2.42zm1.52 2.14s-6.28 3.37-9.52 5.55c0 0-.05.04-.03.11 0 0 .03.06.07.06 1.16 0 5.56 0 5.67-.02 0 0 .57-.02 1.27-.29 0 0 1.56-.5 2.37-2.27 0 0 .73-1.45.17-3.14z\"/>",
		wechat: "<path d=\"M9.2 3C5.2 3 2 5.6 2 8.8c0 1.8 1 3.4 2.7 4.5l-.7 2.2 2.5-1.3c.8.2 1.6.3 2.4.3h.6a5.6 5.6 0 0 1-.2-1.5c0-3.1 3-5.6 6.7-5.6h.6C15.9 4.8 12.9 3 9.2 3zm-2.5 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z\"/><path d=\"M22 13.2c0-2.7-2.7-4.9-5.9-4.9s-5.9 2.2-5.9 4.9 2.7 4.9 5.9 4.9c.7 0 1.4-.1 2-.3l2.1 1.1-.6-1.8c1.5-.9 2.4-2.3 2.4-3.9zm-7.8-1.3a.85.85 0 1 1 0 1.7.85.85 0 0 1 0-1.7zm3.8 0a.85.85 0 1 1 0 1.7.85.85 0 0 1 0-1.7z\"/>"
	};
	const isBrand = name in brandIcons;
	const inner = isBrand ? brandIcons[name] : strokeIcons[name] ?? strokeIcons.star;
	return renderTemplate`${maybeRenderHead($$result)}<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24"${addAttribute(cls, "class")}${addAttribute(label ? void 0 : "true", "aria-hidden")}${addAttribute(label ? "img" : void 0, "role")}${addAttribute(label, "aria-label")}${addAttribute(isBrand ? "currentColor" : "none", "fill")}${addAttribute(isBrand ? "none" : "currentColor", "stroke")}${addAttribute(isBrand ? void 0 : 1.9, "stroke-width")} stroke-linecap="round" stroke-linejoin="round">${unescapeHTML(inner)}</svg>`;
}, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/components/Icon.astro", void 0);
// src/components/Search.astro
var $$Search = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<button class="search-btn" type="button" data-search-open aria-label="搜索站内内容" title="搜索（按 / 键）">${renderComponent($$result, "Icon", $$Icon, {
		"name": "search",
		"size": 15
	})}<span>搜索</span><kbd>/</kbd></button><div class="search-overlay" data-search-overlay role="dialog" aria-modal="true" aria-label="站内搜索"><div class="search-panel"><div class="search-input-row">${renderComponent($$result, "Icon", $$Icon, {
		"name": "search",
		"size": 17
	})}<input type="search" placeholder="搜文章、项目、荣誉、开源……" data-search-input autocomplete="off"><span class="esc">ESC</span></div><div class="search-results" data-search-results><div class="search-empty">输入关键词，文章、项目、荣誉一起搜</div></div></div></div>${renderScript($$result, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/components/Search.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/components/Search.astro", void 0);
var $$Nav = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Nav;
	const { active = "" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="nav-wrap"><nav class="nav glass wrap" aria-label="主导航"><a class="brand" href="/"><span class="brand-dot"></span><span>${site.name}</span></a><div class="nav-links" data-nav-links><span class="nav-pill" data-nav-pill aria-hidden="true"></span>${site.nav.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(active === item.href.replace(/\//g, "") ? "active" : "", "class")}>${item.label}</a>`)}</div><div class="nav-tools"><a class="icon-btn gh-btn"${addAttribute(`https://github.com/${site.github}`, "href")} target="_blank" rel="noopener" aria-label="GitHub" title="GitHub 源码">${renderComponent($$result, "Icon", $$Icon, {
		"name": "github",
		"size": 17
	})}</a>${renderComponent($$result, "Search", $$Search, {})}<button class="icon-btn" data-theme-toggle aria-label="切换明暗主题" title="切换明暗主题"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path></svg></button><button class="icon-btn menu-btn" data-menu-toggle aria-label="打开菜单"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"></path></svg></button></div></nav></div>`;
}, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/components/Nav.astro", void 0);
// src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	const postCount = techPosts.length + notePosts.length;
	const projectCount = projects.length;
	const honorCount = honors.length;
	const contactItems = [{
		icon: "phone",
		label: site.phone,
		value: site.phone,
		href: `tel:${site.phone}`,
		tip: "电话"
	}, {
		icon: "mail",
		label: site.email,
		value: site.email,
		href: `mailto:${site.email}`,
		tip: "邮箱"
	}];
	const iconSocials = site.socials.filter((s) => s.label !== "邮箱");
	return renderTemplate`${maybeRenderHead($$result)}<footer class="footer"><div class="wrap footer-inner"><div class="footer-brand"><div class="footer-name"><strong>${site.name}</strong> · ${site.tagline}</div><div class="footer-contact">${contactItems.map((c) => renderTemplate`<span class="fc-item"><a${addAttribute(c.href, "href")}${addAttribute(`${c.tip}：${c.value}`, "title")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": c.icon,
		"size": 15
	})}<span>${c.label}</span></a><button class="fc-copy" type="button"${addAttribute(c.value, "data-copy")}${addAttribute(c.tip, "data-copy-label")}${addAttribute(`复制${c.tip}`, "title")}${addAttribute(`复制${c.tip}`, "aria-label")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": "copy",
		"size": 13
	})}</button></span>`)}</div><div class="footer-meta">© ${year} ${site.nameEn} · Built with ${site.built.stack} · 建站于 ${site.built.since}</div><div class="footer-stats"><span>${postCount} 篇文章</span><span class="dot-sep"></span><span>${projectCount} 个项目</span><span class="dot-sep"></span><span>${honorCount} 项荣誉</span><span class="dot-sep"></span><span class="fv-live">访问 <b id="busuanzi_value_site_pv">—</b> 次</span><span class="dot-sep fv-live"></span><span class="fv-live">访客 <b id="busuanzi_value_site_uv">—</b> 人</span><span class="fv-local">访问统计上线后显示</span><span class="dot-sep"></span><span>已运行 <b data-days>—</b> 天</span></div></div><div class="footer-side"><div class="footer-social">${iconSocials.map((s) => renderTemplate`<a${addAttribute(s.href, "href")} target="_blank" rel="noopener"${addAttribute(s.label, "title")}${addAttribute(s.label, "aria-label")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": s.icon,
		"size": 17
	})}</a>`)}</div></div></div></footer>`;
}, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/components/Footer.astro", void 0);
// src/data/guide.ts
var guideLines = {
	"home-hero": [
		{
			text: "嗨，我是胡志成！欢迎来我的小站，接下来我带你逛逛～",
			emoji: "👋"
		},
		{
			text: "上面那句英文是我名字的由来：有志者，事竟成。",
			emoji: "✨"
		},
		{
			text: "我正找全栈或鸿蒙方向的实习，右边有我的联系方式哦。",
			emoji: "💼"
		}
	],
	"home-projects": [{
		text: "这几个是我拿得出手的项目，点卡片能看到我到底解决了什么问题。",
		emoji: "🛠️"
	}, {
		text: "小嘀嗒是我的毕设，鸿蒙端 + Vue 后台 + 小艺 Agent，三端打通。",
		emoji: "🐟"
	}],
	"home-writing": [{
		text: "这里放技术文章，都按栏目排好了，点进去能顺着系列读。",
		emoji: "📝"
	}],
	"home-now": [{
		text: "这一块会常更新，能看到我最近在忙什么。",
		emoji: "⏳"
	}],
	"projects": [
		{
			text: "我的项目都在这，按毕设、鸿蒙、全栈、竞赛分好了。",
			emoji: "📦"
		},
		{
			text: "每张卡片都写了「解决什么问题」和「做成什么样」，不是技术堆砌。",
			emoji: "🔍"
		},
		{
			text: "类番茄小说和类抖音是我在百里半做鸿蒙实习生时的项目，和简历里的实习经历对得上。",
			emoji: "💼"
		},
		{
			text: "音你猩动是第四届湖北省信创大赛鸿蒙赛道三等奖，灵犀博栈第十八届、獬豸第十九届计算机设计大赛——奖项名称都和奖状对上。",
			emoji: "🏅"
		}
	],
	"writing": [{
		text: "技术博客，鸿蒙踩坑录、毕设手记都在这，点标题看全文。",
		emoji: "📖"
	}, {
		text: "文章都是掘金首发的，个人站是大本营，平台只是分发。",
		emoji: "🔗"
	}],
	"notes": [{
		text: "这里是我从零开始学的东西，分专业提升和兴趣拓展两类。",
		emoji: "🌱"
	}, {
		text: "金融、心理、健身、摄影……纯好奇，没打算靠它吃饭，就是想试试。",
		emoji: "🎨"
	}],
	"honors": [{
		text: "22 项荣誉，点任意一张卡片能看原始证书 PDF。",
		emoji: "🏅"
	}, {
		text: "蓝桥杯省二、计算机设计大赛中南三等奖，还有鸿蒙高级认证。",
		emoji: "🎓"
	}],
	"now": [{
		text: "这页记的是我最近在忙什么，会不定期更新。",
		emoji: "📅"
	}, {
		text: "秋招、毕设、博客三线并行，累但挺充实。",
		emoji: "⚡"
	}],
	"about-intro": [{
		text: "这是我的自我介绍，技术栈、经历、证书都在下面。",
		emoji: "🙂"
	}, {
		text: "寝室里躺平不如找个班上——这是我的歪理，也是我的方法论。",
		emoji: "💡"
	}],
	"about-skills": [{
		text: "技术栈按领域分好了，Java 后端、鸿蒙、前端都有。",
		emoji: "🧰"
	}],
	"about-journey": [{
		text: "从博雅幼儿园一路走到武昌工学院，我跳了一级所以幼儿园读了两年。",
		emoji: "🚶"
	}],
	"about-contact": [{
		text: "想聊机会或技术，直接发邮件或打电话，我一般一天内回。",
		emoji: "📮"
	}],
	"relations": [{
		text: "这一页写的是「第一级」——火箭飞上天，最用力的是第一级。",
		emoji: "🚀"
	}, {
		text: "名单脱敏了，把鼠标移上去看看——关系会亮起来。",
		emoji: "✨"
	}]
};
// src/data/pets.ts
var lifeScenes = [
	{
		start: 6,
		end: 9,
		src: "/pets/A1.mp4",
		label: "早晨 · 喝杯咖啡",
		emoji: "☕"
	},
	{
		start: 9,
		end: 12,
		src: "/pets/A2.mp4",
		label: "上午 · 认真敲代码",
		emoji: "💻"
	},
	{
		start: 12,
		end: 14,
		src: "/pets/A3.mp4",
		label: "中午 · 干饭时间",
		emoji: "🍱"
	},
	{
		start: 14,
		end: 18,
		src: "/pets/A4.mp4",
		label: "下午 · 健身一下",
		emoji: "💪"
	},
	{
		start: 18,
		end: 22,
		src: "/pets/A5.mp4",
		label: "傍晚 · 出去拍照",
		emoji: "📷"
	},
	{
		start: 22,
		end: 6,
		src: "/pets/A6.mp4",
		label: "深夜 · 该休息啦",
		emoji: "😴"
	}
];
var qVideo = {
	idle: "/pets/B1.mp4",
	wave: "/pets/B2.mp4",
	talk: "/pets/B3.mp4",
	think: "/pets/B4.mp4",
	cheer: "/pets/B2.mp4"
};
var runVideo = {
	up: "/pets/R1.mp4",
	down: "/pets/R2.mp4",
	left: "/pets/R3.mp4",
	right: "/pets/R4.mp4"
};
var turnVideo = {
	up: "/pets/T1.mp4",
	down: "/pets/T2.mp4",
	left: "/pets/T3.mp4",
	right: "/pets/T4.mp4"
};
var heroActionVideo = {
	code: "/pets/A2.mp4",
	muscle: "/pets/A4.mp4",
	camera: "/pets/A5.mp4",
	trophy: "/pets/A2.mp4",
	think: "/pets/A1.mp4",
	cheer: "/pets/A5.mp4",
	wave: "/pets/A1.mp4",
	idle: ""
};
var zoneTopic = {
	"home-hero": "wave",
	"home-projects": "code",
	"home-writing": "code",
	"home-now": "muscle",
	"projects": "code",
	"writing": "code",
	"notes": "muscle",
	"honors": "trophy",
	"now": "camera",
	"about-intro": "think",
	"about-skills": "code",
	"about-journey": "think",
	"about-contact": "cheer",
	"relations": "cheer"
};
var keywordTopic = [
	{
		keywords: [
			"健身",
			"增肌",
			"减脂",
			"蜕变"
		],
		topic: "muscle"
	},
	{
		keywords: [
			"摄影",
			"相机",
			"镜头",
			"兴趣"
		],
		topic: "camera"
	},
	{
		keywords: [
			"项目",
			"代码",
			"SpringBoot",
			"ArkTS",
			"毕设",
			"小嘀嗒",
			"技术"
		],
		topic: "code"
	},
	{
		keywords: [
			"荣誉",
			"证书",
			"奖",
			"奖学金"
		],
		topic: "trophy"
	},
	{
		keywords: [
			"致谢",
			"感谢",
			"家人",
			"联系",
			"邮件"
		],
		topic: "cheer"
	}
];
// src/components/Guide.astro
var $$Guide = createComponent(($$result, $$props, $$slots) => {
	const scriptData = JSON.stringify({
		guideLines,
		lifeScenes,
		qVideo,
		runVideo,
		turnVideo,
		heroActionVideo,
		zoneTopic,
		keywordTopic
	});
	return renderTemplate`<script type="application/json" id="guide-data">${unescapeHTML(scriptData)}<\/script><!-- 全屏加载层：视频全部就绪前盖住页面，不显示静态首帧图 -->${maybeRenderHead($$result)}<div class="boot-screen" id="boot-screen" aria-live="polite" data-astro-cid-ufi5o43g><div class="boot-inner" data-astro-cid-ufi5o43g><span class="boot-ring" data-astro-cid-ufi5o43g></span><strong data-astro-cid-ufi5o43g>胡志成</strong><span class="boot-quote" data-astro-cid-ufi5o43g>给我一点时间，还你一片星空</span><div class="boot-track" data-astro-cid-ufi5o43g><span class="boot-fill" id="boot-fill" data-astro-cid-ufi5o43g></span></div><div class="boot-meta" data-astro-cid-ufi5o43g><span id="boot-stat" data-astro-cid-ufi5o43g>正在准备 0 / 0</span><span class="boot-dot" data-astro-cid-ufi5o43g>·</span><span id="boot-clock" data-astro-cid-ufi5o43g>已等待 00:00</span></div><span class="boot-note" data-astro-cid-ufi5o43g>网站部署在 GitHub，首次加载约需 6–8 分钟，稍等片刻</span><span class="boot-tip" data-astro-cid-ufi5o43g>Where there is a will, there is a way.</span></div></div><!-- 全站浮游光点：呼应致谢星图，鼠标靠近会点亮/聚拢 --><canvas class="fx-floaters" id="fx-floaters" aria-hidden="true" data-astro-cid-ufi5o43g></canvas><!-- 全局鼠标探照灯：纹理随鼠标点亮（深色=点亮暗纹，浅色=显出淡纹） --><div class="fx-pattern" id="fx-pattern" aria-hidden="true" data-astro-cid-ufi5o43g></div><div class="fx-spotlight" id="fx-spotlight" aria-hidden="true" data-astro-cid-ufi5o43g></div><!-- 解说气泡 --><div class="guide-bubble" id="guide-bubble" role="status" aria-live="polite" data-astro-cid-ufi5o43g><div class="bubble-emoji" id="bubble-emoji" data-astro-cid-ufi5o43g></div><div class="bubble-text" id="bubble-text" data-astro-cid-ufi5o43g></div><div class="bubble-tail" data-astro-cid-ufi5o43g></div></div><!-- 男主：右下角生活 / 配合主题做动作 --><div class="life-card" id="life-card" title="我在过我的一整天～" data-astro-cid-ufi5o43g><div class="life-frame" data-astro-cid-ufi5o43g><video class="life-video-src" id="life-video" autoplay loop muted playsinline preload="none" data-astro-cid-ufi5o43g></video><canvas class="life-canvas" id="life-canvas" aria-hidden="true" data-astro-cid-ufi5o43g></canvas></div><div class="life-tag" id="life-tag" data-astro-cid-ufi5o43g><span id="life-emoji" data-astro-cid-ufi5o43g>☕</span><span id="life-label" data-astro-cid-ufi5o43g>早晨 · 喝杯咖啡</span></div></div><!-- Q 版解说员：平时待男主旁，鼠标停留卡片时跑过去站着解说 --><div class="guide-pet" id="guide-pet" role="button" tabindex="0" aria-label="Q版解说员" title="把鼠标停在内容上，我跑过来讲给你听" data-astro-cid-ufi5o43g><div class="pet-lean" id="pet-lean" data-astro-cid-ufi5o43g><div class="pet-float" data-astro-cid-ufi5o43g><video class="pet-video-src" id="pet-video" autoplay loop muted playsinline preload="none" data-astro-cid-ufi5o43g></video><canvas class="pet-photo" id="pet-canvas" aria-label="Q版解说员" data-astro-cid-ufi5o43g></canvas></div></div></div>${renderScript($$result, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/components/Guide.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/components/Guide.astro", void 0);
// src/components/ShotViewer.astro
var $$ShotViewer = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="shot-viewer" data-shot-viewer role="dialog" aria-modal="true" aria-label="项目截图查看" hidden><button class="sv-back" type="button" data-shot-close><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M19 12H5M11 18l-6-6 6-6"></path></svg>返回项目</button><button class="sv-arrow sv-prev" type="button" data-shot-prev aria-label="上一张"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M15 18l-6-6 6-6"></path></svg></button><figure class="sv-stage"><img data-shot-img src="" alt="项目截图"><figcaption data-shot-count></figcaption></figure><button class="sv-arrow sv-next" type="button" data-shot-next aria-label="下一张"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 18l6-6-6-6"></path></svg></button></div>${renderScript($$result, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/components/ShotViewer.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/components/ShotViewer.astro", void 0);
var $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaseLayout;
	const { title, description = site.description, active = "" } = Astro.props;
	const fullTitle = title ? `${title} · ${site.name}` : site.title;
	const canonical = new URL(Astro.url.pathname, Astro.site ?? Astro.url).href;
	return renderTemplate`<html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${fullTitle}</title><meta name="description"${addAttribute(description, "content")}><meta name="keywords"${addAttribute(site.keywords.join(", "), "content")}><link rel="canonical"${addAttribute(canonical, "href")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:title"${addAttribute(fullTitle, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonical, "content")}><meta name="twitter:card" content="summary_large_image"><link rel="alternate" type="application/rss+xml"${addAttribute(`${site.name} 的文章`, "title")} href="/rss.xml"><script>
      // 在首帧前定好主题，避免闪白；支持 ?theme=dark 直接分享某个主题
      (function () {
        try {
          var q = new URLSearchParams(location.search).get('theme');
          if (q === 'dark' || q === 'light') localStorage.setItem('theme', q);
          var saved = localStorage.getItem('theme');
          var dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
          document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
        } catch (e) {}
      })();
    <\/script>${renderHead($$result)}</head><body${addAttribute(active || "home", "data-page")}>${renderComponent($$result, "Nav", $$Nav, { "active": active })}<main>${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "Footer", $$Footer, {})}${renderComponent($$result, "Guide", $$Guide, {})}${renderComponent($$result, "ShotViewer", $$ShotViewer, {})}<div class="toast" data-toast role="status" aria-live="polite"></div><!-- 访问统计：不蒜子，拿不到就保持 —，不影响页面 --><script async src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"><\/script>${renderScript($$result, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/layouts/BaseLayout.astro", void 0);
export { createComponent as a, createAstro as i, $$Icon as n, renderScript as r, $$BaseLayout as t };
