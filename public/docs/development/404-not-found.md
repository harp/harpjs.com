# 404 Not Found status code

Use Harp to show a custom 404 page.

## Why

Whatever you’re making deserves a custom 404 page so you can provide useful information to visitors, and design it like the rest of your site.

## Usage

Simply add a `404.jade`, `404.ejs`, `404.md` or `404.html` file in the root directory of your application.

## Example

If you [initialize a new Harp application](../environment/init), a `404.jade` file is generated automatically. To add a custom 404 page to an existing project, just add a 404 file in the root.

```
myproject/
  |- 404.html
  |- index.html
  +- main.less
```

If you wanted your project to use the same layout, even for the 404 page, you application might look like the following:

```
myproject/
  |- _layout.ejs
  |- index.ejs
  |- 404.md
  +- main.scss
```

Now, the [_layout](layout) file will wrap both the `index.ejs` and `404.md`.