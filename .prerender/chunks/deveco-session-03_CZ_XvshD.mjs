import { i as createComponent, n as maybeRenderHead, r as unescapeHTML, t as renderTemplate } from "./server_Cxecs7oA.mjs";
// src/content/posts/deveco-session-03.md
var html = () => "<blockquote>\n<p>本文首发于稀土掘金：<a href=\"https://juejin.cn/post/7710405377851047976\">原文链接</a></p>\n</blockquote>\n<p>书接上回。项目 ID 改完，31 个会话在新版里都能看见了。按理说故事到这里该收工，但真用起来我又撞上一件事：<strong>加载上下文特别慢</strong>——尤其那些从旧版迁移过来的会话，点开一条要等上几秒，肉眼可见地卡。</p>\n<p>我就纳闷了：这么多聊天记录，AI 到底是怎么加载的？为什么同样的会话，在旧版里好好的，迁到新版就慢成这样？</p>\n<p>我把这个困惑抛给了 DevEco Code。它没跟我讲玄学，先说清楚“慢在哪”，再给了一张三行表。修复归修复，优化归优化，现在该动优化的刀了——三刀，各管一层。</p>\n<h2 id=\"一先说慢在哪\">一、先说慢在哪</h2>\n<ol>\n<li><strong>模型是无状态的</strong>。每开一个新会话，它都要把项目说明、开发进度、问题记录这些“记忆文件”从头读一遍——这是它的开场税。项目越老、记录越厚，开场税越重；</li>\n<li><strong>会话库本身大</strong>。700MB、37 万行，打开一条长会话要流式读几万个部件；</li>\n<li><strong>684MB 的 WAL 一直没结账</strong>（下面细说）；</li>\n<li><strong>超长会话的 prefill</strong>。我有一条记账 App 的会话，累计输出 97.6 万 token、缓存读取 1.09 亿 token——每一轮续聊，这些历史都要重新 prefill 一遍。</li>\n</ol>\n<h2 id=\"二ai-的方案一张三行表\">二、AI 的方案：一张三行表</h2>\n<table>\n<thead>\n<tr>\n<th>手段</th>\n<th>效果</th>\n<th>代价</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>WAL checkpoint</td>\n<td>直接加快会话读写</td>\n<td>需要服务占用中执行，改前备份（老规矩）</td>\n</tr>\n<tr>\n<td>记忆文件归档</td>\n<td>开场读取变小</td>\n<td>老记录要挪到归档文件，检索时多一步</td>\n</tr>\n<tr>\n<td>少续聊超长会话</td>\n<td>prefill 变快</td>\n<td>长会话本来就该适时开新篇</td>\n</tr>\n</tbody>\n</table>\n<p>三刀各管一层：第一刀管数据库，第二刀管开场，第三刀管每轮对话。挨个说。</p>\n<h2 id=\"三第一刀wal-checkpoint把-684mb-的草稿本誊回正本\">三、第一刀：WAL checkpoint——把 684MB 的“草稿本”誊回正本</h2>\n<p>SQLite 的 WAL（预写日志）机制：所有写入先进 <code>-wal</code> 文件这本“草稿本”，之后再“结账”（checkpoint）誊回主库、清空草稿。这本是提速设计，但写入方一直不结账，草稿本就越攒越厚——我这台机器攒到了 <strong>684MB</strong>。后果是每次打开数据库都得先翻完这本草稿本，会话加载自然被拖慢。</p>\n<p>解法一行命令：</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"sql\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">PRAGMA wal_checkpoint(</span><span style=\"color:#F97583\">TRUNCATE</span><span style=\"color:#E1E4E8\">);</span></span></code></pre>\n<p>但表里“代价”那列不是废话，两个坑：一是当时服务正占着这个库，必须在占用状态下执行，<strong>千万不能图省事直接删 <code>-wal</code> 文件</strong>——那是 SQLite 数据损坏的经典操作；二是老规矩，动手前先备份。</p>\n<p>我这台的结局有点戏剧：还没等动手，服务重启后自己把账结了——684MB 缩到 4MB。所以如果你的 SQLite 应用越用越慢，先看一眼 <code>-wal</code> 文件多大，很可能有白捡的性能。</p>\n<h2 id=\"四第二刀记忆文件归档给开场白瘦身\">四、第二刀：记忆文件归档——给“开场白”瘦身</h2>\n<p>无状态模型的开场税，交多少取决于记忆文件有多厚。这些文件是跟项目一起长大的：我的开发进度和问题记录，几个月下来比小说还厚，而它们<strong>每次开场都要被完整读一遍</strong>。</p>\n<p>归档的思路：把老记录挪进归档文件，日常读的文件保持精瘦——AI 每次开场只读“最近发生的事”和“长期不变的规则”，翻旧账时再多查一步归档。</p>\n<p>代价是检索旧事多一步。但仔细算算：检索是偶发的，开场读取是每次都发生的，这笔账怎么算都划算。</p>\n<h2 id=\"五第三刀少续聊超长会话长篇要分章\">五、第三刀：少续聊超长会话——长篇要分章</h2>\n<p>prefill 的意思是：每一轮对话，之前的整段历史都要重新读一遍。我有一条从 0.1.2 时代续到现在的会话（真有，它创建时这个工具的版本号还是 0.1.2），每轮 prefill 都是几十万 token 起步——聊得越久，每一轮就越贵。</p>\n<p>开新会话、让记忆文件接棒，连续性一点不丢，速度立刻回来。所以这一刀的“代价”几乎不算代价——<strong>长会话本来就该适时开新篇</strong>，跟写书分章一个道理：上一章的伏笔写进记忆文件，新一章轻装上阵。</p>\n<h2 id=\"六动刀顺序\">六、动刀顺序</h2>\n<ul>\n<li><strong>WAL checkpoint</strong>：成本最低、见效最快，先做；</li>\n<li><strong>记忆文件归档</strong>：一次性整理，随时可做；</li>\n<li><strong>开新篇</strong>：不用动任何东西，从下一条长会话开始养成习惯。</li>\n</ul>\n<p>三刀下去，新版从“能用”变回“好用”。回头看，这次优化没什么黑科技，就是老三样：先测量、再动刀、每刀前备份——对数据库如此，对 AI 工具，也一样。</p>\n";
var frontmatter = {
	"title": "这么多聊天记录，AI 是怎么加载的？——DevEco Code 迁移旧会话后上下文加载慢的三刀排查",
	"date": "2026-11-21T00:00:00.000Z",
	"tags": [
		"DevEco Code",
		"AI 编程助手",
		"SQLite",
		"性能优化",
		"WAL checkpoint"
	],
	"categories": ["鸿蒙开发踩坑实录"],
	"description": "旧版聊天记录迁移到新版后，DevEco Code 加载上下文为什么特别慢？这么多聊天记录 AI 是怎么加载的？本文记录从困惑到解答：模型开场税、700MB 会话库、684MB 的 WAL 未结账、超长会话 prefill，以及三刀优化方案。",
	"keywords": "AI 编程助手, 聊天记录加载慢, WAL checkpoint, 记忆文件归档, prefill, SQLite 性能, DevEco Code",
	"series": "DevEco Code 排障",
	"seriesNo": 3,
	"cover": "/posts/cover-session-03.jpg",
	"readMin": 7
};
var file = "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/content/posts/deveco-session-03.md";
var url = void 0;
function rawContent() {
	return "   \r\n                                                          \r\n                \r\n     \r\n               \r\n           \r\n          \r\n        \r\n                  \r\n           \r\n            \r\n                                                                                                                                       \r\n                                                                                     \r\n                        \r\n           \r\n                                    \r\n          \r\n   \r\n> 本文首发于稀土掘金：[原文链接](https://juejin.cn/post/7710405377851047976)\r\n\r\n书接上回。项目 ID 改完，31 个会话在新版里都能看见了。按理说故事到这里该收工，但真用起来我又撞上一件事：**加载上下文特别慢**——尤其那些从旧版迁移过来的会话，点开一条要等上几秒，肉眼可见地卡。\r\n\r\n我就纳闷了：这么多聊天记录，AI 到底是怎么加载的？为什么同样的会话，在旧版里好好的，迁到新版就慢成这样？\r\n\r\n我把这个困惑抛给了 DevEco Code。它没跟我讲玄学，先说清楚“慢在哪”，再给了一张三行表。修复归修复，优化归优化，现在该动优化的刀了——三刀，各管一层。\r\n\r\n## 一、先说慢在哪\r\n\r\n1. **模型是无状态的**。每开一个新会话，它都要把项目说明、开发进度、问题记录这些“记忆文件”从头读一遍——这是它的开场税。项目越老、记录越厚，开场税越重；\r\n2. **会话库本身大**。700MB、37 万行，打开一条长会话要流式读几万个部件；\r\n3. **684MB 的 WAL 一直没结账**（下面细说）；\r\n4. **超长会话的 prefill**。我有一条记账 App 的会话，累计输出 97.6 万 token、缓存读取 1.09 亿 token——每一轮续聊，这些历史都要重新 prefill 一遍。\r\n\r\n## 二、AI 的方案：一张三行表\r\n\r\n| 手段 | 效果 | 代价 |\r\n|---|---|---|\r\n| WAL checkpoint | 直接加快会话读写 | 需要服务占用中执行，改前备份（老规矩） |\r\n| 记忆文件归档 | 开场读取变小 | 老记录要挪到归档文件，检索时多一步 |\r\n| 少续聊超长会话 | prefill 变快 | 长会话本来就该适时开新篇 |\r\n\r\n三刀各管一层：第一刀管数据库，第二刀管开场，第三刀管每轮对话。挨个说。\r\n\r\n## 三、第一刀：WAL checkpoint——把 684MB 的“草稿本”誊回正本\r\n\r\nSQLite 的 WAL（预写日志）机制：所有写入先进 `-wal` 文件这本“草稿本”，之后再“结账”（checkpoint）誊回主库、清空草稿。这本是提速设计，但写入方一直不结账，草稿本就越攒越厚——我这台机器攒到了 **684MB**。后果是每次打开数据库都得先翻完这本草稿本，会话加载自然被拖慢。\r\n\r\n解法一行命令：\r\n\r\n```sql\r\nPRAGMA wal_checkpoint(TRUNCATE);\r\n```\r\n\r\n但表里“代价”那列不是废话，两个坑：一是当时服务正占着这个库，必须在占用状态下执行，**千万不能图省事直接删 `-wal` 文件**——那是 SQLite 数据损坏的经典操作；二是老规矩，动手前先备份。\r\n\r\n我这台的结局有点戏剧：还没等动手，服务重启后自己把账结了——684MB 缩到 4MB。所以如果你的 SQLite 应用越用越慢，先看一眼 `-wal` 文件多大，很可能有白捡的性能。\r\n\r\n## 四、第二刀：记忆文件归档——给“开场白”瘦身\r\n\r\n无状态模型的开场税，交多少取决于记忆文件有多厚。这些文件是跟项目一起长大的：我的开发进度和问题记录，几个月下来比小说还厚，而它们**每次开场都要被完整读一遍**。\r\n\r\n归档的思路：把老记录挪进归档文件，日常读的文件保持精瘦——AI 每次开场只读“最近发生的事”和“长期不变的规则”，翻旧账时再多查一步归档。\r\n\r\n代价是检索旧事多一步。但仔细算算：检索是偶发的，开场读取是每次都发生的，这笔账怎么算都划算。\r\n\r\n## 五、第三刀：少续聊超长会话——长篇要分章\r\n\r\nprefill 的意思是：每一轮对话，之前的整段历史都要重新读一遍。我有一条从 0.1.2 时代续到现在的会话（真有，它创建时这个工具的版本号还是 0.1.2），每轮 prefill 都是几十万 token 起步——聊得越久，每一轮就越贵。\r\n\r\n开新会话、让记忆文件接棒，连续性一点不丢，速度立刻回来。所以这一刀的“代价”几乎不算代价——**长会话本来就该适时开新篇**，跟写书分章一个道理：上一章的伏笔写进记忆文件，新一章轻装上阵。\r\n\r\n## 六、动刀顺序\r\n\r\n- **WAL checkpoint**：成本最低、见效最快，先做；\r\n- **记忆文件归档**：一次性整理，随时可做；\r\n- **开新篇**：不用动任何东西，从下一条长会话开始养成习惯。\r\n\r\n三刀下去，新版从“能用”变回“好用”。回头看，这次优化没什么黑科技，就是老三样：先测量、再动刀、每刀前备份——对数据库如此，对 AI 工具，也一样。\r\n";
}
async function compiledContent() {
	return await html();
}
function getHeadings() {
	return [
		{
			"depth": 2,
			"slug": "一先说慢在哪",
			"text": "一、先说慢在哪"
		},
		{
			"depth": 2,
			"slug": "二ai-的方案一张三行表",
			"text": "二、AI 的方案：一张三行表"
		},
		{
			"depth": 2,
			"slug": "三第一刀wal-checkpoint把-684mb-的草稿本誊回正本",
			"text": "三、第一刀：WAL checkpoint——把 684MB 的“草稿本”誊回正本"
		},
		{
			"depth": 2,
			"slug": "四第二刀记忆文件归档给开场白瘦身",
			"text": "四、第二刀：记忆文件归档——给“开场白”瘦身"
		},
		{
			"depth": 2,
			"slug": "五第三刀少续聊超长会话长篇要分章",
			"text": "五、第三刀：少续聊超长会话——长篇要分章"
		},
		{
			"depth": 2,
			"slug": "六动刀顺序",
			"text": "六、动刀顺序"
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
