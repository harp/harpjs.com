# Public and Private Assets

Your public directory is required to have a functioning Harp application. It defines what will be served publicly and what URLs your application exposes. Public assets belong in the public directory and assets outside of the public directory will not be served.

```
myapp/
  |- harp.json
  |- README.md               <--- won’t be served
  |- secrets.txt             <--- won’t be served
  +- public/                 <--- public directory
      +- index.html          <--- will be served
```

## Ignore those which start with underscore.

Any files or directories that begin with underscore will be ignored by the server. This is the recommended naming convention for `layout` and `partial` files. Harp will honour this rule for both files and directories.

## Root-Style Applications

It’s also possible to have a root-style application, where the public directory actually is the root directory. In this case, you can still prevent files from being served as Harp won’t directly serve the files with an underscore at the beginning of their name.

```
myapp/                       <--- public directory
  |- _harp.json
  |- _secrets.txt            <--- won't be served
  +- index.html              <--- will be served
```

### Design Rationale

By having a simple convention. It is easy to specify and identify which assets will not be served to the end user.

### Example

```
myapp/
  |- harp.json               <--- won’t be served
  +- public/                 <--- public directory
      |- index.html          <--- will be served
      |- _some-partial.jade  <--- won’t be served
      +- _shared-partials/   <--- won’t be served
          +- nav.jade
```

```
myapp/                       <--- public directory
  |- _harp.json
  |- index.html              <--- will be served
  |- _some-partial.jade      <--- won’t be served
  +- _shared-partials/       <--- won’t be served
      +- nav.jade
```
