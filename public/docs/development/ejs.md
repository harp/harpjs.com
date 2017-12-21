# EJS

EJS stands for Embedded JavaScript, which describes it well: it is essentially HTML with JavaScript-based features embedded for templating. This lets you use iterate over [your flexible metadata](metadata), include [partials](partial), and more.

## Why?

EJS is familiar, as it’s primarily HTML, but with additional features that allow you to efficiently reuse pieces of your project. If you have an existing HTML project, all you have to do is rename the file with the `.ejs` extension, and you can start using any of EJS’ features.

[Jade](jade), a different HTML preprocessor, also works especially well with Harp if you’d like to give it a try.

## Usage

Harp’s Asset Pipeline is super easy to use. All the processing happens implicitly, so there is nothing to setup. Just name your file with an `.ejs` extension rather than `.html`, and Harp will see it as if it is an `.html` file.

## Example

This project contains an `index.ejs` and an `about.ejs` file in the root directory.

```
myproject/
  |- index.ejs
  +- about.ejs
```

Both `index.ejs` and `about.ejs` will be seen as an `.html` file. So, requests to the following paths will all work:

- `/`
- `/index`
- `/index.html`
- `/about`
- `/about.html`

Harp's compile step will also export the files as `index.html` and `about.html`.

## Managing File Extension

You may find yourself wanting to create another, markup-based file other than `.html` using EJS. No problem: just prefix `.ejs` with the extension of your choice. For example, `feed.xml.ejs` will be served by Harp as `feed.xml` instead.

## Also see

- [EJS documentation](http://ejs.co/#docs)
- [Jade templating](jade)
- [Markdown](markdown)
