# 当前对象

当前对象是在你的应用导航中应用激活状态的最好方式。它对每个模板可用，并且包含当前被渲染页面的状态。

## 为什么？

当复用像导航这样的模板时，当前对象对于给导航应用一个激活状态是非常有用的，在还有可能以非传统的方式渲染布局或者局部视图。这让我们的应用代码保持“尽量不要重复自己（DRY）”，而又不会让应用的可用性打折扣。

## 属性

- __path__ - (Array) 当前被渲染的页面的文件路径。
- __source__ - (String) 路径数组中最后一个元素的缩写。

__note__ - 当前对象中被忽略的文件扩展名。

Harp 提供了一个当前页面路径的数组，通过一个叫做 current source 的列表中的最后一个元素。这个信息通过当前对象是可用的，在你访问的每个页面上都是动态更新的。
例如，访问 `/articles/hello-world` 时，下面的信息是可用的：

``` 
{
  path: ["articles", "hello-world"],
  source: "hello-world"
}
```

然而访问 `/articles/` 时，当前对象是下面这样的：

``` 
{
  path: ["articles", "index"],
  source: "index"
}
```

现在，你可以在模板文件中使用这个了。

## 用法示例

这个应用有一个 `index.jade` 和 `about.jade` 页面。这些页面都有一个简单的导航，包含在 _nav.jade [局部视图](http://harpjs.com/docs/development/partial) 中。
通过在 _nav.jade 模板中使用当前对象，你可以告诉 nav 模板正在被渲染的上下文（即，当前访问的是哪一个页面）。

给定下面一个项目：

``` 
myproject/
  |- index.jade
  |- about.jade
  +- _nav.jade
```

## Jade 示例

`_nav.jade` 文件，使用 `current.source` ：

``` 
ul
  li(class="#{ current.source == 'index' ? 'active' : '' }")
    a(href="/") Home
  li(class="#{ current.source == 'about' ? 'active' : '' }")
    a(href="/about") About 
```

## EJS 示例
同样的模板，`_nav.ejs` 而不是 `nav.jade`：

``` 
<ul>
  <li class="<%- current.source == 'index' ? 'active' : '' %>">
    <a href="/">Home</a>
  </li>
  <li class="<%- current.source == 'about' ? 'active' : '' %>">
    <a href="/about">About</a>
  </li>
</ul>
```

有了 `current.source` ， 你现在可以在导航上拥有依赖上下文的 classes。这些然后可以通过CSS样式化，或者你的预处理器选择：[Sass](http://harpjs.com/docs/development/sass)， [LESS](http://harpjs.com/docs/development/less)，或者 [Stylus](http://harpjs.com/docs/development/stylus)。