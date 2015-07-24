# Multihost

`harp` 的 `multihost` 功能就好像 harp 服务加上了类固醇。如果要在同一个目录中伺候多个站点，这是最佳方案，而且只要一个命令。               

## 为什么呢？

当工作在多个项目的时候，保持组织有序很重要。在不同端口上来回切换不同的服务是菜鸟的方法。Multihost提供同样的便利，甚至更多。        

## 用法

```
harp multihost [options] [path]
```

## 选项

- __port__ - (Number) 可选, 服务监听的端口。默认是 9000。
- __help__ - 显示额外的 harp multihost 的帮助信息。                 

## 属性

- __path__ - (String) 可选，服务的监听路径。                    

## 示例

运行下面的命令来伺服整个位于 `~/Sites` 的目录              

```
harp multihost ~/Sites --port 3000 
``` 

multihost在如下地址提供所有应用的一个列表           

```
http://127.0.0.1:3000/
```             

![image](https://github.com/Leolusir/harp-docs/tree/master/images/multihost-1.png)                      

Harp 还把 http://127.0.0.1 映射到 http://harp.nu，所以你可以在本地访问多应用服务。每一个应用也可以用 [harp.nu](http://harp.nu/)的子域名访问                     

例如你在下面的目录运行 harp multihost                     

```
myapps/                
   |- mysite/               
   |- myproject.com/                   
   +- myotherproject.harp.io/ 
```                   

然后，就可以在浏览器访问如下URL了:                                      

```
[http://mysite.harp.nu:9000](http://mysite.harp.nu:9000)                          
[http://myproject.harp.nu:9000](http://myproject.harp.nu:9000/)                        
[http://myotherproject.harp.nu:9000](http://myotherproject.harp.nu:9000/)
```                        

如果你希望这个本地URL与你的部署 URL 有关系，可以是使用 [Harp Platform](http://harpjs.com/docs/deployment/harp-platform)，并且你所部署的应用也可以通过子域名 [harp.io](http://harp.io/)进行访问。                         

注意，如果你的机器离线了，这个域名将不能正常使用，因为你不能再访问到 [http://harp.nu](http://harp.nu/)。                    

## 生产模式                    

至于 harp 服务器，通过指定一个环境变量，你可以进行生产模式而非开发模式的 multihost。在生产模式中，Harp 拥有额外的 LRU 缓存，让你的应用运行的更快。       

```
NODE_ENV=production sudo harp multihost --port 80
```          

## 或者在 80 端口上运行 multihost。                   

在 80 端口上运行 harp multihost 是可行的，让你同时伺服一个目录下的多个应用变得简单。          
用这个多应用的目录作为例子

```
myapps/
  |- mysite/
  |- myproject.com/
  +- myotherproject.harp.io/
```                

通过在 `myapps/` 目录中运行下面的命令：                    

```
sudo harp multihost -p 80 & 
```                   

符号 & 让你可以持续使用这个命令行的实例。如果你使用的是 Windows 操作系统，那么可以不加 sudo，但是需要是管理员权限。                

现在，你的应用可以通过下面地址访问：             

```
[http://mysite.harp.nu](http://mysite.harp.nu/)                 
[http://myproject.harp.nu](http://myproject.harp.nu/)                   
[http://myotherproject.harp.nu](http://myotherproject.harp.nu/)                   
```                

## 终止“不定的” multihost         

如果你需要终止 80 端口上的 multihost （或者因为这个原因的任何其他事情），查阅 [how to respolve port conflicts](http://harpjs.com/docs/environment/port-conflicts)。                




