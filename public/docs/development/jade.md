# Jade

Jade is a markup language that removes the ceremony with creating XML based files (such as `.html` or `.xml` files). Jade works extremely well with Harp.

## Why?

It is terse and very powerful. If you are creating XML based output (such as HTML) we strongly recommend giving Jade a shot. Avoid Jade if you are creating something other than an XML based files such as `.json` or `.txt` files. If that is the case you may find EJS to be a more logical choice.

## Usage

Harp's Asset Pipeline is super easy to use. All the pre-compiling happens
implicitly so there is nothing to setup. Just name your file with a `.jade` extension instead of `.html` and the Harp web server will see it as if it is an `.html` file.

## Example

In our project we have a `index.jade` and a `about.jade` file in our public directory.

```
myproject/
  |- harp.json
  +- public
    |- index.jade
    +- about.jade
```

Both `index.jade` and `about.jade` will be seen as a `.html` file so requests to the following paths will all work.

- `/`
- `/index`
- `/index.html`
- `/about`
- `/about.html`

Harp's compile step will also export the files as `index.html` and `about.html`

## Managing File Extension

You may find yourself wanting to create a file other than `html` using jade. No problem, just prefix `.jade` with the extension of your choice. For example `feed.xml.jade` will be seen as `feed.xml`.

## Also see

- [Jade documentation](http://jade-lang.com)
- [EJS templating](ejs)
- [Handlebars templating](handlebars)
