# Metadata

Metadata is scoped data injected into specific pages through the `_data.json` file.

## Why?

Sometimes you might want to separate concerns, or keeping all the data global in one file is not advantageous. File Metadata is perfect for this.

Your files named `_data.json` are special and make data available to templates.

## Example

```
myproject/
  ├ index.jade
  └ articles/
      ├ _data.json           <-- articles metadata goes here
      ├ hello-world.jade     <-- hello world article
      └ hello-brazil.jade    <-- hello brazil article
```

Your application could have several `_data.json` files, each living in their own folder.

Your `_data.json` file may contain the following…

```json
{
  "hello-world": {  <-- avaliable everywhere as public.articles._data
    "title": "Hello World.",
    "date": "2013-02-28"
  },
  "hello-brazil": {
    "title": "Hello Brazil.",
    "date": "2013-03-04"
  }
}
```

Because `hello-world` matches the filename, these variables will be made available in the `hello-world.jade` template when being served. This object is also available in all the templates as `public.articles._data.hello-world`.

There’s no need to include the file extension in your `_data.json`. `"hello-world.jade" : { … }`, for example, will throw an error.

In our index template we may iterate over all the articles to create an article listing.

```jade
for article, slug in public.articles._data
  a(href="/articles/#{ slug }")
    h2= article.title
```
