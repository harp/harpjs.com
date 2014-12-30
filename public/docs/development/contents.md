# Contents

With Harp, you can access information about your compiled files, in addition to [metadata](/docs/development/metadata) about the source files.

## Why?

You may want to iterate over compiled or media files in your application, which may or may not have metadata. The `_contents` object provides a way of doing this.

## Example

Perhaps you have a directory full of images, and want to display them all without having to maintain specific metadata on each one.

```
myproject/
  ├ index.jade
  └ images/
      ├ hello-world.jpg     <-- hello world image
      ├ hello-saturn.jpg    <-- hello saturn image
      └ hello-jupiter.jpg   <-- hello jupiter image
```

### Using EJS

Now, within `index.jade` you can iterate over the `_contents`, referencing each file.

```ejs
<% for(var i in public.images._contents){ %>
  <% var image = public.images._contents[i] %>
  <% if ( image.match(/\b.(jpg|bmp|jpeg|gif|png|tif)\b/gi) ) { %>
		<div>
			<img src="images/<%= image %>" />
		</div>
  <% } %>
<% } %>
```

This results in the following HTML:

```html
<img src="images/hello-world.jpg" />
<img src="images/hello-saturn.jpg" />
<img src="images/hello-jupiter.jpg" />
```

### Using Jade

Now, within `index.jade` you can iterate over the `_contents`, referencing each file.

```jade
for image in public.images._contents
  img(src="images/#{ image }")
```

This results in the following HTML:

```html
<img src="images/hello-world.jpg" />
<img src="images/hello-saturn.jpg" />
<img src="images/hello-jupiter.jpg" />
```

<!--
## Also see

- Other relevant article
-->
