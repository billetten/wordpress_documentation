# Billetten wordpress docs
[![Billetten](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/billetten)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
[![LAravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com/docs/9.x/)
[![Wordpress](https://img.shields.io/badge/Wordpress-21759B?style=for-the-badge&logo=wordpress&logoColor=white)](https://wordpress.com/)

<!-- panels:start -->
<!-- div:title-panel -->
## Intro
<!-- div:left-panel -->
We have build a wordpress theme structure, where we use 2 themese: 
* [Wordpress parent theme](https://github.com/billetten/wordpress_parent-template)
* [Wordpress template](https://github.com/billetten/wordpress_template)

#### Wordpress parent theme
This is a base theme, we allways developm upon. The idea is that every website use this theme as a base, so when we update this theme, all the new features automatcally gets pushed to the websites. 

#### Wordpress template
This is a child theme, made to work perfectly with the parentheme. This git repo is only used as a template to copy. 

<!-- div:title-panel -->
## Stack
<!-- div:left-panel -->
- [WordPress](https://wordpress.org/) >= 5.9
- BWPS - Billetten custome plugin for wordpress
- Advanved custom fields - Plugin for wordpress
- [PHP](https://secure.php.net/manual/en/install.php) >= 7.4.0 (with [`php-mbstring`](https://secure.php.net/manual/en/book.mbstring.php) enabled)
- [Composer](https://getcomposer.org/download/)
- [Node.js](http://nodejs.org/) >= 16
- [Yarn](https://yarnpkg.com/en/docs/install)

<!-- div:title-panel -->
## Template structure
<!-- div:left-panel -->
```sh
themes/theme_name/            # → Root of your theme
├── app/                      # → Theme PHP
│   ├── Providers/            # → Service providers
│   ├── View/                 # → View models
│   │   └── Composers/        # → View models
│   │       ├── App.php       # → general view model use on all views in general
│   ├── admin.php             # → Theme admin
│   └── setup.php             # → Theme setup
├── assets/                   # → Theme assets
│   ├── fonts/                # → Theme fonts
│   ├── images/               # → Theme images
│   ├── scripts/              # → Theme javascript
│   └── styles/               # → Theme stylesheets
├── config/                   # → Contains files used by acorn to run the theme 
├── dist/                     # → Built theme assets (never edit)
├── resources/                
│    └── views/               # → Theme templates
│        ├── components/      # → Component templates  
│        │    └── BWPS/       # → BWPS view conf
│        │        ├── types/  # → Here lays the custome file for bwps, if you need to make your own.
│        │        └── utils/  # → Here lays the time file, used to define how to display time in the theme
│        ├── layouts/         # → Base templates
│        │    ├── Header/     # → Header view conf
│        │    │   └── types/  # → Here lays the custome file for header, if you need to make your own
│        │    └── Footer/     # → Footer view conf
│        │        └── types/  # → Here lays the custome file for footer, if you need to make your own
│        ├── partials/        # → Partial templates
│        └── sections/        # → Section templates
│            └── frontpage/   # → Footer view conf
│                ├── after    # → The file where you can write HTML displayed after the bwps grid frontpage
│                └── beafore  # → The file where you can write HTML displayed before the bwps grid frontpage
├── composer.json             # → Autoloading for `app/` files
├── composer.lock             # → Composer lock file
├── functions.php             # → Theme bootloader
├── index.php                 # → Theme template wrapper
├── package.json              # → Node.js dependencies and scripts
├── screenshot.png            # → Theme screenshot for WP admin
├── style.css                 # → Theme meta information
├── webpack.mix.js            # → Laravel-mix config 
└── yarn.lock                 # → Yarn lock file 
```

<!-- div:title-panel -->
## Parent theme structure
<!-- div:left-panel -->
```sh
themes/xooom_parent_theme/    # → Root of your theme
├── app/                      # → Theme PHP
│   ├── Customizer/           # → Customizer files
│   │   ├── assets/           # → All js and css used in the customizer
│   │   ├── Controls/         # → The cusotome customizer controls
│   │   ├── Panels/           # → All the panels in the customizer
│   │   ├── Customizer.php    # → Customizer functions
│   │   └── Settings.php      # → Customizer helper functions
│   ├── Directives/           # → Theme directives
│   ├── Providers/            # → Service providers
│   ├── View/                 # → View models
│   │   ├── Components/       # → View model components
│   │   └── Composers/        # → View models
│   │       ├── Components/   # → View models layouts
│   │       ├── Layouts/      # → View models partials
│   │       ├── Partials/     # → View models partials
│   │       ├── Sections/     # → View models partials
│   │       ├── App.php       # → general view model use on all views in general
│   │       └── Post.php      # → general view model use on all post
│   ├── XooomAcfSetup.php     # → Theme acf-setup
│   ├── XooomAdmin.php        # → Theme admin
│   ├── XooomFilters.php      # → Theme filters
│   ├── XooomHelpers.php      # → Theme helpers
│   └── XooomSetup.php        # → Theme setup
├── assets/                   # → Theme assets
│   ├── fonts/                # → Theme fonts
│   ├── images/               # → Theme images
│   ├── scripts/              # → Theme javascript
│   └── styles/               # → Theme stylesheets
├── config/                   # → Contains files used by acorn to run the theme 
├── dist/                     # → Built theme assets (never edit)
├── resources/                
│    └── views/               # → Theme templates
│        ├── components/      # → Component templates
│        ├── layouts/         # → Base templates
│        ├── partials/        # → Partial templates
│        └── sections/        # → Section templates
├── composer.json             # → Autoloading for `app/` files
├── composer.lock             # → Composer lock file
├── functions.php             # → Theme bootloader
├── index.php                 # → Theme template wrapper
├── package.json              # → Node.js dependencies and scripts
├── screenshot.png            # → Theme screenshot for WP admin
├── style.css                 # → Theme meta information
├── webpack.mix.js            # → Laravel-mix config 
└── yarn.lock                 # → Yarn lock file 
```

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