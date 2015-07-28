## 编译 harp

将你的 harp 站点导出为普通的静态文件 – HTML / CSS / JavaScript。                          

## 为什么呢？
使用 Harp ，不需要总是编译或者监视你的项目——编译出来的文件不需要和源代码文件放在一起，随便放就好了。然而有些时候你还是希望将你的预处理文件编译成 HTML ，CSS 和 JavaScript：

## Apache Cordova

创建一个手机应用变得相当简单。编译 Harp 直接导出一个 Apache Cordova/PhoneGap 友好的 www 文件夹。                    

## 没有锁定

假如不管出于什么样的原因，你不再喜欢 Harp，只需要将你的项目导出到任何一个伺服静态文件的 stack 或者云服务器上就好了。

## 用法

```
harp compile [options] [projectPath] [outputPath] 
```

## 手机示例

通过运行 harp init mobileapp，尝试创建一个叫做 mobileapp 的项目，然后编译它：

```
harp init mobileapp harp compile mobileapp 
```

运行编译命令将会生成如下的文件：

```
mobileapp/ +- www/ |- index.html +- main.css 
```

## 备份示例

假如我们在 apps 目录下有一个叫做 example 的项目。我们可以通过下面的命令将它导出成静态文件，放到目录 `Desktop/backup` 中。     

```
harp compile ~/apps/example ~/Desktop/backup 
```

注意，备份文件夹会自动创建，并且被假定为空的。