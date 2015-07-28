# 全局变量

全局变量是存储在 `harp.json` 文件中的 JSON 数据，对所有的页面、模板、局部视图以及布局文件可用。

## 为什么呢？

Harp 不仅仅只是静态文件，页面也可以通过动态内容创建。像全局属性中添加内容是天生可取的。

harp.json

``` 
{
  "globals": {
    "title": "Acme Site",
    "name"  : "John Doe",
    "uri": "http://example.com"
  }
}
```

## Jade 示例

index.jade

``` 
html
  head
    title #{ title }
  body
    h1 Hello #{ name }!
```

## EJS 示例

index.ejs

``` 
<html>
  <head>
    <title><%= title %></title>
  </head>
  <body>
    <h1>Hello <%= name %>!</h1>
  </body>
</html>
```