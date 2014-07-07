# LESS

LESS is a CSS superset that makes it easy to get started with CSS preprocessing. It’s used to build the popular library [Bootstrap](http://getbootstrap.com); it’s source files work great with Harp.

## Why?

Harp includes the best-of-breed preprocessors by default. This means you don’t need to waste time configuring LESS, worrying about installing dependencies, minifying your CSS, or even selecting the input and output location for files. Everything just works.

## Usage

Harp’s asset pipeline is super easy to use. All the processing happens implicitly, so there is nothing to setup. Just name your file with an `.less` extension instead of `.css` and the Harp web server will see it as if it is a `.css` file.

## Example

In this project, there is a `main.less` file and a `_variables.less` file in the `css` directory, like so:

```
myproject/
  |- index.ejs
  +- css/
    |- main.less
    +- _variables.less
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

And your `main.less` could reference the variables like this:

```scss
@import "variables”;

body {
	font: 12px Helvetica, Arial, sans-serif;
}
```

## Also see

* [LESS documentation](http://lesscss.org/)
* [An introduction to Harp and Bootstrap](http://youtu.be/JWU70PWVVbc?t=7m9s)