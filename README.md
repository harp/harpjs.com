# harpjs.com

The [Harp](https://github.com/sintaxi/harp) app for [harpjs.com](http://harpjs.com), which contains the [documentation](http://harpjs.com/docs), [blog](http://harpjs.com/blog), and more.

## Running locally

To view or work on the website and documentation locally, run the following commands:

```bash
# Install or update Harp, may need to be prefaced with `sudo`
npm install -g harp

# Clone this repository
git clone https://github.com/harp/harpjs.com

# Serve this repository
harp server harpjs.com

# Harp is now serving the project at http://localhost:9000
```

## Deploying

To deploy the project, you’ll need to be invited as a collaborator on [the Harp Platform](http://harp.io). First, make sure all your changes are commited, as all changes are deployed regardless. Then, as long as you have your Dropbox in the standard location, you can run:

```bash
npm run deploy
```

This will copy the `harpjs.com/` to your Dropbox. Now, just vist [the Harp Platform](http://harp.io) and hit deploy. This is a non-traditional setup with the Harp Platform, just to enable us to have the docs open source on GitHub.

## License

Copyright © 2013–2014 [Chloi Inc.](http://chloi.io)

The Harp trademark and logo are Copyright © 2013–2014 [Chloi Inc.](http://chloi.io)<br/>
The Harp boilerplate that makes up this website is [available under the MIT license](LICENSE.md).<br/>
The <span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Harp Documentation</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://chloi.io" property="cc:attributionName" rel="cc:attributionURL">Chloi Inc.</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.<br/>
