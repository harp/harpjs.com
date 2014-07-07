# Contents

With Harp, you can access information about your compiled files, in addition to [metadata](/docs/development/metadata) about the source files.

## Why?

You may want to iterate over compiled or media files in your application, which may or may not have metadata. The `_contents` object provides a way of doing this.

## Example

Perhaps you have a directory full of images, and want to display them all without adding specific metadata on each one.

```
myproject/
  |- index.jade
  +- images/
      |- hello-world.jpg     <-- hello world article
      +- hello-brazil.jpg    <-- hello brazil article
```
