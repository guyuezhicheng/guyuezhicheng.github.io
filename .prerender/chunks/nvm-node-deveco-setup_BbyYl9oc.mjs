import { i as createComponent, n as maybeRenderHead, r as unescapeHTML, t as renderTemplate } from "./server_Cxecs7oA.mjs";
// src/content/posts/nvm-node-deveco-setup.md
var html = () => "<blockquote>\n<p>这份是原对话的整理版，顺手把几个会踩坑的说法改掉了。核实日期：2026-11-20。</p>\n</blockquote>\n<h2 id=\"零动手前先确认两件事\">零、动手前先确认两件事</h2>\n<ol>\n<li><strong>系统里装过独立 Node 吗？</strong> 装过就先去「设置 → 应用 → Node.js」卸掉。不卸的话系统 PATH 会跟 nvm 打架，nvm 装了也不生效。安装向导如果弹出 Adopt / Drop 选择：想干净重来选 Drop，想保留旧全局包选 Adopt。</li>\n<li><strong>系统版本</strong>：DevEco Code 要求 Windows 11 22H2 以上、x64。R9000P 满足。</li>\n</ol>\n<h2 id=\"一装-nvm-windows-201\">一、装 nvm-windows 2.0.1</h2>\n<ol>\n<li>下载 <code>nvm-2.0.1-x64-setup.exe</code>，来源：<code>github.com/nvm-windows/nvm/releases</code></li>\n<li><strong>普通用户双击运行，全程不要右键“以管理员身份运行”。</strong> 官方明确警告过：用管理员装会把 nvm 配到管理员账户下，你自己这个账户反而用不了。</li>\n<li>向导里 Node.js 存储路径建议填 <code>D:\\nvm\\nodejs</code>，纯英文、无空格。</li>\n<li>弹出权限提示（说这个 D 盘目录别的 Windows 用户也能写）：选第一项 <strong>Harden permissions for this path</strong>，UAC 弹窗点“是”。</li>\n<li>shim mode 那页：勾上 <strong>Auto-install missing versions</strong>；下面那个“安装前提示”保持不勾（本来就是灰的），你现在这个状态是对的。</li>\n<li>点 Finish。<strong>关掉所有终端，重新开一个新的。</strong></li>\n</ol>\n<p>验证：<code>nvm version</code> → 输出 <code>2.0.1</code>。</p>\n<h2 id=\"二装两个-node-版本\">二、装两个 Node 版本</h2>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"powershell\"><code><span class=\"line\"><span style=\"color:#6A737D\"># 国内镜像，下载快很多（v2 若提示未知命令，跑 nvm --help 查新写法）</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">nvm node_mirror https:</span><span style=\"color:#F97583\">//</span><span style=\"color:#79B8FF\">npmmirror.com</span><span style=\"color:#F97583\">/</span><span style=\"color:#E1E4E8\">mirrors</span><span style=\"color:#F97583\">/</span><span style=\"color:#E1E4E8\">node</span><span style=\"color:#F97583\">/</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">nvm npm_mirror https:</span><span style=\"color:#F97583\">//</span><span style=\"color:#79B8FF\">npmmirror.com</span><span style=\"color:#F97583\">/</span><span style=\"color:#E1E4E8\">mirrors</span><span style=\"color:#F97583\">/</span><span style=\"color:#E1E4E8\">npm</span><span style=\"color:#F97583\">/</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">nvm install </span><span style=\"color:#79B8FF\">26.13</span><span style=\"color:#E1E4E8\">.</span><span style=\"color:#79B8FF\">1</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">nvm install </span><span style=\"color:#79B8FF\">20.9</span><span style=\"color:#E1E4E8\">.</span><span style=\"color:#79B8FF\">0</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#6A737D\"># 设为新终端的默认版本</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">nvm alias </span><span style=\"color:#F97583\">default</span><span style=\"color:#79B8FF\"> 26.13</span><span style=\"color:#E1E4E8\">.</span><span style=\"color:#79B8FF\">1</span></span></code></pre>\n<p>验证：重开终端 <code>node -v</code> → <code>v26.13.1</code>。\r\n切换：<code>nvm use 20.9.0</code>（只对当前窗口生效，关掉就还原）。</p>\n<blockquote>\n<p>26.13.1 是 LTS（代号 Lithium，npm 11.20.0），当日常默认没问题。</p>\n</blockquote>\n<h2 id=\"三装-deveco-code\">三、装 DevEco Code</h2>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"powershell\"><code><span class=\"line\"><span style=\"color:#6A737D\"># 确认当前是 26.13.1</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">node </span><span style=\"color:#F97583\">-</span><span style=\"color:#E1E4E8\">v</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#6A737D\"># 装过旧的先卸（只卸包，不动历史数据）</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">npm uninstall </span><span style=\"color:#F97583\">-</span><span style=\"color:#E1E4E8\">g @deveco</span><span style=\"color:#F97583\">/</span><span style=\"color:#E1E4E8\">deveco</span><span style=\"color:#F97583\">-</span><span style=\"color:#E1E4E8\">code</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#6A737D\"># 装稳定版，慢的话加 --registry=https://registry.npmmirror.com</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">npm install </span><span style=\"color:#F97583\">-</span><span style=\"color:#E1E4E8\">g @deveco</span><span style=\"color:#F97583\">/</span><span style=\"color:#E1E4E8\">deveco</span><span style=\"color:#F97583\">-</span><span style=\"color:#E1E4E8\">code@stable</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">deveco </span><span style=\"color:#F97583\">--</span><span style=\"color:#E1E4E8\">version</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">deveco</span></span></code></pre>\n<p>首次启动按提示用华为账号登录，也可以单独跑 <code>deveco auth login</code>。免费模型通道是 GLM-5.1，用 <code>/models</code> 切换。</p>\n<p><strong>一个要注意的点</strong>：nvm-windows v2 的全局 npm 包是按 Node 版本隔离的。切到 20.9.0 后 <code>deveco</code> 命令可能就找不到了，得在那个版本下重装一次。日常一直用 26.13.1 就没这事。</p>\n<blockquote>\n<p>另外别随便跑 <code>deveco uninstall</code>——它会连本地运行时数据一起清，历史记录可能跟着没了。只卸 npm 包用上面那条 <code>npm uninstall</code> 就够。</p>\n</blockquote>\n<h2 id=\"四找回历史聊天记录\">四、找回历史聊天记录</h2>\n<p><strong>关键前提</strong>：会话是按项目目录隔离的。必须在<strong>原来那个项目目录下</strong>启动 deveco，才看得到当时的对话。在原目录之外启动，列表是空的。</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"powershell\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">cd 原来那个项目路径</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">deveco</span></span></code></pre>\n<p>进 TUI 后：</p>\n<ul>\n<li>输入 <code>/sessions</code>（别名 <code>/resume</code>、<code>/continue</code>），列出所有会话，选中就能接着聊</li>\n<li>快捷键：<code>Ctrl+X</code> 然后 <code>L</code></li>\n<li>想把当前对话导出存档：<code>/export</code>，导出成 Markdown</li>\n</ul>\n<p><strong>数据到底存在哪</strong>（原文给的路径是编的，别去找了）：</p>\n<ul>\n<li>配置目录：<code>%USERPROFILE%\\.config\\deveco\\</code></li>\n<li>会话数据底层：<code>%USERPROFILE%\\.local\\share\\opencode\\project\\</code>（不在项目里的在 <code>...\\global\\storage\\</code>）</li>\n</ul>\n<p>备份就复制这两个目录。恢复会话用 <code>/sessions</code> 最省事，不用手动改文件。</p>\n<h2 id=\"五原文的错误已在上面修正\">五、原文的错误（已在上面修正）</h2>\n<ol>\n<li><strong>“右键以管理员身份安装 nvm，能避免权限问题”</strong> —— 反了。官方明确禁止，会导致配置到管理员账户。</li>\n<li><strong>“切 Node 版本后不用重装 DevEco Code”</strong> —— 错。v2 全局包按版本隔离，切版本会丢。</li>\n<li><strong>“历史在 <code>~/.deveco/data.db</code> 和 <code>~/.deveco/ai/history/session_YYYYMMDD.json</code>”</strong> —— 这两个路径不存在，是 AI 编的。真正路径见第四节。</li>\n<li><strong>“Ctrl+P 打开菜单，再 Ctrl+X 然后 L”</strong> —— 说绕了。<code>/sessions</code> 的快捷键直接就是 <code>Ctrl+X</code> <code>L</code>；<code>Ctrl+P</code> 是命令面板。</li>\n<li><strong>没提“要在原项目目录启动才能看到历史会话”</strong> —— 这是找回记录的关键前提，漏了这步你会以为记录丢了。</li>\n<li><strong>没提“先卸载系统独立 Node”</strong> —— 不卸会 PATH 冲突，是 nvm 装完不生效的头号原因。</li>\n</ol>\n<h2 id=\"命令速查\">命令速查</h2>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"powershell\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">nvm version</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">nvm install </span><span style=\"color:#79B8FF\">26.13</span><span style=\"color:#E1E4E8\">.</span><span style=\"color:#79B8FF\">1</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">nvm install </span><span style=\"color:#79B8FF\">20.9</span><span style=\"color:#E1E4E8\">.</span><span style=\"color:#79B8FF\">0</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">nvm alias </span><span style=\"color:#F97583\">default</span><span style=\"color:#79B8FF\"> 26.13</span><span style=\"color:#E1E4E8\">.</span><span style=\"color:#79B8FF\">1</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">node </span><span style=\"color:#F97583\">-</span><span style=\"color:#E1E4E8\">v</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">npm install </span><span style=\"color:#F97583\">-</span><span style=\"color:#E1E4E8\">g @deveco</span><span style=\"color:#F97583\">/</span><span style=\"color:#E1E4E8\">deveco</span><span style=\"color:#F97583\">-</span><span style=\"color:#E1E4E8\">code@stable</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">deveco</span></span>\n<span class=\"line\"><span style=\"color:#6A737D\"># 在 TUI 内：</span></span>\n<span class=\"line\"><span style=\"color:#6A737D\"># /sessions    列出并切换历史会话</span></span>\n<span class=\"line\"><span style=\"color:#6A737D\"># /export      导出当前对话</span></span></code></pre>\n";
var frontmatter = {
	"title": "Windows 环境搭建：nvm-windows + 双版本 Node + DevEco Code",
	"date": "2026-11-20",
	"description": "装 nvm 之前要先卸独立 Node，权限选 Harden，shim mode 勾 Auto-install——按顺序走一遍，别踩重复安装的坑。",
	"tags": [
		"Windows",
		"nvm",
		"Node.js",
		"DevEco Code",
		"HarmonyOS"
	],
	"series": "开发环境搭建",
	"seriesNo": 2,
	"cover": "/posts/cover-deveco-setup.jpg",
	"readMin": 7
};
var file = "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/content/posts/nvm-node-deveco-setup.md";
var url = void 0;
function rawContent() {
	return "   \r\n                                                          \r\n                  \r\n                                                                                       \r\n                                                               \r\n                \r\n           \r\n                                      \r\n          \r\n   \r\n> 这份是原对话的整理版，顺手把几个会踩坑的说法改掉了。核实日期：2026-11-20。\r\n\r\n## 零、动手前先确认两件事\r\n\r\n1. **系统里装过独立 Node 吗？** 装过就先去「设置 → 应用 → Node.js」卸掉。不卸的话系统 PATH 会跟 nvm 打架，nvm 装了也不生效。安装向导如果弹出 Adopt / Drop 选择：想干净重来选 Drop，想保留旧全局包选 Adopt。\r\n2. **系统版本**：DevEco Code 要求 Windows 11 22H2 以上、x64。R9000P 满足。\r\n\r\n## 一、装 nvm-windows 2.0.1\r\n\r\n1. 下载 `nvm-2.0.1-x64-setup.exe`，来源：`github.com/nvm-windows/nvm/releases`\r\n2. **普通用户双击运行，全程不要右键\"以管理员身份运行\"。** 官方明确警告过：用管理员装会把 nvm 配到管理员账户下，你自己这个账户反而用不了。\r\n3. 向导里 Node.js 存储路径建议填 `D:\\nvm\\nodejs`，纯英文、无空格。\r\n4. 弹出权限提示（说这个 D 盘目录别的 Windows 用户也能写）：选第一项 **Harden permissions for this path**，UAC 弹窗点\"是\"。\r\n5. shim mode 那页：勾上 **Auto-install missing versions**；下面那个\"安装前提示\"保持不勾（本来就是灰的），你现在这个状态是对的。\r\n6. 点 Finish。**关掉所有终端，重新开一个新的。**\r\n\r\n验证：`nvm version` → 输出 `2.0.1`。\r\n\r\n## 二、装两个 Node 版本\r\n\r\n```powershell\r\n# 国内镜像，下载快很多（v2 若提示未知命令，跑 nvm --help 查新写法）\r\nnvm node_mirror https://npmmirror.com/mirrors/node/\r\nnvm npm_mirror https://npmmirror.com/mirrors/npm/\r\n\r\nnvm install 26.13.1\r\nnvm install 20.9.0\r\n\r\n# 设为新终端的默认版本\r\nnvm alias default 26.13.1\r\n```\r\n\r\n验证：重开终端 `node -v` → `v26.13.1`。\r\n切换：`nvm use 20.9.0`（只对当前窗口生效，关掉就还原）。\r\n\r\n> 26.13.1 是 LTS（代号 Lithium，npm 11.20.0），当日常默认没问题。\r\n\r\n## 三、装 DevEco Code\r\n\r\n```powershell\r\n# 确认当前是 26.13.1\r\nnode -v\r\n\r\n# 装过旧的先卸（只卸包，不动历史数据）\r\nnpm uninstall -g @deveco/deveco-code\r\n\r\n# 装稳定版，慢的话加 --registry=https://registry.npmmirror.com\r\nnpm install -g @deveco/deveco-code@stable\r\n\r\ndeveco --version\r\ndeveco\r\n```\r\n\r\n首次启动按提示用华为账号登录，也可以单独跑 `deveco auth login`。免费模型通道是 GLM-5.1，用 `/models` 切换。\r\n\r\n**一个要注意的点**：nvm-windows v2 的全局 npm 包是按 Node 版本隔离的。切到 20.9.0 后 `deveco` 命令可能就找不到了，得在那个版本下重装一次。日常一直用 26.13.1 就没这事。\r\n\r\n> 另外别随便跑 `deveco uninstall`——它会连本地运行时数据一起清，历史记录可能跟着没了。只卸 npm 包用上面那条 `npm uninstall` 就够。\r\n\r\n## 四、找回历史聊天记录\r\n\r\n**关键前提**：会话是按项目目录隔离的。必须在**原来那个项目目录下**启动 deveco，才看得到当时的对话。在原目录之外启动，列表是空的。\r\n\r\n```powershell\r\ncd 原来那个项目路径\r\ndeveco\r\n```\r\n\r\n进 TUI 后：\r\n\r\n- 输入 `/sessions`（别名 `/resume`、`/continue`），列出所有会话，选中就能接着聊\r\n- 快捷键：`Ctrl+X` 然后 `L`\r\n- 想把当前对话导出存档：`/export`，导出成 Markdown\r\n\r\n**数据到底存在哪**（原文给的路径是编的，别去找了）：\r\n\r\n- 配置目录：`%USERPROFILE%\\.config\\deveco\\`\r\n- 会话数据底层：`%USERPROFILE%\\.local\\share\\opencode\\project\\`（不在项目里的在 `...\\global\\storage\\`）\r\n\r\n备份就复制这两个目录。恢复会话用 `/sessions` 最省事，不用手动改文件。\r\n\r\n## 五、原文的错误（已在上面修正）\r\n\r\n1. **\"右键以管理员身份安装 nvm，能避免权限问题\"** —— 反了。官方明确禁止，会导致配置到管理员账户。\r\n2. **\"切 Node 版本后不用重装 DevEco Code\"** —— 错。v2 全局包按版本隔离，切版本会丢。\r\n3. **\"历史在 `~/.deveco/data.db` 和 `~/.deveco/ai/history/session_YYYYMMDD.json`\"** —— 这两个路径不存在，是 AI 编的。真正路径见第四节。\r\n4. **\"Ctrl+P 打开菜单，再 Ctrl+X 然后 L\"** —— 说绕了。`/sessions` 的快捷键直接就是 `Ctrl+X` `L`；`Ctrl+P` 是命令面板。\r\n5. **没提\"要在原项目目录启动才能看到历史会话\"** —— 这是找回记录的关键前提，漏了这步你会以为记录丢了。\r\n6. **没提\"先卸载系统独立 Node\"** —— 不卸会 PATH 冲突，是 nvm 装完不生效的头号原因。\r\n\r\n## 命令速查\r\n\r\n```powershell\r\nnvm version\r\nnvm install 26.13.1\r\nnvm install 20.9.0\r\nnvm alias default 26.13.1\r\nnode -v\r\n\r\nnpm install -g @deveco/deveco-code@stable\r\ndeveco\r\n# 在 TUI 内：\r\n# /sessions    列出并切换历史会话\r\n# /export      导出当前对话\r\n```\r\n";
}
async function compiledContent() {
	return await html();
}
function getHeadings() {
	return [
		{
			"depth": 2,
			"slug": "零动手前先确认两件事",
			"text": "零、动手前先确认两件事"
		},
		{
			"depth": 2,
			"slug": "一装-nvm-windows-201",
			"text": "一、装 nvm-windows 2.0.1"
		},
		{
			"depth": 2,
			"slug": "二装两个-node-版本",
			"text": "二、装两个 Node 版本"
		},
		{
			"depth": 2,
			"slug": "三装-deveco-code",
			"text": "三、装 DevEco Code"
		},
		{
			"depth": 2,
			"slug": "四找回历史聊天记录",
			"text": "四、找回历史聊天记录"
		},
		{
			"depth": 2,
			"slug": "五原文的错误已在上面修正",
			"text": "五、原文的错误（已在上面修正）"
		},
		{
			"depth": 2,
			"slug": "命令速查",
			"text": "命令速查"
		}
	];
}
var Content = createComponent((result, _props, slots) => {
	const { layout, ...content } = frontmatter;
	content.file = file;
	content.url = void 0;
	return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
});
export { Content, Content as default, compiledContent, file, frontmatter, getHeadings, rawContent, url };
