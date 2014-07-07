# Deploying to Shared Hosting using <abbr>SSH</abbr>

Since Harp apps compile to <abbr>HTML</abbr>, <abbr>CSS</abbr> and JavaScript, they can be uploaded to shared hosting. While you can upload your compiled output using an <abbr>FTP</abbr> client, it is also possible to automate this with a command line tool of your choosing and an SSH key from your host.

1. **SSH Keys from your Host**

    First, you’ll need to access your shared hosting account over SSH. This means you’ll need SSH keys from your hosting provider. Usually this can be found with a quick search on your host’s help site.

2. **Init, or use your existing app**

    If you have an existing app, you can skip to the next step. Otherwise, you can [create a new application](/docs/init) using:

		harp init

3. **Compile to www**

		harp compile

4. **Simplify deploying with a Makefile**

    Now, you can deploy to your host using the terminal. To make this easier, you could create a new file called `Makefile` (with no filetype) in the root of your Harp application.

		desc 'Deploy www to example.com' # Replace example.com with your site
		task :deploy do
			user       = 'username' # replace username with your username
			host       = 'example.com' # replace example.com with your host
			directory  = "~/example.com"
			sh "rsync -rtzh --progress --delete www/ #{user}@#{host}:#{directory}"
		end
