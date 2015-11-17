# Frequently Asked Questions

## What is Harp?

Harp is a zero-configuration web server that is used to serve static assets. It has a built in asset pipeline for serving `.jade`, `.markdown`, `.ejs`, `.coffee`, `.less`, `.styl` as `.html`, `.css`, and `.js`. Harp supports a template agnostic layout/partial system and metadata for dynamically building files.

### How is Harp different than Jekyll?

Like Jekyll, Harp is great for dynamically generating static sites but how Harp works under the hood is much different.

### Similarities

- both are open source (MIT)
- both support layout and partials
- both support metadata and iterators

### Differences

- Harp lets you use any of the built in pre-processors.
- Harp pre-processes on the fly rather than writing files to disk.
- Harp is very easy to use and install.
- Jekyll is ”blog aware” which makes it difficult to solve other problems.
- Writing the generated files to disk is optional with Harp.

## Is Harp fast?

That is subjective but fair to say Harp is fast by ”application server” standards but would be on the low end if compared to servers such as NGINX or Apache when it comes to raw static serving power.

## What can be built on harp?

Harp is great for building mobile web applications, blogs, docs, games, marketing sites, presentations. Pretty much anything with a front end.
