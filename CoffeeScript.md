# CoffeeScript

CoffeeScript 是一个功能丰富，用途很广，并且很普遍的 JavaScript 预处理器。CoffeeScript 是一个对空格敏感的 JavaScript 变种。

## 为什么呢？

Harp 默认包含最好的预处理器。这意味着你不需要浪费时间配置 CoffeeScript，折腾安装依赖，最小化 JavaScript 文件，你甚至不需要选择文件的输入输出位置。一切运行的很好。

## 用法

Harp 的 Asset Pipeline 相当易用。所有的处理过程静默完成，不需要进行任何配置。只需要用 `.coffee` 命名你的文件，而不是 `.js`，Harp 网页服务器会把它当作 `.js` 文件。

## 示例

本项目中，js 目录中有一个 `app.coffee` 文件，像这样：

``` 
myproject/ |- index.html +- js/ |- app.coffee 
```

这样，你只需要在 `index.ejs` 中引用 `app.js`，其他 js 文件一样：

``` 
<html> <head> <!-- Here we reference a JS file that is auto generated --> <script src="js/app.js"></script> </head> <body> … </body> </html> 
```

并且你的 `app.coffee` 可以这样使用 CoffeeScript：

``` 
mass = 72 height = 1.78 BMI = mass/Math.pow height, 2 alert 'You are healthy!' if 18.5<BMI<25 
```

## 还可以参见
- [CoffeeScript 文档](http://coffeescript.org/)