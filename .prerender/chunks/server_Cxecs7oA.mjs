import "@oslojs/encoding";
import "clsx";
import "piccolore";
// node_modules/@astrojs/runtime/dist/internal/core/errors/utils.js
function normalizeLF(code) {
	return code.replace(/\r\n|\r(?!\n)|\n/g, "\n");
}
// node_modules/@astrojs/runtime/dist/internal/core/errors/printer.js
/** Generate a code frame from string and an error location */
function codeFrame(src, loc) {
	if (!loc || loc.line === void 0 || loc.column === void 0) return "";
	const lines = normalizeLF(src).split("\n").map((ln) => ln.replace(/\t/g, "  "));
	const visibleLines = [];
	for (let n = -2; n <= 2; n++) if (lines[loc.line + n]) visibleLines.push(loc.line + n);
	let gutterWidth = 0;
	for (const lineNo of visibleLines) {
		let w = `> ${lineNo}`;
		if (w.length > gutterWidth) gutterWidth = w.length;
	}
	let output = "";
	for (const lineNo of visibleLines) {
		const isFocusedLine = lineNo === loc.line - 1;
		output += isFocusedLine ? "> " : "  ";
		output += `${lineNo + 1} | ${lines[lineNo]}\n`;
		if (isFocusedLine) output += `${Array.from({ length: gutterWidth }).join(" ")}  | ${Array.from({ length: loc.column }).join(" ")}^\n`;
	}
	return output;
}
// node_modules/@astrojs/runtime/dist/internal/core/errors/errors.js
var AstroError = class extends Error {
	loc;
	title;
	hint;
	frame;
	type = "AstroError";
	constructor(props, options) {
		const { name, title, message, stack, location, hint, frame } = props;
		super(message, options);
		this.title = title;
		this.name = name;
		if (message) this.message = message;
		this.stack = stack ? stack : this.stack;
		this.loc = location;
		this.hint = hint;
		this.frame = frame;
	}
	setLocation(location) {
		this.loc = location;
	}
	setName(name) {
		this.name = name;
	}
	setMessage(message) {
		this.message = message;
	}
	setHint(hint) {
		this.hint = hint;
	}
	setFrame(source, location) {
		this.frame = codeFrame(source, location);
	}
	static is(err) {
		return err?.type === "AstroError";
	}
};
// node_modules/@astrojs/runtime/dist/internal/core/errors/errors-data.js
/**
* @docs
* @message
* **Example error messages:**<br/>
* InvalidComponentArgs: Invalid arguments passed to `<MyAstroComponent>` component.
* @description
* Astro components cannot be rendered manually via a function call, such as `Component()` or `{items.map(Component)}`. Prefer the component syntax `<Component />` or `{items.map(item => <Component {...item} />)}`.
*/
var InvalidComponentArgs = {
	name: "InvalidComponentArgs",
	title: "Invalid component arguments.",
	message: (name) => `Invalid arguments passed to${name ? ` <${name}>` : ""} component.`,
	hint: "Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`."
};
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
// node_modules/@astrojs/runtime/dist/internal/server/util.js
function isPromise(value) {
	return typeof value === "object" && value !== null && typeof value.then === "function";
}
async function* streamAsyncIterator(stream) {
	const reader = stream.getReader();
	try {
		while (true) {
			const { done, value } = await reader.read();
			if (done) return;
			yield value;
		}
	} finally {
		reader.releaseLock();
	}
}
// node_modules/@astrojs/runtime/dist/internal/server/escape.js
var ESCAPABLE = /[&<>'"]/g;
function entityFor(code) {
	switch (code) {
		case 38: return "&amp;";
		case 60: return "&lt;";
		case 62: return "&gt;";
		case 39: return "&#39;";
		default: return "&quot;";
	}
}
function escapeHTML(value) {
	ESCAPABLE.lastIndex = 0;
	if (!ESCAPABLE.test(value)) return value;
	let output = "";
	let last = 0;
	do {
		const index = ESCAPABLE.lastIndex - 1;
		if (last !== index) output += value.slice(last, index);
		output += entityFor(value.charCodeAt(index));
		last = index + 1;
	} while (ESCAPABLE.test(value));
	return last === value.length ? output : output + value.slice(last);
}
var HTMLBytes = class extends Uint8Array {};
Object.defineProperty(HTMLBytes.prototype, Symbol.toStringTag, { get() {
	return "HTMLBytes";
} });
var htmlStringSymbol = Symbol.for("astro:html-string");
/**
* A "blessed" extension of String that tells Astro that the string
* has already been escaped. This helps prevent double-escaping of HTML.
*/
var HTMLString = class extends String {};
Object.defineProperty(HTMLString.prototype, htmlStringSymbol, { value: true });
/**
* markHTMLString marks a string as raw or "already escaped" by returning
* a `HTMLString` instance. This is meant for internal use, and should not
* be returned through any public JS API.
*/
var markHTMLString = (value) => {
	if (isHTMLString(value)) return value;
	if (typeof value === "string") return new HTMLString(value);
	return value;
};
function isHTMLString(value) {
	return typeof value === "object" && value !== null && value[htmlStringSymbol] === true;
}
function markHTMLBytes(bytes) {
	return new HTMLBytes(bytes);
}
function hasGetReader(obj) {
	return typeof obj.getReader === "function";
}
async function* unescapeChunksAsync(iterable) {
	if (hasGetReader(iterable)) for await (const chunk of streamAsyncIterator(iterable)) yield unescapeHTML(chunk);
	else for await (const chunk of iterable) yield unescapeHTML(chunk);
}
function* unescapeChunks(iterable) {
	for (const chunk of iterable) yield unescapeHTML(chunk);
}
function unescapeHTML(str) {
	if (!!str && typeof str === "object") {
		if (str instanceof Uint8Array) return markHTMLBytes(str);
		else if (str instanceof Response && str.body) {
			const body = str.body;
			return unescapeChunksAsync(body);
		} else if (typeof str.then === "function") return Promise.resolve(str).then((value) => {
			return unescapeHTML(value);
		});
		else if (str[Symbol.for("astro:slot-string")]) return str;
		else if (Symbol.iterator in str) return unescapeChunks(str);
		else if (Symbol.asyncIterator in str || hasGetReader(str)) return unescapeChunksAsync(str);
	}
	return markHTMLString(str);
}
// node_modules/@astrojs/runtime/dist/internal/server/render/util.js
var noop = () => {};
/**
* Renders into a buffer until `flush` is called (which
* flushes the buffer)
*/
var BufferedRenderer = class {
	chunks = [];
	renderPromise;
	destination;
	/**
	* Determines whether buffer has been flushed
	* to the final destination.
	*/
	flushed = false;
	constructor(destination, renderFunction) {
		this.destination = destination;
		this.renderPromise = renderFunction(this);
		if (isPromise(this.renderPromise)) Promise.resolve(this.renderPromise).catch(noop);
	}
	write(chunk) {
		if (this.flushed) this.destination.write(chunk);
		else this.chunks.push(chunk);
	}
	flush() {
		if (this.flushed) throw new Error("The render buffer has already been flushed.");
		this.flushed = true;
		for (const chunk of this.chunks) this.destination.write(chunk);
		return this.renderPromise;
	}
};
/**
* Executes the `bufferRenderFunction` to prerender it into a buffer destination, and return a promise
* with an object containing the `flush` function to flush the buffer to the final
* destination.
*
* @example
* ```ts
* // Render components in parallel ahead of time
* const finalRenders = [ComponentA, ComponentB].map((comp) => {
*   return createBufferedRenderer(finalDestination, async (bufferDestination) => {
*     await renderComponentToDestination(bufferDestination);
*   });
* });
* // Render array of components serially
* for (const finalRender of finalRenders) {
*   await finalRender.flush();
* }
* ```
*/
function createBufferedRenderer(destination, renderFunction) {
	return new BufferedRenderer(destination, renderFunction);
}
typeof process !== "undefined" && Object.prototype.toString.call(process);
typeof navigator !== "undefined" && navigator.userAgent;
// node_modules/@astrojs/runtime/dist/internal/server/render/instruction.js
var RenderInstructionSymbol = Symbol.for("astro:render");
function createRenderInstruction(instruction) {
	instruction[RenderInstructionSymbol] = true;
	return instruction;
}
function isRenderInstruction(chunk) {
	return chunk && typeof chunk === "object" && chunk[RenderInstructionSymbol];
}
Object.freeze(createRenderInstruction({ type: "head" }));
var MAYBE_HEAD_INSTRUCTION = Object.freeze(createRenderInstruction({ type: "maybe-head" }));
function maybeRenderHead() {
	return MAYBE_HEAD_INSTRUCTION;
}
new TextEncoder();
new TextDecoder();
// node_modules/@astrojs/runtime/dist/internal/server/render/server-islands-shared.js
var SERVER_ISLAND_START = "[if astro]>server-island-start<![endif]";
// node_modules/@astrojs/runtime/dist/internal/server/render/astro/render-template.js
var renderTemplateResultSym = Symbol.for("astro.renderTemplateResult");
var markedHtmlParts = /* @__PURE__ */ new WeakMap();
function markHtmlParts(htmlParts) {
	let marked = markedHtmlParts.get(htmlParts);
	if (marked === void 0) {
		marked = new Array(htmlParts.length);
		for (let i = 0; i < htmlParts.length; i++) marked[i] = htmlParts[i] ? markHTMLString(htmlParts[i]) : htmlParts[i];
		markedHtmlParts.set(htmlParts, marked);
	}
	return marked;
}
var RenderTemplateResult = class {
	[renderTemplateResultSym] = true;
	htmlParts;
	expressions;
	error;
	wrapped;
	constructor(htmlParts, expressions) {
		this.htmlParts = htmlParts;
		this.error = void 0;
		this.expressions = expressions;
	}
	catchExpressionError(index, expression) {
		if (this.wrapped?.has(index)) return expression;
		const wrapped = Promise.resolve(expression).catch((err) => {
			if (!this.error) {
				this.error = err;
				throw err;
			}
		});
		(this.wrapped ??= /* @__PURE__ */ new Set()).add(index);
		this.expressions[index] = wrapped;
		return wrapped;
	}
	render(destination) {
		const { expressions } = this;
		const htmlParts = markHtmlParts(this.htmlParts);
		for (let i = 0; i < htmlParts.length; i++) {
			const html = htmlParts[i];
			if (html) destination.write(html);
			if (i >= expressions.length) break;
			let exp = expressions[i];
			if (!(exp || exp === 0)) continue;
			if (isPromise(exp)) exp = this.catchExpressionError(i, exp);
			const result = renderChild(destination, exp);
			if (isPromise(result)) {
				const startIdx = i + 1;
				const remaining = expressions.length - startIdx;
				const flushers = new Array(remaining);
				for (let j = 0; j < remaining; j++) {
					let rExp = expressions[startIdx + j];
					if (isPromise(rExp)) rExp = this.catchExpressionError(startIdx + j, rExp);
					flushers[j] = createBufferedRenderer(destination, (bufferDestination) => {
						if (rExp || rExp === 0) return renderChild(bufferDestination, rExp);
					});
				}
				return result.then(() => {
					let k = 0;
					const iterate = () => {
						while (k < flushers.length) {
							const rHtml = htmlParts[startIdx + k];
							if (rHtml) destination.write(rHtml);
							const flushResult = flushers[k++].flush();
							if (isPromise(flushResult)) return flushResult.then(iterate);
						}
						const lastHtml = htmlParts[htmlParts.length - 1];
						if (lastHtml) destination.write(lastHtml);
					};
					return iterate();
				});
			}
		}
	}
};
function renderTemplate(htmlParts, ...expressions) {
	return new RenderTemplateResult(htmlParts, expressions);
}
// node_modules/@astrojs/runtime/dist/internal/server/render/slot.js
var slotString = Symbol.for("astro:slot-string");
var SlotString = class extends HTMLString {
	instructions;
	/**
	* The slot's content as an ordered stream. Unlike `instructions` (which holds
	* position-independent instructions like head/hydration content), scripts are
	* kept inline here so they render at their original position instead of being
	* hoisted to the start of the slot output.
	*/
	chunks;
	[slotString];
	constructor(content, instructions, chunks = []) {
		super(content);
		this.instructions = instructions;
		this.chunks = chunks;
		this[slotString] = true;
	}
};
markHTMLString(`async function replaceServerIsland(id, r) {
	let s = document.querySelector(\`script[data-island-id="\${id}"]\`);
	// If there's no matching script, or the request fails then return
	if (!s || !r || r.status !== 200 || r.headers.get('content-type')?.split(';')[0].trim() !== 'text/html') return;
	// Load the HTML before modifying the DOM in case of errors
	let html;
	try {
		html = await r.text();
	} catch {
		return;
	}
	// Remove any placeholder content before the island script
	while (s.previousSibling && s.previousSibling.nodeType !== 8 && s.previousSibling.data !== '${SERVER_ISLAND_START}')
		s.previousSibling.remove();
	s.previousSibling?.remove();
	// Insert the new HTML
	s.before(document.createRange().createContextualFragment(html));
	// Remove the script. Prior to v5.4.2, this was the trick to force rerun of scripts.  Keeping it to minimize change to the existing behavior.
	s.remove();
}`.split("\n").map((line) => line.trim()).filter((line) => line && !line.startsWith("//")).join(" "));
new TextEncoder();
new TextDecoder();
function isRenderInstance(obj) {
	return typeof obj === "object" && obj !== null && typeof obj.render === "function";
}
// node_modules/@astrojs/runtime/dist/internal/server/render/any.js
function renderChild(destination, child) {
	if (typeof child === "string") {
		destination.write(markHTMLString(escapeHTML(child)));
		return;
	}
	if (isRenderInstruction(child)) {
		destination.write(child);
		return;
	}
	if (isPromise(child)) return child.then((x) => renderChild(destination, x));
	if (isRenderInstance(child)) return child.render(destination);
	if (child instanceof SlotString) {
		destination.write(child);
		return;
	}
	if (isHTMLString(child)) {
		destination.write(child);
		return;
	}
	if (!child && child !== 0) return;
	if (Array.isArray(child)) return renderArray(destination, child);
	if (typeof child === "function") return renderChild(destination, child());
	if (ArrayBuffer.isView(child)) {
		destination.write(child);
		return;
	}
	if (typeof child === "object" && (Symbol.asyncIterator in child || Symbol.iterator in child)) {
		if (Symbol.asyncIterator in child) return renderAsyncIterable(destination, child);
		return renderIterable(destination, child);
	}
	destination.write(child);
}
function renderArray(destination, children) {
	for (let i = 0; i < children.length; i++) {
		const result = renderChild(destination, children[i]);
		if (isPromise(result)) {
			if (i + 1 >= children.length) return result;
			const remaining = children.length - i - 1;
			const flushers = new Array(remaining);
			for (let j = 0; j < remaining; j++) flushers[j] = createBufferedRenderer(destination, (bufferDestination) => {
				return renderChild(bufferDestination, children[i + 1 + j]);
			});
			return result.then(() => {
				let k = 0;
				const iterate = () => {
					while (k < flushers.length) {
						const flushResult = flushers[k++].flush();
						if (isPromise(flushResult)) return flushResult.then(iterate);
					}
				};
				return iterate();
			});
		}
	}
}
function renderIterable(destination, children) {
	const iterator = children[Symbol.iterator]();
	const iterate = () => {
		for (;;) {
			const { value, done } = iterator.next();
			if (done) break;
			const result = renderChild(destination, value);
			if (isPromise(result)) return result.then(iterate);
		}
	};
	return iterate();
}
async function renderAsyncIterable(destination, children) {
	for await (const value of children) await renderChild(destination, value);
}
Object.freeze(createRenderInstruction({ type: "template-enter" }));
Object.freeze(createRenderInstruction({ type: "template-exit" }));
"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".split("").reduce((v, c) => (v[c.charCodeAt(0)] = c, v), []);
"-0123456789_".split("").reduce((v, c) => (v[c.charCodeAt(0)] = c, v), []);
export { createComponent as i, maybeRenderHead as n, unescapeHTML as r, renderTemplate as t };
