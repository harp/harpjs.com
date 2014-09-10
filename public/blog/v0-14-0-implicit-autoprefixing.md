# Harp v0.14.0 – Implicit Autoprefixing

A new release of Harp is available today. Harp now takes care of vendor prefixing for you, via the fantastic [Autoprefixer](https://github.com/ai/autoprefixer).

Create any `.sass`, `.scss`, `.less`, or `.styl` file…

```scss
// main.scss
h1 {
  font-feature-settings: "liga";
  transition: color 0.25s;
}
```

…and it will be preprocessed and prefixed automatically.

```css
/* main.css */
h1 {
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -webkit-transition: color 0.25s;
  transition: color 0.25s
}
```

## Get started

You __shouldn’t have to think about vendor prefixing__ or __configuring your preprossors__ while building static sites and apps. To get this taken care of for you, install the latest version of Harp:

```sh
npm install -g harp
```

Note you may need to preface this with `sudo` depending on your setup. From there, make sure to take a look at [Harp’s getting started guide](http://localhost:9000/docs/quick-start).

## Appropriate prefxing

To help keep unnecessary prefixes out, Harp and Autoprefixer only add the prefixes you actually need. For example, when you use the `transition` property, the `-moz-` prefix is actually __no longer necessary__. Therefore, it won’t be included:

```css
h1 {
  -webkit-transition: color 0.25s;
  transition: color 0.25s
}
```

 That’s one less thing you need to keep track of, and can even lighten your CSS over time as vendor prefixes are deprecated.

## Preprocessor updates

We prefer to keep all of Harp’s preprocessors up-to-date. Since the last release, LESS and Stylus were updated with minor bug fixes.

* [LESS is now at version 1.7.4](https://github.com/less/less.js/blob/master/CHANGELOG.md#174), which includes various bug fixes.
* [Stylus is now at version 0.47.3](https://github.com/LearnBoost/stylus/blob/master/History.md#0473--2014-07-22), which fixes support support for schema-less urls inside `url()`.

Going forward, we’ll apply this same approach to Autoprefixer, too.

## Publish your project

Harp also helps power the [Harp Platform](http://www.harp.io), a front-end publishing integrated with Dropbox. It’s the fastest way to deploy your new project—you’ll never need to worry about manually compiling your files again.

## Thanks

We love contributions to Harp and [Terraform](https://github.com/sintaxi/terraform); Autoprefixer integration was suggested by [@lunelson](https://github.com/lunelson) and kindly implemented by [@geelen](https://github.com/geelen).

If you’re interested in contributing to Harp, just open an issue or [comment on an existing one](https://github.com/sintaxi/harp/issues/) and let’s chat.

## What’s next for Harp

We’re on track for __more regular updates to Harp__, and will be publishing a roadmap soon:

<blockquote class="twitter-tweet" lang="en"><p>putting together Harp 1.0 Roadmap. BrowserSync and Browserify are coming. Going to be sweet.</p>&mdash; Brock Whitten (@sintaxi) <a href="https://twitter.com/sintaxi/status/509642220979249152">September 10, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

[Let us know](http://twitter.com/harpwebserver) if you’d like to be involved.
