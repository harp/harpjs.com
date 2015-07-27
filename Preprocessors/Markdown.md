# Markdown

Markdown 易写易读，语法在网页写作上很有用，并且很流行。

## 为什么

Harp 默认包含普遍有用的预处理器。这意味着你没必要浪费时间在将你的 Markdown 转化成 HTML——每件事都会正常工作。另外，[Jade](http://harpjs.com/docs/development/jade) 和 [EJS](http://harpjs.com/docs/development/ejs) 文件可以把 Markdown 当作[局部视图](http://harpjs.com/docs/development/partial#markdown)导入，让你可以有效地复用代码。

## 用法

Harp 的 asset pipeline 很容易使用。所有的处理过程都会自动发生，并不需要进行设置。只需要把你的文件加一个 `.md` 后缀，Harp 网页服务器会把它当作一个 `.html` 文件来解析。
有些其他的 Markdown 解析器可能还支持 `.markdown`、`.mdown`、`.txt` 或者其他的扩展名。Harp 只会处理 `.md` 文件。

## 示例

这个项目在根目录中包含 `index.md` 和 `about.md` 文件。

``` 
myproject/
  |- index.md
  +- about.md
```

`index.md` 以及 `about.md` 都会被当作 `.html` 文件进行解析。因此，对一下路径的访问都会工作：

- /
- /index
- /index.html
- /about 
- /about.html

运行 Harp 的 [compile step](http://harpjs.com/docs/environment/compile) 也会把文件当作 `index.html` 和 `about.html` 导入进来。

## GitHub 最爱的 Markdown

Harp 还支持 [GitHub Flavoured Markdown](https://help.github.com/articles/github-flavored-markdown) 补充语法。（这不包括Github 专用功能，例如任务列表和 `@mentions` 等等。）这可以让你写一个围起来的代码块：

``` 
	``` 
		function test() {
  		console.log("Hello, world");
		}
	``` 
```

你可能还想要指明代码语言：

``` 
	```javascript
		function test() {
  		console.log("Hello, world");
		}
	```
```

``` 
	function test() {
 	 console.log("Hello, world");
	}
```

Harp 将会把代码块当作 HTML 运行：

``` 
<pre><code class="language-javascript">function test() {
  console.log(&quot;Hello, world&quot;);
}</code></pre>
```

语言类名称遵循 [W3C](http://www.w3.org/TR/html5/text-level-semantics.html#the-code-element) 以及 [WHATWG](http://www.whatwg.org/specs/web-apps/current-work/multipage/text-level-semantics.html#the-code-element) 标准来指定代码类型。这还可以让你用一个高亮类库的客户端语法来样式化，例如 [Prism](http://prismjs.com/) 。

## 管理文件扩展名

你可能会想要使用 Markdown 创建另外一个基于 markup 的文件，而不是 `.html`。没问题：只需要把你想要的扩展名加到 `.md` 前面就行了。例如，`feed.xml.md` 会被 Harp 当作 `feed.xml` 进行解析。

使用 [EJS](http://harpjs.com/docs/development/els) 和 [Jade](http://harpjs.com/docs/development/jade) 也是可以的，并且非常有用。

## 还可以参见

- [Markdown 官方文档](http://daringfireball.net/projects/markdown/)
- [GitHub 最爱的 Markdown 文档](https://help.github.com/articles/github-flavored-markdown)
- [Markdown 以及局部视图函数](http://harpjs.com/docs/development/partial#markdown)
