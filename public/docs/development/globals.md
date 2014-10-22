# Globals

Globals is JSON data stored in your `harp.json` file that is available to all pages, templates, partials and layouts.

## Why?

Harp isn’t just about static assets, pages can be created using dynamic content too. Adding content to the `globals` property will be natively available.

<!--

## Globals, before Harp v0.9.0

As of Harp v0.9.0, using global variables has been simplified. You can check which version of Harp you are running with `harp -V`. If it is not `0.9.0` or higher, please upgrade using `sudo npm upgrade -g harp`. Now, instead of referencing `globals.title`, simply reference `title`, as in the following example:

-->

## EJS Example

harp.json

```json
{
  "globals": {
    "title": "Acme Site",
    "name"  : "John Doe",
    "uri": "http://example.com"
  }
}
```

index.ejs

```ejs
<html>
  <head>
    <title><%= title %></title>
  </head>
  <body>
    <h1>Hello <%= name %>!</h1>
  </body>
</html>
```
