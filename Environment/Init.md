# 初始化 Harp 应用            

Harp 使用一个命令行界面来从头创建新项目。这是尝试 Harp 最快捷的方式了。              

## 为什么呢？

通常，创建一个项目需要没完没了的样板代码。如果你不想创建一个复杂的反人类的空项目，那么这些命令就很有用了。                   

## 属性      

path - (string) Optional, 你希望项目被创建在哪里？必须留空，否则不会创建任何文件。默认值是当前目录。            

## 示例

下面这个例子在 `myproject` 目录创建一个默认应用              

```
harp init myproject
```        

## 默认项目结构          

```
myproject/                 
     |- _layout.jade                    
     |- 404.jade                     
     |- index.jade                     
     +- main.less
```

注意：默认项目使用 [Jade](http://harpjs.com/docs/development/jade) 来生成 HTML。不过你一样可以使用 EJS。                   

## 使用样板               

使用 --boilerplate 或 -b 标志可以用 GitHub 上的样板初始化一个新 Harp 应用。下面这个命令会在 `myproject` 目录创建一个使用 [github.com/kennethormandy/hb-remedy](https://github.com/kennethormandy/hb-remedy) 样板的新项目                  

```
harp init myproject --boilerplate kennethormandy/hb-remedy
```                  

你甚至可以不用指定一个 GitHub 用户，默认使用 [default Harp boilerplates](https://github.com/harp-boilerplates)                   

```
harp init myproject --boilerplate docs 
```                    

## 将某一项目当成样板

即便一个不是用作 Harp 样板的 GitHub 仓库也可以用来初始化一个项目。因为 Harp 是伺候 HTML， CSS 和 JavaScript 的，所以任何基于 web 技术的项目应该都可以。例如，你可以轻易的在本地运行一个 Apache Cordova/PhoneGap 应用。                 

```
harp init -b phonegap/phonegap-start                  
harp server www                        
# Your project is now being served at http://localhost:9000 
```               




