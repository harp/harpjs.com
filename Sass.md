# Sass

Sass 是一个功能丰富，用途很广的 CSS 预处理器。它使用 CSS 的超集 SCSS 语法，或者原生语法。

## 为什么呢？

Harp 默认包含最好的预处理器。这意味着你不需要浪费时间来配置 Sass，折腾安装依赖，最小化 CSS 文件，你甚至不需要选择文件的输入和输出位置。一切都会工作的很好！

## 用法

Harp 的 Asset Pipeline 用起来相当简单。所有的处理过程静默完成，不需要进行任何配置。只要给你的文件加上 `.scss` 后缀，而不是 `.css`，Harp 网页服务器会把它当做 `.css` 文件进行解析。

## SCSS 示例

本项目中，css 目录中有一个 `main.scss` 和一个 `_variables.scss` 文件，像这样：

``` 
myproject/
  |- index.html
  +- css/
    |- main.scss     
    +- _variables.scss 
```

这样，你只需简单地在 `index.ejs` 文件中引用 `main.css` 以及任何其他 CSS 文件：

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

然后你的 `main.scss` 可以这样引用变量：

``` 
@import "variables";

body {
    font: 12px Helvetica, Arial, sans-serif;
}
```

## Sass 示例

本项目中，css 目录中有一个 `main.sass` 和一个 `_variables.sass` 文件，像这样：

``` 
myproject/
  |- index.html
  +- css/
    |- main.sass     
    +- _variables.sass
```

这样，你只要在 `index.ejs` 文件中引用 `main.css` 文件以及其他 CSS 文件：

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

`main.sass` 可以这样引用变量：

``` 
@import variables

body
    font: 12px Helvetica, Arial, sans-serif
```

## 注意事项

在 Harp 的 Sass 版本中，Sass 3.2 的主要功能都是可用的，但是不支持 Sass 3.3。
Harp 使用 [libsass](http://libsass.org/)，Sass 的 C++ 实现，用来预处理。由于不是 Sass 的原生版本，可能不包含最新的 Sass 3.3 的特征。
如果你有疑问，或者不确定在 Libsass 中一个功能是否有所缺失，或者在 Harp 中存在一个 bug，欢迎访问 [file a GitHub issue](https://github.com/sintaxi/harp/issues)。

## 还可以参见
- [SCSS 文档](http://sass-lang.com/documentation/)
- [Sass 文档](http://sass-lang.com/documentation/file.INDENTED_SYNTAX.html#_import)