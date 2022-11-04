# Getting started
<!-- panels:start -->
<!-- div:title-panel -->

## Prerequisite

<!-- div:left-panel -->
You need to have the [parent theme](https://github.com/billetten/wordpress_parent-template) build and installed in the wordpress themes, before you can use the [wordpress template](https://github.com/billetten/wordpress_template).
#### Stack
- [WordPress](https://wordpress.org/) >= 5.9
- BWPS - Billetten custome plugin for wordpress
- Advanved custom fields - Plugin for wordpress
- [PHP](https://secure.php.net/manual/en/install.php) >= 7.4.0 + >= 8.0.0 (with [`php-mbstring`](https://secure.php.net/manual/en/book.mbstring.php) enabled)
- [Composer] - with php 7.4 not +8 (https://getcomposer.org/download/)
- [Node.js](http://nodejs.org/) >= 16
- [Yarn](https://yarnpkg.com/en/docs/install)


<!-- div:title-panel -->
## Installation 
<!-- div:left-panel -->
- `composer install` - Install all the required composer dependencies, [need to use composer with specific php version? - linux](wordpressDevelopment/linux/composer/index?id=get-composer-to-use-a-specific-php-version)

- `yarn` - Install all the required node dependencies

<!-- div:title-panel -->
## Development
<!-- div:left-panel -->
First you need to go into the webpack.mix.js file and configure the dev url you are using in line 20.
The default, if you don't change anything, is dev.wptest.

- `yarn start` — Compile and start a localserver, where webpack is observing for changes to the files 

You can see your project on localhost:8080, if you have set the domain in webpack.mix.js correctly. 
On localhost:8081 runs browsersync, which is an tool, you can use to network throttle. 

<!-- div:title-panel -->
## Production
<!-- div:left-panel -->
When you run fpr production, you need to build the theme. 
When running yarn build laravel mix minify and compress all the files, which doesn't happen when runnning yarn start. 

- `yarn build` — Compile assets to the dist folder.
The build command also makes a theme.zip file, which you can directly upload to as a theme to wordpress.
Though it needs to have the [parent theme](https://github.com/billetten/wordpress_parent-template) installed, otherwise you can't activate it.  

<!-- div:title-panel -->
## Useful commands
Usefull commands, to use when developing. 
<!-- div:left-panel -->
- `yarn clean` — Clean storage Dist.* Cahce.* and Views.* / note: you need to rebuild the project after. 
- `yarn clean:cache` — Cleans the storage cache.
- `yarn clean:views` — Cleans the storage views.
- `composer dump-autoload clean` — Regenarates a list of all used classes 
- `wp cache flush` — Flush the cahce made in the wp uploads directory. Note: you need wp-cli for this command.  

<!-- panels:end -->