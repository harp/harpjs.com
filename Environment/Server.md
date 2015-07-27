# Harp 服务器

Harp 的主要设计目的是当作 server 或者 multihost 来运行的。下面这个命令运行后可以运行一个本地单应用。                  

## 用法    

```
harp server [options] [path]
```                

## 选项

- __port__ - (Number) 可选参数，服务器监听的端口号。默认端口号是 `9000`。             
- __help__ - 显示帮助信息。                   
 

## 属性 

－ __path__ - (String) 可选，你希望服务器监听的路径。

## 示例

```
harp server ~/apps/example.com --port 3000 
```

## 访问运行中的 Harp 应用

我们提供了一个特殊的 URL 用来访问你的应用。在之前一个命令里，我们指定了 3000 端口，所以 Harp 应用将运行在               

- `http://harpdev.io:3000`                    
  但是，你随时可以回到默认的 URI                 

- `http://127.0.0.1:3000`
- `http://localhost:3000`                   

如果没有指定端口，应用将会运行在默认端口 `9000`。                    

- `http://harpdev.io:9000`
- `http://127.0.0.1:9000`
- `http://localhost:9000`                

## 使用 80 端口

有时候会觉得每次访问本地运行的站点都要输入端口号是很痛苦的。如果用浏览器的默认端口 80 那就没有这烦恼了。不过在 80 端口运行需要提权到 Admin 账户。在 OS X 上，这意味着你需要用到 sudo 命令                      

```
sudo harp server --port 80
```

如果 Harp 和已经在 80 端口上跑的某些业务冲突，你可以这样解决 [with the port conflicts guide](http://harpjs.com/docs/environment/port-conflicts)。                  

## 投入生产   

Harp 是时刻准备着投入生产环境的。只要指定一个环境变量，额外的 LRU 缓存就会加入进来，加速你的站点。                   

```
NODE_ENV = production harp server --port 3000
```            






