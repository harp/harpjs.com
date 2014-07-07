# How to create blog post excerpts

This recipe shows you how to generate automatic excerpts for your posts. Excerpts are shorter versions of your post to lead your visitors to read the whole post.

## Overview

For this recipe our directory structure will look like this:

```
/foo-blog-post.md
/index.jade          // or index.ejs
```

The `foo-blog-post.md` will be the file that holds the full content of our post. The `index` file is going to display an excerpt version of the content in `foo-blog-post.md`.

Following the most popular blogging conentions, we’re going to use the `<!-- more -->` flag to tell the content up to what point we want the excerpt to be cut at.

## Setting up blog post content

The content in `foo-blog-post.md` looks like this:

```md
# Foo blog post

Lorem ipsum Id dolor ut esse anim ut ad in tempor minim nisi in.

<!-- more -->

Lorem ipsum Fugiat pariatur ex dolor et ullamco non sunt anim labore nisi sit. Lorem ipsum Elit veniam ex do nisi mollit irure amet occaecat quis mollit do in.
```

Notice the `<!-- more -->` flag. Its job is to indicate where the excerpt ends. Everything before that flag will become the excerpt of this post.

## Setting up the index page

Both, Jade and EJS, support in-template functions that get added to the local context as template helpers. These _helper_ functions work the same as any other JavaScript function.

### Using Jade

This is what our `index.jade` looks like:

```jade
- function excerpt(content) {
  - if(content.indexOf("<!-- more -->") == -1) return content;
  - else return content.split("<!-- more -->")[0];
- }

!= excerpt(partial("foo-blog-post"))
```

### Using EJS

This is what our `index.ejs` looks like:

```ejs
<% function excerpt(content) {
  if(content.indexOf("<!-- more -->") == -1) return content;
  else return content.split("<!-- more -->")[0]; 
} %>

<%- excerpt(partial("foo-blog-post")) %>
```

## How does it work?

The first 3 lines is where the `excerpt` function is defined. We give it the whole content of the post and it gives us back the excerpt.

It does that by splitting the content wherever the `<!-- more -->` tag is, and it returns the first part of that split `content.split("<!-- more -->")[0]`.

In the last line we use our common `partial` function to get the content from the `foo-blog-post.md` file, and use that as the content that we pass to our `excerpt` function.


