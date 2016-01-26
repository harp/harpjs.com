# How to wrap markdown posts with additional markup

This recipe shows you how to add additional HTML around your markdown blog posts. We like to call this technique the “decorator” pattern.

This technique is commonly used to add dynamic metadata like dates, author and tags, which allows you to keep your metadata in your `_data.json` file, while keeping the simplicity of markdown files.

Another common use case is when you need your post to have a particular HTML structure, but still want to write your blog posts in markdown.

## Overview

This is the directory setup we have:

```
/_decorator.jade  // or _decorator.ejs
/index.jade  // or index.ejs
/foo.md
/_data.json
```

1. A `/_decorator.xxx` which is going to be the extra HTML wrapping our markdown posts.
2. We’ll use the `/index.xxx` to render our post using the decorator file.
3. `/foo.md` holds the content of our post
2. We’ll use `/_data.json` to store our post’s metadata like author, date and title.

## Setup our metadata

The `/_data.json` file looks like this:

```json
{
  "foo": {
    "title": "Responsive Web Design",
    "author": "Ethan Marcotte",
    "date": "October 2011",
    "type": "book"
  }
}
```

## Setup our markdown post

The content of our blog post will be at `/foo.md`. For this particular recipe, this file will only contain the content of the post, not the title or any other metadata.

## Setup the decorator file

### Using Jade

```
article(class="post post-#{ type }")
  header.post-header
    h1= title
    p By #{ author } — #{ date }
  .post-body
    != yield
```

### Using EJS

```
<article class="post post-<%= type %>">
  <header class="post-header">
    <h1><%= title %></h1>
    <p>By <%= author %> — <%= date %></p>
  </header>
  <div class="post-body">
    <%- yield %>
  </div>
</article>
```

## Using the decorator in the index page

### Using Jade

```
- var post = public._data.foo;
- post.yield = partial("foo");
!= partial("_decorator", post)
```

### Using EJS

```
<% var post = public._data.foo; %>
<% post.yield = partial("foo"); %>
<%- partial("_decorator", post) %>
```


## How does it work?

All the action is happening on the index file. The first thing that we do is get the data stored in the `_data.json` file and assign it to the `post` variable.

Then we get the content of our `foo.md` file by using the common `partial` function and we extend our `post` object by assigning the value returned by partial to the `yield` attribute.

We then use the `partial` function one more time to render our `_decorator` file and pass the `post` object we just created as the second argument. The second argument of `partial` is used as template variables, so we can use those variables inside the decorator file.

## Example?

If you need help to better understand what’s happening or how you can apply this to your app, you can see this pattern being used in the [Baseline boilerplate](https://github.com/rosshj/baseline/blob/master/_layout.jade#L58-L73) created by [Ross Howard-Jones](https://twitter.com/rosshj).