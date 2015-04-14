# Deploying on Heroku

Heroku is a developer-focused platform for hosting applications.

If you’re familiar with using git in the command line, you’ll have no trouble deploying your Harp app to Heroku.

## Create a Heroku account

If you haven’t already, create a [Heroku account](https://api.heroku.com/signup/devcenter) and install their [toolbelt](https://toolbelt.heroku.com/). Then, using the Terminal, login with the username and password you chose:

```sh
heroku login
```

Now you’re ready to being modifying your Harp app to prepare it for Heroku. If you don’t have an existing app, or would like to try out deployment with the default app, you may [use `harp init` to initialize a new application](/docs/environment/init).

## The Harp Buildpack

The easiest way to deploy your application to Heroku is with [@zeke’s Harp buildpack](https://github.com/zeke/harp-buildpack).

1. ## Create or use an existing application

  If you need a new application, create a directory with an index file. You can do this with the terminal, too:

  ```sh
  mkdir my-harp-app
  cd my-harp-app
  echo "hello world" > index.html
  ```

2. ## Initialize your app as a Git repo

  Next, you’ll initialize your Harp app as a Git repository (if it isn’t one already.) Then, add and commit the changes:

  ```sh
  git init
  git add .
  git commit -am "hello world"
  ```

3. ## Use the buildpack

  Create a new application on Heroku, set to use the Harp buildpack.

  ```
  heroku create my-harp-app
  heroku config:set BUILDPACK_URL=https://github.com/zeke/harp-buildpack.git
  ```

4. ## Deploy your application to Heroku

  Push to Heroku and see your application online:

  ```
  git push heroku master
  heroku open
  ```

5. ## Set the production environment

To get the best performance, you’ll need to set Harp’s production properly. The Heroku buildpack can’t take care of this for you [yet](https://github.com/zeke/harp-buildpack/issues/8):


```bash
heroku config:set NODE_ENV="production"
```

## Deploy to Heroku manually

If you’d like to deploy a Harp application to Heroku manually, use the following instructions instead.

1. ## Add `package.json`, `server.js` and a `Procfile`

   There are three files you’ll need to add to the root of your Harp application (not inside the `public` directory). The first is `package.json`:

  ```json
   {
     "name": "My Harp App",
     "version": "1.0.0",
     "description": "A Harp App on Heroku",
     "dependencies": {
       "harp": "*"
     },
     "engines": {
       "node": "0.10.x",
       "npm": "1.2.x"
     }
   }
   ```

   Then, use Node Package Manager to install the dependencies:

   ```
   npm install
   ```

   Next, create `server.js`, which should contain the following:

   ```js
   require('harp').server(__dirname, { port: process.env.PORT || 5000 })
   ```

   Finally, add a `Procfile` in the root as well. The `Procfile` is a text file that executes the `server.js` file you just created. It only needs to be this one line:

   ```
   web: node server.js
   ```

2. ## Initialize your app as a Git repo

   Using the terminal, initialize your Harp app as a Git repository (if it isn’t one already.) Then, add and commit the changes:

   ```sh
   git init
   git add .
   git commit -m "First Harp + Heroku commit"
   ```

3. ## Deploy to Heroku

   You’re ready to deploy to Heroku. Create the Harp app as a Heroku app, and then use `git` to push the app to Heroku.

   ```sh
   heroku create my-harp-app
   git push heroku master
   ```

   In this example, the application will be named `my-harp-app`, and should be immediately available at `my-harp-app.herokuapp.com`.

##### What’s Next?

Your Harp app has been successfully deployed to Heroku. Now, you’d probably like to customize it. Read the [five simple rules](http://harpjs.com/docs/development/rules) for templating a Harp application to get started quickly.

If you’d like to use a custom domain with Heroku, follow the instructions in the [Heroku Dev Center](https://devcenter.heroku.com/articles/custom-domains).
