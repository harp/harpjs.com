# How to print out all available data for debugging

The `public` variable contains all available data in a HarpJS site. To
print it out, you can simply wrap the variable with a call to `JSON.stringify`:

## EJS

	<pre><%-JSON.stringify(public, null, "\t") %></pre>

## Jade

	pre #{ JSON.stringify(public, null, "\t") }

In both examples, the `\t` argument helps make the JSON a bit easier to read.

You can also output to the command line using console.log:

## EJS

	<% console.log(JSON.stringify(public, null, "\t")); %>

## Jade

	#{ console.log(JSON.stringify(public, null, "\t")) }