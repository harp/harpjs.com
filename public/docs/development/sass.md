# Sass

Sass is an feature-rich, versatile and common CSS preprocessor. It is supported using the SCSS CSS superset syntax.

## Why?

Harp includes the best-of-bread preprocessors by default. This means you don’t need to waste time configuring Sass, worrying about installing dependencies, minifying your CSS, or even selecting the input and output location for files. Everything just works.

## Usage

Harp’s Asset Pipeline is super easy to use. All the processing happens implicitly, so there is nothing to setup. Just name your file with an `.scss` extension instead of `.css` and the Harp web server will see it as if it is a `.css` file.

## Example

In this project, there is a `main.scss` and a `_variables.scss` file in the `css` directory, like so:

```
myproject/
  |- index.ejs
  +- css/
    |- main.scss     
    +- _variables.scss
```

Now, you would simply reference `main.css` in `index.ejs` as you would with any other CSS file:

```html
<html>
	<head>
		<link href="css/main.css" type="text/css" rel="stylesheet">
	</head>
	<body>
		…
	</body>
</html>	
```

And your `main.scss` could reference the variables like this:

```scss
@import "variables”;

body {
	font: 12px Helvetica, Arial, sans-serif;
}
```

<h2 id="libsass">libsass caveats</h2>

Harp is using <a href="http://libsass.org/">libsass</a>, a C++ implementation of Sass, for its preprocessing. As this isn’t the primary version of Sass, it may not include the latest Sass features.

Which features are in libsass versus the Ruby version of Sass will be indicated more clearly in the future; right now the information is not available and we are collecting it ourselves. Virtually all prominent features of Sass 3.2 are available in Harp’s version of Sass save `@extends`, which should be coming before the end of the year.

If you have questions, are unsure if a feature is missing in Libsass or if there’s a bug in Harp feel free to <a href="https://github.com/sintaxi/harp/issues">file a GitHub issue</a>.

### `.sass` Indented Syntax

The `.sass` indented syntax is not currently supported in Harp. If you’re interested in following along, it is under discussion [here](https://github.com/sintaxi/harp/issues/71).

If you’re starting a new project, but want to write whitespace significant CSS, you may like to [try out Stylus](stylus), which is based on the Sass indented syntax.

## Also see

* [Sass Documentation](http://sass-lang.com/documentation/) 
