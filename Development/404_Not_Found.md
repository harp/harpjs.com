# “404 不存在”状态码

使用 Harp 显示一个自定义的 404 页面。

## 为什么

无论你在做什么项目，都有必要做一个自定义的 404 页面，给访问者提供有用的信息，并且设计地像站点的其余部分风格。

## 用法

非常简单，只需要在你应用的根目录下添加一个 `404.jade` 、`404.ejs` 、`404.md` 或者 `404.html` 文件就好了。

## 示例

如果你 [初始化一个新的 Harp 应用](http://harpjs.com/docs/environment/init)，会自动生产一个 404.jade 文件。给现有项目添加一个自定义的 404 页面，只需要在根目录中添加一个 404 文件。

``` 
mmyproject/
  |- 404.html
  |- index.html
  +- main.less
```

如果你的项目想要使用相同的布局，即使是 404 页面，那么你可以将应用的目录结构设置成这样：

``` 
myproject/
  |- _layout.ejs
  |- index.ejs
  |- 404.md
  +- main.scss
```

这样，[_layout](http://harpjs.com/docs/development/layout) 文件将会同时包裹 `index.ejs` 和 `404.md`。
