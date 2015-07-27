## 规则

__开发 Harp 应用模板需要遵循的五个简单规则。__

Harp 没有复杂的功能集，只有一些遵循工作的简单规则。Harp 是相对简单的武士刀，而非功能复杂的瑞士军刀。通过理解规则，你将学会如何有效使用 Harp。

## 1.多约定，少配置

Harp 少到只需要一个 `public/index.html` 文件就可以工作，并不需要任何的配置。添加额外的路由只需添加额外的文件。通过学习这些剩余的规则你将会发现，所有的 Harp 的功能都是基于约定的。
Harp 致力于提供一个合理的开发框架，遵循成型的最佳实践。Harp 并非设计用于给很多人做很多事情，而是专注于自己擅长的事情。

### 设计原理

通过秉行 __多约定，少配置__ ，Harp易于上手，让你更好地开发产品。

### 一个典型 Harp 应用的目录结构

``` 
myapp.harp.io/                <-- root of your application
   |- harp.json                <-- configuration, globals goes here.
   +- public/                  <-- your application assets belong in the public dir
      |- _layout.jade          <-- optional layout file
      |- index.jade            <-- must have an index.html or index.jade file
      |- _shared/              <-- arbitrary directory for shared partials
      |   +- nav.jade          <-- a partial for navigation
      +- articles/             <-- pages in here will have "/articles/" in URL
          |- _data.json        <-- articles metadata goes here
          +- hello-world.jade  <-- should have at least one .html,  .jade, .md or .ejs file.
```

## 2.根目录是 public

Harp 是一个网页服务器，所以它可以伺服任何目录，无论是包含一个大的 Harp 应用，还是只有单个 `index.html` 文件。

``` 
 myapp.harp.io/
     |- index.html           <-- will be served
```

### 框架风格

Harp 应用可以选择性地以框架风格运行。当一个项目包含一个 `harp.json` 文件和一个 public 目录，public 目录会取代根目录做为伺服目录。框架风格中，公共文件放在 public 目录中。public 目录之外的文件不会被伺服。

``` 
 myapp.harp.io/
   |- harp.json                <-- required harp.json file
   |- README.md                <-- won't be served
   |- secrets.txt              <-- won't be served
   +- public/                  <-- explicit public directory
       +- index.html           <-- will be served
```

## 3.忽略下划线开头的文件

任何以下划线开头的文件都会被服务器忽略。这是布局和局部视图文件的推荐命名约定。Harp 将会对文件和目录都遵循这个规则。

### 设计原理

通过一个简单的约定，指定和鉴别哪些文件不对终端用户服务变得相当简单。

### 例子

```
 myapp.harp.io/
   +- public/
       |- index.html            <-- will be served
       |- _some-partial.jade    <-- won't be served
       +- _shared-partials/     <-- won't be served
           +- nav.jade
```

## 4.静态简单 asset pipeline

Harp 伺服 jade, ejs, stylus, less 以及 coffee script。只需添加 `.jade`, `.ejs`, `.styl`, `.less` 或者 `.coffee` 后缀，Harp asset pipeline 会负责剩余的事情。
只需添加文件扩展名，引用类库，Harp 便会自动预编译。

``` 
 myfile.md            ->        myfile.html
 myfile.jade          ->        myfile.html
 myfile.ejs           ->        myfile.html
 myfile.less          ->        myfile.css
 myfile.styl          ->        myfile.css
 myfile.scss          ->        myfile.css
 myfile.sass          ->        myfile.css
 myfile.coffee        ->        myfile.js
```

如果你高兴的话，通过在扩展名前加上想要的扩展，可以特别指定伺服这种类型的文件。

``` 
 myfile.jade          ->        myfile.html
 myfile.xml.jade      ->        myfile.xml
```

然而，这是可选的，就像每一个扩展名都已经有了一个默认的扩展类型。下面的两个文件都会被当作 `myfile,css` 进行伺服，例如：

``` 
 myfile.less          ->        myfile.css
 myfile.css.less      ->        myfile.css
```

## 5.可变元数据

`_data.json` 文件比较特殊，里面的数据对模板文件可用。

``` 
 myapp.harp.io/
   +- public/
       |- index.jade
       +- articles/
           |- _data.json        <-- articles metadata goes here
           |- hello-world.jade  <-- hello world article
           +- hello-brazil.jade <-- hello brazil article
```

`_data.json` 文件可能包含这样的内容：

``` 
 {
   "hello-world": {
     "title": "Hello World.",
     "date": "Feb 28, 2013"
   },
   "hello-brazil": {
     "title": "Hello Brazil.",
     "date": "March 4, 2013"
   }
 }
```

在模板文件中可以这样使用：

```
 public.articles._data
```

此外，由于 hello-world 匹配文件名 `hello-world.jade`，这些变量可以在 `hello-world.jade` 模板文件中使用。这个对象也可以作为 `public.articles._data.hello-world` 在所有的模板文件中使用。
在模板文件中，可以通过下面方式，在Jade文件中迭代 articles 变量：

```
 for article, slug in public.articles._data
   a(href="/articles/#{ slug }")
     h2= article.title
```
