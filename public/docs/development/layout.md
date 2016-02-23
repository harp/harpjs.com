# Layouts

A Layout is a common template that includes all content except for one main content area. You can think of a Layout as the inverse of a `partial`.

* [Creating Layouts with EJS](#ejs)
* [Creating Layouts with Jade](#jade)
* [Multiple Layouts](#multiple-layouts)
* [Explicit Layouts](#explicit-layouts)
* [No Layout](#no-layout)

## Why?

Often sites and apps will have common headers and footers and the only area that needs to change is the body. This is an ideal use case for a layout.

## Usage

A Layout requires a layout file, written in EJS or Jade, and [a `yield` property](yield) to tell Harp where to insert the content.

<h2 id="ejs">Example using EJS Templating</h2>

Given a really simple app / project with this structure:

```
myapp.harp.io/
  |- _layout.ejs
  +- index.ejs
```

**_layout.ejs**

```ejs
<html>
  <head>
    <title>My Site</title>
    <script src="/javascripts/jquery.js">
    </script><script src="/javascripts/app.js"></script>
  </head>
  <body>
	<%- yield %>
	<div id="footer">
      <p>Copyright © foobar</p>
    </div>
  </body>
</html>
```

**index.ejs**

```ejs
<h1>My Site</h1>
<p>Welcome to my very first site.</p>
```

The final result:

```html
<html>
  <head>
    <title>My Site</title>
    <script src="/javascripts/jquery.js">
    </script><script src="/javascripts/app.js"></script>
  </head>
  <body>
	<h1>My Site</h1>
	<p>Welcome to my very first site.</p>
	<div id="footer">
      <p>Copyright (c) foobar</p>
    </div>
  </body>
</html>
```

<h2 id="jade">Example using Jade Templating</h2>

Harp allows you to apply a `.jade` file extension on your layout as well. Mixing and matching templates is also acceptable such as in the following case where we have a `_layout.jade` and `index.ejs`.

Given a really simple app / project with this structure:

```
myapp.harp.io/
	|- _layout.jade
	+- index.jade
```

**_layout.jade**

```jade
doctype
html
  head
    title My Site
    script(src="/javascripts/jquery.js")
    script(src="/javascripts/app.js")
  body
  	!= yield
	#footer
	  p Copyright (c) foobar
```

**index.jade**

```jade
h1 My Site
p Welcome to my very first site.
```

The final result:

```html
<html>
  <head>
    <title>My Site</title>
    <script src="/javascripts/jquery.js">
    </script><script src="/javascripts/app.js"></script>
  </head>
  <body>
	<h1>My Site</h1>
	<p>Welcome to my very first site.</p>
	<div id="footer">
      <p>Copyright (c) foobar</p>
    </div>
  </body>
</html>
```

<h2 id="multiple-layouts">Multiple Layouts</h2>

You can take advantage of Layouts in multiple locations through your application. In the following example, there is a directory of articles which you’d like to have a different layout than on the main page of your site.

```
myapp.harp.io/
	|- _layout.ejs
	|- index.ejs
	|- about.md
	+- articles/
      |- _layout.ejs
      |- article-one.md
      +- article-two.md
```

Here, `index.ejs` and `about.md` will use the `_layout.ejs` file in the root of the app. Anything in the articles directory&mdash;in this case, `article-one.md` and `article-two.md`&mdash;will use the `_layout.ejs` in the same directory.

<h2 id="explicit-layouts">Explicit Layouts</h2>

Layouts other than `_layout` can be specified in a `_data.json`. This is useful if you need even finer control of Layouts, or if you want to name your Layout something other than `_layout`.

```
myapp.harp.io/
	|- _layout.ejs
	|- index.ejs
	|- about.md
	+- articles/
      |- _data.json
      |- _an-example-layout.ejs
      |- _another-one.jade
      |- article-one.md
      +- article-two.md
```

Here, it’s possible to make `article-one.md` use `_an-example-layout.ejs` by specifying `layout` in the `_data.json` file in that folder:

```json
{
  "article-one": {
    "layout": "_an-example-layout",
    "title": "Example Title"
  },
  "article-two": {
    "layout": "_another-one",
    "title": "Another Example Title"
  }
}
```

Now, each article will use the specified Layout.

<h2 id="no-layout">Opt out of a Layout</h2>

It’s possible for a file to be exempt from Layouts by using `"layout": false`.

Take the following app as an example:

```
myapp.harp.io/
  |- _data.json
  |- _layout.ejs
  |- index.ejs
  +- about.md
```

Adding the following to the `_data.json` file will make `about.md` render as plain HTML, never passing through a layout.

```json
{
	"about": {
		"layout": false
	}
}
```

Since this has only been specified for the About page, `index.ejs` will continue to use `_layout.ejs` as a Layout.

<h2 id="nested-layout">Nested Layouts</h2>

If you are taking advantage of Harp’s built-in support for [Jade](jade), you may use [Jade’s Block and Extends](http://www.devthought.com/code/use-jade-blocks-not-layouts/) features to create nested layouts.

Harp itself doesn’t have a built-in way to create nested layouts, as [`partial()`] already provides ways around this. For example, `_layout.ejs` might look like this:

```ejs
<!-- If the current page is blog/ but not blog/index.ejs… -->
  <% if(current.path[0] == "blog" && current.source !== 'index') { %>
    <!-- Render the partial blog/_nest -->
    <%- partial(current.path[0] + "/_nest") %>
  <% } else { %>
  <!-- Otherwise, render the yield -->
      <%- yield %>
  <% } %>
```

This allows you to put a `_nest.ejs` [partial](partial) into the `blog/` directory, giving you the opportunity to create a nested layout. By including [`yield`] in the `_nest.ejs` partial, the contents of the page you’re trying to render will be available in this `_nest.ejs` partial. For example, `blog/_nest.ejs` might look like this:

```ejs
<article>
  <%- yield %>
</article>
```

Now, the `blog/` index page will render normally, while any blog posts like `blog/hello-world` will have their contents wrapped in the `<article>` tag you specified in the partial. There is a full example of this on [the hb-simurai](https://github.com/kennethormandy/hb-simurai) Harp boilerplate, which you can try out by running the following command:

```
harp init -b kennethormandy/hb-simurai my-nested-example
```

Note that the `_nest.ejs` file could be named anything you’d like, it is simply a regular [partial](partial).
