# 如何在每一页上获取到自定义标题和描述。

本篇文章将教你如何设置你的应用，让你在每一页设定自定义标题和描述，而且当没有设定时有一个安全的默认值。

默认值将会在 `_harp.json` 文件中指定，然后我们将使用 `_data.json` 文件覆盖哪些值。

你可以在文档中找到更多关于 [模板数据](http://harpjs.com/docs/development/metadata) 的信息。

## 概览

目录结构：

``` 
_harp.json
_data.json
index.jade  // or index.ejs
about.jade  // or about.ejs
```

这个例子中，这是我们所希望的：如果一个访问者请求 index 页面，我们展示标题和描述的__默认值__，当他们请求 about 页面，我们显示__自定义__的值。

## 设置默认值

首先，我们将指定默认值，如果页面没有指定具体数值时，会用到。在你的 `_harp.json` 中：

``` 
{
  "globals": {
    "title": "My default title",
    "description": "My default description"
  }
}
```

## 设置 about 页面的自定义值

在 `_data.json` 文件中添加你想要为 about 页面添加的自定义值：

``` 
{
  "about": {
    "title": "Welcome to my about page",
    "description": "I’m awesome and so are you"
  }
}
```

## 在模板文件中使用

### 如果你正在使用 Jade

现在我们将在 `_layout.jade` 中使用我们刚刚添加到 `_harp.json` 中的标题和描述。

``` 
doctype
html(lang="en")
  head
    title= title
    meta(name="description" content="#{ description })
  body
    != yield
```

### 如果你正在使用 EJS

如果你正在使用 EJS，`_layout.ejs` 应该是这样的：


``` 
<!DOCTYPE html>
<html lang="en">
  <head>
    <title><%= title %></title>
    <meta name="description" content="<%= description %>" />
  </head>
  <body> <%- yield %> </body>
</html>
```

### 结果

现在当你访问 index 页面时，Harp 将会渲染 `_harp.json` 中指定的默认值。

当你访问 about 页面时，Harp 将会用 _data.json 中指定的值覆盖默认的标题和描述变量。

如果你希望在 index 页面中显示自定义值，你只需要在 `_data.json` 文件中添加 index 键值，像这样：

``` 
{
  "about": {
    "title": "Welcome to my about page",
    "description": "I’m awesome and so are you"
  },
  "index": {
    "title": "This is my home page",
    "description": "Best home page ever"
  }
}
```

记住你并不需要同时覆盖两个变量。如果你只覆盖 title 变量，模板文件将会仍然为 description 变量使用默认值。

## 这是如何做到的？

`_harp.js` 中指定的全局变量值，是可以作为模板变量使用的，所以它们可以在任何时候以及任何页面使用。

当一个 Harp 应用试图渲染一个页面，它会尝试将 url 路径与 `_data.json` 中的数据进行匹配。在这种情况中，它将 URL 路径中的 about 部分与 `_data.json` 文件中的 about 键值匹配起来。

当 Harp 找到一个匹配时，它会使得当前渲染的模板可访问那些变量。并且在这种情况中，它会覆盖我们之前在 `_harp.json` 中设置的变量。

你可以在文档中找到更多关于 [模板数据](http://harpjs.com/docs/development/metadata) 的信息。
