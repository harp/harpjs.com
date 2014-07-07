# Layouts

A Layout is a common template that includes all content except for one main content area. You can think of a Layout as the inverse of a `partial`.

* [Creating Layouts with EJS](#ejs)
* [Creating Layouts with Jade](#jade)
* [Multiple Layouts](#multiple-layouts)
* [Explicit Layouts](#explicit-layouts)
* [No Layout](#no-layout)

## Why?

Often sites and apps will have common headers and footers and the only area that needs to change is the body. This is ideal use case for a layout.

## Usage

A Layout requires a layout file, written in EJS or Jade, and [a `yield` property](yield) to tell Harp where to insert the content.

<h2 id="ejs">Example using EJS Templating</h2>

Given a really simple app / project with this structure.

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
      <p>Copyright (c) foobar</p>
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

Harp allow you to apply a `.jade` file extension on your layout as well. Mixing and matching templates is allso acceptatble such as in this case where we have a `_layout.jade` and `index.ejs`Given a really simple app / project with this structure:

```
myapp.harp.io/
	|- _layout.jade
	+- index.ejs
```

**_layout.jade**

```jade
doctype
  head
    title My Site
    script(src="/javascripts/jquery.js")
    script(src="/javascripts/app.js")
  body
  	!= yield
	#footer
	  p Copyright (c) foobar
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

<h2 id="multiple-layouts">Multiple Layouts</h2>

You can take advantage of Layouts in multiple locations through your application. In the following example, there is a directory of articles which you&rsquo;d like to have a different layout than on the main page of your site.

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

Layouts other that `_layout` can be specified in from a `_data.json`. This is useful if you need even finer control of Layouts, or if you want to name your Layout something other than `_layout`.

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

Now, each article will used the specified Layout.

<h2 id="no-layout">Opt out of a Layout</h2>

It&rsquo;s possible for a file to be exempt from Layouts by using `"layout": false`.

Take the following app as an example.

```
myapp.harp.io/
  |- _data.json
	|- _layout.ejs
	|- index.ejs
	+- about.md
```

Adding the following to the `data.json` file will make `about.md` render as plain HTML, never passing through a layout.

```json
{
	"about": {
		"layout": false
	}
}
```

Since this has only been specified for the About page, `index.ejs` will continue to use `_layout.ejs` as a Layout.
