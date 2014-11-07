# Yield

`yield` is a variable that includes that a particular path’s contents. For example, when visiting `/blog`, the entire contents of `blog/index.jade` would be available within the variable `yield`.

## Why?

When using [Layouts](layout) and [Partials](partial), you will want to work with the content from the page that the Layout or Partial is wrapping. This content is contained within the variable `yield`, and can be placed wherever you’d like in a Partial or Layout.

## Usage

`yield` will be available as a variable in any `_layout.jade` or `_layout.ejs` file. It will also be available in any explicit layout set in a `_data.json` file, which [is covered in the Layouts documentation](layout). It’s also possible to use the `yield` variable in any [Partial](partial).

## Jade Example

Using the following directory structure:

```
myproject/
  |- _layout.jade
  |- index.jade
  |- about.md
```

When visiting `/about`, the content from the `about.md` file needs to be shown. Likewise, visting `/index` should show the content in `index.jade`. Both these files will be wrapped by `_layout.jade` first.

Therefore, in `_layout.jade`, you need to indicate where the output, or “yield” will go:

```jade
doctype
html
  head
    title Example
  body
    != yield
```

Now, the content from whatever page you are visiting will be included in the `<body>` element. Note that in Jade, the `!=` (instead of just `=`) indicates you don’t want the HTML to be escaped.

If you wanted to move where the output was in this template, it is now simply a matter of moving the `yield` variable:

```jade
doctype
html
  head
    title Example
  body
    article
      h1 Hello, world
      section
        != yield
```

## EJS Example

Using the following directory structure:

```
myproject/
  |- _layout.ejs
  |- index.ejs
  |- about.md
```

When visiting `/about`, the content from the `about.md` file needs to be shown. Likewise, visting `/index` should show the content in `index.ejs`. Both these files will be wrapped by `_layout.ejs` first.

Therefore, in `_layout.ejs`, you need to indicate where the output, or “yield” will go:

```ejs
<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
  <body>
    <%- yield %>
  </body>
</html>
```

Now, the content from whatever page you are visiting will be included in the `<body>` element. Note that in EJS, opening tags with `<%-` (instead of just `<%=`) indicates you don’t want the HTML to be escaped.

If you wanted to move where the output was in this template, it is now simply a matter of moving the `yield` variable:

```ejs
<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
  <body>
    <article>
      <h1>Hello, world</h1>
      <section>
        <%- yield %>
      </section>
    </article>
  </body>
</html>
```

## Also see

- [Layouts](layout)
- [Jade](jade)
- [EJS](ejs)
