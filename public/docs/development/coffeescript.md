# CoffeeScript

CoffeeScript is an feature-rich, versatile and common JavaScript preprocessor. CoffeeScript is a white space sensitive variant of JavaScript.

## Why?

Harp includes the best-of-breed preprocessors by default. This means you don’t need to waste time configuring CoffeeScript, worrying about installing dependencies, minifying your JavaScript, or even selecting the input and output location for files. Everything just works.

## Usage

Harp’s Asset Pipeline is super easy to use. All the processing happens implicitly, so there is nothing to setup. Just name your file with an `.coffee` extension instead of `.js` and the Harp web server will see it as if it is a `.js` file.

## Example

In this project, there is an `app.coffee` file in the `js` directory, like so:

```
myproject/
  |- index.html
  +- js/
    |- app.coffee
```

Now, you would simply reference `app.js` in `index.ejs` as you would with any other JS file:

```html
<html>
	<head>
		<!-- Here we reference a JS file that is auto generated -->
		<script src="js/app.js"></script>
	</head>
	<body>
		…
	</body>
</html>	
```

And your `app.coffee` could use CoffeeScript like this:

```coffee
mass = 72
height = 1.78
BMI = mass/Math.pow height, 2
alert 'You are healthy!' if 18.5<BMI<25
```


## Also see

* [CoffeeScript Documentation](http://coffeescript.org/) 
