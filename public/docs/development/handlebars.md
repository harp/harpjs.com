# Handlebars

Handlebars is a popular, logic-less templating language: it is essentially HTML with simple features for making reusable templates. This lets you use iterate over [your flexible metadata](metadata), include [partials](partial), and more.

## Why?

Handlebars is familiar, as it’s primarily HTML, but with additional features that allow you to efficiently reuse pieces of your project. If you have an existing HTML project, all you have to do is rename the file with the `.hbs` extension, and you can start using any of Handlebars’ features.

## Usage

Harp’s Asset Pipeline is super easy to use. All the processing happens implicitly, so there is nothing to setup. Just name your file with an `.hbs` extension rather than `.html`, and Harp will see it as if it is an `.html` file.

## Example

This project contains an `index.hbs` and an `about.hbs` file in the root directory.

```
myproject/
  |- index.hbs
  +- about.hbs
```

Both `index.hbs` and `about.hbs` will be seen as an `.html` file. So, requests to the following paths will all work:

- `/`
- `/index`
- `/index.html`
- `/about`
- `/about.html`

Harp’s compile step will also export the files as `index.html` and `about.html`.

## Managing File Extension

You may find yourself wanting to create another, markup-based file other than `.html` using Handlebars. No problem: just prefix `.hbs` with the extension of your choice. For example, `feed.xml.hbs` will be served by Harp as `feed.xml` instead.

## Also see

- [Handlebars documentation](http://handlebarsjs.com)
- [EJS templating](ejs)
- [Jade templating](jade)
- [Markdown](markdown)
