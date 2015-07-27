## Express 嵌入式中间件

有时候，你已经拥有了一个服务，但是想将 Harp 作为 asset pipeline，来获取 Harp 预处理的优点。

本示例在一个项目中，结合了 Express 的长处和所有 Harp 的优点。 没有外部的预处理，没有复杂的配置，并且没有客户端的解析器；只有编码的幸福。最好的是，设置极其简单。

## 添加 Harp 作为依赖

在你的 Express 应用的 package.json 文件中包含 Harp 作为依赖。

```
{ "name":
	 "myapp", 
	 "version": "0.1.0", 
	 "dependencies": {
	 			 "express": "3.x", 
	 			 "harp": "*" 
	 			 } 
	 } 
```

## 使用 harp.mount

接下来，使用 harp.mount，就像使用静态中间件一样。

``` 
var express = require("express"); 
var harp = require("harp"); 
var app = express(); 

app.use(express.static(__dirname + "/public")); 
app.use(harp.mount(__dirname + "/public")); 

app.listen(9000); 

// routes as normal
```

## 添加 Harp 应用

全部搞定！现在将你的 Harp 应用的静态文件放到 public 目录下。下面是你的 public 目录有可能看起来像的示例：

```
/public 
  /_data.json 
  /_harp.json 
  /index.ejs 
```

你可以用一个正常 Harp 应用同样的方式 [给模板传递数据](http://harpjs.com/docs/development/metadata)。例如，使用 _data.json：

```
  {
    "index": {
      "title": "Hello World"
    }
  }
```

至于全局变量，使用 _harp.json 文件，就像这样：

```
 "globals": {
     "foo": "bar"
   }
```

然后你可以像这样在你的 index.ejs 模板中使用 title 和 foo变量：

```
 <h1><%= title %></h1>
 <p><%= foo %></p>
```

应该输出：

```
 <h1>Hello World</h1>
 <p>bar</p>
```
