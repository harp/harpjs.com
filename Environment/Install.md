# 安装 Harp

安装Harp，需要[Node.js](http://nodejs.org/download/)环境，可以安装在OS X，Windows，Linux，以及SmartOS上。[从Node.js网站上下载](http://nodejs.org/download/)               

[视频](http://www.youtube.com/embed/SEA0G9kpVJM?rel=0)            

首先，安装[Node.js](http://nodejs.org/download/). 虽然Harp使用了Node.js，但即便不懂Node.js, 甚至哪怕连JavaScript都没学过，也是可以上手Harp的。等Node.js安装完成后，就可以使用Node.js的包管理器mighty npm来安装Harp了。这是个基于命令行的工具。                      

## 在 OS X和Linux 环境下                      

使用任意的终端工具打开命令行。OS X上，它位于应用->实用程序->终端。Ubuntu上，在应用->终端。然后，运行下面的命令：                 

```
sudo npm install -g harp
```                   

如果拥有合适的权限，可以不使用sudo。                

## 在 Windows 环境下                 

如果你在使用Windows, Node.js的安装包已经包含了一个Node.js的命令行程序。直接输入如下命令即可安装               

```
npm install -g harp
```                

搞定！现在你可以[启动harp web server](http://harpjs.com/docs/environment/server)了。                

## 升级Harp

升级到最新版本的Harp非常简单。只需在终端运行下面的命令：           

```
sudo npm update -g harp
```                

如果拥有合适的权限，可以不使用sudo。                     

[需要卸载Harp？](http://harpjs.com/docs/environment/uninstall)            

          