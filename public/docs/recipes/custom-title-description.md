# How to get custom title and description per page

This recipe shows you how to setup your application so you can customize title and description per page, while keeping a safe default for when it’s not specified.

The default values will be specified in your `_harp.json` file, and we’ll override those values per page using our `_data.json` file.

You can find more information about [templates data](/docs/development/metadata) on the docs.

## Overview

Directory structure:

```
_harp.json
_data.json
index.jade  // or index.ejs
about.jade  // or about.ejs
```

For this example, this is the behaviour we want: if a visitor is requesting the index page we show the __default values__ of title and description, when they request the about page, we show __custom values__.


## Setup default values

First we’re going to specify our default values that will get used if the page doesn’t have specific values. In your `_harp.json`:

```
{
  "globals": {
    "title": "My default title",
    "description": "My default description"
  }
}
```

## Setup custom values for about page

Now go to the `_data.json` file and add the custom values that you want for the about page:

```
{
  "about": {
    "title": "Welcome to my about page",
    "description": "I’m awesome and so are you"
  }
}
```

## Use the values in your template

### If you’re using Jade…

Now we’re going to use in our `_layout.jade` file the title and description that we just added to our `_harp.json` file.

```jade
doctype
html(lang="en")
  head
    title= title
    meta(name="description" content="#{ description })
  body
    != yield
```

## If you’re using EJS…

If you’re using EJS, this is what your `_layout.ejs` should look like:

```ejs
<!DOCTYPE html>
<html lang="en">
  <head>
    <title><%= title %></title>
    <meta name="description" content="<%= description %>" />
  </head>
  <body> <%- yield %> </body>
</html>
```

## Results

Now when you visit the index page, Harp will render the default values specified in `_harp.json`.

When you visit the about page, Harp overrides the default title and description variables with the ones specified in the `_data.json`.

If you wanted to show custom values for the index page, you just need to add the `index` key to the `_data.json`, like this:

```
{
  "about": {
    "title": "Welcome to my about page",
    "description": "I’m awesome and so are you"
  },
  "index": {
    "title": "This is my home page",
    "description": "Best home page ever"
  }
}
```

Keep in mind that you don’t have to override the two variables. If you override only the `title` variable, the template will still use the default value for the `description` variable.


## How does this work?

The values specified in the `_harp.json` globals are made available as template variables, so they can be used in any page at any time.

When a Harp tries to render a page, it tries to match the url path to data that is defined in `_data.json`. In this case, it’s matching the `about` part of the URL path with the `about` key in the `_data.json` file.

When Harp finds a match, it makes those variables available for the template that’s getting rendered. And in this case, it overrides the variables that we previously set in `_harp.json`.

You can find more information about [templates data](/docs/development/metadata) on the docs.