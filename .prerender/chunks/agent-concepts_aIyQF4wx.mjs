import { i as createComponent, n as maybeRenderHead, r as unescapeHTML, t as renderTemplate } from "./server_Cxecs7oA.mjs";
// src/content/posts/agent-concepts.md
var html = () => "<p>从 AtomCode 的安装按钮开始，一路拆到 LLM、RAG、Skill、Multi-Agent、MCP。</p>\n<p>最后更新：2026-11-20</p>\n<hr>\n<h2 id=\"1-先看全貌\">1. 先看全貌</h2>\n<p>这几个词经常混在一起说，其实它们是一层套一层的：</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"mermaid\"><code><span class=\"line\"><span style=\"color:#F97583\">flowchart</span><span style=\"color:#B392F0\"> TB</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">    subgraph</span><span style=\"color:#B392F0\"> L1</span><span style=\"color:#E1E4E8\">[\"</span><span style=\"color:#FFAB70\">最里面</span><span style=\"color:#E1E4E8\">：</span><span style=\"color:#FFAB70\">LLM</span><span style=\"color:#E1E4E8\">\"]</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">        A1</span><span style=\"color:#F97583\">[</span><span style=\"color:#9ECBFF\">\"大语言模型&lt;br/&gt;只负责想，不负责做\"</span><span style=\"color:#F97583\">]</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">    end</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">    subgraph</span><span style=\"color:#B392F0\"> L2</span><span style=\"color:#E1E4E8\">[\"</span><span style=\"color:#FFAB70\">往外一层</span><span style=\"color:#E1E4E8\">：</span><span style=\"color:#FFAB70\">Agent</span><span style=\"color:#E1E4E8\">\"]</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">        A2</span><span style=\"color:#F97583\">[</span><span style=\"color:#9ECBFF\">\"LLM + 记忆 + 工具 + 规划&lt;br/&gt;一个人干活\"</span><span style=\"color:#F97583\">]</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">    end</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">    subgraph</span><span style=\"color:#B392F0\"> L3</span><span style=\"color:#E1E4E8\">[\"</span><span style=\"color:#FFAB70\">再往外</span><span style=\"color:#E1E4E8\">：</span><span style=\"color:#FFAB70\">Multi-Agent</span><span style=\"color:#E1E4E8\">\"]</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">        A3</span><span style=\"color:#F97583\">[</span><span style=\"color:#9ECBFF\">\"多个 Agent 分工协作&lt;br/&gt;一个团队干活\"</span><span style=\"color:#F97583\">]</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">    end</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">    A1 </span><span style=\"color:#F97583\">--</span><span style=\"color:#9ECBFF\">&gt; A2 </span><span style=\"color:#F97583\">--&gt;</span><span style=\"color:#FFAB70\"> A3</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">    M1</span><span style=\"color:#F97583\">[</span><span style=\"color:#9ECBFF\">\"MCP：Agent 接工具的统一插座\"</span><span style=\"color:#F97583\">]</span><span style=\"color:#F97583\"> -.</span><span style=\"color:#9ECBFF\">接</span><span style=\"color:#F97583\">.-&gt;</span><span style=\"color:#FFAB70\"> A2</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">    M2</span><span style=\"color:#F97583\">[</span><span style=\"color:#9ECBFF\">\"A2A：Agent 接 Agent 的统一协议\"</span><span style=\"color:#F97583\">]</span><span style=\"color:#F97583\"> -.</span><span style=\"color:#9ECBFF\">接</span><span style=\"color:#F97583\">.-&gt;</span><span style=\"color:#FFAB70\"> A3</span></span></code></pre>\n<p>一句话版本：<strong>LLM 给脑子，Agent 给手脚，Multi-Agent 给组织，MCP/A2A 给接口标准。</strong></p>\n<hr>\n<h2 id=\"2-atomcode从安装按钮说起\">2. AtomCode：从安装按钮说起</h2>\n<h3 id=\"21-五种安装方式区别只是怎么把软件弄到本地\">2.1 五种安装方式，区别只是“怎么把软件弄到本地”</h3>\n<table>\n<thead>\n<tr>\n<th>方式</th>\n<th>具体做什么</th>\n<th>适合谁</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>curl 一键脚本</td>\n<td>跑一条命令，自动识别系统和芯片、下载预编译包、配环境变量</td>\n<td>大多数人，官方推荐</td>\n</tr>\n<tr>\n<td>npm</td>\n<td><code>npm install -g</code>，要求本机有 Node.js 18+</td>\n<td>已经在用 Node 生态的人</td>\n</tr>\n<tr>\n<td>brew</td>\n<td><code>brew install --cask atomcode</code></td>\n<td>macOS 用户，方便后续统一升级</td>\n</tr>\n<tr>\n<td>源码构建</td>\n<td>clone 代码，用 Cargo 自己编译，要求 Rust 1.88+</td>\n<td>要改源码、要最新开发版</td>\n</tr>\n<tr>\n<td>下载二进制</td>\n<td>去 Releases 手动下压缩包，自己放进 PATH</td>\n<td>网络受限、环境特殊</td>\n</tr>\n</tbody>\n</table>\n<p>装完跑 <code>atomcode --version</code>，能出版本号就算成了。</p>\n<h3 id=\"22-真正的分界线不在安装方式在大脑在哪\">2.2 真正的分界线不在安装方式，在“大脑在哪”</h3>\n<p>这里最容易搞混。安装方式决定的只是<strong>客户端装在哪</strong>，答案永远是本地。而“云端还是本地”问的是<strong>模型在哪算</strong>：</p>\n<ol>\n<li>软件本体（手脚）：一定在你电脑上，负责读文件、跑命令。</li>\n<li>AI 大脑（模型）：看第 02 步的 provider 配置。\n<ul>\n<li>选 DeepSeek / GLM / Qwen：代码发到人家服务器算，要联网，按量付费或用免费额度。</li>\n<li>选 Ollama：模型下载到自己电脑跑，断网也能用，数据不出门，但吃显卡。</li>\n</ul>\n</li>\n</ol>\n<p>打个比方：安装方式是“怎么把播放器装进电脑”，provider 是“片子从哪来”——看在线流媒体，还是放本地下载的 MP4。播放器怎么装的，跟片子从哪来没关系。</p>\n<hr>\n<h2 id=\"3-aillmragagent-四个词的关系\">3. AI、LLM、RAG、Agent 四个词的关系</h2>\n<h3 id=\"31-llm只有脑子的百事通\">3.1 LLM：只有脑子的百事通</h3>\n<p>LLM（Large Language Model，大语言模型）就是 ChatGPT、DeepSeek、GLM、千问这些。它知识多、能推理，但：</p>\n<ol>\n<li>知识停在训练截止那天；</li>\n<li>不知道你的私有代码和内部文档；</li>\n<li>没有手脚，只能输出文字，问一句答一句。</li>\n</ol>\n<p>问它“这 bug 怎么回事”，它给你一段建议代码，然后你自己去复制、粘贴、运行。</p>\n<h3 id=\"32-rag给大脑一本开卷资料\">3.2 RAG：给大脑一本开卷资料</h3>\n<p>RAG（Retrieval-Augmented Generation，检索增强生成）不是模型，是一套流程：<strong>先从外部资料库检索，再把检索结果连同问题一起喂给模型，让它照着资料答。</strong></p>\n<ul>\n<li>纯 LLM = 闭卷考试，全凭记忆。</li>\n<li>LLM + RAG = 开卷考试，允许先翻书再写答案。</li>\n</ul>\n<p>检索那一步一般在向量数据库里做（把文档切成片段、转成向量、按相似度找），所以 RAG 常被叫作“外挂知识库”或“长期记忆”。</p>\n<h3 id=\"33-agent脑子加上手脚还能自己循环\">3.3 Agent：脑子加上手脚，还能自己循环</h3>\n<p>Agent 是你给它一个目标，它自己拆步骤、调工具、看结果、修正，直到把活干完。你不用告诉它每一步怎么做。</p>\n<p>还是修 bug 那个例子：</p>\n<ol>\n<li>只有 LLM：泛泛说“可能少了个分号”。</li>\n<li>LLM + RAG：查了内部知识库，告诉你“是上周那个接口改了，改第 20 行”。</li>\n<li>LLM + RAG + Agent：查完直接打开你的文件，改了第 20 行，跑了测试，最后报一句“修好了”。</li>\n</ol>\n<h3 id=\"34-三者不是并列是包含\">3.4 三者不是并列，是包含</h3>\n<table>\n<thead>\n<tr>\n<th>概念</th>\n<th>位置</th>\n<th>类比</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>LLM</td>\n<td>底层能力</td>\n<td>发动机</td>\n</tr>\n<tr>\n<td>RAG</td>\n<td>让 LLM 少犯错的外挂</td>\n<td>导航地图</td>\n</tr>\n<tr>\n<td>Agent</td>\n<td>把上面这些组装起来干活的系统</td>\n<td>整辆自动驾驶汽车</td>\n</tr>\n</tbody>\n</table>\n<hr>\n<h2 id=\"4-公式进化史\">4. 公式进化史</h2>\n<p>这条线是从你那句总结一步步长出来的。</p>\n<p><strong>v1（最初版）</strong></p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>Agent = AI大模型（大脑） + 记忆（上下文） + 工具（读写文件/终端执行） + 规划执行能力（自主循环）</span></span></code></pre>\n<p><strong>v2（把 RAG 明确写进去）</strong></p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>Agent = LLM（核心大脑） + 上下文记忆（短期） + RAG（检索外部知识/长期） + 工具（手脚） + 规划执行能力（自主循环）</span></span></code></pre>\n<p><strong>v3（加上 Skill，换成行业正经术语）</strong></p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>Agent = LLM</span></span>\n<span class=\"line\"><span>      + Working Memory / Context Window（短期记忆）</span></span>\n<span class=\"line\"><span>      + RAG（长期记忆）</span></span>\n<span class=\"line\"><span>      + Tools（基础工具）</span></span>\n<span class=\"line\"><span>      + Skills（技能包）</span></span>\n<span class=\"line\"><span>      + Planning（规划循环）</span></span></code></pre>\n<h3 id=\"41-六个部件分别干什么\">4.1 六个部件分别干什么</h3>\n<ol>\n<li><strong>LLM</strong>：理解指令、做判断。缺了它，剩下全是死代码。</li>\n<li><strong>Working Memory / Context Window</strong>：当前对话历史、刚调过的工具、刚看到的报错都存在这。窗口满了就得压缩或丢弃，这就是“上下文工程”要管的事。</li>\n<li><strong>RAG</strong>：补模型不知道的知识。缺了它，模型遇到私有数据就只能瞎猜。</li>\n<li><strong>Tools</strong>：原子操作，比如读文件、写文件、执行终端命令、发 HTTP 请求。相当于手指头。</li>\n<li><strong>Skills</strong>：多个工具加提示词、按固定流程封装好的“连招”。按技能键是 Tool，一套连招是 Skill。</li>\n<li><strong>Planning</strong>：思考—行动—观察的循环，决定下一步调哪个工具、要不要重试。缺了它，前面五样就是散件。</li>\n</ol>\n<h3 id=\"42-术语对照表\">4.2 术语对照表</h3>\n<p>以后看文档碰到这些词，直接对号入座：</p>\n<table>\n<thead>\n<tr>\n<th>你平时的说法</th>\n<th>行业里的叫法</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>上下文</td>\n<td>Context Window / Working Memory / Short-term Memory</td>\n<td>短期，跟着当前会话走</td>\n</tr>\n<tr>\n<td>当前进行到哪一步</td>\n<td>State</td>\n<td>Agent 循环里的状态</td>\n</tr>\n<tr>\n<td>外部知识库</td>\n<td>RAG / Long-term Memory / External Knowledge</td>\n<td>长期，检索得来</td>\n</tr>\n<tr>\n<td>读写文件、跑命令</td>\n<td>Tools / Function Calling</td>\n<td>原子能力</td>\n</tr>\n<tr>\n<td>一套固定打法</td>\n<td>Skills</td>\n<td>工具的组合封装</td>\n</tr>\n<tr>\n<td>自己想下一步</td>\n<td>Planning / Agent Loop</td>\n<td>自主循环</td>\n</tr>\n</tbody>\n</table>\n<hr>\n<h2 id=\"5-顺着公式往深里挖\">5. 顺着公式往深里挖</h2>\n<h3 id=\"51-planningagent-怎么想事情\">5.1 Planning：Agent 怎么“想事情”</h3>\n<ol>\n<li><strong>ReAct（Reasoning + Acting）</strong>：边想边做。想一步 → 调一个工具 → 看结果 → 再想。终端里那种 Agent 基本都是这个路子，好处是灵活，坏处是容易绕远。</li>\n<li><strong>Plan-and-Execute</strong>：先一次性列好计划，再逐步执行。步骤清晰、可审计，但中途情况变了不太会随机应变。</li>\n<li><strong>Reflection</strong>：执行完自己回头检查一遍，不对就重来。加点这个，正确率通常能拉上去一截，代价是多烧 token。</li>\n</ol>\n<p>现实里的系统经常是混着用的：先 Plan 个大框架，具体每一步用 ReAct 跑，关键节点插一次 Reflection。</p>\n<h3 id=\"52-tools工具怎么被调用\">5.2 Tools：工具怎么被“调用”</h3>\n<p>模型本身不会执行代码，它只是输出一段结构化 JSON，说“我要调 read_file，参数是这个路径”。外层程序解析这段 JSON，真去读文件，再把结果塞回对话里。这套机制叫 <strong>Function Calling / Tool Use</strong>。</p>\n<p>两个实际问题：</p>\n<ol>\n<li>工具描述写得好不好，直接决定模型会不会用。描述就是工具的说明书，参数类型、取值范围都要说清。</li>\n<li>工具太多会把上下文撑爆。现在的做法是按需加载——先只给模型一份工具清单，它要用哪个再加载哪个的完整定义。Anthropic 把这个叫 Tool Search，MCP 那边也有类似的 Programmatic Tool Calling。</li>\n</ol>\n<h3 id=\"53-skills从按键到连招而且已经有标准了\">5.3 Skills：从“按键”到“连招”，而且已经有标准了</h3>\n<p>Skill 是“工具 + 提示词 + 固定执行逻辑”打包好的一坨东西。比如“代码审查”这个 Skill，内部会依次读文件、按规则检查、生成报告，你只需要喊它一声。</p>\n<p>值得记一笔的是：<strong>2025 年 12 月 Anthropic 把 Agent Skills 发布成了开放标准，2026 年也捐给了 Linux 基金会下的 AAIF</strong>。标准本身简单到离谱——一个 skill 就是一个文件夹，里面放一个 <code>SKILL.md</code>，写清楚这个技能干什么、什么时候用；需要的话再附脚本和参考材料。ChatGPT、Cursor、GitHub Copilot、VS Code 等 70 多个平台已经接了这套东西。</p>\n<p>所以你用的 WorkBuddy 里那些 skill（<code>/commit</code>、各类文档技能），本质就是这种文件夹。</p>\n<h3 id=\"54-memory记忆其实分好几层\">5.4 Memory：记忆其实分好几层</h3>\n<ol>\n<li><strong>工作记忆</strong>：就在 Context Window 里，会话结束基本就没了。</li>\n<li><strong>情节/经验记忆</strong>：把过去做过的事、踩过的坑存下来，下次遇到类似的直接调。有些 Agent 框架会专门做这个。</li>\n<li><strong>语义记忆（RAG）</strong>：外部文档、代码库、知识库，检索着用。</li>\n<li><strong>参数记忆</strong>：模型训练时学到的东西，改不了，除非微调。</li>\n</ol>\n<p>现在大家更爱说 <strong>Context Engineering（上下文工程）</strong>，而不是 Prompt Engineering——因为真正决定效果的是“在这个有限的窗口里，该放什么、不该放什么、什么时候压缩”。</p>\n<h3 id=\"55-rag完整链路和适用边界\">5.5 RAG：完整链路和适用边界</h3>\n<p>一次完整的 RAG：</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>文档切片 → 向量化 → 存向量库</span></span>\n<span class=\"line\"><span>用户提问 → 问题向量化 → 检索相似片段 → （可选）重排 → 连同问题喂给 LLM → 生成答案</span></span></code></pre>\n<p>什么时候别用 RAG：</p>\n<ol>\n<li>资料量很小，直接全塞进上下文就行，没必要上向量库。</li>\n<li>需要精确计算或严格推理的场景，检索来的片段反而干扰思路。</li>\n<li>实时性要求极高、数据每毫秒都在变——检索索引跟不上。</li>\n</ol>\n<hr>\n<h2 id=\"6-multi-agent从一个人到一个团队\">6. Multi-Agent：从一个人到一个团队</h2>\n<h3 id=\"61-为什么要上多个\">6.1 为什么要上多个</h3>\n<p>单 Agent 有两个硬伤：context 一长，注意力就散；领域一杂，就容易在不懂的地方胡说。拆成多个专门的 Agent，各自带各自的工具和上下文，能并行就并行。</p>\n<h3 id=\"62-四种主流拓扑\">6.2 四种主流拓扑</h3>\n<table>\n<thead>\n<tr>\n<th>模式</th>\n<th>控制怎么走</th>\n<th>适合</th>\n<th>主要风险</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Supervisor</td>\n<td>一个主管分派任务、汇总结果， worker 干完把控制权交回</td>\n<td>生产环境默认，任务能清晰拆分，要可审计</td>\n<td>主管成瓶颈，它拆错了全队跟着错</td>\n</tr>\n<tr>\n<td>Sequential Pipeline</td>\n<td>固定顺序，A 的输出给 B，B 给 C</td>\n<td>流程确定的多阶段活，比如草稿→检查→排版</td>\n<td>没有并行；前面错了后面全废</td>\n</tr>\n<tr>\n<td>Swarm / Handoff</td>\n<td>没有主管，Agent 之间直接交接，谁擅长谁上</td>\n<td>对话式路由、真正可并行的任务</td>\n<td>难调试，容易陷入互相踢皮球的死循环</td>\n</tr>\n<tr>\n<td>Blackboard</td>\n<td>各 Agent 读写一块共享工作区，满足条件就上手</td>\n<td>长时间异步、跨团队服务</td>\n<td>工具链不成熟，控制逻辑复杂</td>\n</tr>\n</tbody>\n</table>\n<p>还有两个常见的变体：</p>\n<ul>\n<li><strong>Hierarchical（层级）</strong>：主管上面还有主管，管一层层的团队。worker 超过五六个才值得加层，每加一层延迟和 token 都在涨。</li>\n<li><strong>Hybrid（混合）</strong>：现实系统基本都是混合的。最常见的是“主管 + 流水线”——主管决定走哪条流程，流程内部按固定步骤跑，兼顾灵活和可预测。</li>\n</ul>\n<p>各框架的叫法不统一：LangGraph 叫 supervisor，CrewAI 叫 hierarchical process，OpenAI Agents SDK 叫 manager/handoff，本质都是同一套东西，别被名词绕进去。</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"mermaid\"><code><span class=\"line\"><span style=\"color:#F97583\">flowchart</span><span style=\"color:#B392F0\"> LR</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">    U</span><span style=\"color:#F97583\">[</span><span style=\"color:#9ECBFF\">\"用户任务\"</span><span style=\"color:#F97583\">]</span><span style=\"color:#F97583\"> --&gt;</span><span style=\"color:#FFAB70\"> S</span><span style=\"color:#F97583\">[</span><span style=\"color:#9ECBFF\">\"主管 Agent&lt;br/&gt;拆解 + 分派\"</span><span style=\"color:#F97583\">]</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">    S </span><span style=\"color:#F97583\">--&gt;</span><span style=\"color:#FFAB70\"> W1</span><span style=\"color:#F97583\">[</span><span style=\"color:#9ECBFF\">\"检索员\"</span><span style=\"color:#F97583\">]</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">    S </span><span style=\"color:#F97583\">--&gt;</span><span style=\"color:#FFAB70\"> W2</span><span style=\"color:#F97583\">[</span><span style=\"color:#9ECBFF\">\"代码员\"</span><span style=\"color:#F97583\">]</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">    S </span><span style=\"color:#F97583\">--&gt;</span><span style=\"color:#FFAB70\"> W3</span><span style=\"color:#F97583\">[</span><span style=\"color:#9ECBFF\">\"测试员\"</span><span style=\"color:#F97583\">]</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">    W1 </span><span style=\"color:#F97583\">--&gt;</span><span style=\"color:#FFAB70\"> M</span><span style=\"color:#F97583\">[</span><span style=\"color:#9ECBFF\">\"汇总校验\"</span><span style=\"color:#F97583\">]</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">    W2 </span><span style=\"color:#F97583\">--&gt;</span><span style=\"color:#FFAB70\"> M</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">    W3 </span><span style=\"color:#F97583\">--&gt;</span><span style=\"color:#FFAB70\"> M</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">    M </span><span style=\"color:#F97583\">--&gt;</span><span style=\"color:#FFAB70\"> S</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">    S </span><span style=\"color:#F97583\">--&gt;</span><span style=\"color:#FFAB70\"> R</span><span style=\"color:#F97583\">[</span><span style=\"color:#9ECBFF\">\"最终交付\"</span><span style=\"color:#F97583\">]</span></span></code></pre>\n<h3 id=\"63-agent-之间怎么说话\">6.3 Agent 之间怎么说话</h3>\n<ol>\n<li>框架内部：靠消息传递和共享状态。handoff 时要把完整执行轨迹交过去，只传最后一条消息会丢掉中间的判断依据。</li>\n<li>跨框架、跨厂商：靠 <strong>A2A（Agent2Agent）协议</strong>。Google 2025 年 4 月发布，6 月捐给 Linux 基金会，用 HTTP、SSE、JSON-RPC，靠 “Agent Card” 声明各自能力。</li>\n</ol>\n<p>注意区分：<strong>MCP 管 Agent 怎么连工具和数据，A2A 管 Agent 怎么连别的 Agent。</strong></p>\n<h3 id=\"64-代价和坑比想象中大\">6.4 代价和坑，比想象中大</h3>\n<ol>\n<li><strong>烧钱</strong>：Anthropic 自己的数据，多 Agent 研究配置大约吃掉普通对话 15 倍的 token，单 Agent 同任务大约 4 倍。用在自己 API key 上，这个倍数直接变成账单。</li>\n<li><strong>上下文碎片化</strong>：各干各的，局部看都合理，合起来对不上。Cognition 那篇《Don’t Build Multi-Agents》举的例子是：一个子 Agent 画了超级马里奥风背景，另一个并行画了只风格不搭的鸟，主管拼不回去。</li>\n<li><strong>错误放大</strong>：交接点越多，错误传播越狠。有分析说没有明确拓扑的“agent 袋”比单个调教好的 Agent 错误率高得多，超过四五个 Agent 收益就开始被协调开销吃掉。</li>\n<li><strong>子任务互相依赖时反而更慢</strong>：多 Agent 的价值在并行。第三步必须拿到第二步的真实结果而不是摘要时（比如写代码），拆开就亏了。</li>\n</ol>\n<h3 id=\"65-什么时候别上\">6.5 什么时候别上</h3>\n<p>一个配好检索和几个工具的单 Agent，能覆盖大部分场景。上第二个 Agent 之前先问四个问题：</p>\n<ol>\n<li>子任务真的能并行吗？</li>\n<li>它们需要彼此的中间结果吗？</li>\n<li>出错了能定位到哪个 Agent 吗？</li>\n<li>多花的 token 换来什么可测的收益？</li>\n</ol>\n<p>答不上来就别上。</p>\n<hr>\n<h2 id=\"7-mcp工具的统一插座\">7. MCP：工具的统一插座</h2>\n<h3 id=\"71-它解决什么问题\">7.1 它解决什么问题</h3>\n<p>没有 MCP 的时候，每个 AI 应用要为每个工具写一遍适配，N 个应用配 M 个工具就是 N×M 份代码。MCP 把这个变成 N+M：工具方按协议写一次 server，应用方按协议写一次 client。</p>\n<p>官方的比喻是 USB-C：不管什么设备，插上就能用。</p>\n<h3 id=\"72-三个角色\">7.2 三个角色</h3>\n<ol>\n<li><strong>Host</strong>：AI 应用本体（Claude Code、VS Code、你自己的 Agent 程序），负责管权限、管授权、聚合上下文。</li>\n<li><strong>Client</strong>：Host 为每一个 Server 创建一个 Client，一对一连接，负责传消息、维持安全边界。</li>\n<li><strong>Server</strong>：暴露具体能力的小程序，可以是本地进程，也可以是远程服务。</li>\n</ol>\n<p>一个关键设计：<strong>Server 看不到完整对话，也看不到别的 Server。</strong> 它只拿到自己需要的那点上下文，边界由 Host 把着。</p>\n<h3 id=\"73-三种原语\">7.3 三种原语</h3>\n<table>\n<thead>\n<tr>\n<th>原语</th>\n<th>作用</th>\n<th>类比</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Tools</td>\n<td>可执行函数，AI 调了会真的做事（查数据库、改文件）</td>\n<td>手</td>\n</tr>\n<tr>\n<td>Resources</td>\n<td>提供上下文的数据源（文件内容、数据库记录）</td>\n<td>眼睛/资料</td>\n</tr>\n<tr>\n<td>Prompts</td>\n<td>可复用的提示词模板</td>\n<td>话术模板</td>\n</tr>\n</tbody>\n</table>\n<p>客户端这边还有一个 <strong>Elicitation</strong>，允许 Server 反过来向用户要信息或要确认。</p>\n<h3 id=\"74-底层和-2026-年的变化\">7.4 底层和 2026 年的变化</h3>\n<ol>\n<li>消息格式是 <strong>JSON-RPC 2.0</strong>。</li>\n<li>最新版规范（2026-07-28）改成<strong>无状态协议</strong>：每个请求自带版本号和能力声明，Server 可以独立处理，不用维护会话状态。</li>\n<li>加了一个 <code>server/discover</code> 握手，Client 先问“你支持啥”，Server 声明能力，再按能力开放对应功能。</li>\n<li>Roots 和 Sampling 这两个客户端能力在 2026-07-28 版本里<strong>已弃用</strong>；新实现直接传路径参数、直接调模型 API，日志走 stderr 或 OpenTelemetry。</li>\n<li>加了 Tasks 扩展，长任务返回一个句柄，Client 可以轮询结果。</li>\n<li>工具变更支持通知推送，不用每次重新全量发现。</li>\n</ol>\n<h3 id=\"75-和-function-callinga2a-的区别\">7.5 和 Function Calling、A2A 的区别</h3>\n<table>\n<thead>\n<tr>\n<th></th>\n<th>管什么</th>\n<th>范围</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Function Calling</td>\n<td>模型怎么表达“我要调某个函数”</td>\n<td>单个应用内部</td>\n</tr>\n<tr>\n<td>MCP</td>\n<td>Agent 怎么连外部工具、数据、提示词</td>\n<td>跨应用、跨语言的开放协议</td>\n</tr>\n<tr>\n<td>A2A</td>\n<td>Agent 之间怎么发现彼此、交接任务</td>\n<td>Agent 对 Agent</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"76-现状\">7.6 现状</h3>\n<ol>\n<li>MCP 由 Anthropic 2024 年底推出，后来<strong>捐给了 Linux 基金会下的 Agentic AI Foundation（AAIF）</strong>。AAIF 由 Anthropic、Block、OpenAI 共同发起，Google、Microsoft、AWS、Cloudflare、Bloomberg 支持。</li>\n<li>公开 MCP Server 超过一万个，ChatGPT、Cursor、Gemini、Copilot、VS Code 都接了。</li>\n<li>主流语言都有官方 SDK，Python 和 TypeScript 的 SDK 月下载量过亿。</li>\n<li>Skill 标准也在同一个基金会里（见 4.3）。</li>\n</ol>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"mermaid\"><code><span class=\"line\"><span style=\"color:#F97583\">flowchart</span><span style=\"color:#B392F0\"> TB</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">    H</span><span style=\"color:#F97583\">[</span><span style=\"color:#9ECBFF\">\"Host&lt;br/&gt;你的 AI 应用\"</span><span style=\"color:#F97583\">]</span><span style=\"color:#F97583\"> --&gt;</span><span style=\"color:#FFAB70\"> C1</span><span style=\"color:#F97583\">[</span><span style=\"color:#9ECBFF\">\"Client 1\"</span><span style=\"color:#F97583\">]</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">    H </span><span style=\"color:#F97583\">--&gt;</span><span style=\"color:#FFAB70\"> C2</span><span style=\"color:#F97583\">[</span><span style=\"color:#9ECBFF\">\"Client 2\"</span><span style=\"color:#F97583\">]</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">    H </span><span style=\"color:#F97583\">--&gt;</span><span style=\"color:#FFAB70\"> C3</span><span style=\"color:#F97583\">[</span><span style=\"color:#9ECBFF\">\"Client 3\"</span><span style=\"color:#F97583\">]</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">    C1 </span><span style=\"color:#F97583\">--&gt;</span><span style=\"color:#FFAB70\"> S1</span><span style=\"color:#F97583\">[</span><span style=\"color:#9ECBFF\">\"Server：文件系统\"</span><span style=\"color:#F97583\">]</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">    C2 </span><span style=\"color:#F97583\">--&gt;</span><span style=\"color:#FFAB70\"> S2</span><span style=\"color:#F97583\">[</span><span style=\"color:#9ECBFF\">\"Server：数据库\"</span><span style=\"color:#F97583\">]</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">    C3 </span><span style=\"color:#F97583\">--&gt;</span><span style=\"color:#FFAB70\"> S3</span><span style=\"color:#F97583\">[</span><span style=\"color:#9ECBFF\">\"Server：第三方 API\"</span><span style=\"color:#F97583\">]</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">    S1 </span><span style=\"color:#F97583\">-.</span><span style=\"color:#9ECBFF\">只给必要上下文</span><span style=\"color:#F97583\">.-&gt;</span><span style=\"color:#FFAB70\"> H</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">    S2 </span><span style=\"color:#F97583\">-.</span><span style=\"color:#9ECBFF\">只给必要上下文</span><span style=\"color:#F97583\">.-&gt;</span><span style=\"color:#FFAB70\"> H</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">    S3 </span><span style=\"color:#F97583\">-.</span><span style=\"color:#9ECBFF\">只给必要上下文</span><span style=\"color:#F97583\">.-&gt;</span><span style=\"color:#FFAB70\"> H</span></span></code></pre>\n<hr>\n<h2 id=\"8-串回-distriagenda\">8. 串回 DistriAgenda</h2>\n<p>这套东西落到毕设里，比较现实的用法：</p>\n<ol>\n<li><strong>开发期</strong>：用终端 Agent 干重复的活——批量改包名、补注释、找空指针、生成 CRUD 骨架。改完必须自己 review diff，别让它直接碰数据库迁移脚本。</li>\n<li><strong>RAG 用得上</strong>：如果项目里要做“自然语言查日程/查任务”这类功能，RAG 比微调现实得多。先把数据结构和常用查询说明切成片段建索引，比让模型裸猜强。</li>\n<li><strong>MCP 可以当加分项</strong>：毕设里做一个简化版 MCP Server，把日程查询能力暴露出去，让外部 AI 客户端能调。这个在答辩时比单纯 CRUD 有说服力，而且工作量不大。</li>\n<li><strong>Multi-Agent 先别碰</strong>：毕设场景里任务依赖强、并行收益低，加多 Agent 只会让调试变地狱。单 Agent + 好工具 + 好上下文，够了。</li>\n</ol>\n<hr>\n<h2 id=\"9-一页速查\">9. 一页速查</h2>\n<ol>\n<li><strong>LLM</strong> = 脑子，只能说不能做。</li>\n<li><strong>RAG</strong> = 开卷资料，解决“不知道”和“胡说”。</li>\n<li><strong>Agent</strong> = LLM + 记忆 + 工具 + 技能 + 规划循环，能自己把活干完。</li>\n<li><strong>Context Window / Working Memory</strong> = 短期记忆；<strong>RAG</strong> = 长期记忆。</li>\n<li><strong>Tools</strong> = 原子按键；<strong>Skills</strong> = 连招；<strong>Planning</strong> = 自主循环。</li>\n<li><strong>Multi-Agent</strong> = 团队，默认用 Supervisor，别一上来就 Swarm。</li>\n<li><strong>MCP</strong> = Agent 接工具的统一插座；<strong>A2A</strong> = Agent 接 Agent 的协议。</li>\n<li><strong>判断要不要上复杂度</strong>：先问“并行收益是否大于协调成本”，大部分时候答案是否。</li>\n</ol>\n<hr>\n<h2 id=\"参考来源\">参考来源</h2>\n<ul>\n<li>MCP 官网与架构文档：modelcontextprotocol.io</li>\n<li>Anthropic：Donating the Model Context Protocol and establishing the Agentic AI Foundation</li>\n<li>Anthropic：Donating Agent Skills to the Agentic AI Foundation</li>\n<li>多 Agent 编排模式与成本数据：2026 年行业工程实践综述（LangGraph / OpenAI Agents SDK / CrewAI 文档及 Cognition《Don’t Build Multi-Agents》）</li>\n</ul>\n";
var frontmatter = {
	"title": "Agent 概念笔记：从 LLM 到 MCP 的一层层拆解",
	"date": "2026-11-20",
	"description": "从 AtomCode 的安装按钮开始，一路拆到 LLM、RAG、Skill、Multi-Agent、MCP，把这几个经常混着说的词按层理清楚。",
	"tags": [
		"AI",
		"Agent",
		"MCP",
		"RAG"
	],
	"series": "AI 笔记",
	"seriesNo": 1,
	"readMin": 15
};
var file = "D:/AI系统缓存目录/WorkBuddy/spaces/2026_11_20_18-28-20/portfolio/src/content/posts/agent-concepts.md";
var url = void 0;
function rawContent() {
	return "   \r\n                                      \r\n                  \r\n                                                                                      \r\n                                   \r\n               \r\n           \r\n           \r\n   \r\n从 AtomCode 的安装按钮开始，一路拆到 LLM、RAG、Skill、Multi-Agent、MCP。\r\n\r\n最后更新：2026-11-20\r\n\r\n---\r\n\r\n## 1. 先看全貌\r\n\r\n这几个词经常混在一起说，其实它们是一层套一层的：\r\n\r\n```mermaid\r\nflowchart TB\r\n    subgraph L1[\"最里面：LLM\"]\r\n        A1[\"大语言模型<br/>只负责想，不负责做\"]\r\n    end\r\n    subgraph L2[\"往外一层：Agent\"]\r\n        A2[\"LLM + 记忆 + 工具 + 规划<br/>一个人干活\"]\r\n    end\r\n    subgraph L3[\"再往外：Multi-Agent\"]\r\n        A3[\"多个 Agent 分工协作<br/>一个团队干活\"]\r\n    end\r\n    A1 --> A2 --> A3\r\n    M1[\"MCP：Agent 接工具的统一插座\"] -.接.-> A2\r\n    M2[\"A2A：Agent 接 Agent 的统一协议\"] -.接.-> A3\r\n```\r\n\r\n一句话版本：**LLM 给脑子，Agent 给手脚，Multi-Agent 给组织，MCP/A2A 给接口标准。**\r\n\r\n---\r\n\r\n## 2. AtomCode：从安装按钮说起\r\n\r\n### 2.1 五种安装方式，区别只是\"怎么把软件弄到本地\"\r\n\r\n| 方式 | 具体做什么 | 适合谁 |\r\n| --- | --- | --- |\r\n| curl 一键脚本 | 跑一条命令，自动识别系统和芯片、下载预编译包、配环境变量 | 大多数人，官方推荐 |\r\n| npm | `npm install -g`，要求本机有 Node.js 18+ | 已经在用 Node 生态的人 |\r\n| brew | `brew install --cask atomcode` | macOS 用户，方便后续统一升级 |\r\n| 源码构建 | clone 代码，用 Cargo 自己编译，要求 Rust 1.88+ | 要改源码、要最新开发版 |\r\n| 下载二进制 | 去 Releases 手动下压缩包，自己放进 PATH | 网络受限、环境特殊 |\r\n\r\n装完跑 `atomcode --version`，能出版本号就算成了。\r\n\r\n### 2.2 真正的分界线不在安装方式，在\"大脑在哪\"\r\n\r\n这里最容易搞混。安装方式决定的只是**客户端装在哪**，答案永远是本地。而\"云端还是本地\"问的是**模型在哪算**：\r\n\r\n1. 软件本体（手脚）：一定在你电脑上，负责读文件、跑命令。\r\n2. AI 大脑（模型）：看第 02 步的 provider 配置。\r\n   - 选 DeepSeek / GLM / Qwen：代码发到人家服务器算，要联网，按量付费或用免费额度。\r\n   - 选 Ollama：模型下载到自己电脑跑，断网也能用，数据不出门，但吃显卡。\r\n\r\n打个比方：安装方式是\"怎么把播放器装进电脑\"，provider 是\"片子从哪来\"——看在线流媒体，还是放本地下载的 MP4。播放器怎么装的，跟片子从哪来没关系。\r\n\r\n---\r\n\r\n## 3. AI、LLM、RAG、Agent 四个词的关系\r\n\r\n### 3.1 LLM：只有脑子的百事通\r\n\r\nLLM（Large Language Model，大语言模型）就是 ChatGPT、DeepSeek、GLM、千问这些。它知识多、能推理，但：\r\n\r\n1. 知识停在训练截止那天；\r\n2. 不知道你的私有代码和内部文档；\r\n3. 没有手脚，只能输出文字，问一句答一句。\r\n\r\n问它\"这 bug 怎么回事\"，它给你一段建议代码，然后你自己去复制、粘贴、运行。\r\n\r\n### 3.2 RAG：给大脑一本开卷资料\r\n\r\nRAG（Retrieval-Augmented Generation，检索增强生成）不是模型，是一套流程：**先从外部资料库检索，再把检索结果连同问题一起喂给模型，让它照着资料答。**\r\n\r\n- 纯 LLM = 闭卷考试，全凭记忆。\r\n- LLM + RAG = 开卷考试，允许先翻书再写答案。\r\n\r\n检索那一步一般在向量数据库里做（把文档切成片段、转成向量、按相似度找），所以 RAG 常被叫作\"外挂知识库\"或\"长期记忆\"。\r\n\r\n### 3.3 Agent：脑子加上手脚，还能自己循环\r\n\r\nAgent 是你给它一个目标，它自己拆步骤、调工具、看结果、修正，直到把活干完。你不用告诉它每一步怎么做。\r\n\r\n还是修 bug 那个例子：\r\n\r\n1. 只有 LLM：泛泛说\"可能少了个分号\"。\r\n2. LLM + RAG：查了内部知识库，告诉你\"是上周那个接口改了，改第 20 行\"。\r\n3. LLM + RAG + Agent：查完直接打开你的文件，改了第 20 行，跑了测试，最后报一句\"修好了\"。\r\n\r\n### 3.4 三者不是并列，是包含\r\n\r\n| 概念 | 位置 | 类比 |\r\n| --- | --- | --- |\r\n| LLM | 底层能力 | 发动机 |\r\n| RAG | 让 LLM 少犯错的外挂 | 导航地图 |\r\n| Agent | 把上面这些组装起来干活的系统 | 整辆自动驾驶汽车 |\r\n\r\n---\r\n\r\n## 4. 公式进化史\r\n\r\n这条线是从你那句总结一步步长出来的。\r\n\r\n**v1（最初版）**\r\n\r\n```\r\nAgent = AI大模型（大脑） + 记忆（上下文） + 工具（读写文件/终端执行） + 规划执行能力（自主循环）\r\n```\r\n\r\n**v2（把 RAG 明确写进去）**\r\n\r\n```\r\nAgent = LLM（核心大脑） + 上下文记忆（短期） + RAG（检索外部知识/长期） + 工具（手脚） + 规划执行能力（自主循环）\r\n```\r\n\r\n**v3（加上 Skill，换成行业正经术语）**\r\n\r\n```\r\nAgent = LLM\r\n      + Working Memory / Context Window（短期记忆）\r\n      + RAG（长期记忆）\r\n      + Tools（基础工具）\r\n      + Skills（技能包）\r\n      + Planning（规划循环）\r\n```\r\n\r\n### 4.1 六个部件分别干什么\r\n\r\n1. **LLM**：理解指令、做判断。缺了它，剩下全是死代码。\r\n2. **Working Memory / Context Window**：当前对话历史、刚调过的工具、刚看到的报错都存在这。窗口满了就得压缩或丢弃，这就是\"上下文工程\"要管的事。\r\n3. **RAG**：补模型不知道的知识。缺了它，模型遇到私有数据就只能瞎猜。\r\n4. **Tools**：原子操作，比如读文件、写文件、执行终端命令、发 HTTP 请求。相当于手指头。\r\n5. **Skills**：多个工具加提示词、按固定流程封装好的\"连招\"。按技能键是 Tool，一套连招是 Skill。\r\n6. **Planning**：思考—行动—观察的循环，决定下一步调哪个工具、要不要重试。缺了它，前面五样就是散件。\r\n\r\n### 4.2 术语对照表\r\n\r\n以后看文档碰到这些词，直接对号入座：\r\n\r\n| 你平时的说法 | 行业里的叫法 | 说明 |\r\n| --- | --- | --- |\r\n| 上下文 | Context Window / Working Memory / Short-term Memory | 短期，跟着当前会话走 |\r\n| 当前进行到哪一步 | State | Agent 循环里的状态 |\r\n| 外部知识库 | RAG / Long-term Memory / External Knowledge | 长期，检索得来 |\r\n| 读写文件、跑命令 | Tools / Function Calling | 原子能力 |\r\n| 一套固定打法 | Skills | 工具的组合封装 |\r\n| 自己想下一步 | Planning / Agent Loop | 自主循环 |\r\n\r\n---\r\n\r\n## 5. 顺着公式往深里挖\r\n\r\n### 5.1 Planning：Agent 怎么\"想事情\"\r\n\r\n1. **ReAct（Reasoning + Acting）**：边想边做。想一步 → 调一个工具 → 看结果 → 再想。终端里那种 Agent 基本都是这个路子，好处是灵活，坏处是容易绕远。\r\n2. **Plan-and-Execute**：先一次性列好计划，再逐步执行。步骤清晰、可审计，但中途情况变了不太会随机应变。\r\n3. **Reflection**：执行完自己回头检查一遍，不对就重来。加点这个，正确率通常能拉上去一截，代价是多烧 token。\r\n\r\n现实里的系统经常是混着用的：先 Plan 个大框架，具体每一步用 ReAct 跑，关键节点插一次 Reflection。\r\n\r\n### 5.2 Tools：工具怎么被\"调用\"\r\n\r\n模型本身不会执行代码，它只是输出一段结构化 JSON，说\"我要调 read_file，参数是这个路径\"。外层程序解析这段 JSON，真去读文件，再把结果塞回对话里。这套机制叫 **Function Calling / Tool Use**。\r\n\r\n两个实际问题：\r\n\r\n1. 工具描述写得好不好，直接决定模型会不会用。描述就是工具的说明书，参数类型、取值范围都要说清。\r\n2. 工具太多会把上下文撑爆。现在的做法是按需加载——先只给模型一份工具清单，它要用哪个再加载哪个的完整定义。Anthropic 把这个叫 Tool Search，MCP 那边也有类似的 Programmatic Tool Calling。\r\n\r\n### 5.3 Skills：从\"按键\"到\"连招\"，而且已经有标准了\r\n\r\nSkill 是\"工具 + 提示词 + 固定执行逻辑\"打包好的一坨东西。比如\"代码审查\"这个 Skill，内部会依次读文件、按规则检查、生成报告，你只需要喊它一声。\r\n\r\n值得记一笔的是：**2025 年 12 月 Anthropic 把 Agent Skills 发布成了开放标准，2026 年也捐给了 Linux 基金会下的 AAIF**。标准本身简单到离谱——一个 skill 就是一个文件夹，里面放一个 `SKILL.md`，写清楚这个技能干什么、什么时候用；需要的话再附脚本和参考材料。ChatGPT、Cursor、GitHub Copilot、VS Code 等 70 多个平台已经接了这套东西。\r\n\r\n所以你用的 WorkBuddy 里那些 skill（`/commit`、各类文档技能），本质就是这种文件夹。\r\n\r\n### 5.4 Memory：记忆其实分好几层\r\n\r\n1. **工作记忆**：就在 Context Window 里，会话结束基本就没了。\r\n2. **情节/经验记忆**：把过去做过的事、踩过的坑存下来，下次遇到类似的直接调。有些 Agent 框架会专门做这个。\r\n3. **语义记忆（RAG）**：外部文档、代码库、知识库，检索着用。\r\n4. **参数记忆**：模型训练时学到的东西，改不了，除非微调。\r\n\r\n现在大家更爱说 **Context Engineering（上下文工程）**，而不是 Prompt Engineering——因为真正决定效果的是\"在这个有限的窗口里，该放什么、不该放什么、什么时候压缩\"。\r\n\r\n### 5.5 RAG：完整链路和适用边界\r\n\r\n一次完整的 RAG：\r\n\r\n```\r\n文档切片 → 向量化 → 存向量库\r\n用户提问 → 问题向量化 → 检索相似片段 → （可选）重排 → 连同问题喂给 LLM → 生成答案\r\n```\r\n\r\n什么时候别用 RAG：\r\n\r\n1. 资料量很小，直接全塞进上下文就行，没必要上向量库。\r\n2. 需要精确计算或严格推理的场景，检索来的片段反而干扰思路。\r\n3. 实时性要求极高、数据每毫秒都在变——检索索引跟不上。\r\n\r\n---\r\n\r\n## 6. Multi-Agent：从一个人到一个团队\r\n\r\n### 6.1 为什么要上多个\r\n\r\n单 Agent 有两个硬伤：context 一长，注意力就散；领域一杂，就容易在不懂的地方胡说。拆成多个专门的 Agent，各自带各自的工具和上下文，能并行就并行。\r\n\r\n### 6.2 四种主流拓扑\r\n\r\n| 模式 | 控制怎么走 | 适合 | 主要风险 |\r\n| --- | --- | --- | --- |\r\n| Supervisor | 一个主管分派任务、汇总结果， worker 干完把控制权交回 | 生产环境默认，任务能清晰拆分，要可审计 | 主管成瓶颈，它拆错了全队跟着错 |\r\n| Sequential Pipeline | 固定顺序，A 的输出给 B，B 给 C | 流程确定的多阶段活，比如草稿→检查→排版 | 没有并行；前面错了后面全废 |\r\n| Swarm / Handoff | 没有主管，Agent 之间直接交接，谁擅长谁上 | 对话式路由、真正可并行的任务 | 难调试，容易陷入互相踢皮球的死循环 |\r\n| Blackboard | 各 Agent 读写一块共享工作区，满足条件就上手 | 长时间异步、跨团队服务 | 工具链不成熟，控制逻辑复杂 |\r\n\r\n还有两个常见的变体：\r\n\r\n- **Hierarchical（层级）**：主管上面还有主管，管一层层的团队。worker 超过五六个才值得加层，每加一层延迟和 token 都在涨。\r\n- **Hybrid（混合）**：现实系统基本都是混合的。最常见的是\"主管 + 流水线\"——主管决定走哪条流程，流程内部按固定步骤跑，兼顾灵活和可预测。\r\n\r\n各框架的叫法不统一：LangGraph 叫 supervisor，CrewAI 叫 hierarchical process，OpenAI Agents SDK 叫 manager/handoff，本质都是同一套东西，别被名词绕进去。\r\n\r\n```mermaid\r\nflowchart LR\r\n    U[\"用户任务\"] --> S[\"主管 Agent<br/>拆解 + 分派\"]\r\n    S --> W1[\"检索员\"]\r\n    S --> W2[\"代码员\"]\r\n    S --> W3[\"测试员\"]\r\n    W1 --> M[\"汇总校验\"]\r\n    W2 --> M\r\n    W3 --> M\r\n    M --> S\r\n    S --> R[\"最终交付\"]\r\n```\r\n\r\n### 6.3 Agent 之间怎么说话\r\n\r\n1. 框架内部：靠消息传递和共享状态。handoff 时要把完整执行轨迹交过去，只传最后一条消息会丢掉中间的判断依据。\r\n2. 跨框架、跨厂商：靠 **A2A（Agent2Agent）协议**。Google 2025 年 4 月发布，6 月捐给 Linux 基金会，用 HTTP、SSE、JSON-RPC，靠 \"Agent Card\" 声明各自能力。\r\n\r\n注意区分：**MCP 管 Agent 怎么连工具和数据，A2A 管 Agent 怎么连别的 Agent。**\r\n\r\n### 6.4 代价和坑，比想象中大\r\n\r\n1. **烧钱**：Anthropic 自己的数据，多 Agent 研究配置大约吃掉普通对话 15 倍的 token，单 Agent 同任务大约 4 倍。用在自己 API key 上，这个倍数直接变成账单。\r\n2. **上下文碎片化**：各干各的，局部看都合理，合起来对不上。Cognition 那篇《Don't Build Multi-Agents》举的例子是：一个子 Agent 画了超级马里奥风背景，另一个并行画了只风格不搭的鸟，主管拼不回去。\r\n3. **错误放大**：交接点越多，错误传播越狠。有分析说没有明确拓扑的\"agent 袋\"比单个调教好的 Agent 错误率高得多，超过四五个 Agent 收益就开始被协调开销吃掉。\r\n4. **子任务互相依赖时反而更慢**：多 Agent 的价值在并行。第三步必须拿到第二步的真实结果而不是摘要时（比如写代码），拆开就亏了。\r\n\r\n### 6.5 什么时候别上\r\n\r\n一个配好检索和几个工具的单 Agent，能覆盖大部分场景。上第二个 Agent 之前先问四个问题：\r\n\r\n1. 子任务真的能并行吗？\r\n2. 它们需要彼此的中间结果吗？\r\n3. 出错了能定位到哪个 Agent 吗？\r\n4. 多花的 token 换来什么可测的收益？\r\n\r\n答不上来就别上。\r\n\r\n---\r\n\r\n## 7. MCP：工具的统一插座\r\n\r\n### 7.1 它解决什么问题\r\n\r\n没有 MCP 的时候，每个 AI 应用要为每个工具写一遍适配，N 个应用配 M 个工具就是 N×M 份代码。MCP 把这个变成 N+M：工具方按协议写一次 server，应用方按协议写一次 client。\r\n\r\n官方的比喻是 USB-C：不管什么设备，插上就能用。\r\n\r\n### 7.2 三个角色\r\n\r\n1. **Host**：AI 应用本体（Claude Code、VS Code、你自己的 Agent 程序），负责管权限、管授权、聚合上下文。\r\n2. **Client**：Host 为每一个 Server 创建一个 Client，一对一连接，负责传消息、维持安全边界。\r\n3. **Server**：暴露具体能力的小程序，可以是本地进程，也可以是远程服务。\r\n\r\n一个关键设计：**Server 看不到完整对话，也看不到别的 Server。** 它只拿到自己需要的那点上下文，边界由 Host 把着。\r\n\r\n### 7.3 三种原语\r\n\r\n| 原语 | 作用 | 类比 |\r\n| --- | --- | --- |\r\n| Tools | 可执行函数，AI 调了会真的做事（查数据库、改文件） | 手 |\r\n| Resources | 提供上下文的数据源（文件内容、数据库记录） | 眼睛/资料 |\r\n| Prompts | 可复用的提示词模板 | 话术模板 |\r\n\r\n客户端这边还有一个 **Elicitation**，允许 Server 反过来向用户要信息或要确认。\r\n\r\n### 7.4 底层和 2026 年的变化\r\n\r\n1. 消息格式是 **JSON-RPC 2.0**。\r\n2. 最新版规范（2026-07-28）改成**无状态协议**：每个请求自带版本号和能力声明，Server 可以独立处理，不用维护会话状态。\r\n3. 加了一个 `server/discover` 握手，Client 先问\"你支持啥\"，Server 声明能力，再按能力开放对应功能。\r\n4. Roots 和 Sampling 这两个客户端能力在 2026-07-28 版本里**已弃用**；新实现直接传路径参数、直接调模型 API，日志走 stderr 或 OpenTelemetry。\r\n5. 加了 Tasks 扩展，长任务返回一个句柄，Client 可以轮询结果。\r\n6. 工具变更支持通知推送，不用每次重新全量发现。\r\n\r\n### 7.5 和 Function Calling、A2A 的区别\r\n\r\n| | 管什么 | 范围 |\r\n| --- | --- | --- |\r\n| Function Calling | 模型怎么表达\"我要调某个函数\" | 单个应用内部 |\r\n| MCP | Agent 怎么连外部工具、数据、提示词 | 跨应用、跨语言的开放协议 |\r\n| A2A | Agent 之间怎么发现彼此、交接任务 | Agent 对 Agent |\r\n\r\n### 7.6 现状\r\n\r\n1. MCP 由 Anthropic 2024 年底推出，后来**捐给了 Linux 基金会下的 Agentic AI Foundation（AAIF）**。AAIF 由 Anthropic、Block、OpenAI 共同发起，Google、Microsoft、AWS、Cloudflare、Bloomberg 支持。\r\n2. 公开 MCP Server 超过一万个，ChatGPT、Cursor、Gemini、Copilot、VS Code 都接了。\r\n3. 主流语言都有官方 SDK，Python 和 TypeScript 的 SDK 月下载量过亿。\r\n4. Skill 标准也在同一个基金会里（见 4.3）。\r\n\r\n```mermaid\r\nflowchart TB\r\n    H[\"Host<br/>你的 AI 应用\"] --> C1[\"Client 1\"]\r\n    H --> C2[\"Client 2\"]\r\n    H --> C3[\"Client 3\"]\r\n    C1 --> S1[\"Server：文件系统\"]\r\n    C2 --> S2[\"Server：数据库\"]\r\n    C3 --> S3[\"Server：第三方 API\"]\r\n    S1 -.只给必要上下文.-> H\r\n    S2 -.只给必要上下文.-> H\r\n    S3 -.只给必要上下文.-> H\r\n```\r\n\r\n---\r\n\r\n## 8. 串回 DistriAgenda\r\n\r\n这套东西落到毕设里，比较现实的用法：\r\n\r\n1. **开发期**：用终端 Agent 干重复的活——批量改包名、补注释、找空指针、生成 CRUD 骨架。改完必须自己 review diff，别让它直接碰数据库迁移脚本。\r\n2. **RAG 用得上**：如果项目里要做\"自然语言查日程/查任务\"这类功能，RAG 比微调现实得多。先把数据结构和常用查询说明切成片段建索引，比让模型裸猜强。\r\n3. **MCP 可以当加分项**：毕设里做一个简化版 MCP Server，把日程查询能力暴露出去，让外部 AI 客户端能调。这个在答辩时比单纯 CRUD 有说服力，而且工作量不大。\r\n4. **Multi-Agent 先别碰**：毕设场景里任务依赖强、并行收益低，加多 Agent 只会让调试变地狱。单 Agent + 好工具 + 好上下文，够了。\r\n\r\n---\r\n\r\n## 9. 一页速查\r\n\r\n1. **LLM** = 脑子，只能说不能做。\r\n2. **RAG** = 开卷资料，解决\"不知道\"和\"胡说\"。\r\n3. **Agent** = LLM + 记忆 + 工具 + 技能 + 规划循环，能自己把活干完。\r\n4. **Context Window / Working Memory** = 短期记忆；**RAG** = 长期记忆。\r\n5. **Tools** = 原子按键；**Skills** = 连招；**Planning** = 自主循环。\r\n6. **Multi-Agent** = 团队，默认用 Supervisor，别一上来就 Swarm。\r\n7. **MCP** = Agent 接工具的统一插座；**A2A** = Agent 接 Agent 的协议。\r\n8. **判断要不要上复杂度**：先问\"并行收益是否大于协调成本\"，大部分时候答案是否。\r\n\r\n---\r\n\r\n## 参考来源\r\n\r\n- MCP 官网与架构文档：modelcontextprotocol.io\r\n- Anthropic：Donating the Model Context Protocol and establishing the Agentic AI Foundation\r\n- Anthropic：Donating Agent Skills to the Agentic AI Foundation\r\n- 多 Agent 编排模式与成本数据：2026 年行业工程实践综述（LangGraph / OpenAI Agents SDK / CrewAI 文档及 Cognition《Don't Build Multi-Agents》）\r\n";
}
async function compiledContent() {
	return await html();
}
function getHeadings() {
	return [
		{
			"depth": 2,
			"slug": "1-先看全貌",
			"text": "1. 先看全貌"
		},
		{
			"depth": 2,
			"slug": "2-atomcode从安装按钮说起",
			"text": "2. AtomCode：从安装按钮说起"
		},
		{
			"depth": 3,
			"slug": "21-五种安装方式区别只是怎么把软件弄到本地",
			"text": "2.1 五种安装方式，区别只是“怎么把软件弄到本地”"
		},
		{
			"depth": 3,
			"slug": "22-真正的分界线不在安装方式在大脑在哪",
			"text": "2.2 真正的分界线不在安装方式，在“大脑在哪”"
		},
		{
			"depth": 2,
			"slug": "3-aillmragagent-四个词的关系",
			"text": "3. AI、LLM、RAG、Agent 四个词的关系"
		},
		{
			"depth": 3,
			"slug": "31-llm只有脑子的百事通",
			"text": "3.1 LLM：只有脑子的百事通"
		},
		{
			"depth": 3,
			"slug": "32-rag给大脑一本开卷资料",
			"text": "3.2 RAG：给大脑一本开卷资料"
		},
		{
			"depth": 3,
			"slug": "33-agent脑子加上手脚还能自己循环",
			"text": "3.3 Agent：脑子加上手脚，还能自己循环"
		},
		{
			"depth": 3,
			"slug": "34-三者不是并列是包含",
			"text": "3.4 三者不是并列，是包含"
		},
		{
			"depth": 2,
			"slug": "4-公式进化史",
			"text": "4. 公式进化史"
		},
		{
			"depth": 3,
			"slug": "41-六个部件分别干什么",
			"text": "4.1 六个部件分别干什么"
		},
		{
			"depth": 3,
			"slug": "42-术语对照表",
			"text": "4.2 术语对照表"
		},
		{
			"depth": 2,
			"slug": "5-顺着公式往深里挖",
			"text": "5. 顺着公式往深里挖"
		},
		{
			"depth": 3,
			"slug": "51-planningagent-怎么想事情",
			"text": "5.1 Planning：Agent 怎么“想事情”"
		},
		{
			"depth": 3,
			"slug": "52-tools工具怎么被调用",
			"text": "5.2 Tools：工具怎么被“调用”"
		},
		{
			"depth": 3,
			"slug": "53-skills从按键到连招而且已经有标准了",
			"text": "5.3 Skills：从“按键”到“连招”，而且已经有标准了"
		},
		{
			"depth": 3,
			"slug": "54-memory记忆其实分好几层",
			"text": "5.4 Memory：记忆其实分好几层"
		},
		{
			"depth": 3,
			"slug": "55-rag完整链路和适用边界",
			"text": "5.5 RAG：完整链路和适用边界"
		},
		{
			"depth": 2,
			"slug": "6-multi-agent从一个人到一个团队",
			"text": "6. Multi-Agent：从一个人到一个团队"
		},
		{
			"depth": 3,
			"slug": "61-为什么要上多个",
			"text": "6.1 为什么要上多个"
		},
		{
			"depth": 3,
			"slug": "62-四种主流拓扑",
			"text": "6.2 四种主流拓扑"
		},
		{
			"depth": 3,
			"slug": "63-agent-之间怎么说话",
			"text": "6.3 Agent 之间怎么说话"
		},
		{
			"depth": 3,
			"slug": "64-代价和坑比想象中大",
			"text": "6.4 代价和坑，比想象中大"
		},
		{
			"depth": 3,
			"slug": "65-什么时候别上",
			"text": "6.5 什么时候别上"
		},
		{
			"depth": 2,
			"slug": "7-mcp工具的统一插座",
			"text": "7. MCP：工具的统一插座"
		},
		{
			"depth": 3,
			"slug": "71-它解决什么问题",
			"text": "7.1 它解决什么问题"
		},
		{
			"depth": 3,
			"slug": "72-三个角色",
			"text": "7.2 三个角色"
		},
		{
			"depth": 3,
			"slug": "73-三种原语",
			"text": "7.3 三种原语"
		},
		{
			"depth": 3,
			"slug": "74-底层和-2026-年的变化",
			"text": "7.4 底层和 2026 年的变化"
		},
		{
			"depth": 3,
			"slug": "75-和-function-callinga2a-的区别",
			"text": "7.5 和 Function Calling、A2A 的区别"
		},
		{
			"depth": 3,
			"slug": "76-现状",
			"text": "7.6 现状"
		},
		{
			"depth": 2,
			"slug": "8-串回-distriagenda",
			"text": "8. 串回 DistriAgenda"
		},
		{
			"depth": 2,
			"slug": "9-一页速查",
			"text": "9. 一页速查"
		},
		{
			"depth": 2,
			"slug": "参考来源",
			"text": "参考来源"
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
