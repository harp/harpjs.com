# How to add Google Analytics to a Harp boilerplate

This recipe shows you how to add a contact form to your Harp application in a configurable manner. This makes it easier for other people to make changes to the Google Analytics settings with digging into the templates.

## Adding Google Analytics

Setting up Google Analytics

## Harp

### Using Jade

_shared/analytics.jade

```jade
if service.analytics
  script.
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)
    [0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', '#{ service.analytics }', '#{ uri }');
    ga('send', 'pageview');
```

_harp.json or harp.json, add properties

```json
"uri": "http://example.com",
"service": {
  "analytics": "UA-XXXX"
}
```

### Using EJS


## How does it work?

There’s not much that Harp is doing for you here, it’s all powered by Wufoo.

The code provided by Wufoo, generates an `iframe` hosted on their site, which contains all the code necessary to get the form working, but to your visitors this seems like it’s on your site.

We encourage you to explore the other options for embedding your form, as they might work better for you. We chose the iframe option because it’s the easiest to implement.
