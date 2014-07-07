# How to create a list of posts

This recipe shows you how to create a list of your blog posts, where each item includes the title, link and body of the post.

## Directory Structure

Given a directory structure like this:

```
/public
  /posts
    _data.json
    my-first-post.md
    my-second-post.md
  /index.jade    <-- or index.ejs
```

## Posts Data

And a `/public/posts/_data.json` like this:

```
{
  "my-second-post": {
    "title": "My second post"
  },
  "my-first-post": {
    "title": "My first post"
  }
}
```

## List using Jade

You can iterate through your posts in Jade like this:

```jade
for post, slug in public.posts._data
  h2: a(href="/posts/#{ slug }")= post.title
  != partial("posts/" + slug)
```

## List using EJS

Or if you’re using EJS:

```ejs
<% for(var slug in public.posts._data){ %>
  <h2><a href="/posts/<%= slug %>"><%= public.posts._data[slug].title %></a></h2>
  <%- partial("posts/" + slug) %>
<% }; %>
```

## What’s happening here?

We’re using the `for` iterator to run through the data we put in `/public/posts/_data.json`. We can access that posts data object via `public.posts._data`.