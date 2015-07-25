# 公有和私有文件

一个正常运作的 Harp 应用需要公有的目录。它决定了哪些会被公共伺服，以及应用会暴露哪些 URL。公共文件放在 public 目录中，public 目录之外的文件不会被伺服。


``` 
myapp/
  |- harp.json
  |- README.md               <--- won’t be served
  |- secrets.txt             <--- won’t be served
  +- public/                 <--- public directory
      +- index.html          <--- will be served
```

## 忽略下划线开头的文件

任何以下划线开头的文件都会被服务器忽略。这是 `layout` 和 `partial` 文件的推荐命名约定。Harp 将会对文件和目录都遵循这个规则。

## 根目录风格应用

还可以有一种根目录风格的应用，public 目录事实上就是根目录。这种情况下，你仍然可以通过在文件名前加下划线，来避免它们对外伺服。

``` 
myapp/                       <--- public directory
    |- _harp.json
  |- _secrets.txt            <--- won't be served
  +- index.html              <--- will be served
```

## 设计原理

通过一个简单的约定，指定和鉴别哪些文件不对终端用户服务变得相当简单。

## 示例

``` 
myapp/
  |- harp.json               <--- won’t be served
  +- public/                 <--- public directory
      |- index.html          <--- will be served
      |- _some-partial.jade  <--- won’t be served
      +- _shared-partials/   <--- won’t be served
          +- nav.jade
```

``` 
myapp/                       <--- public directory
  |- _harp.json
  |- index.html              <--- will be served
  |- _some-partial.jade      <--- won’t be served
  +- _shared-partials/       <--- won’t be served
      +- nav.jade
```