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

## Contributing CSS

This version of [harpjs.com](http://harpjs.com) uses [Bootstrap](https://github.com/twbs/bootstrap). Bootstrap is in `_bootstrap` and is not modified.

To override the default behaviour of Bootstrap, make a copy of the component in `_override` and import it. Make the changes on top of Bootstrap, removing the lines that will not change from the original.

For example, the main banner on harpjs.com uses a `.jumbotron` class from Bootstrap, which is located in `_bootstrap/jumbotron.less`. This is augmented with additional styles, like the additional `.jumbotron-knockout` class, in `_overrides/jumbotron.less`

For quick and less modular changes, work with in a `.section` in `application.less`, using non-Bootstrap classes.

## Deploying

To deploy the project, you’ll need to be invited as a collaborator on [the Harp Platform](http://harp.io). First, make sure all your changes are commited, as all changes are deployed regardless. Then, as long as you have your Dropbox in the standard location, you can run:

```bash
npm run deploy
```

This will copy the `harpjs.com/` to your Dropbox. Now, just vist [the Harp Platform](http://harp.io) and hit deploy. This is a non-traditional setup with the Harp Platform, just to enable us to have the docs open source on GitHub.

## License

Copyright © 2014 [Chloi Inc.](http://chloi.io)
