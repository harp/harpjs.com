# 如何创建一个贴子列表

这篇文章教你如何创建你的博客贴子的一个列表，每一个条目包含标题、链接以及贴子内容。

## 目录结构

给定一个这样的目录结构：

``` 
/public
  /posts
    _data.json
    my-first-post.md
    my-second-post.md
  /index.jade    <-- or index.ejs
```

## 贴子数据

添加一个这样的 `/public/posts/_data.json` ：

``` 
{
  "my-second-post": {
    "title": "My second post"
  },
  "my-first-post": {
    "title": "My first post"
  }
}
```

## 使用 Jade 进行列表
你可以在 Jade 中这样遍历你的贴子：

``` 
for post, slug in public.posts._data
  h2: a(href="/posts/#{ slug }")= post.title
  != partial("posts/" + slug)
```

## 使用 EJS 进行列表

或者在 EJS 中：

``` 
<% for(var slug in public.posts._data){ %>
  <h2><a href="/posts/<%= slug %>"><%= public.posts._data[slug].title %></a></h2>
  <%- partial("posts/" + slug) %>
<% }; %>
```

## 情况如何？

我们正在使用 `for` 迭代器来遍历 `/public/posts/_data.json` 中的数据。可以通过 `public.posts._data` 获取到贴子数据对象。