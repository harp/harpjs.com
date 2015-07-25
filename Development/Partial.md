# 局部视图

局部视图是 Harp 中的头等公民，并且在所有的模板语言中都以同样的方式工作。一个局部视图可以被放在 [EJS](http://harpjs.com/docs/development/els) 或 [Jade](http://harpjs.com/docs/development/jade) 文件的任何地方，并且文件的内容会被混合起来。

- [使用局部视图](http://harpjs.com/docs/development/partial#use)
- [在 EJS 文件中使用局部视图](http://harpjs.com/docs/development/partial#ejs)
- [在 Jade 文件中使用局部视图](http://harpjs.com/docs/development/partial#jade)
- [Markdown以及局部视图函数](http://harpjs.com/docs/development/partial#markdown)

## 为什么？

为了保持你的应用或者站点 “不要自我重复（DRY）”，你需要一个复用内容的方式。局部视图提供了一个简单的接口，在复用项目代码块方面有很大的灵活性，效率很高。

## 属性

- __局部视图路径__ - (String) 你想包含的文件的相对路径。
- __data [对象]__ - (String) 你希望传入局部视图的数据，可选。

## 使用局部视图

如果说你正在创建一个简单的网站，并且希望包含一个会出现在每个页面上的头部。项目有一个 `index.ejs` 文件和一个 `about.ejs` 文件，想在两个文件中都包含存储在 `_header.ejs` 文件中的内容。

由于 `_header.ejs` 文件以下划线开头，所以不会被直接对外服务。然而，你可以使用局部视图函数将它包含到另一个文件中。

`_header.ejs` 文件的内容可以随你意地简单或者复杂，例如：

``` 
<h1>This is my site</h1>
<p>This content is in a Partial.</p>
```

## 在 EJS 文件中使用局部视图

`index.ejs` 文件中，调用 `partial("_header")` 将 `_header.ejs` 文件中的内容包含进来：

``` 
<%- partial("_header") %> 
```

这样，Harp 会在 `index.ejs` 文件中渲染 `_header.ejs` 文件的内容。你可以对 `about.ejs` 文件重复这一过程，但是如果你想在两者之间做一些改变的话，该如何呢？

在 `_header.ejs` 文件中，`<h1>` 标签中的标题时硬编码的，但是如果你想根据它是哪个文件的部分来改变的话，该怎么做呢？使用局部视图函数，这也是可以做到的。当一个文件通过局部视图被引用，数据也可以传进来，代替局部视图中的指定变量。

更新 `_header.ejs` 文件使得 `<h1>` 标签包含变量标题：

``` 
<h1><%- title %></h1>
<p>This content is in a Partial.</p>
```

这样，调用这个局部视图时，把 title 变量传进来：

``` 
<%- partial("_header", { title: "About me" }) %> 
```

这里 title 是一个任意的变量名，取决于上下文，它可以被叫做任何你想要的。如果你更新文件，让 `<p>` 标签包含一个叫做 description 的变量，那么局部视图函数应该是这样的：

``` 
<%- partial("_header", { title: "About me", description: "This is my about page" }) %> 
```

## 在 Jade 文件中使用局部视图

在 Jade 中使用局部视图与在 EJS 中使用非常相似。Jade 中的函数以 `!=` 开头，而不是像 EJS 包裹在 `<%- %>` 中。在两种语言中，这都表明内容应该被渲染，这样无论局部视图中的是什么代码，都会被渲染，而不会被过滤。

``` 
h1
  != title
p This content i
```

Jade 中可以引入 EJS 局部视图，反之亦然。例如，创建一个 `contact.jade` 文件，然后在 Jade 中包含同样的头部局部视图：

``` 
!= partial("_header")
```

数据可以用同样的方式传进来。要改变局部视图中的标题，只需要像在 EJS 文件中一样，传进来一个：

``` 
!= partial("_header", { title: "Contact me" }) 
```

也可以传多个数据进来：

``` 
!= partial("_header", { title: "Contact me", description: "This is my Jade contact page with an EJS header" }) %> 
```

如果你想为你的变量设置默认值——当前的例子中，`title` 和 `description` 变量的默认值，以防你不给局部视图传任何数据——你可以通过设置 [全局变量](http://harpjs.com/docs/development/globals)来完成。

## Markdown 和局部视图

在 Markdown 文件中不太可能直接使用局部视图函数，因为 Markdown 不是一个模板语言。
然而，仍然可以使用局部视图函数将 Markdown 文件包含到 EJS 或者 Jade 文件中。在下面的例子中，`_shared` 目录中有一个叫做 `an-example.md` 的 Markdown 文件。如果将 `an-example.md` 的内容引入到一个 Jade 文件的 article 标签中，你可以使用下面的代码：

``` 
article!= partial("_shared/an-example") 
```

还可以在 Jade 中直接写 Markdown，像这样：

``` 
doctype
  head
    title An example
  body
    .main
      :markdown
        # now I can write Markdown here

        This is my Markdown post.
        1. Chocolate
        2. Strawberry
        3. Vanilla
```

使用一个或者多个这些方法，你应该可以得到想要的输出结果。