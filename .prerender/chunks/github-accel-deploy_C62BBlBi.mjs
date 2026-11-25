import { i as createComponent, n as maybeRenderHead, r as unescapeHTML, t as renderTemplate } from "./server_Cxecs7oA.mjs";
// src/content/posts/github-accel-deploy.md
var html = () => "<blockquote>\n<p>根据之前那份对话整理。原对话是 AI 生成的多轮问答，里面几处不准的地方已经改过来（版本号、官方地址、AtomGit 渠道），下面都是核对过的。</p>\n</blockquote>\n<hr>\n<h2 id=\"一毕设仓库怎么放\">一、毕设仓库怎么放</h2>\n<ol>\n<li>主仓库选 GitHub 或 Gitee 的免费私有仓库。能稳定访问 GitHub 就用 GitHub（以后当作品集展示更通用），网络不稳就用 Gitee。</li>\n<li>核心策略：<strong>一个主仓库日常开发，另一个只做镜像/最终归档</strong>。千万别两边都手动改代码，容易冲突、互相覆盖。</li>\n<li>推荐组合：GitHub 主 + Gitee 镜像。所有 commit / push 只在 GitHub 发生，Gitee 用仓库镜像功能自动拉取。</li>\n<li>想多平台发（AtomGit、GitCode 等）：毕设定稿后推一份当展示或参加活动就行，不要纳入日常同步，平白增加维护负担。</li>\n<li>带 Token 的私有仓库链接，不要走任何第三方公益镜像站，防止凭据泄露。</li>\n</ol>\n<hr>\n<h2 id=\"二github-访问加速按场景选工具\">二、GitHub 访问加速：按场景选工具</h2>\n<ol>\n<li><strong>clone / pull（拉代码、下 Release）</strong>\n<ul>\n<li>最快、零安装：镜像前缀 <code>gh-proxy.com</code>，在原地址前加一段：\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>https://gh-proxy.com/https://github.com/user/repo.git</span></span></code></pre>\n</li>\n<li>一次配置，以后照常用官方地址：\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>git config --global url.\"https://gh-proxy.com/https://github.com/\".insteadOf \"https://github.com/\"</span></span></code></pre>\n</li>\n</ul>\n</li>\n<li><strong>push（推代码）</strong>\n<ul>\n<li>必须直连或用本地工具，<strong>不要走公开镜像前缀</strong>，会把 Token 漏给第三方。</li>\n</ul>\n</li>\n<li><strong>本地加速工具对比</strong>\n<ul>\n<li>FastGithub：专注于 GitHub，推荐。</li>\n<li>Watt Toolkit：功能大而全，偏慢。</li>\n<li>Dev-Sidecar：轻量，比 Watt 快。</li>\n<li>FoxPath：绿色单文件，不改 hosts，退出自动还原。</li>\n</ul>\n</li>\n<li>别同时开两个会改系统代理的工具，容易冲突。</li>\n</ol>\n<hr>\n<h2 id=\"三fastgithub-下载安装重点\">三、FastGithub 下载安装（重点）</h2>\n<h3 id=\"31-下载地址只认这个\">3.1 下载地址（只认这个）</h3>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>https://github.com/creazyboyone/FastGithub/releases</span></span></code></pre>\n<ol>\n<li>原作者的 <code>dotnetcore/fastgithub</code> 已经删库，现在这个是目前留存最完整、还带 releases 的 fork。</li>\n<li><strong>最新版是 v2.1.5</strong>。网上说的 v2.3.0 没有可靠来源，别再到处找了。</li>\n<li>Gitee / AtomGit 上的都是第三方镜像：版本旧、无法确认包有没有被改动，不建议下。要从源码自己编译也行。</li>\n</ol>\n<h3 id=\"32-下哪个文件\">3.2 下哪个文件</h3>\n<table>\n<thead>\n<tr>\n<th>系统</th>\n<th>文件名</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Windows</td>\n<td><code>fastgithub-win-x64.zip</code>（带界面的 <code>FastGithub.UI.exe</code>）</td>\n</tr>\n<tr>\n<td>macOS</td>\n<td><code>fastgithub-osx-x64.tar.gz</code></td>\n</tr>\n<tr>\n<td>Linux</td>\n<td><code>fastgithub-linux-x64.tar.gz</code>（报错就换 <code>fastgithub-linux-x64-ok.tar.gz</code>）</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"33-怎么用windows\">3.3 怎么用（Windows）</h3>\n<ol>\n<li>下载并解压。</li>\n<li>双击 <code>FastGithub.UI.exe</code>，自动开始加速。</li>\n<li>首次运行会引导安装自签 CA 证书，选信任，否则加速不能完全生效。</li>\n<li>证书私钥在 <code>cacert</code> 文件夹，<strong>别外传</strong>。</li>\n</ol>\n<p>后台静默运行（可选）：管理员身份进目录，执行：</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>fastgithub.exe start     :: 安装并启动服务</span></span>\n<span class=\"line\"><span>fastgithub.exe stop      :: 卸载服务</span></span></code></pre>\n<h3 id=\"34-常用命令\">3.4 常用命令</h3>\n<ul>\n<li>git 报 <code>SSL certificate problem</code>：\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>git config --global http.sslverify false</span></span></code></pre>\n</li>\n<li>验证是否生效：浏览器能打开 github.com，<code>git clone</code> 明显变快。</li>\n</ul>\n<hr>\n<h2 id=\"四安全和合规\">四、安全和合规</h2>\n<ol>\n<li>只从上面那个 GitHub 地址下。网盘、QQ 群、第三方修改版一律不碰。</li>\n<li>这工具会装自签 CA、做本地代理，技术上能解密 HTTPS，所以来源必须干净。</li>\n<li>合规性：项目自己在 README 里声明——不翻墙、走正常国际出入口信道、不对流量做额外加密。是否使用自己判断，这里不做背书。</li>\n<li>退出工具后，确认系统代理和证书状态恢复正常。</li>\n</ol>\n<hr>\n<h2 id=\"五常见坑\">五、常见坑</h2>\n<ol>\n<li><strong>push 失败</strong>：检查是不是误走了镜像前缀；在 FastGithub 里勾选 Git 相关加速项。</li>\n<li><strong>Watt Toolkit 太慢</strong>：换 FastGithub 或 Dev-Sidecar。</li>\n<li><strong>Gitee 镜像同步跟不上</strong>：关键版本手动推一次。</li>\n<li><strong>证书报错又不想全局关 sslverify</strong>：优先装工具的 CA 证书，而不是直接关验证。</li>\n</ol>\n";
var frontmatter = {
	"title": "GitHub 加速与毕设仓库部署：主仓 + 镜像怎么配",
	"date": "2026-11-20",
	"description": "毕设仓库放哪、主仓和镜像怎么分工、国内访问慢用哪个加速方案，按场景一条条选。",
	"tags": [
		"GitHub",
		"Git",
		"部署",
		"工具"
	],
	"series": "开发环境搭建",
	"seriesNo": 1,
	"readMin": 6
};
var file = "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/content/posts/github-accel-deploy.md";
var url = void 0;
function rawContent() {
	return "   \r\n                                    \r\n                  \r\n                                                     \r\n                                   \r\n                \r\n           \r\n          \r\n   \r\n> 根据之前那份对话整理。原对话是 AI 生成的多轮问答，里面几处不准的地方已经改过来（版本号、官方地址、AtomGit 渠道），下面都是核对过的。\r\n\r\n---\r\n\r\n## 一、毕设仓库怎么放\r\n\r\n1. 主仓库选 GitHub 或 Gitee 的免费私有仓库。能稳定访问 GitHub 就用 GitHub（以后当作品集展示更通用），网络不稳就用 Gitee。\r\n2. 核心策略：**一个主仓库日常开发，另一个只做镜像/最终归档**。千万别两边都手动改代码，容易冲突、互相覆盖。\r\n3. 推荐组合：GitHub 主 + Gitee 镜像。所有 commit / push 只在 GitHub 发生，Gitee 用仓库镜像功能自动拉取。\r\n4. 想多平台发（AtomGit、GitCode 等）：毕设定稿后推一份当展示或参加活动就行，不要纳入日常同步，平白增加维护负担。\r\n5. 带 Token 的私有仓库链接，不要走任何第三方公益镜像站，防止凭据泄露。\r\n\r\n---\r\n\r\n## 二、GitHub 访问加速：按场景选工具\r\n\r\n1. **clone / pull（拉代码、下 Release）**\r\n   - 最快、零安装：镜像前缀 `gh-proxy.com`，在原地址前加一段：\r\n     ```\r\n     https://gh-proxy.com/https://github.com/user/repo.git\r\n     ```\r\n   - 一次配置，以后照常用官方地址：\r\n     ```\r\n     git config --global url.\"https://gh-proxy.com/https://github.com/\".insteadOf \"https://github.com/\"\r\n     ```\r\n2. **push（推代码）**\r\n   - 必须直连或用本地工具，**不要走公开镜像前缀**，会把 Token 漏给第三方。\r\n3. **本地加速工具对比**\r\n   - FastGithub：专注于 GitHub，推荐。\r\n   - Watt Toolkit：功能大而全，偏慢。\r\n   - Dev-Sidecar：轻量，比 Watt 快。\r\n   - FoxPath：绿色单文件，不改 hosts，退出自动还原。\r\n4. 别同时开两个会改系统代理的工具，容易冲突。\r\n\r\n---\r\n\r\n## 三、FastGithub 下载安装（重点）\r\n\r\n### 3.1 下载地址（只认这个）\r\n\r\n```\r\nhttps://github.com/creazyboyone/FastGithub/releases\r\n```\r\n\r\n1. 原作者的 `dotnetcore/fastgithub` 已经删库，现在这个是目前留存最完整、还带 releases 的 fork。\r\n2. **最新版是 v2.1.5**。网上说的 v2.3.0 没有可靠来源，别再到处找了。\r\n3. Gitee / AtomGit 上的都是第三方镜像：版本旧、无法确认包有没有被改动，不建议下。要从源码自己编译也行。\r\n\r\n### 3.2 下哪个文件\r\n\r\n| 系统 | 文件名 |\r\n|---|---|\r\n| Windows | `fastgithub-win-x64.zip`（带界面的 `FastGithub.UI.exe`） |\r\n| macOS | `fastgithub-osx-x64.tar.gz` |\r\n| Linux | `fastgithub-linux-x64.tar.gz`（报错就换 `fastgithub-linux-x64-ok.tar.gz`） |\r\n\r\n### 3.3 怎么用（Windows）\r\n\r\n1. 下载并解压。\r\n2. 双击 `FastGithub.UI.exe`，自动开始加速。\r\n3. 首次运行会引导安装自签 CA 证书，选信任，否则加速不能完全生效。\r\n4. 证书私钥在 `cacert` 文件夹，**别外传**。\r\n\r\n后台静默运行（可选）：管理员身份进目录，执行：\r\n```\r\nfastgithub.exe start     :: 安装并启动服务\r\nfastgithub.exe stop      :: 卸载服务\r\n```\r\n\r\n### 3.4 常用命令\r\n\r\n- git 报 `SSL certificate problem`：\r\n  ```\r\n  git config --global http.sslverify false\r\n  ```\r\n- 验证是否生效：浏览器能打开 github.com，`git clone` 明显变快。\r\n\r\n---\r\n\r\n## 四、安全和合规\r\n\r\n1. 只从上面那个 GitHub 地址下。网盘、QQ 群、第三方修改版一律不碰。\r\n2. 这工具会装自签 CA、做本地代理，技术上能解密 HTTPS，所以来源必须干净。\r\n3. 合规性：项目自己在 README 里声明——不翻墙、走正常国际出入口信道、不对流量做额外加密。是否使用自己判断，这里不做背书。\r\n4. 退出工具后，确认系统代理和证书状态恢复正常。\r\n\r\n---\r\n\r\n## 五、常见坑\r\n\r\n1. **push 失败**：检查是不是误走了镜像前缀；在 FastGithub 里勾选 Git 相关加速项。\r\n2. **Watt Toolkit 太慢**：换 FastGithub 或 Dev-Sidecar。\r\n3. **Gitee 镜像同步跟不上**：关键版本手动推一次。\r\n4. **证书报错又不想全局关 sslverify**：优先装工具的 CA 证书，而不是直接关验证。\r\n";
}
async function compiledContent() {
	return await html();
}
function getHeadings() {
	return [
		{
			"depth": 2,
			"slug": "一毕设仓库怎么放",
			"text": "一、毕设仓库怎么放"
		},
		{
			"depth": 2,
			"slug": "二github-访问加速按场景选工具",
			"text": "二、GitHub 访问加速：按场景选工具"
		},
		{
			"depth": 2,
			"slug": "三fastgithub-下载安装重点",
			"text": "三、FastGithub 下载安装（重点）"
		},
		{
			"depth": 3,
			"slug": "31-下载地址只认这个",
			"text": "3.1 下载地址（只认这个）"
		},
		{
			"depth": 3,
			"slug": "32-下哪个文件",
			"text": "3.2 下哪个文件"
		},
		{
			"depth": 3,
			"slug": "33-怎么用windows",
			"text": "3.3 怎么用（Windows）"
		},
		{
			"depth": 3,
			"slug": "34-常用命令",
			"text": "3.4 常用命令"
		},
		{
			"depth": 2,
			"slug": "四安全和合规",
			"text": "四、安全和合规"
		},
		{
			"depth": 2,
			"slug": "五常见坑",
			"text": "五、常见坑"
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
