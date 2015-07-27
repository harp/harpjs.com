# 内容

使用 Harp，你可以获取到你的编译文件的信息，除了源代码文件的[元数据](http://harpjs.com/docs/development/metadata)。

## 为什么？

你有可能想要在你的应用中遍历编译好的数据以及媒体数据，他们有可能含也有可能不含元数据。_contents 对象提供了一个做这件事情的方法。

## 示例

也许你有一个全部是图片的目录，并且希望展示它们全部，你不需要为每一张图片维持一个特别的元数据。

```
myproject/
  ├ index.jade
  └ images/
      ├ hello-world.jpg     <-- hello world image
      ├ hello-saturn.jpg    <-- hello saturn image
      └ hello-jupiter.jpg   <-- hello jupiter image
```

## 使用 EJS

现在，在 `index.ejs` 文件中，你可以遍历 `_contents` 变量，引用每一个文件。

``` 
<% for(var i in public.images._contents){ %>
  <% var image = public.images._contents[i] %>
  <% if ( image.match(/\b.(jpg|bmp|jpeg|gif|png|tif)\b/gi) ) { %>
        <div>
            <img src="images/<%= image %>" />
        </div>
  <% } %>
<% } %>
```

结果是如下的 HTML：

``` 
<img src="images/hello-world.jpg" />
<img src="images/hello-saturn.jpg" />
<img src="images/hello-jupiter.jpg" />
```

## 使用 Jade

现在，在 `index.jade` 文件中，你可以遍历 _contents 变量，引用每个文件。

``` 
for image in public.images._contents
  img(src="images/#{ image }")
```

结果是下面的 HTML：

``` 
<img src="images/hello-world.jpg" />
<img src="images/hello-saturn.jpg" />
<img src="images/hello-jupiter.jpg" />
```
