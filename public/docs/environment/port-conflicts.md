# Port Conflicts

If you get an error like `Error: listen EADDRINUSE` when you attempt to run [`harp server -p 80`](server), you probably already have something running on port `80`.

## Using a different port

The fastest way to fix this is to run Harp on another port, like port `9000`:

```
harp server -p 9000
```

Now, you should be able to access the server via the browser at [localhost:9000](http://localhost:9000).

## Freeing port `80`

Alternatively, you can stop whatever is already running on port `80` and try again. Running `lsof -i ':80'` will list out everything that’s running on port `80`—including any websites you have open. There may be one application already there that’s preventing Harp from running, like Apache.

If it’s `node` and Harp that’s listed as already running on port `80`, you can stop it by running the following on OS X:

```bash
ps -ef | grep harp
```

This will show you everywhere Harp is running. One line should look something like this:

```bash
0 14206 14205 0 2:46pm ttys001 0:00.32 node /usr/local/bin/harp server -p 80
```

You need the second number on that line. In that example it’s `14206`, but it will be something different for you.
Now run:

```bash
sudo kill -9 14206
```

Where `14206` is replaced with the number you had. That will free up port `80` for you.

## Further troubleshooting

If you’re still having troubles, feel free to [ask the community](../../community) or to [join the Harp chatroom](../../community/chat), where there lots of kind people ready to help.