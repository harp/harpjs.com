<!-- in progress -->

# Deploy to OpenShift

OpenShift is a public Platform as a Service, used for hosting applications in various languages.

1. ## Register for Open Shift

It’s worth nothing that Ruby 1.8.7 or later is required locally to deploy an application to OpenShift, which is included on OS X 10.8. and later. If you’re looking for an alternative that doesn’t require Ruby you could try the [Harp Platform](harp-platform), [Heroku](heroku), or [GitHub Pages](github-pages)).

Sign up for a free OpenShift account.

Install the `rhc` client tool on the machine.To install `rhc`, just type:

```sh
sudo gem install rhc
```

Setup the OpenShift account using `rhc setup` command. This command will help us create a namespace and upload your ssh keys to OpenShift server.

After setup, we can create a new OpenShift application by running the following command.

```sh
rhc create-app blogonopenshift nodejs-0.10
```

This will create an application container for us, called a gear, and setup all of the required SELinux policies and cgroup configuration. OpenShift will also setup a private git repository for us and clone the repository to the local system. 

Finally, OpenShift will propagate the DNS to the outside world. The application will be accessible at http://blogonopenshift-{domain-name}.rhcloud.com/. Replace {domain-name} with your own unique OpenShift domain name (also sometimes called a namespace).

Next, change directory to the `blogonopenshift/` folder, and initialize a new harp project.

```
cd blogonopenshift
harp init _harp
```

This will create the sample harp application in the blogonopenshift directory under _harp folder.

Update the `package.json` file in the `blogonopenshift/` directory with Harp dependency.

```json
{
  "dependencies": {
    "harp" : ">=0.8"
  }
}
```

Then, use npm, the Node Package Manager, to install the dependencies:

```sh
$ npm install
```

Next, update the server.js with the following.

```javascript
require('harp').server("_harp", { ip : process.env.OPENSHIFT_NODEJS_IP, port: process.env.OPENSHIFT_NODEJS_PORT})
```

In the code shown above, we create an instance of the harp server. We pass it the ip address and the port number which the server should bind to in OpenShift environment. In a cloud environment, the recommended practice is to use environment variables instead of hard coding values.

If we push the code to OpenShift, it will not work the first time. The reason is that harp API does not provide any option to configure the IP address. I have logged an issue in the harp github repository. For the time being, open the index.js file in node_modules/harp/lib directory and update the server function with the one shown below:

```javascript
/**
 * Server
 *
 * Host a single Harp Application.
 *
 */
 
exports.server = function(dirPath, options, callback){
  connect.createServer(
    middleware.regProjectFinder(dirPath),
    middleware.setup,
    middleware.underscore,
    middleware.mwl,
    middleware.static,
    middleware.poly,
    middleware.process,
    middleware.fallback
  ).listen(options.port,options.ip ,  callback)
}
```

Now commit the code to the local git repository and then push the changes to cloud.


```sh
git add .
git commit -am "blogonopenshift app deployed to cloud"
git push
```

After the code is pushed, and the application is deployed on OpenShift, we can view the running application at http://blogonopenshift-{domain-name}.rhcloud.com. A sample application is running at http://blog-shekhargulati.rhcloud.com.

_Thanks to Shekhar Gulati, who gave permission for this documentation to be repurposed from [his original blog post.](https://www.openshift.com/blogs/day-8-harpjs-the-modern-static-web-server)._

## What’s Next?

Your Harp app has been successfully deployed to OpenShift. Now, you’d probably like to customize it. Read the [five simple rules for templating a Harp application](../development/rules) to get started quickly.

If you’d like to use a custom domain with OpenShift, follow the instructions…