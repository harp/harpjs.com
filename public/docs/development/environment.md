# Environment

The Harp web server can run both locally and in production mode. The `environment` variable is a string that returns `"production"` or `"development"` depending on this correct context.

## Why

The Harp web server can run locally, for developing, or in production mode, as a production-ready web server. With the `environment` variable, your Harp app can act differently whether or not you are running it locally.

This is perfect for creating draft posts in a static blog, for example, or loading development resources only while developing a client side application.

## Use

The `environment` variable opens many possibilities: your blog can behave one way locally, and another way when it’s published on the [Harp Platform](https://www.harp.io) or served by Harp in production mode. Additionally, [`harp compile`, which flattens your blog into static HTML, CSS, and JavaScript](../environment/compile), is considered to be a `production` environment. This means that anything intended for `production` will still occur even when you’re hosting static files.

## EJS Example

This is a very simple example showing how to use a conditional to check which environment Harp is running in, in EJS.

```ejs
<h1>Harp is in <%- environment %> mode.</h1>
<% if(environment == "production") { %>
  <p>See? Harp is in production mode.</p>
<% } else { %>
  <p>Okay, Harp is in development mode right now.</p>
<% } %>
```

## Jade Example

This is a simple example showing how to use a conditional to check which environment Harp is running in, in Jade.

```jade
h1 Harp is in #{ environment }
if environment == "production"
  p See? Harp is in production mode.
else
 p Okay, Harp is in development mode right now.
```

## Also see

* [`harp server`](../environment/server), for changing Harp from development to production mode
* A blog post about [creating Static draft posts with Harp](http://kennethormandy.com/journal/static-draft-posts-with-harp) using the `environment` variable.
