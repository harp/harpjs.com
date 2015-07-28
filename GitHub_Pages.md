# 部署到 Github Pages

Github Pages，也被称作 gh-pages，是 Github 为公共网页提供的免费主机服务。它通常被用来放个人博客以及网站项目。
如果你对在命令行下使用 git 比较熟悉，那么把你的 Harp 应用部署到 Github Pages 应该不是什么难事。

## 示例用法

可以有两种不同的方法使用 GitHub Pages：
- [个人以及公司页面](http://harpjs.com/docs/deployment/github-pages#user-pages)
- [项目页面](http://harpjs.com/docs/deployment/github-pages#project-pages)

在 [GitHub Pages documentation](https://help.github.com/articles/user-organization-and-project-pages)，你可以阅读更多关于两种页面的区别。

## 部署一个 GitHub 个人或者公司页面

这五个步骤将会迅速带你将一个 Harp 应用部署到个人或者公司 GitHub 页面上。

### 1.创建一个新的版本库

创建一个叫做 __your-github-user-name.github.io__ 的新的版本库，用你自己的个人或者公司名称替代 “your-github-user-name”。假如你的用户名是 octocat，那么创建一个叫做 octocat.github.io 的版本库。

![image](https://github.com/Leolusir/harp-docs/tree/master/images/github-pages-1.png)

勾选 “带有一个 README 初始化版本库。” 这会让你 __clone__ 你新的版本库。

### 2.克隆版本库

终端中，__clone__ 你刚刚创建的版本库：

``` 
git clone https://github.com/your-github-user-name/your-github-user-name.github.io.git 
```

### 3.初始化 Harp 应用

你的版本库准备好了，你只需要再创建一个 Harp 应用。在 `_harp` 中初始化一个新的 Harp 应用。

``` 
harp init _harp 
```

如果你有一个现成的项目，你有可能也想将它移动到你的工作目录中，但是必须确保文件夹名称以一个下划线开始；当你部署到 GitHub Pages 时，你不会想要你的源代码被运行。

### 4.编译你的 Harp 应用

只要你喜欢，Harp 可以将你的应用编译成 HTML、CSS 以及 JavaScript。默认的，Harp 编译器创建一个 www 目录。因为 Github Pages 是从版本库的根目录运行，你会希望在根目录编译你的 Harp 应用。

``` 
harp compile _harp ./ 
```

### 5.部署到 GitHub Pages

你已经准备好部署你的应用了！添加全部的文件，提交它们，然后将它们 push 到 GitHub上：

``` 
git add -A
git commit -a -m "First Harp + Pages commit"
git push origin master
```

接下来的十分钟内，你的应用将会在 `your-github-name.github.io` 可以访问。

### 下一步是什么？

你的 Harp 应用已经被成功地部署到 GitHub Pages。现在，你应该会想自定义它。阅读 [五个简单规则](http://harpjs.com/docs/development/rules)，快速开始修改 Harp 应用的模板。

如果你想通过 GitHub pages 使用一个自定义的域名，遵循 [GitHub Pages documentation](https://help.github.com/articles/setting-up-a-custom-domain-with-pages) 的指导。

## 部署一个项目页面

这五步会快速带你部署一个 Harp 应用到一个项目的 GitHub Page。

### 1.克隆项目

```
git clone https://github.com/your-github-name/repository-name.git 
```

### 2.创建一个新的，干净的分支

下一步，你将需要在应用的现有版本库中创建一个新的 "orphan" 分支。这个分支将会包含你的 Harp 应用，编译完的HTML、CSS 以及JavaScript 将会通过 GitHub Pages 运行。

``` 
cd repository
git checkout --orphan gh-pages 
```

现在，从分支中清空现有的文件，这样一个 Harp 应用可以取而代之。

``` 
# Always ensure you’re in the right place before deleting files with this command 
git rm -rf . 
```

### 3.初始化一个 Harp 应用

你的版本库准备好了，你还需要一个 Harp 应用。在 `_harp` 中初始化一个新的 Harp 应用。

``` 
harp init _harp 
```

如果你已经有了一个项目，你也可以将它移动到你的工作目录中，但是确保在文件名的开头添加一个下划线；当你部署到 GitHub Pages 是，你不会想你的源代码文件被运行。

### 4.编译你的 Harp 应用

无论何时，Harp 都可以将你的应用编译成 HTML、CSS以及 JavaScript。默认地，Harp 编译创建一个 www 目录。因为 GitHub Pages 是从版本库的根目录运行，你会希望在根目录编译。

``` 
harp compile _harp ./ 
```

### 5.部署到 GitHub Pages

你已经准备好了部署你的应用！添加所有的文件，提交它们，然后 push 到 GitHub：

``` 
git add -A
git commit -a -m "First Harp + Pages commit"
git push origin gh-pages
```

你的应用将会在下面的十分钟内在 `your-github-name.github.io/repository-name` 可以访问。

### 下一步做什么？
你的 Harp 应用已经被成功地部署到GitHub Pages 上。现在，你可能想自定义它。阅读[五个简单规则](http://harpjs.com/docs/development/rules)，快速上手开发 Harp 应用的模板。

如果你想使用 GitHub Pages 的自定义页面，遵循 [GitHub Pages documentation](https://help.github.com/articles/setting-up-a-custom-domain-with-pages) 上的指导。
