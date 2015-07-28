# Yield

`yield` 是一个包含特别路径内容的变量。例如，当访问 `/blog` 的时候，`blog/index.jade` 的整个内容可以通过 yield 变量访问

## 为什么？

当使用[布局](http://harpjs.com/docs/development/layout)和[局部视图](http://harpjs.com/docs/development/partial)的时候，你会想访问布局文件和局部视图文件正在包裹的内容。这个内容被包含在 yield 变量中，并且无论是在局部视图文件还是布局文件中，都可以被替换。

## 用法

在任何的 `_layout.jade` 或者 `_layout.ejs` 文件中都可以访问 `yield` 变量。在 `_data.json` 文件中指定的任何一个明确布局文件也都可以访问，这[在布局文档也有覆盖](http://harpjs.com/docs/development/layout)。还可以在任何一个[局部视图](http://harpjs.com/docs/development/partial)中使用 yield 变量。

## Jade 示例

使用下面的目录结构：

```
myproject/
  |- _layout.jade
  |- index.jade
  |- about.md
```

访问 `/about` 时， 会显示 `about.md` 文件的内容。同样的，访问 `/index` 会显示 `index.jade` 的内容。这些文件的内容都会先被 `_layout.jade` 包裹。
因此，在 `_layout.jade` 文件中，你需要指明输出，或者 "yield" 是放在哪里的：

``` 
doctype
html
  head
    title Example
  body
    != yield
```

这样，无论你访问的哪个页面的内容都会被包含在 `<body>` 元素中。注意，在 Jade 中，`!=` （而不是单个 `=` ）表明 HTML 标签不会被过滤。
如果你想改变这个模板文件中的输出内容的位置，只需要移动一下 yield 变量的位置就好了：

``` 
doctype
html
  head
    title Example
  body
    article
      h1 Hello, world
      section
        != yield
```

## EJS 示例

使用下面的目录结构：

``` 
myproject/
  |- _layout.ejs
  |- index.ejs
  |- about.md
```

访问 `/about` 时，`about.md` 文件的内容会被显示出来。同样的，访问 `/index` 时，会显示 `index.ejs` 中的内容。 这些文件都会先被包含在 `_layout.ejs` 中。
因此，在 _layout.ejs 中，你需要指明输出内容或者 "yield" 的位置：

```
<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <%- yield %>
  </body>
</html>
```

这样，你访问的无论什么页面都会被包含在 `<body>` 元素中。注意在 EJS 中，开合标签 `<%-`（而不是 `<%=` ）表明 HTML 标签不会被过滤。
如果你想移动这个模板文件中的输出的位置，只需要移动一下 yield 变量就好了：

``` 
<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <article>
      <h1>Hello, world</h1>
      <section>
        <%- yield %>
      </section>
    </article>
  </body>
</html>
```

还可参见
- [布局](http://harpjs.com/docs/development/layout)
- [Jade](http://harpjs.com/docs/development/jade)
- [EJS](http://harpjs.com/docs/development/ejs)