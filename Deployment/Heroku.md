# 部署到 Heroku

Heroku 是一个专注于开发者的平台，用来为应用提供主机服务。
如果你对命令行中使用 git 非常熟悉，那么把你的 Harp 应用部署到 Heroku 将不存在问题。

## 创建一个 Heroku 账户

如果你还没有，创建一个 [Heroku account](https://api.heroku.com/signup/devcenter)，安装它们的 [toolbelt](https://toolbelt.heroku.com/)，然后使用终端，通过用户名和密码进行登录。

``` 
heroku login 
```

现在你已经准备好修改你的 Harp 应用来为 Heroku 做准备。如果你没有一个现成的应用，或者想尝试通过默认的应用进行部署，你可以[使用 harp 初始化一个新应用](http://harpjs.com/docs/environment/init)。

## Harp 编译包

部署你的应用到 Heroku 的最简单方式是通过 [@zeke’s Harp buildpack](https://github.com/zeke/harp-buildpack)

## 1.创建或者使用一个现成的应用

如果你需要一个新的应用，创建一个带有 index 文件的目录。你也可以通过终端来做：

``` 
mkdir my-harp-app
cd my-harp-app
echo "hello world" > index.html
```

## 2.将你的应用初始化为一个 Git 版本库

下一步，你将初始化你的 Harp 应用为一个 Git 版本库（如果不是一个已经存在的）。然后，添加、提交变动：

``` 
git init
git add .
git commit -am "hello world"
```

## 3.使用编译包

在 Heroku 上创建一个新的应用，设置为使用 Harp 编译包。

``` 
heroku create my-harp-app
heroku config:set BUILDPACK_URL=https://github.com/zeke/harp-buildpack.git 
```

## 4.将你的应用部署到 Heroku

Push 到 Heroku 上，然后在线看你的应用：

``` 
git push heroku master
heroku open 
```

## 5.设置生产模式

为了得到最好的性能，你将需要合理地设置 Harp 的产品模式。Heroku 编译包 [尚且](https://github.com/zeke/harp-buildpack/issues/8) 还不能为你做到。

``` 
heroku config:set NODE_ENV="production" 
```

## 手动部署到 Heroku

如果你希望手动部署一个 Harp 应用到 Heroku，使用下面的方式：

## 1. __添加__ package.json __和__ server.js

有两个文件需要添加到你的 Harp 应用根目录中（不是 `public` 目录）。第一个是 `package.json` ：

``` 
{
  "name": "My Harp App",
  "version": "1.0.0",
  "description": "A Harp App on Heroku",
  "dependencies": {
    "harp": "*"
  },
  "engines": {
    "node": "0.10.x",
    "npm": "1.2.x"
  }
}
```

然后，使用 Node 包管理器来安装依赖：

``` 
npm install 
```

然后，创建 server.js，包含一下内容：

``` 
require('harp').server(__dirname, { port: process.env.PORT || 5000 }) 
```

## 2.将你的应用初始化为一个 Git 版本库

使用终端，将你的应用初始化为一个 Git 版本库（如果尚且还不是一个 Git 版本库）。然后，添加、提交变动：

``` 
git init git add . git commit -m "First Harp + Heroku commit" 
```

## 3.部署到 Heroku

你已经准备好了部署应用到 Heroku。将 Harp 应用设置为一个 Heroku 应用，然后使用 git 将应用 push 到 Heroku。

``` 
heroku create my-harp-app git push heroku master 
```

这个例子中，应用会被叫做 `my-harp-app`，然后瞬间可以通过 `my-harp-app.herokuapp.com` 进行访问。

### 下一步如何？

你的 Harp 应用已经被成功部署到 Heroku。现在，你可能希望自定义它。阅读 [五个简单规则](http://harpjs.com/docs/development/rules)，迅速开始开发 Harp 应用模板。
如果你希望在 Heroku 上使用一个自定义域名，遵循 [Heroku 开发中心](https://devcenter.heroku.com/articles/custom-domains) 上的指导。