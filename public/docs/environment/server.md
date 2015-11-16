# Harp Server

Running a Harp as a `server` or `multihost` is the primary purpose of the tool. This command is designed to run and serve a single app located on your computer.

## Usage

```sh
harp server [options] [path]
```

## Options

- **port** - (Number) Optional, The port the server listens on. Defaults to port `9000`.
- **help** - Display the help screen.

## Properties

- **path** - (String) Optional, The path you want your server to listen to.

### Example Usage

```sh
harp server ~/apps/example.com --port 3000
```

### Visiting a running harp app.

We provide a special URL for visiting your application. As port `3000` was specified in the previous command, the Harp app will be running at:

- `http://harpdev.io:3000`

However, you can always fall back to the default URI:

- `http://127.0.0.1:3000`
- `http://localhost:3000`

If no port was specified, the app will be available at the default port of `9000`:

- `http://harpdev.io:9000`
- `http://127.0.0.1:9000`
- `http://localhost:9000`

### Using Port 80

Sometimes, it is a pain typing in the port every time you visit your locally-running site. By using port `80`, you don’t need to type it in. Running Harp on port `80` requires _Admin Privileges_. On OS X, this means you need to preface the command with `sudo`:

```sh
sudo harp server --port 80
```

If Harp clashes with something that’s already running on port `80`, you can resolve the situation [with the port conflicts guide](port-conflicts).

## Production

Harp is production-ready. By specifying an environment variable,   extra <abbr>LRU</abbr> caching is added to make your site run even faster.

```sh
NODE_ENV=production harp server --port 3000
```
