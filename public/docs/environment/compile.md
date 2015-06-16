# Harp compile

Export your harp site to flat static assets &ndash; HTML / CSS / JavaScript.

## Why?

With Harp, you don’t need to compile or watch your project at all times—the compile files don’t need to appear alongside your source files, cluttering everything up. Still, there are still times when you might want to compile all your preprocessed files to HTML, CSS, and JavaScript:

1. ### Apache Cordova
    
  Building a mobile application just got even easier. `harp compile` exports directly to an Apache Cordova / PhoneGap-friendly `www` folder.

2. ### No Lock-In

  If for whatever reason you fall out of love with Harp, just export your project and deploy it on any stack or cloud provider that serves static assets.

## Usage

```
harp compile [options] [projectPath] [outputPath]

Options:

    -h, --help           output usage information
    -o, --output <path>  Specify the output directory for compiled assets (relative to project path)
    
```

**Remember to test the outputted site, to ensure that paths to JS and CSS are correct!**

# Example

```sh
harp init myBlog
cd myblog
harp compile
```

Harp has compiled your new blog into the `./www/` folder.

You should now check that the compiled version works by running
```
harp server www # correct
harp server # wrong way
```

The second command is **wrong** because if you test your site by going to
`http://localhost:9000/out`, some paths could point to the main site and not the
compiled one by using `/stylesheet.css`' paths and that would not be part of 
`wwww`.


If you want to compile it to a folder called `out` instead of standard `www`,
you can use the `-output` or shorthand `-o` to specify that.

```sh
harp init myBlog
cd myBlog
harp compile -o out
```

to test that you should do

```
harp server out
```

## Mobile Example

Try creating a project called `mobileapp` by running `harp init mobileapp` and then compiling it:

```sh
harp init mobileapp
harp compile mobileapp
```

Running the compile command would generate the assets as follows:

```
mobileapp/
  +- www/
    |- index.html
    +- main.css
```

## Backup Example

Lets say we have a project called example in our apps folder. We could export it to static assets in our Desktop/backup folder by running the following command.

```sh
harp compile ~/apps/example ~/Desktop/backup
```

**Note** The backup folder is automatically created and is assumed to be empty.
