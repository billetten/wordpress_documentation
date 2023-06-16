The Allyy component is a component which talks with [allyy.io](https://www.allyy.io/about-us-allyy-io). 

You can read the [docs here](https://dev.allyy.io/docs/allyy-api/ughl4cs928u80-getting-started).

Primary the component uses this [endpoint](https://dev.allyy.io/docs/allyy-api/2b14d610312bb-find-recommendations).

#### Setup 
To get the component working you need to add the AjaxProvider to the config/app.php:
```php
    'providers' => [
        /*
         * Laravel Framework Service Providers...
         */
        Illuminate\Bus\BusServiceProvider::class,
        Illuminate\Cache\CacheServiceProvider::class,
        Illuminate\Filesystem\FilesystemServiceProvider::class,
        Illuminate\View\ViewServiceProvider::class,
        Roots\Acorn\Providers\AcornServiceProvider::class,
        Xooom\Providers\XooomServiceProvider::class,
        Xooom\Providers\BlockProvider::class,
        Xooom\Customizer\Customizer::class,
        --> Xooom\Providers\AjaxProvider::class,
    ],
```

In the the configuration file (app/configuration.php) you need to add:

```php
// Allyy
if (!defined('ALLYY_CLIENT_ID')) define('ALLYY_CLIENT_ID', 'some-client');
if (!defined('ALLYY_CLIENT_SECRET')) define('ALLYY_CLIENT_SECRET', 'abc1234');
```
remeber to add the correct ALLYY_CLIENT_ID and ALLYY_CLIENT_SECRET. 

