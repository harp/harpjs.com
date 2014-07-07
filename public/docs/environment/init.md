# Initializing a Harp Application

Harp has a command line interface for creating a new project from scratch. This is the quickest way to try Harp.

## Why?

Often, starting a project requires the same boilerplate code over and over. This command is helpful if you want to create a project with a sane starting point and common defaults.

## Properties

- **path** – (String) Optional, this is the file path to where you want the project to be generated. It must be empty or no files will be generated. The path also assumes your current working directory.

## Example Usage

In the following example, the default application will be created in the folder `myproject/`.

```sh
harp init myproject
```

#### Default project structure

```
myproject/
  |- _layout.jade
  |- 404.jade
  |- index.jade
  +- main.less
```

_Note the default app uses [Jade](/docs/development/jade) for writing HTML, but you may also use [EJS](/docs/development/ejs), which may be more familiar._

## Using a boilerplate

The `--boilerplate` or `-b` flag allows you to initialize a new Harp app with a boilerplate on GitHub. The following would create a new project in `myproject/` directory using the boilerplate on [github.com/kennethormandy/hb-remedy](https://github.com/kennethormandy/hb-remedy)

```sh
harp init myproject --boilerplate kennethormandy/hb-remedy
```

You may also skip specifying a GitHub user entirely, and use one of the [default Harp boilerplates](https://github.com/harp-boilerplates).

```sh
harp init myproject --boilerplate docs
```

### Using any project as a boilerplate

It’s also possible to initialize a project using a GitHub repository that wasn’t even intended to be a Harp boilerplate. Because Harp serves HTML, CSS & JavaScript, any project based on web technology should work. For example, you could easily serve an Apache Cordova / PhoneGap app locally.

```sh
harp init -b phonegap/phonegap-start
harp server www
# Your project is now being served at http://localhost:9000
```
