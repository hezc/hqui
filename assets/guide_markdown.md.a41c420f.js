import{_ as a,o as s,c as e,g as n}from"./app.8d93e710.js";const l='{"title":"Markdown 使用","description":"","frontmatter":{"footer":false},"headers":[{"level":2,"title":"Markdown标题","slug":"markdown标题"},{"level":2,"title":"二级标题","slug":"二级标题"},{"level":3,"title":"三级标题","slug":"三级标题"},{"level":2,"title":"Markdown段落","slug":"markdown段落"},{"level":2,"title":"Markdown字体","slug":"markdown字体"},{"level":2,"title":"Tables","slug":"tables"},{"level":2,"title":"Emoji 🎉","slug":"emoji"},{"level":2,"title":"区块提示","slug":"区块提示"},{"level":3,"title":"默认","slug":"默认"},{"level":3,"title":"自定义","slug":"自定义"},{"level":2,"title":"代码块中的语法高亮","slug":"代码块中的语法高亮"}],"relativePath":"guide/markdown.md"}',t={},o=[n('<h1 id="markdown-使用" tabindex="-1">Markdown 使用 <a class="header-anchor" href="#markdown-使用" aria-hidden="true">#</a></h1><h2 id="markdown标题" tabindex="-1">Markdown标题 <a class="header-anchor" href="#markdown标题" aria-hidden="true">#</a></h2><p>使用 # 号可表示 1-6 级标题，一级标题对应一个 # 号，二级标题对应两个 # 号，以此类推。 # 一级标题 输入</p><div class="language-"><pre><code># 一级标题\n\n## 二级标题\n\n### 三级标题\n\n#### 四级标题\n\n##### 五级标题\n\n###### 六级标题\n\n</code></pre></div><p>输出</p><h1 id="一级标题" tabindex="-1">一级标题 <a class="header-anchor" href="#一级标题" aria-hidden="true">#</a></h1><h2 id="二级标题" tabindex="-1">二级标题 <a class="header-anchor" href="#二级标题" aria-hidden="true">#</a></h2><h3 id="三级标题" tabindex="-1">三级标题 <a class="header-anchor" href="#三级标题" aria-hidden="true">#</a></h3><h4 id="四级标题" tabindex="-1">四级标题 <a class="header-anchor" href="#四级标题" aria-hidden="true">#</a></h4><h5 id="五级标题" tabindex="-1">五级标题 <a class="header-anchor" href="#五级标题" aria-hidden="true">#</a></h5><h6 id="六级标题" tabindex="-1">六级标题 <a class="header-anchor" href="#六级标题" aria-hidden="true">#</a></h6><h2 id="markdown段落" tabindex="-1">Markdown段落 <a class="header-anchor" href="#markdown段落" aria-hidden="true">#</a></h2><p>Markdown的段落没有特殊的格式，直接编写文字就好，段落的换行号是使用两个以上的空格加回车。</p><h2 id="markdown字体" tabindex="-1">Markdown字体 <a class="header-anchor" href="#markdown字体" aria-hidden="true">#</a></h2><p>Markdown 可以使用以下几种字体：</p><ul><li>用1个星号*或底线_表示斜体</li><li>用2个星号*或底线_表示粗体</li><li>用3个星号*或底线_表示粗斜体 输入</li></ul><div class="language-"><pre><code>*斜体文字*\n\n_斜体文字_\n\n**粗体文字**\n\n__粗体文字__\n\n***粗斜体文字***\n\n___粗斜体文字___\n\n</code></pre></div><p>输出 <em>斜体文字</em></p><p><em>斜体文字</em></p><p><strong>粗体文字</strong></p><p><strong>粗体文字</strong></p><p><em><strong>粗斜体文字</strong></em></p><p><em><strong>粗斜体文字</strong></em></p><h2 id="tables" tabindex="-1">Tables <a class="header-anchor" href="#tables" aria-hidden="true">#</a></h2><p>输入</p><div class="language-"><pre><code>| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |\n</code></pre></div><p>输出</p><table><thead><tr><th>Tables</th><th style="text-align:center;">Are</th><th style="text-align:right;">Cool</th></tr></thead><tbody><tr><td>col 3 is</td><td style="text-align:center;">right-aligned</td><td style="text-align:right;">$1600</td></tr><tr><td>col 2 is</td><td style="text-align:center;">centered</td><td style="text-align:right;">$12</td></tr><tr><td>zebra stripes</td><td style="text-align:center;">are neat</td><td style="text-align:right;">$1</td></tr></tbody></table><h2 id="emoji" tabindex="-1">Emoji 🎉 <a class="header-anchor" href="#emoji" aria-hidden="true">#</a></h2><p>输入</p><div class="language-"><pre><code>:tada: \n</code></pre></div><p>输出 <br> 🎉</p><h2 id="区块提示" tabindex="-1">区块提示 <a class="header-anchor" href="#区块提示" aria-hidden="true">#</a></h2><h3 id="默认" tabindex="-1">默认 <a class="header-anchor" href="#默认" aria-hidden="true">#</a></h3><p>输入</p><div class="language-"><pre><code>::: tip\nThis is a tip\n:::\n\n::: info\nThis is an info box\n:::\n\n::: warning\nThis is a warning\n:::\n\n::: danger\nThis is a dangerous warning\n:::\n\n::: details\nThis is a details block, which does not work in Internet Explorer or old versions of Edge.\n:::\n</code></pre></div><p>输出</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip</p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning</p></div><div class="danger custom-block"><p class="custom-block-title">WARNING</p><p>This is a dangerous warning</p></div><details class="details custom-block"><p>This is a details block, which does not work in Internet Explorer or old versions of Edge.</p></details><h3 id="自定义" tabindex="-1">自定义 <a class="header-anchor" href="#自定义" aria-hidden="true">#</a></h3><p>输入</p><div class="language-md"><pre><code><span class="line"><span style="color:#A6ACCD;">::: danger STOP</span></span>\n<span class="line"><span style="color:#A6ACCD;">Danger zone, do not proceed</span></span>\n<span class="line"><span style="color:#A6ACCD;">:::</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">::: details Click me to view the code</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C3E88D;">```</span><span style="color:#A6ACCD90;">js</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello, VitePress!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#C3E88D;">```</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">:::</span></span>\n<span class="line"></span></code></pre></div><p>输出</p><div class="danger custom-block"><p class="custom-block-title">STOP</p><p>Danger zone, do not proceed</p></div><details class="details custom-block"><summary>Click me to view the code</summary><div class="language-js"><pre><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello, VitePress!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div></details><h2 id="代码块中的语法高亮" tabindex="-1">代码块中的语法高亮 <a class="header-anchor" href="#代码块中的语法高亮" aria-hidden="true">#</a></h2><p>输入</p><div class="language-"><pre><code>```js\nexport default {\n  name: &#39;MyComponent&#39;,\n  // ...\n}\n```\n</code></pre></div><p>输出</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">MyComponent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>输入</p><div class="language-"><pre><code>```html\n&lt;h1&gt;标题标题&lt;/h1&gt;\n```\n</code></pre></div><p>输出</p><div class="language-html"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">标题标题</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div>',57)];var r=a(t,[["render",function(a,n,l,t,r,p){return s(),e("div",null,o)}]]);export{l as __pageData,r as default};