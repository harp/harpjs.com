# EJS

EJS 是 "Embedded JavaScript" 的缩写，描述的很好：通过嵌入具有 JavaScript 特色的功能来进行 HTML 模板渲染。这让你在 [你的元数据](http://harpjs.com/docs/development/metadata) 上进行遍历，包含 [局部视图](http://harpjs.com/docs/development/partial)，还有其他的。

## 为什么呢？

EJS 比较通俗，因为主要是 HTML，但又具有额外的功能让你有效地复用你的项目代码块。如果你有一个现有的 HTML 项目，你所需做的全部工作就是用 `.ejs` 扩展名重命名文件，然后你就可以使用 EJS 的特色功能了。

[Jade](http://harpjs.com/docs/development/jade)，另外一个 HTML 预处理器，也是与 Harp 工作的相当好，你可以尝试一下。

## 用法

Harp 的 Asset Pipeline 用起来相当简单。所有的处理过程都是静默完成的，不需要进行任何设置。只需要将你的文件用 `.ejs` 扩展名来命名，而不是 `.html`，Harp 会将它看做是 `.html` 文件。

## 示例

这个项目在根目录中包含一个 `index.ejs` 和一个 `about.ejs` 文件。

``` 
myproject/
  |- index.ejs
  +- about.ejs
```

`index.ejs` 和 `about.ejs` 都会被当作 `.html` 文件。因此，如下路径的请求都会成功：

- `/` 
- `/index`
- `/index.html`
- `/about`
- `/about.html`

Harp 的编译步骤也会将文件导出为 `index.html` 和 `about.html`

## 管理文件扩展名

你有可能会想使用 EJS 创建另外一个基于 markup 文件，而不是 .html。没问题：只需要将你想要的扩展名放在 .ejs 前面。例如，feed.xml.ejs 会被 Harp 当作 feed.xml 进行解析。

## 还可以参见
- [EJS文档](https://github.com/visionmedia/ejs)
- [Jade模板](http://harpjs.com/docs/development/jade)
- [Markdown](http://harpjs.com/docs/development/markdown)