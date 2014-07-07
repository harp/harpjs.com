# The `current` object

The `current` object is the best way to apply active state to your applications’ navigation. It is available to every template and contains the state of the current page being rendered.

## Why?

When reusing templates for things like navigation, the `current` object is useful for applying an active state to the navigation it may also be used as an unconventional way to render layouts or partials. This keeps our application code DRY without compromising on the usability of the application.

## Properties

- **path** - (Array) which is the file path of the current page being rendered.
- **source** - (String) which is a shortcut to the last element in the path array.

**note** - file extensions are ignored in the current object.

Harp provides an array of the current page’s path, with the last item in the list called the current source. This information is available through the `current` object, which is dynamically updated on each page you visit.

For example, when visiting `/articles/hello-world`, the following information is available:

```json
{
  path: ["articles", "hello-world"],
  source: "hello-world"
}
```

Whereas a request to `/articles/` will have a current object that looks like the following:

```json
{
  path: ["articles", "index"],
  source: "index"
}
```

Now, you can use this in your template.

## Example Usage

This application has an `index.jade` and `about.jade` page. Both of these pages show a simple nav, which is contained in the `_nav.jade` [partial](partial).

By using the `current` object within the `_nav.jade` template, you can tell which context the nav template is being rendered (ie. which page the person is currently on).

Given the following project:

```
myproject/
  |- index.jade
  |- about.jade
  +- _nav.jade
```

### Jade Example

The `_nav.jade` file, using `current.source`:

```jade
ul
  li(class="#{ current.source == 'index' ? 'active' : '' }")
    a(href="/") Home
  li(class="#{ current.source == 'about' ? 'active' : '' }")
    a(href="/about") About
```

### EJS Example

That same template, as `_nav.ejs` instead of `nav.jade`:

```ejs
<ul>
  <li class="<%- current.source == 'index' ? 'active' : '' %>">
    <a href="/">Home</a>
  </li>
  <li class="<%- current.source == 'about' ? 'active' : '' %>">
    <a href="/about">About</a>
  </li>
</ul>
```

Thanks to the `current.source`, you now have classes on the nav that change depending on the context. These can then be styled with CSS, or your preprocessor of choice: [Sass](sass), [LESS](less), or [Stylus](stylus).
