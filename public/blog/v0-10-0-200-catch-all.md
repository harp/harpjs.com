# Harp v0.10.0 – 200 Catch All

A new version of Harp is available! Harp now works even better for client-side applications using AngularJS, Backbone, and the like. Now, by renaming your `404.jade` (or `.ejs`, or `.md`) file to `200`, any URL will return a status code 200 instead of a 404. This makes developing routers for these apps much easier.

##   How to Upgrade

Install or upgrade Harp with the following command:

```bash
sudo npm install harp -g
```

## Metadata API Change

[Harp v0.10.0](https://github.com/sintaxi/harp/releases/tag/v0.10.0) also introduces an API change that is very easy to update, but will break your existing application if it iterates over `_data.json` metadata. Essentially,


> All instances of `data` in the `public` object now begins with underscore. It’s now `_data`. The same change is made for the less commonly used `contents` arrays. Now `_contents`.

> **Sintaxi [Harp v0.10.0 release notes](https://github.com/sintaxi/harp/releases/tag/v0.10.0)**


Previously, if you were making a blog, for example, and wanted to iterate over some posts in your `_data.json`, you might do this in a Jade file:

```jade
for post in public.posts.data
  h2= post.title
```

To upgrade to Harp v0.10.0, simply change `data` to `_data`:

```jade
for post in public.posts._data
  h2= post.title
```

This makes the `_data` object match the `_data.json` file name. Now, `data` and `contents` are not reserved directory names, which allows Harp to work as middleware in more situations.

## LESS & Stylus Upgrade

As planned in v0.9.4, Harp is continuing to use the latest versions of the languages it preprocesses. LESS has been upgraded to [v1.5.0](https://github.com/less/less.js/blob/master/CHANGELOG.md#150) and [Stylus to v0.40.0](https://github.com/LearnBoost/stylus/blob/master/History.md#0400--2013-11-05).

## Thank you

To everyone who has been writing about Harp, [reporting issues](https://github.com/sintaxi/harp/issues), opening pull requests, hanging out in [#harp on IRC](irc://irc.freenode.net/harp)—thank you. Your support and feedback is really important to us. Plus, we love seeing what you’re making with Harp! Thanks.

## What’s Next

* Sass support
* Intelligent redirects
* Continued stability

More details are available on [these milestones](https://github.com/sintaxi/harp/issues/milestones). [Follow Harp on Twitter for more frequent updates](http://twitter.com/harpwebserver).