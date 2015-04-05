# Partials

Partials are first class citizens with Harp, and work the same way in all templating languages. A Partial can be included anywhere in an [EJS](els) or [Jade](jade) file, and the contents of the file will get mixed in.

* [Using partials](#use)
* [Using partials in an `.ejs` file](#ejs)
* [Using partials in a `.jade` file](#jade)
* [On Markdown and the `partial` function](#markdown)

## Why?

In order to keep your app or site DRY, you need a way to reuse content. Partial provides a simple interface for great flexibility and power around reusing pieces of your project.

## Properties

- **partial path** - (String) This is a relative path to the file you want to include.
- **data** [Object] - (String) Optional data you wish to mix into your partial.

<h2 id="use">Using Partials</h2>

Say you are making a simple website, and want to include a header that repeats on a every page. There is an `index.ejs` file and an `about.ejs` file, and want to include the header content, stored in a Partial named `_header.ejs`, in both.

Because `_header.ejs`’s name begins with an underscore, it will not be served directly. Instead, you can bring it into another file using the `partial` function.

The `_header.ejs` file can be as simple or complicated as you’d like, for example:

```ejs
<h1>This is my site</h1>
<p>This content is in a Partial.</p>
```

<h2 id="ejs">Using partials in an EJS file</h2>

Inside `index.ejs`, call `partial("_header")` to add in the content inside `_header.ejs`

```ejs
<%- partial("_header") %>
```

Now, Harp will render `index.ejs` with the content from `_header.ejs`. You could repeat this process for `about.ejs`, but what if you wanted to change something between the two?

In `_header.ejs`, the title in the `<h1>` tag was hard-coded, but what if you wanted it to change depending on which file it was apart of? This is possible with the `partial` function, too. When a file is referenced with `partial`, data can also be passed in that will replace the specified variables in that partial.

Update `_header.ejs` so that the `<h1>` tag actually contains the variable `title`:

```ejs
<h1><%- title %></h1>
<p>This content is in a Partial.</p>
```

Now, pass in the `title` when you call upon the Partial:

```ejs
<%- partial("_header", { title: "About me" }) %>
```

`title` is an arbitrary variable name here, it could be called anything you want depending on the context. If you updated the `<p>` tag to contain a variable you named `description`, the partial function might look like this:

```ejs
<%- partial("_header", { title: "About me", description: "This is my about page" }) %>
```

<h2 id="jade">Using Partials in a Jade file</h2>

Using Partials in Jade is very similar to EJS. Functions in Jade can be prefaced with `!= ` rather than wrapped in `<%- %>`, like in EJS. In both languages, this indicates the content should be rendered, so whatever code is in the partial will be rendered rather than escaped.

```jade
h1
  != title
p This content is in a Partial.
```

Jade may import EJS Partials and vice versa. Create a `contact.jade` file, for example, and include the same header Partial in Jade:

```jade
!= partial("_header")
```

Data can be passed in, in the same way. To change the title in the partial, pass one in just as in EJS:

```jade
!= partial("_header", { title: "Contact me" })
```

Multiple pieces of data can be passed in, too:

```jade
!= partial("_header", { title: "Contact me", description: "This is my Jade contact page with an EJS header" }) %>
```

If you’d like to set fallbacks for your variables—in this case, a fallback for the `title` and `description` variables you created, incase you don’t pass any data into the partial—you can do this by setting [Global variables](globals).

<h2 id="markdown">On Markdown and the `partial` function</h2>

It is not possible to use the `partial` function directly in a Markdown file, as Markdown is not a templating language.

However, it is still possible to use the partial function to bring in a Markdown file into EJS or Jade. In the following example, there is a Markdown file named `an-example.md` in the direcotry `_shared`. To bring the content of the `an-example.md` into an `article` tag in a Jade file, you would use the following line:

```jade
article!= partial("_shared/an-example")
```

It is also possible to write Markdown directly in Jade, like so:

```jade
doctype
  head
    title An example
  body
    .main
      :markdown
        # now I can write Markdown here

        This is my Markdown post.
        1. Chocolate
        2. Strawberry
        3. Vanilla
```

Using one or both of these methods, you should be able to get the desired outcome.
