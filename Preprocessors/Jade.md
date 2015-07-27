# Jade

Jade 是一种标记语言，通过创建基于 XML 的文件（例如 `.html` 或者 `.xml` 文件）。Harp 对 Jade 的支持非常好。

## 为什么呢？

Jade 相当简洁并且强大。如果你正创建基于 XML 的输出内容（例如 HTML），强烈建议你尝试一下 Jade。如果不是基于 XML 的内容，比如 `.json` 和 `.txt`文件，那就没有必要了。在后一种情形下，你可能会发现 EJS 是一个更合理的选择。

## 用法

Harp 的 Asset Pipeline 用起来相当简单。所有的预编译都是静默完成，不需要任何设置。只要将你的文件命名成 `.jade` 后缀，而不是 `.html`，Harp 网页服务器会把它当作一个 .html 文件。

## 示例

在我们的项目中，public 目录中有一个 `index.jade` 文件和一个 `about.jade` 文件。

``` 
myproject/
  |- harp.json
  +- public
    |- index.jade
    +- about.jade
```

`index.jade` 和 `about.jade` 都会被当作 `.html` 文件，所以下面路径的请求都会成功：

- `/`
- `/index`
- `/index.html`
- `/about`
- `/about.html`

Harp 的编译过程也会将文件导出为 `index.html` 和 `about.html`。

## 管理文件扩展名

你可能会想要使用 Jade 创建 html 之外的文件。没问题，只需要将你想要的扩展名放在 `.jade` 前面。例如，`feed.xml.jade` 会被看作 `feed.xml` 。

## 还可以参见
- [Jade文档](http://jade-lang.com/)
- [EJS模板](http://harpjs.com/docs/development/ejs)
