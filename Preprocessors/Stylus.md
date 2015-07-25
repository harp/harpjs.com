# Stylus

Stylus 是一个高效、动态以及丰富的 CSS 预处理器。它同时支持缩进的和通俗的两种风格的 CSS 语法风格。

## 为什么呢？

Harp 自动具备了最好的预编译器。这意味着你不需要考虑下载哪个文件，最小化 CSS 或者未压缩的 stylus 文件。一切都工作的很好。

## 用法

Harp 的 Asset Pipeline 用起来相当简单。所有的预编译静默完成，不需要进行任何配置。只需要用 `.styl` 后缀命名你的文件，而不是 `.css`，Harp 网页服务器会把它当作 `.css` 文件进行解析。

## 示例

本项目中，在我们的 public/css 目录中，有一个 `style.styl` 和一个 `variables.styl` 文件，像这样：

``` 
myapp.harp.io/
    +- public/
        |- index.ejs
        +- css/
            |- style.styl     
            +- _variables.styl
```

你只需按如下设置你的 `index.ejs` 文件：

``` 
<html>
    <head>
        <link href="css/style.css" type="text/css" rel="stylesheet">
    </head>
    <body>
        ...
    </body>
</html>
```

你的 `style.styl` 可以像这样引用变量：

``` 
@import "_variables.styl"
body
    font 12px Helvetica, Arial, sans-serif
```

## 管理导入

如果你熟悉 Sass，你会习惯用下划线打头来命名你的局部视图文件。这在 Stylus 中是允许的，但不是必须的。正因为如此，使用 @import 引入局部视图的时候，你必须具体指明引用的开头的下划线。例如，如果你有一个叫做 `_example.styl` 的局部视图，你必须使用 `@import "_example"` 来导入它。单单用 `@import "example"` 在 Stylus 是无效的。

## 使用 Nib

[Nib](http://visionmedia.github.io/nib/) 是 Stylus 的应用的类库。给你的 Harp 应用添加 Nib 的最快方式是克隆 Nib 的 Git 版本库：

``` 
git clone https://github.com/visionmedia/nib.git/path/to/myapp.harp.io/public/css/_nib 
```

这样，在之前例子中的 `style.styl`，可以引入 Nib。

``` 
@import "_variables.styl"
@import "_nib"

body
    font: 12px Helvetica, Arial, sans-serif
    background: linear-gradient(top, white, black)
```

## 还可以参见
- [官方站点](http://learnboost.github.io/stylus/)
- [Nib文档](http://visionmedia.github.io/nib/)