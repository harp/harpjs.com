# Install Harp

To install Harp, you must first have [Node.js](http://nodejs.org/download/), which can be installed on OS X, Windows, Linux, and SmartOS. [Download it from the Node.js website.](http://nodejs.org/download/)

<div class="videoWrapper"><iframe width="853" height="480" src="//www.youtube.com/embed/SEA0G9kpVJM?rel=0" frameborder="0" allowfullscreen></iframe></div>

First, install [Node.js](http://nodejs.org/download/). Harp uses Node.js, but you don’t need to know about Node.js or even JavaScript to use Harp. Once it’s finished installing, you can install Harp using the mighty npm: Node.js’ package manager. You’ll use the command prompt to do this.

## On OS X and Linux

Access the command prompt using the Terminal application. On OS X, it’s located in Applications → Utilities → Terminal. On Ubuntu, find it in Applications → Terminal. Then, run the following command:

```bash
sudo npm install -g harp
```

You may skip using `sudo` if you have the appropriate privileges.

## On Windows

If you are using Windows, Node.js will have come with the Node.js Command Prompt application. Now, to install Harp via npm, type in:

```bash
npm install -g harp
```

**Thats it!** Now you are ready to [start the harp webserver](/docs/environment/server).

## Updating Harp

Updating to the latest version of Harp is just as easy. Simply run the following in your terminal:

```sh
sudo npm update -g harp
```

You may skip using `sudo` if you have the appropriate privileges.

[Need to uninstall Harp?](/docs/environment/uninstall)