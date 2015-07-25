# 元数据

元数据是具有作用域的数据，从 `_data.json` 文件传到指定的页面中。

## 为什么？

有时你可能希望将变量分离开来，或者说将所有的全局数据放在一个文件中并非有利。文件元数据来做这件事情是完美的。
`_data.json` 文件比较特别，让数据在模板中可用。

## 示例

``` 
myproject/
  ├ _harp.json               <-- Global metadata goes here
  ├ index.jade
  └ articles/
      ├ _data.json           <-- Article metadata goes here
      ├ hello-world.jade     <-- hello world article
      └ hello-brazil.jade    <-- hello brazil article
```

你的应用可以有多个 `_data.json` 文件，每一个放在他们自己的文件夹中。你也可以在根目录中包含一个 `_data.json` 文件来为你根目录中的页面设置元数据。
你的 `_data.json` 文件可能包含下面的内容：

``` 
{
  "hello-world": {  <-- available everywhere as public.articles._data
    "title": "Hello World.",
    "date": "2013-02-28"
  },
  "hello-brazil": {
    "title": "Hello Brazil.",
    "date": "2013-03-04"
  }
}
```

因为 hello-world 匹配文件名，在服务启动时，这些变量会在 `hello-world.jade` 模板文件中可用。这个对象也可以作为 `public.articles._data.hello-world` 在所有的模板文件中使用。

`_harp.json` 或者 `harp.json` 文件中的任何元数据都会被 `_data.json` 文件中的本地元数据所覆盖。这个特性允许你，例如，为整站指定一个标题，然后在具体的页面上覆盖它。（这里有 [一个样例](http://harpjs.com/recipes/custom-title-description)。

没有必要在 `_data.json` 中包含文件扩展名。例如，"hello-world.jade":{...}，将会抛出一个错误。

在 index 模板中，我们可能会遍历所有的文章来创建一个文章列表。

``` 
for article, slug in public.articles._data
  a(href="/articles/#{ slug }")
    h2= article.title
```

还可参见
- [给每一页添加一个自定义的标题和描述](http://harpjs.com/recipes/custom-title-description)
- [一个快速样例，Harp应用如何为你的博客在正确的地方使用正确的标题](https://gist.github.com/kennethormandy/6834709)