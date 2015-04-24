# Sass

Sass is an feature-rich, versatile and common CSS preprocessor. It is supported using the SCSS CSS superset syntax or the original indented syntax.

## Why?

Harp includes the best-of-breed preprocessors by default. This means you don’t need to waste time configuring Sass, worrying about installing dependencies, minifying your CSS, or even selecting the input and output location for files. Everything just works.

## Usage

Harp’s Asset Pipeline is super easy to use. All the processing happens implicitly, so there is nothing to setup. Just name your file with an `.scss` extension instead of `.css` and the Harp web server will see it as if it is a `.css` file.

## SCSS Example

In this project, there is a `main.scss` and a `_variables.scss` file in the `css` directory, like so:

```
myproject/
  |- index.html
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

## Sass Example

In this project, there is a `main.sass` and a `_variables.sass` file in the `css` directory, like so:

```
myproject/
  |- index.html
  +- css/
    |- main.sass     
    +- _variables.sass
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

And your `main.sass` could reference the variables like this:

```sass
@import variables

body
	font: 12px Helvetica, Arial, sans-serif
```

<h2 id="libsass">Caveats</h2>

Virtually all prominent features of Sass 3.2 are available in Harp’s version of Sass, but Sass 3.3 is not supported.

Harp is using <a href="http://libsass.org/">libsass</a>, a C++ implementation of Sass, for its preprocessing. As this isn’t the original version of Sass, it may not include the latest Sass 3.3 features.

If you have questions, are unsure if a feature is missing in Libsass or if there’s a bug in Harp feel free to <a href="https://github.com/sintaxi/harp/issues">file a GitHub issue</a>.

## Also see

* [SCSS Documentation](http://sass-lang.com/documentation/) 
* [Sass Documentation](http://sass-lang.com/documentation/file.INDENTED_SYNTAX.html#_import)
