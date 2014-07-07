# How to add a client-side redirect

Proper 301 redirects will be available in Harp in the future. In the meantime, you can use a client-side redirect to point the location of an old URL to a new one, or redirect from one site to another.

## Overview

First, create a new partial which contains the code for the redirect. The name isn’t special, you can call it anything you’d like. For this example, it will be called `_redirect.ejs`.

Inside `_redirect.ejs`, add the following code:

```ejs
<!DOCTYPE HTML>
<html lang="en-US">
    <head>
        <meta charset="UTF-8">
        <meta name="robots" content="noindex, nofollow">
        <meta http-equiv="refresh" content="1;url=<%= url %>">
        <script type="text/javascript">
            window.location.href = "<%= url %>"
        </script>
    </head>
    <body>
        If you are not redirected automatically, <a href="<%= url %>">click here</a>.
    </body>
</html>
```

Now, within other files, you can pass in a `url` variable to indicate where you want a page to be redirected to.

For example, if you wanted `/contact` to redirect to `/about`, you could replace all the code within `contact.ejs` with the partial you just created:

```ejs
<%- partial("_redirect", { url: "/about" }) %>
```

That `url` variable could be a page on your site, or an external page.

## How does this work?

By using a [partial](../docs/development/partial), you can efficiently reuse the client-side redirect code and customize what page you’re redirecting to.

If you need to redirect many pages, this may not be the most efficient way. Feel free to leave a comment on [this GitHub issues with your thoughts](https://github.com/sintaxi/harp/issues/261), and to get an update when the 301 redirects are implemented in Harp.