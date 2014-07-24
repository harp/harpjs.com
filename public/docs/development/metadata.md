# Metadata

Metadata is scoped data injected into specific pages through the `_data.json` file.

## Why?

Sometimes you might want to separate concerns, or keeping all the data global in one file is not advantageous. File Metadata is perfect for this.

Your files named `_data.json` are special and make data available to templates.

## Example

```
myproject/
  ├ _harp.json               <-- Global metadata goes here
  ├ index.jade
  └ articles/
      ├ _data.json           <-- Article metadata goes here
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

Any metadata in the `_harp.json` or `harp.json` file will be overwritten by the local metadata in the `_data.json` file. This allows you to, for example, specify a `title` for the entire site, but to overwrite it when you are on an individual project page. (There’s [an example recipe for this](../../recipes/custom-title-description), too.)

There’s no need to include the file extension in your `_data.json`. `"hello-world.jade" : { … }`, for example, will throw an error.

In our index template we may iterate over all the articles to create an article listing.

```jade
for article, slug in public.articles._data
  a(href="/articles/#{ slug }")
    h2= article.title
```

## Also see

- [Add a Custom Title and Description per page](../../recipes/custom-title-description)
- [A quick example Harp app that uses the correct title for your blog in the correct place.](https://gist.github.com/kennethormandy/6834709)
