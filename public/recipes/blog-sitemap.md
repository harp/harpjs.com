# How to generate a sitemap of your site

This recipe shows how to automatically generate a sitemap for your application.

## Overview

The sitemap script runs through your site assets and generates a list of links that your users can use to find all the content on your site.

All we need is a `sitemap.xxx` file.

```
/sitemap.jade
```

## Sitemap script

### Using Jade

Create a new file named `sitemap.jade` and copy/paste the snippet below.

```jade
- var filter = /(\.html$)/;
- var replace = /(\.html$)|(^index\.html$)/;

mixin tree(head, tail)
  for val, key in head
    if key !== '.git' && key !== '_data'
      if key == '_contents'
        each file in val
          if filter.test(file) && !/^404\.html/.test(file)
            - file = file.replace(replace, "");
            li: a(href="#{ tail + file }")= tail + file
      else
        mixin tree(val, tail + key + "/")

h1 Sitemap
ol
  mixin tree(public, "/")
```

You may also name it `sitemap.xml.jade` if you’d prefer to build upon this snipper and create an XML file, rather than making a sitemap page on your site.

If you are [using a `_layout`](../docs/development/layout), you’ll also need to add the following the the `_data.json` file in the same folder:

```json
"sitemap": {
    "layout": false
}
```

This will prevent the resulting `sitemap.xml` file from rendering inside your default `_layout`.

### Using EJS

Create a new file named `sitemap.ejs` and copy/paste the snippet below:

```ejs
<% var filter = /(\.html$)/; %>
<% var replace = /(\.html$)|(^index\.html$)/; %>

<% function tree(head, tail) { %>
  <% for (key in head) { %>
    <% val = head[key]; %>
    <% if (key !== '.git' && key !== '_data') { %>
      <% if (key == '_contents') { %>
        <% for (i in val) { %>
          <% file = val[i] %>
          <% if (filter.test(file) && !/^404\.html/.test(file)) { %>
            <% file = file.replace(replace, ""); %>
            <li><a href="<%= tail + file %>"><%= tail + file %></a></li>
          <% } %>
        <% } %>
      <% } else { %>
        <% tree(val, tail + key + "/") %>
      <% } %>
    <% } %>
  <% } %>
<% } %>

<h1>Sitemap</h1>
<ol>
  <% tree(public, "/") %>
</ol>
```

You may also name it `sitemap.xml.ejs` if you’d prefer to build upon this snipper and create an XML file, rather than making a sitemap page on your site.

If you are [using a `_layout`](../docs/development/layout), you’ll also need to add the following the the `_data.json` file in the same folder:

```json
"sitemap": {
    "layout": false
}
```

This will prevent the resulting `sitemap.xml` file from rendering inside your default `_layout`.

## How does it work?

The template variable `public` carries the structure of the site, we use a recursive function called `tree` to iterate through all the files recursively and simply output the files and links into a list.