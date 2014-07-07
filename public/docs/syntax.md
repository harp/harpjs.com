# Syntax Highlighting Test

## HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My index page</title>
  </head>
  <body>
    <h1>Hello Bob</h1>
  </body>
</html>
```

## EJS

```ejs
<!DOCTYPE html>
<html>
  <head>
    <title>My EJS template</title>
  </head>
  <body>
    <%- partial("header") %>
    <h1>Hello Bob</h1>
    <%- partial("footer") %>
  </body>
</html>
```


### Markdown

```markdown
# Hello

This is some stuff.

1. Item 1
2. Item Two
3. Item Another

```

### Jade

```jade
doctype
html
  head
    title my jade template
  body
    h1 Hello #{name}
```

## CSS

```css
@import "_variables.less";

body {
  font: 12px "Helvetica", Arial, sans-serif;
  font-weight: 400;
}
```

### LESS

```less
@import "_variables.less";

body {
  font: 12px "Helvetica", Arial, sans-serif;
  font-weight: @font-weight;
}
```

### Stylus

```stylus
@import "_variables.styl"
body
    font 12px Helvetica, Arial, sans-serif
    font-weight font-weight
```

### SCSS

```scss
@import "_variables.less";

body {
  font: 12px "Helvetica", Arial, sans-serif;
  font-weight: $font-weight;
}
```

### Sass

```stylus
@import "variables"

body
    font: 12px Helvetica, Arial, sans-serif;
    font-weight: $font-weight;
    +example(10px);
```

## JavaScript

```javascript
var sass = require('../sass'),
    colors = require('colors'),
    fs = require('fs');

var cwd = process.cwd();

function render(options, emitter) {

  sass.render({
    file: options.inFile,
    includePaths: options.includePaths,
    outputStyle: options.outputStyle,
    sourceComments: options.sourceComments,
    success: function(css) {

      emitter.emit('warn', 'Rendering Complete, saving .css file...'.green);

      fs.writeFile(options.outFile, css, function(err) {
        if (err) return emitter.emit('error', ('Error: ' + err).red);
        emitter.emit('warn', ('Wrote CSS to ' + options.outFile).green);
        emitter.emit('write', err, options.outFile, css);
      });

      if (options.stdout) {
        emitter.emit('log', css);
      }

      emitter.emit('render', css);
    },
    error: function(error) {
      emitter.emit('error', error);
    }
  });
}

module.exports = render;
```

### JSON

```json
{
  "hello-world": {  <-- avaliable everywhere as public.articles._data
    "title": "Hello World.",
    "date": "Feb 28, 2013"
  },
  "hello-brazil": {
    "title": "Hello Brazil.",
    "date": "March 4, 2013"
  }
}
```

### CoffeeScript

```coffeescript
# Assignment:
number   = 42
opposite = true

# Conditions:
number = -42 if opposite

# Functions:
square = (x) -> x * x

# Arrays:
list = [1, 2, 3, 4, 5]

# Objects:
math =
  root:   Math.sqrt
  square: square
  cube:   (x) -> x * square x

# Splats:
race = (winner, runners...) ->
  print winner, runners

# Existence:
alert "I knew it!" if elvis?

# Array comprehensions:
cubes = (math.cube num for num in list)
```