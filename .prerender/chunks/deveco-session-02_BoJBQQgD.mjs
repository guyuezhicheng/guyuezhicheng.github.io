import { i as createComponent, n as maybeRenderHead, r as unescapeHTML, t as renderTemplate } from "./server_Cxecs7oA.mjs";
// src/content/posts/deveco-session-02.md
var html = () => "<blockquote>\n<p>本文首发于稀土掘金：<a href=\"https://juejin.cn/post/7710522070941171739\">https://juejin.cn/post/7710522070941171739</a></p>\n</blockquote>\n<p>书接上回。上一篇里我把 Studio 版的 37 万行会话数据搬了库、把新版本不认识的 snip 部件改写成了 text，以为大功告成。直到我打开自己天天在用的终端版，敲下 <code>/session</code>——一片空白。</p>\n<p>但先说结论，免得你们替我捏汗：**数据从头到尾一条都没丢。**用 sqlite 打开库一看，56 个会话整整齐齐躺在里面。“丢了”是假象——丢的是新版“看见它们的能力”，外加一个恼人的副产品：新版加载聊天记录，肉眼可见地慢。</p>\n<p>这篇讲怎么把“看见”修回来。加载慢怎么治，是下一篇的事。</p>\n<h2 id=\"一原来我电脑上有两套-deveco-code\">一、原来我电脑上有两套 DevEco Code</h2>\n<p>AI 助手顺着日志摸了半天，发现一个我完全没意识到的事实：我这台机器上装着<strong>两套独立的 DevEco Code</strong>，数据互不相通：</p>\n<table>\n<thead>\n<tr>\n<th></th>\n<th>终端版（我天天用的）</th>\n<th>Studio 集成版</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>来源</td>\n<td>npm 包 <code>@deveco/deveco-code</code>，命令 <code>deveco</code></td>\n<td>DevEco Studio 26.0.1.290 自带</td>\n</tr>\n<tr>\n<td>版本</td>\n<td>0.2.5 → 0.2.6（我升级过）</td>\n<td>devecocli 1.3.9</td>\n</tr>\n<tr>\n<td>数据库</td>\n<td><code>C:\\Users\\&lt;你&gt;\\.local\\share\\deveco\\deveco.db</code>（681MB）</td>\n<td><code>AppData\\...\\deveco-code\\v1\\data\\deveco-stable.db</code></td>\n</tr>\n<tr>\n<td>日志</td>\n<td>同目录下 <code>log\\deveco.log</code></td>\n<td><code>v1\\data\\log\\deveco.log</code></td>\n</tr>\n</tbody>\n</table>\n<p>前两轮修复全落在 Studio 版的库上——难怪我终端里啥变化没有。</p>\n<h2 id=\"二病因项目-id-换了算法\">二、病因：项目 ID 换了算法</h2>\n<p>终端版的病和 Studio 版同源但不同症。0.2.6 也换了项目 ID 方案：旧版按<strong>路径哈希</strong>算，新版按 <strong>git 初始提交哈希</strong>算。我毕设项目 DistriAgenda 的项目 ID 从 <code>dd8d8d63</code> 变成了 <code>cd0de57</code>——后者恰好就是我仓库的第一个 commit 号，挺浪漫，也挺坑：库还是那个库，31 个会话的 <code>project_id</code> 一夜之间全成了“黑户”，按当前项目一过滤，列表当然是空的。</p>\n<p>好消息是部件层完全不用动：扫了 0.2.6 的二进制，snip（405 处命中）和 compaction（185 处命中）它都认识，库里 207 个 snip、144 个 compaction 原样兼容——比 Studio 版省了一整轮转换。</p>\n<h2 id=\"三我的拍板改-id-最快最稳老版保底\">三、我的拍板：改 ID 最快最稳，老版保底</h2>\n<p>路其实有好几条：把终端版回退到 0.2.5；把数据再搬一次家；或者直接改项目 ID。</p>\n<p>我的想法很直接：**你直接改项目 ID，我先去终端用老版顶着。**理由：</p>\n<ul>\n<li>数据一条没丢，全在这个库里——不需要搬家，搬家反而引入新风险；</li>\n<li>回退 0.2.5 也是死路：旧版本迟早被再淘汰一次，这个坑以后还得再踩一遍；</li>\n<li>改 ID 就是一句 UPDATE：把 31 个会话的 <code>project_id</code> 从 <code>dd8d8d63</code> 挪到 <code>cd0de57</code>，单事务、有备份，<strong>在我看来这是最快、最稳的一条路</strong>；</li>\n<li>修复期间我拿老版继续干活，两不耽误。</li>\n</ul>\n<p>而且我把边界也划清楚了：<strong>改完 ID 之后，新版的聊天记录随便你怎么优化都行</strong>——加载慢是另一个问题，不跟这次修复搅在一起，一次只解决一件事。</p>\n<p>AI 没跟我抢方向盘，只把丑话说在前头：动手前备份，老规矩。备份文件 <code>backup-deveco-20261121-preRemap.db</code> 落盘之后，单事务 UPDATE，31 行，旧 ID 残留 0。</p>\n<p>至于它后来甩给我的那张优化三行表（WAL checkpoint、记忆文件归档、少续聊超长会话）——见下一篇。</p>\n<h2 id=\"四修完之后ai-却说找不到\">四、修完之后，AI 却说“找不到”</h2>\n<p>按剧本，这里应该验证通过、收工大吉。结果 AI 助手报来“坏消息”：<code>session list</code> 是空的，<code>deveco export</code> 直接报 <code>Error: Session not found</code>。可它自己用 sqlite 查，56 个会话明明都躺在库里。修了个寂寞？</p>\n<h2 id=\"五破案第三个库--环境变量劫持\">五、破案：第三个库 + 环境变量劫持</h2>\n<p>转机来自一句灵魂拷问——先别看数据，先问**“这个 CLI 实例到底在读哪个库”**：</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>&gt; deveco db path</span></span>\n<span class=\"line\"><span>C:\\Users\\&lt;你&gt;\\AppData\\...\\deveco-code\\v1\\data\\deveco.db</span></span></code></pre>\n<p>第三个库！既不是终端版的 <code>.local</code> 老库，也不是 Studio 的 <code>deveco-stable.db</code>——一个 250KB 的空库，<strong>当天早上 9:30 才出生，0 个会话</strong>。</p>\n<p>真相有点好笑：AI 助手自己的会话就跑在 Studio 服务（<code>deveco.exe acp</code>，端口 1386）底下，它派生出来的 PowerShell 子进程<strong>继承了整套 <code>DEVECO_*</code> / <code>XDG_*</code> 环境变量</strong>。在这些变量的加持下启动 npm 终端 CLI，它的数据目录就被“劫持”到了 <code>v1\\data\\</code> 下。空库上当然啥都找不到——</p>\n<p><strong>之前的“失败”全是假阴性。被劫持的是探针，不是我。</strong></p>\n<h2 id=\"六净环境验证--我自己就是实锤\">六、净环境验证 + 我自己就是实锤</h2>\n<p>把继承的环境变量洗掉、模拟我的裸终端重新验证，全绿：</p>\n<ul>\n<li><code>deveco db path</code> → 回到 <code>.local</code> 老库 ✓</li>\n<li>DistriAgenda 会话导出成功，projectID=<code>cd0de57</code>，改 ID 生效 ✓</li>\n<li><code>session list</code> 列出 2 个根会话——2 个根 + 29 个子代理会话，和升级前一模一样 ✓</li>\n<li>记账项目（非 git 目录，旧 ID 没动过）也照常列出 ✓</li>\n</ul>\n<p>最硬的实锤不用测：我的终端 TUI 当天就在改完 ID 的根会话里实际干活，一天新增了 <strong>290 个部件</strong>。顺带一提，那个根会话创建时的版本号是 <strong>0.1.2</strong>——从 0.1.2 一路用到 0.2.6，它见证了这个工具的整个版本史。</p>\n<h2 id=\"七教训\">七、教训</h2>\n<ol>\n<li><strong>“聊天记录丢了”先冷静</strong>：十有八九数据还在，先拿 sqlite 查一眼，再谈救援——别上来就想着回退或者搬家。</li>\n<li><strong>同一台机器可能装着同一工具的多套发行版</strong>。修数据前先回答“我用的到底是哪套”——查进程命令行 + 各自日志的最近活动，是最快的证据。</li>\n<li><strong>验证工具和被验证对象同源时，先排环境污染</strong>。AI 会话里跑的探针继承了宿主的环境变量，结论不可信；<code>deveco db path</code> 这类“我问它自己”的命令永远是第一排查手段。</li>\n<li>一条新守则：<strong>终端版 <code>deveco</code> 一律从普通终端启动，千万别从 DevEco Studio 内置终端启动</strong>——会继承 Studio 的环境变量、被劫持到那个空库，“看不到会话”当场复现。</li>\n</ol>\n<p>会话全部回来了。但故事只讲了一半——新版加载聊天记录太慢这件事，AI 给过我一张三行表，每一刀砍在哪里、疼不疼，下一篇细说。</p>\n";
var frontmatter = {
	"title": "AI 助手升级后聊天记录丢了（二）：数据一直都在，丢的是看见",
	"date": "2026-11-21T00:00:00.000Z",
	"tags": [
		"DevEco Code",
		"终端版",
		"聊天记录丢失",
		"项目ID",
		"SQLite"
	],
	"categories": ["鸿蒙开发踩坑实录"],
	"description": "DevEco Code 终端版升级后聊天记录丢失？数据一条没丢，丢的是看见的能力。本文记录三套数据库、环境变量劫持的排查，以及改项目ID后31个会话全部恢复的完整过程。",
	"keywords": "DevEco Code, 终端版, 聊天记录丢失, 项目ID, git初始提交哈希, 环境变量劫持, SQLite, 会话恢复",
	"series": "DevEco Code 排障",
	"seriesNo": 2,
	"cover": "/posts/cover-session-02.jpg",
	"readMin": 8
};
var file = "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/content/posts/deveco-session-02.md";
var url = void 0;
function rawContent() {
	return "   \r\n                                       \r\n                \r\n     \r\n               \r\n       \r\n          \r\n        \r\n          \r\n           \r\n            \r\n                                                                                                   \r\n                                                                           \r\n                        \r\n           \r\n                                    \r\n          \r\n   \r\n> 本文首发于稀土掘金：https://juejin.cn/post/7710522070941171739\r\n\r\n书接上回。上一篇里我把 Studio 版的 37 万行会话数据搬了库、把新版本不认识的 snip 部件改写成了 text，以为大功告成。直到我打开自己天天在用的终端版，敲下 `/session`——一片空白。\r\n\r\n但先说结论，免得你们替我捏汗：**数据从头到尾一条都没丢。**用 sqlite 打开库一看，56 个会话整整齐齐躺在里面。“丢了”是假象——丢的是新版“看见它们的能力”，外加一个恼人的副产品：新版加载聊天记录，肉眼可见地慢。\r\n\r\n这篇讲怎么把“看见”修回来。加载慢怎么治，是下一篇的事。\r\n\r\n## 一、原来我电脑上有两套 DevEco Code\r\n\r\nAI 助手顺着日志摸了半天，发现一个我完全没意识到的事实：我这台机器上装着**两套独立的 DevEco Code**，数据互不相通：\r\n\r\n| | 终端版（我天天用的） | Studio 集成版 |\r\n|---|---|---|\r\n| 来源 | npm 包 `@deveco/deveco-code`，命令 `deveco` | DevEco Studio 26.0.1.290 自带 |\r\n| 版本 | 0.2.5 → 0.2.6（我升级过） | devecocli 1.3.9 |\r\n| 数据库 | `C:\\Users\\<你>\\.local\\share\\deveco\\deveco.db`（681MB） | `AppData\\...\\deveco-code\\v1\\data\\deveco-stable.db` |\r\n| 日志 | 同目录下 `log\\deveco.log` | `v1\\data\\log\\deveco.log` |\r\n\r\n前两轮修复全落在 Studio 版的库上——难怪我终端里啥变化没有。\r\n\r\n## 二、病因：项目 ID 换了算法\r\n\r\n终端版的病和 Studio 版同源但不同症。0.2.6 也换了项目 ID 方案：旧版按**路径哈希**算，新版按 **git 初始提交哈希**算。我毕设项目 DistriAgenda 的项目 ID 从 `dd8d8d63` 变成了 `cd0de57`——后者恰好就是我仓库的第一个 commit 号，挺浪漫，也挺坑：库还是那个库，31 个会话的 `project_id` 一夜之间全成了“黑户”，按当前项目一过滤，列表当然是空的。\r\n\r\n好消息是部件层完全不用动：扫了 0.2.6 的二进制，snip（405 处命中）和 compaction（185 处命中）它都认识，库里 207 个 snip、144 个 compaction 原样兼容——比 Studio 版省了一整轮转换。\r\n\r\n## 三、我的拍板：改 ID 最快最稳，老版保底\r\n\r\n路其实有好几条：把终端版回退到 0.2.5；把数据再搬一次家；或者直接改项目 ID。\r\n\r\n我的想法很直接：**你直接改项目 ID，我先去终端用老版顶着。**理由：\r\n\r\n- 数据一条没丢，全在这个库里——不需要搬家，搬家反而引入新风险；\r\n- 回退 0.2.5 也是死路：旧版本迟早被再淘汰一次，这个坑以后还得再踩一遍；\r\n- 改 ID 就是一句 UPDATE：把 31 个会话的 `project_id` 从 `dd8d8d63` 挪到 `cd0de57`，单事务、有备份，**在我看来这是最快、最稳的一条路**；\r\n- 修复期间我拿老版继续干活，两不耽误。\r\n\r\n而且我把边界也划清楚了：**改完 ID 之后，新版的聊天记录随便你怎么优化都行**——加载慢是另一个问题，不跟这次修复搅在一起，一次只解决一件事。\r\n\r\nAI 没跟我抢方向盘，只把丑话说在前头：动手前备份，老规矩。备份文件 `backup-deveco-20261121-preRemap.db` 落盘之后，单事务 UPDATE，31 行，旧 ID 残留 0。\r\n\r\n至于它后来甩给我的那张优化三行表（WAL checkpoint、记忆文件归档、少续聊超长会话）——见下一篇。\r\n\r\n## 四、修完之后，AI 却说“找不到”\r\n\r\n按剧本，这里应该验证通过、收工大吉。结果 AI 助手报来“坏消息”：`session list` 是空的，`deveco export` 直接报 `Error: Session not found`。可它自己用 sqlite 查，56 个会话明明都躺在库里。修了个寂寞？\r\n\r\n## 五、破案：第三个库 + 环境变量劫持\r\n\r\n转机来自一句灵魂拷问——先别看数据，先问**“这个 CLI 实例到底在读哪个库”**：\r\n\r\n```\r\n> deveco db path\r\nC:\\Users\\<你>\\AppData\\...\\deveco-code\\v1\\data\\deveco.db\r\n```\r\n\r\n第三个库！既不是终端版的 `.local` 老库，也不是 Studio 的 `deveco-stable.db`——一个 250KB 的空库，**当天早上 9:30 才出生，0 个会话**。\r\n\r\n真相有点好笑：AI 助手自己的会话就跑在 Studio 服务（`deveco.exe acp`，端口 1386）底下，它派生出来的 PowerShell 子进程**继承了整套 `DEVECO_*` / `XDG_*` 环境变量**。在这些变量的加持下启动 npm 终端 CLI，它的数据目录就被“劫持”到了 `v1\\data\\` 下。空库上当然啥都找不到——\r\n\r\n**之前的“失败”全是假阴性。被劫持的是探针，不是我。**\r\n\r\n## 六、净环境验证 + 我自己就是实锤\r\n\r\n把继承的环境变量洗掉、模拟我的裸终端重新验证，全绿：\r\n\r\n- `deveco db path` → 回到 `.local` 老库 ✓\r\n- DistriAgenda 会话导出成功，projectID=`cd0de57`，改 ID 生效 ✓\r\n- `session list` 列出 2 个根会话——2 个根 + 29 个子代理会话，和升级前一模一样 ✓\r\n- 记账项目（非 git 目录，旧 ID 没动过）也照常列出 ✓\r\n\r\n最硬的实锤不用测：我的终端 TUI 当天就在改完 ID 的根会话里实际干活，一天新增了 **290 个部件**。顺带一提，那个根会话创建时的版本号是 **0.1.2**——从 0.1.2 一路用到 0.2.6，它见证了这个工具的整个版本史。\r\n\r\n## 七、教训\r\n\r\n1. **“聊天记录丢了”先冷静**：十有八九数据还在，先拿 sqlite 查一眼，再谈救援——别上来就想着回退或者搬家。\r\n2. **同一台机器可能装着同一工具的多套发行版**。修数据前先回答“我用的到底是哪套”——查进程命令行 + 各自日志的最近活动，是最快的证据。\r\n3. **验证工具和被验证对象同源时，先排环境污染**。AI 会话里跑的探针继承了宿主的环境变量，结论不可信；`deveco db path` 这类“我问它自己”的命令永远是第一排查手段。\r\n4. 一条新守则：**终端版 `deveco` 一律从普通终端启动，千万别从 DevEco Studio 内置终端启动**——会继承 Studio 的环境变量、被劫持到那个空库，“看不到会话”当场复现。\r\n\r\n会话全部回来了。但故事只讲了一半——新版加载聊天记录太慢这件事，AI 给过我一张三行表，每一刀砍在哪里、疼不疼，下一篇细说。\r\n";
}
async function compiledContent() {
	return await html();
}
function getHeadings() {
	return [
		{
			"depth": 2,
			"slug": "一原来我电脑上有两套-deveco-code",
			"text": "一、原来我电脑上有两套 DevEco Code"
		},
		{
			"depth": 2,
			"slug": "二病因项目-id-换了算法",
			"text": "二、病因：项目 ID 换了算法"
		},
		{
			"depth": 2,
			"slug": "三我的拍板改-id-最快最稳老版保底",
			"text": "三、我的拍板：改 ID 最快最稳，老版保底"
		},
		{
			"depth": 2,
			"slug": "四修完之后ai-却说找不到",
			"text": "四、修完之后，AI 却说“找不到”"
		},
		{
			"depth": 2,
			"slug": "五破案第三个库--环境变量劫持",
			"text": "五、破案：第三个库 + 环境变量劫持"
		},
		{
			"depth": 2,
			"slug": "六净环境验证--我自己就是实锤",
			"text": "六、净环境验证 + 我自己就是实锤"
		},
		{
			"depth": 2,
			"slug": "七教训",
			"text": "七、教训"
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
