# LESS

LESS 是一个 CSS 超集，使得 CSS 的预处理过程相当简单。它被用来创建有名的类库 [Bootstrap](http://getbootstrap.com/)；Harp 对 LESS 的源代码文件支持的非常好。

## 为什么呢？

Harp 默认包含最好的预处理器。这意味着你不需要浪费时间来配置 LESS，折腾安装依赖，最小化 CSS，你甚至不需要选择文件的输入和输出位置。一切都会工作地很好。

## 用法

Harp 的 asset pipeline 用起来相当简单。所有的处理过程静默完成，不需要进行任何配置。只需要给你的文件加上 `.less` 后缀，而不是 `.css`，Harp 网页服务器将会把它当作 `.css`文件进行解析。

## 示例

本项目中，css 目录中有一个 `main.less` 文件和一个 `_variables.less` 文件，像这样：

``` 
myproject/
  |- index.ejs
  +- css/
    |- main.less
    +- _variables.less
```

这样，你只需要在 `index.ejs` 中简单地引用 `main.css` 以及其他任何 CSS 文件：

``` 
<html>
    <head>
        <link href="css/main.css" type="text/css" rel="stylesheet">
    </head>
    <body>
        …
    </body>
</html>
```

你的 `main.less` 可以像这样引用变量：

``` 
@import "variables”;

body {
    font: 12px Helvetica, Arial, sans-serif;
}
```

## 还可以参见
- [LESS 文档](http://lesscss.org/)
- [Harp 以及 Bootstrap 简介](http://youtu.be/JWU70PWVVbc?t=7m9s)
