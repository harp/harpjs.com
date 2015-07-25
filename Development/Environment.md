# 环境

Harp 网页服务器既可以跑在本地，也可以跑在生产模式。环境变量返回 `"production"` 或者 `"development"` 字符串，依赖于具体的上下文。

## 为什么

Harp 网页服务器可以运行在本地用来开发，或者生产模式用来做线上网页服务器。通过环境变量，你的 Harp 应用可以随机应变，无论是否跑在本地。
这对于在一个静态博客中创建一个草稿贴是绝佳的，例如，或者只在开发一个客户端应用时下载开发资源。

## 用法

环境变量提供了多种可能性：你的博客可以本地以一种方式运行，发布到 [Harp平台](https://www.harp.io/) 上或者以生产模式运行了以另外一种方式运行。另外，[harp compile, which flattens your blog into static HTML, CSS, and JavaScript](http://harpjs.com/docs/environment/compile) 被当作是另外一种生产环境。这意味着任何为产品模式准备的，当你只是提供静态页面服务时，依然会发生。

## EJS 示例

这是一个非常简单的例子，展示了如何使用一个条件语句来检验当前的 Harp 是在哪个环境，EJS 示例。

``` 
<h1>Harp is in <%- environment %> mode.</h1>
<% if(environment == "production") { %>
  <p>See? Harp is in production mode.</p>
<% } else { %>
  <p>Okay, Harp is in development mode right now.</p>
<% } %>
```

## Jade 示例

这是一个非常简单的例子，展示了如何使用一个条件语句来检验当前的 Harp 是在哪个环境，Jade 示例。

``` 
h1 Harp is in #{ environment }
if environment == "production"
  p See? Harp is in production mode.
else
 p Okay, Harp is in development mode right now. 
```

还可以参见
- [harp服务器](http://harpjs.com/docs/environment/server), 将 Harp 应用从开发模式变到产品模式
- [使用 Harp 创建静态博客草稿贴](http://kennethormandy.com/journal/static-draft-posts-with-harp) ，介绍了如何使用环境变量.