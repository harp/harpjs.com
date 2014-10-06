# Azure

Microsoft Azure is an open and flexible cloud platform that enables you to quickly build, deploy and manage applications across a global network of Microsoft-managed data center

## Azure Cross-Platform Command Line

Download Azure Cross-Platform Command Line (open source on github, written in node).
We will use this tool to help create the Azure site from the command line.

    npm install azure -g

An more in-depth blog post about the tool can he found [here](http://www.hanselman.com/blog/WindowsAzureNoKidding.aspx)

## Initialize your app as a Git repo

  Next, you’ll initialize your Harp app as a Git repository (if it isn’t one already.) Then, add and commit the changes:

  ```sh
  git init
  git add .
  git commit -am "hello world"
  ```
  
## Add `package.json` and `server.js`

There are two files you’ll need to add to the root of your Harp application (not inside the `public` directory). The first is `package.json`:

```json
{
 "name": "My Harp App",
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

Then, use Node Package Manager to install the dependencies:

```
npm install
```

Next, create `server.js`, which should contain the following:

```js
require('harp').server(__dirname, { port: process.env.PORT || 5000 })
```

## Create Azure Site

If you don't already have a website you can create one:

    azure site create --location "West US" my-harp-app --git

This will add a new `azure` remote to your git repository. The `azure` remote is how the site will be deployed.

## Deploy you Application to Azure

To deploy to azure is as simple as pushing to master.

```git push azure master```

### Set environment to production
To get the best performance, you’ll need to set Harp’s production properly. 

```azure config set NODE_ENV production```

## Done 

At this point your site should be running on azure at http://my-harp-app.azurewebsites.net

*Give it a go!*
