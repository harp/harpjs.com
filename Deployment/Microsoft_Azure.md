# Azure

微软 Azure 是一个开放、灵活的云平台，通过微软数据管理中心的全球网络，让你可以快速编译、部署以及管理应用。
如果你对在命令行中使用 git 比较熟悉，你可能，将你的 Harp 应用部署到 Azure 可能不存在什么困难。

## Azure 跨平台命令行

首先，下载 [Node 版本的 Azure 跨平台命令行](https://github.com/Azure/azure-sdk-for-node)。我们将使用这个工具帮助你通过命令行创建一个 Azure 站点。

``` 
npm install -g azure 
```

关于这个工具的更详尽的博客贴在 [这里](http://www.hanselman.com/blog/WindowsAzureNoKidding.aspx)

## 1.创建或者使用一个现有应用

如果你需要一个新的应用，创建一个带有 index 文件的目录。你也可以通过终端做到：

``` 
harp init my-harp-app
cd my-harp-app
```

## 2.将你的应用初始化为一个 Git 版本库

下一步，你将会把你的 Harp 应用初始化为一个 Git 版本库（如果尚且不是一个 Git 版本库）。然后，添加、提交变动：

``` 
git init
git add .
git commit -am "hello world"
```

## 3.__添加__ package.json __和__ server.js

你需要添加两个文件到你的 Harp 应用根目录（不是 `public` 目录）。第一个是 `package.json`：

``` 
{
"name": "My Harp app",
"version": "1.0.0",
"description": "A Harp App on Azure",
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

下一步，创建 `server.js` ，包含一下内容：

``` 
require('harp').server(__dirname, { port: process.env.PORT || 5000 }) 
```

## 4.部署你的 Harp 应用到 Azure

你已经准备好了将你的应用部署到 Azure。将 Harp 应用创建为 Azure 项目，"my-harp-app" 是你想要的二级域名：

``` 
azure site create --location "West US" my-harp-app --git 
```

这将添加一个新的 azure 远程到你的 git 版本库。azure 远程是站点将会被部署的方式。部署到 azure 与将代码 push 到主干一样简单。

``` 
git push azure master 
```

## 5.将环境设置为生产模式

为了得到最好的性能，你将需要合理设置 Harp 的生产模式。

``` 
azure config set NODE_ENV production 
```

现在你的站点应该跑在 Azure 上了，通过 http://my-harp-app.azurewebsites.net 可以访问，my-harp-app 是你指定的二级域名。

### 下一步怎么做？

你的 Harp 应用已经被成功地部署到了 Azure 上。现在，你可能想要自定义它。阅读 [五个简单规则](http://harpjs.com/docs/development/rules)，开始快速开发 Harp 应用模板。
如果你想使用一个 Azure 的自定义域名，遵循 [微软 Azure 文档](http://azure.microsoft.com/en-us/documentation/articles/cloud-services-custom-domain-name/) 上的指导。