# harpjs.com

The [Harp](https://github.com/sintaxi/harp) app for [harpjs.com](http://harpjs.com), which contains the [documentation](http://harpjs.com/docs), [blog](http://harpjs.com/blog), and more.

## CSS

Requires Bootstrap. Bootstrap is in `_bootstrap` and is not modified.

To override the default behavior of Bootstrap, make a copy of the component in `_override` and import it. Make the changes on top of Bootstrap, removing the lines that will not change from the original.

For quick and less modular changes, work with in a `.section` in `application.less`.

### Example

The main banner on harpjs.com uses a `.jumbotron` class from Bootstrap, which is located in `_bootstrap/jumbotron.less`. This is augmented with additional styles, and an additional `.jumbotron-knockout` class in `_overrides/jumbotron.less` Additional quick and sweeping changes are made in the `application.less` file, using totally different classes, to keep everything contained.
