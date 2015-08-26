# How to print out all available data for debugging

The `public` variable contains all available data in a Harp site. To
print it out, you can simply wrap the variable with a call to `JSON.stringify`:

## EJS

```ejs
<pre><%- JSON.stringify(public, null, '\t') %></pre>
```

## Jade

```jade
pre #{ JSON.stringify(public, null, '\t') }
```

In both examples, the `\t` argument helps make the JSON a bit easier to read.

You can also output to the command line using console.log:

## EJS

```ejs
<% console.log(JSON.stringify(public, null, '\t')) %>
```

## Jade

```jade
- console.log(JSON.stringify(public, null, '\t'))
```
