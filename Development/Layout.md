# 布局

一个布局文件是一个通用模板，除了一个主要内容区域，包含所有的内容。你可以把一个布局当作局部视图相反的存在。
- [使用 EJS 创建布局](http://harpjs.com/docs/development/layout#ejs)
- [使用Jade创建布局](http://harpjs.com/docs/development/layout#jade)
- [多重布局](http://harpjs.com/docs/development/layout#multiple-layouts)
- [明确布局](http://harpjs.com/docs/development/layout#explicit-layouts)
- [不使用布局](http://harpjs.com/docs/development/layout#no-layout)

## 为什么呢？

通常网站和应用会有公共的头部和尾部，需要变化的只有主体部分。这是适合使用布局文件的绝佳使用案例。

## 用法

一个布局需要一个EJS或者Jade格式的布局文件，以及[a yield property](http://harpjs.com/docs/development/yield)告诉 Harp 在哪里插入内容。
使用EJS模板的示例
举一个相当简单的例子，app/project 是这样的结构：

``` 
myapp.harp.io/
  |- _layout.ejs
  +- index.ejs
```

___layout.ejs __

``` 
<html>
  <head>
    <title>My Site</title>
    <script src="/javascripts/jquery.js">
    </script><script src="/javascripts/app.js"></script>
  </head>
  <body>
    <%- yield %>
    <div id="footer">
      <p>Copyright © foobar</p>
    </div>
  </body>
</html>
```

__index.ejs__

``` 
<h1>My Site</h1>
<p>Welcome to my very first site.</p>
```

最终的结果：

``` 
<html>
  <head>
    <title>My Site</title>
    <script src="/javascripts/jquery.js">
    </script><script src="/javascripts/app.js"></script>
  </head>
  <body>
    <h1>My Site</h1>
    <p>Welcome to my very first site.</p>
    <div id="footer">
      <p>Copyright (c) foobar</p>
    </div>
  </body>
</html>
```

## 使用 Jade 模板的示例

Harp 也可以使用 `.jade` 后缀的文件作为布局文件。混合匹配模板也是可行的，例如在下面的例子中，我们有一个 `_layout.jade` 文件和一个 `index.ejs` 文件。
举一个相当简单的例子，app/project 目录结构如下：

``` 
myapp.harp.io/
    |- _layout.jade
    +- index.jade
```

___layout.jade__

``` 
doctype
  head
    title My Site
    script(src="/javascripts/jquery.js")
    script(src="/javascripts/app.js")
  body
      != yield
    #footer
      p Copyright (c) foobar
```

__index.jade__

``` 
h1 My Site
p Welcome to my very first site.
```

最终的结果：

``` 
<html>
  <head>
    <title>My Site</title>
    <script src="/javascripts/jquery.js">
    </script><script src="/javascripts/app.js"></script>
  </head>
  <body>
    <h1>My Site</h1>
    <p>Welcome to my very first site.</p>
    <div id="footer">
      <p>Copyright (c) foobar</p>
    </div>
  </body>
</html>
```

## 多重布局

在你的应用中，可以充分发挥多重布局的优势。在下面的例子中，你可能希望 articles 目录和站点主页面有不一样的布局。

``` 
myapp.harp.io/
    |- _layout.ejs
    |- index.ejs
    |- about.md
    +- articles/
      |- _layout.ejs
      |- article-one.md
      +- article-two.md
```

这里，在应用的根目录里 `index.ejs` 和 `about.md` 文件将会使用 `_layout.ejs` 布局。articles 目录中的文件——这个例子中，`article-one.md` 以及 `article-two.md` —— 将会使用同目录中的 `_layout.ejs` 布局。

## 明确布局

除了 `_layout` 之外的布局可以在 `_data.json` 文件中指定。这在你需要更好地布局控制时，是非常有用的，或者你想将你的布局文件命名成 _layout 之外的名称。

``` 
myapp.harp.io/
    |- _layout.ejs
    |- index.ejs
    |- about.md
    +- articles/
      |- _data.json
      |- _an-example-layout.ejs
      |- _another-one.jade
      |- article-one.md
      +- article-two.mdmd 
```

这里，通过在 _data.json 文件中指定具体的布局文件，article-one.md 就可以使用 _an-example-layout.ejs 布局文件了：

``` 
{
  "article-one": {
    "layout": "_an-example-layout",
    "title": "Example Title"
  },
  "article-two": {
    "layout": "_another-one",
    "title": "Another Example Title"
  }
}
```

现在，每一篇文章都会使用指定的布局文件。

## 选择布局文件

通过使用 __layout__ : false 可以让文件不使用布局。
举下面的应用作为例子：

``` 
myapp.harp.io/
  |- _data.json
  |- _layout.ejs
  |- index.ejs
  +- about.md
```

在 `_data.json` 文件中添加下面的内容将会让 `about.md` 渲染普通的 HTML，而不会经过一个布局文件。

``` 
{
    "about": {
        "layout": false
    }
}
```

因为只是指定了 About 页面，`index.ejs` 将会继续使用 `_layout.ejs` 文件作为布局文件。

## 嵌套布局

如果你想利用 Harp 对 [Jade](http://harpjs.com/docs/development/jade) 内建支持的优势，可以使用[Jade’s Block and Extends features](http://www.devthought.com/code/use-jade-blocks-not-layouts/) 来创建嵌套布局。

Harp 没有一个内建的方式来创建嵌套布局，就像 [`partial()`] 已经提供了这种方式。例如，你的 `_layout.ejs` 得长得像这样：

``` 
<!-- If the current page is blog/ but not blog/index.ejs… -->
  <% if(current.path[0] == "blog" && current.source !== 'index') { %>
    <!-- Render the partial blog/_nest -->
    <%- partial(current.path[0] + "/_nest") %>
  <% } else { %>
  <!-- Otherwise, render the yield -->
      <%- yield %>
  <% } %>
```

这允许你将一个 `_nest.ejs` [局部视图](http://harpjs.com/docs/development/partial) 放到 `blog/` 目录中，让你可以创建嵌套布局。通过在 `_nest.ejs` 局部视图中包含 [yield]，你视图渲染的内容页面将会在 `_nest.ejs` 局部视图中可用。例如，`blog/_nest.ejs` 可能是这样的：

``` 
<article>
  <%- yield %>
</article>
```

这样， `blog/index` 页面将会正常渲染，而其他的页面例如 `blog/hello-world` 将会如你在局部视图文件里指定的被 `<article>` 标签包裹。在 [the hb-simurai](https://github.com/kennethormandy/hb-simurai) Harp 样板上有一个关于这个的完整样例，可以通过运行下面的命令来尝试：

```
 harp init -b kennethormandy/hb-simurai my-nested-example 
```

注意，`_nest.js` 文件可以命名成任何你想要的，它只是一个中规中矩的 [局部视图](http://harpjs.com/docs/development/partial)。