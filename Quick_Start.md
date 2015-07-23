# 快速开始           

这份指南将指导你安装 Harp。你将会在开发模式下创建并维护一个简单的项目，能够自动进行预处理，在转为 production 模式的时候，之前预处理缓存的数据。                        

## 1.安装 Harp Web Server      

  －－ 插入视频            

  首先，安装 [Node.js](http://nodejs.org/download/). 虽然 Harp 使用了 Node.js，但即便不了解 Node.js, 或者没有接触过 JavaScript ，也是可以上手 Harp 的。在 Node.js 安装完成后，就可以使用 Node.js 的包管理器 mighty npm 来安装 Harp 了。这是个基于命令行的工具。              

  ### 在 OS X 和 Linux 环境下            

  使用任意的终端工具打开命令行。OS X 上，它位于应用->实用程序->终端。Ubuntu 上，在应用->终端。然后，运行下面的命令：                    

  ```
  sudo npm install -g harp
  ```                     

  ### 在 windows 环境下                 
  
  如果你在使用 Windows, Node.js 的安装包已经包含了一个 Node.js 的命令行程序。直接输入如下命令即可安装                    

  ```
  npm install -g harp 
  ```                         

## 2.创建一个应用                    
  
  Harp 可以非常容易的提供服务，简单到象一个 index.html 一样。因为Harp有一个内嵌的预处理器，所以你可以很方便的用模板语言来创建 HTML。比如，用下面的命令行来创建一个 index.jade 文件               

  ```
  mkdir hello-world 
  cd hello-world 
  echo h1 Hello World >> index.jade
  ```                        

  以上命令将会创建一个 hello-world 目录用于 Harp 应用。然后，在目录里面，一个 index.jade 被创建出来，然后被处理成 `<h1>Hello world</h1>`。            

## 3.启动 web server                   

  用默认的 9000 端口启动 Harp web server。                    

  ```
  harp server --port 9000
  ```                    

  打开浏览器访问 [localhost:9000](http://localhost:9000/) 即可看到以下内容                    

  ![image](https://github.com/Leolusir/harp-docs/blob/master/images/qs-start_web.png)                        

## 4.编译项目
  
  你可以把 Harp 编译后当作一个 web server 来使用。然而 Harp 是为了造出优秀的静态站点而生的。                   

  ```
  harp compile
  ```                    

## 5.将 Harp 投入生产环境   
  
  为了将 Harp 投入生产，你只需要做如下这几点：在生产环境，Harp 将缓存经过预处理的输出以获得尽可能快的性能。在当前这个 case 里面，缓存 index.jade 的预处理结果。别忘了在生产环境里使用 production 标志位 (flag)。                   

  ```
  NODE_ENV=production sudo harp server --port 80
  ```                    

  你无需在生产环境中手工跑Harp来上线新版本。事实上，最简单的办法是使用 [Harp Platform](https://www.harp.io/)，你可以使用 Dropbox 来创建 Harp App，不仅如此，还能多人协作之。                

  你还可以在 [Heroku](http://harpjs.com/docs/deployment/heroku), 上面运行生产环境的 Harp，将 Harp 部署到 [GitHub Pages](http://harpjs.com/docs/deployment/github-pages)， 针对 Apache Cordova/PhoneGap 编译 Harp 应用。                 

  ### 接下来要做的事

  上面只是一次尝试。举个例子，默认 Harp 应用还包括一个 .less 文件，被当成 .css 文件来处理。通过修改 LESS 文件就能调整 CSS，不需要额外配置就可以从默认 App 开始做整个项目。[更多信息请阅读 initializing the default Harp app](http://harpjs.com/docs/environment/init).                         