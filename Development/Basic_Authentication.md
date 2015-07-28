# 基本认证

给你的站点添加密码来限制访问者


## 为什么？

你可能需要一个有效的方式，来给一个完全静态站点或者客户端应用添加密码保护，无论是为了内部使用，还是你在开发一个带客户端项目的暂时考虑。

## 示例

![image](https://github.com/Leolusir/harp-docs/tree/master/images/basic-auth-1.gif)

如果你的应用根目录中还没有 `_harp.json` 文件的话，先创建一个，或者 `harp.json` 文件，如果你有一个指明的 [公共目录](http://harpjs.com/docs/development/public)。添加下面的代码，会使用用户名 Ali Baba 和密码 Open, Sesame! 来保护你的应用：

``` 
{
  "basicAuth": "Ali Baba:Open, Sesame!"
}
```

## 多个账号

你也可以指明多个基本账号来进行认证：

``` 
{
  "basicAuth": ["user1:pass1", "user2:pass2", "user3:pass3"]
}
```

## 完整的 `harp.json` 文件

`basicAuth` 数组或者字符串，[harp.json 文件中的全部属性](http://harpjs.com/docs/development/harp-json)。一个更长一点的 `harp.json` 文件可能是这样的：

``` 
{
  "basicAuth": "Ali Baba:Open, Sesame!",
  "globals": {
      "title": "Ali Baba’s blog",
      "author": "Ali Baba",
      "description": "A secret blog"
  }
}
```

## 不加认证

如果你想把 `basicAuth` 属性加在 `harp.json` 文件中，但是当前又不需要 `basicAuth` ，一个空的数组不会添加任何限制：

``` 
{
  "basicAuth": []
}
```

## 基本认证以及 harp 编译

因为 Harp 是一个可以生成静态站点的网页服务器，但又不是一个静态站点生成器，所以它具有编译成普通 HTML、CSS、以及JavaScript的额外功能，例如 basicAuth。

如果你使用 Harp 进行编译，而又使用其他的网页服务器运行项目，例如 Apache，或者部署到 GitHub Pages 上，这些特征将不会被那些平台支持。

然而，你可以将你的应用部署到 [Harp 平台](https://www.harp.io/)，它支持这个功能。手动部署 Harp 到生产模式的话，也许 [Heroku](http://harpjs.com/docs/deployment/heroku) 和 [Github Pages](http://harpjs.com/docs/deployment/github-pages) 是不错的选择。
