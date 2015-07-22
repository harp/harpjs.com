# Harp compile

Export your harp site to flat static assets &ndash; HTML / CSS / JavaScript.

## Why?

With Harp, you don’t need to compile or watch your project at all times—the compile files don’t need to appear alongside your source files, cluttering everything up. Still, there are still times when you might want to compile all your preprocessed files to HTML, CSS, and JavaScript:

1. ### Apache Cordova
    
  Building a mobile application just got even easier. `harp compile` exports directly to an Apache Cordova / PhoneGap-friendly `www` folder.

2. ### No Lock-In

  If for whatever reason you fall out of love with Harp, just export your project and deploy it on any stack or cloud provider that serves static assets.

## Usage

```sh
harp compile [options] [projectPath] [outputPath]
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

**Note** To prevent files from being compiled and deploy, put them in a private directory (starting with _) or put them above your public/ directory if you are using the framework file layout. Helps when pulling in Boostrap through bower and you're using either less or sass versions, for instance.




