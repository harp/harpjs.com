# Markdown

Markdown’s easy-to-write, easy-to-read, format is useful and popular for writing on the web.

## Why?

Harp includes the common, useful preprocessors by default. This means you don’t have to waste time converting your Markdown into HTML—everything just works. Plus, [Jade](jade) and [EJS](ejs) files can import Markdown files as [Partials](partial#markdown), allowing you to effectively re-use your writing.

## Usage

Harp’s asset pipeline is easy to use. All preprocessing happens implicitly, so there is nothing to setup. Just name your file with an `.md` extension, and the Harp web server will serve it as a `.html` file.

Some implementations of Markdown will also allow `.markdown`, `.mdown`, `.txt` or other extensions to denote a Markdown file. Harp only preprocesses `.md` file.

## Example

This project contains, an `index.md` and an `about.md` file in the root directory.

```
myproject/
  |- index.md
  +- about.md
```

Both `index.md` and `about.md` will be served as an `.html` file. So, requests to the following paths will all work:

- `/`
- `/index`
- `/index.html`
- `/about`
- `/about.html`

Running Harp’s [compile step](../environment/compile) will also export the file as `index.html` and `about.html`.

### GitHub Flavoured Markdown

Harp also supports the supplementary [GitHub Flavoured Markdown](https://help.github.com/articles/github-flavored-markdown) syntax. (This doesn’t include the GitHub-specific features, like Task Lists, @mentions, etc.) This allows you to write _fenced code blocks_:

<pre><code class="language-markdown">```
function test() {
  console.log("Hello, world");
}
```</code></pre>

You may also specify the code language:

<pre><code class="language-markdown">```javascript
function test() {
  console.log("Hello, world");
}
```</code></pre>

```javascript
function test() {
  console.log("Hello, world");
}
```

Harp will serve the code block as HTML:

```html
<pre><code class="language-javascript">function test() {
  console.log(&quot;Hello, world&quot;);
}</code></pre>
```

The `language-` class name follows the [W3C](http://www.w3.org/TR/html5/text-level-semantics.html#the-code-element) and [WHATWG](http://www.whatwg.org/specs/web-apps/current-work/multipage/text-level-semantics.html#the-code-element) convention for specifying the type of code. This also allows you to style it with a client-side syntax highlighting library, like [Prism](http://prismjs.com/).

## Managing File Extension

You may find yourself wanting to create another, markup-based file other than `.html` using Markdown. No problem: just prefix `.md` with the extension of your choice. For example, `feed.xml.md` will be served by Harp as `feed.xml` instead.

This is also possible, and much more useful, with [EJS](els) and [Jade](jade).

## Also see

* [Official Markdown documentation](http://daringfireball.net/projects/markdown/)
* [GitHub Flavoured Markdown documentation](https://help.github.com/articles/github-flavored-markdown)
* [On Markdown and the `partial` function](partial#markdown)