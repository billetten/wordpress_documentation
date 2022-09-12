# Getting started
<!-- panels:start -->
<!-- div:title-panel -->

## Prerequisite

<!-- div:left-panel -->
You need to have the [parent theme](https://github.com/billetten/wordpress_parent-template) build and installed in the wordpress themes, before you can use the [wordpress template](https://github.com/billetten/wordpress_template).

<!-- div:title-panel -->
## Installation 
<!-- div:left-panel -->
- `composer install` - Install all the required composer dependencies 
- `yarn` - Install all the required node dependencies 

<!-- div:title-panel -->
## Development commands
<!-- div:left-panel -->
First you need to go into the webpack.mix.js file and configure the dev url you are using in line 20.
The default, if you don't change anything, is dev.wptest.

- `yarn start` — Compile assets and start a localserver, where webpack is observing for changes to the files 

You can see your project on localhost:8080, if you have set the domain in webpack.mix.js correctly. 
On localhost:8081 runs browsersync, which is an awesome tool, you can use to network throttle and a lot more. 

<!-- div:title-panel -->
## Build commands
<!-- div:left-panel -->
- `yarn build` — Compile assets to the dist folder

<!-- div:title-panel -->
## Deployment
<!-- div:left-panel -->
When deploying the theme, you need to have build the project first. 
Then place all these files into wp-content\themes\{child_theme} in the wordpress installation. 
The only folders and filse you need to place in their respective folder: 

```sh
themes/xooom_parent_theme/    # → Root of your theme
├── app/                      # → Theme files, setup files and customizer files
├── config/                   # → Contains files used by webpack to help compile the theme
├── dist/                     # → Built theme assets (never edit)
├── vendor/                   # → Theme assets and templates
├── views/                    # → Theme assets and templates
├── functions.php             # → Theme bootloader
├── head.php                  # → Where you place all links to the head tag
├── index.php                 # → Theme template wrapper
├── screenshot.png            # → Theme screenshot for WP admin
└── style.css                 # → Theme meta information
```

<!-- panels:end -->