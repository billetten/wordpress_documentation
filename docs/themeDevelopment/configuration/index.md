# Configuration
<!-- panels:start -->

<!-- div:title-panel -->
## Intro
Every site is unique, and not alle sites needs the same  modules and plugins. You can use the configuration file: 
```
/app/configuration.php
```
This file contains what we can configure or not. 

The initaial file looks like this:
```php
<?php
/*
|--------------------------------------------------------------------------
| Define cutomizer / acf addons
|--------------------------------------------------------------------------
|
*/
// Customizer fields
if (!defined('WP_CT_SLIDER')) define('WP_CT_SLIDER', false);
if (!defined('WP_CT_EVENT')) define('WP_CT_EVENT', false);
if (!defined('WP_CT_SINGLE')) define('WP_CT_SINGLE', false);
if (!defined('WP_CT_ARCHIVE')) define('WP_CT_ARCHIVE', false);
if (!defined('WP_CT_OPEN')) define('WP_CT_OPEN', false);
// ACF fields 
if (!defined('WP_ACF_GALLERY')) define('WP_ACF_GALLERY', false);
if (!defined('WP_ACF_EVENTADDS')) define('WP_ACF_EVENTADDS', false);
if (!defined('WP_ACF_EXTRA_IMAGES')) define('WP_ACF_EXTRA_IMAGES', false);
if (!defined('WP_ACF_EXTRA_RATIO_IMAGES')) define('WP_ACF_EXTRA_RATIO_IMAGES', false);
// Allyy
if (!defined('ALLYY_CLIENT_ID')) define('ALLYY_CLIENT_ID', false);
if (!defined('ALLYY_CLIENT_SECRET')) define('ALLYY_CLIENT_SECRET', false);
```

<!-- div:title-panel -->
## Customizer fields
<!-- div:left-panel -->
#### WP_CT_SLIDER
This will add the slider functions to the customizer, where the customer can build the standard slider. 
<!-- div:right-panel -->
```php
if (!defined('WP_CT_SLIDER')) define('WP_CT_SLIDER', false);
```

<!-- div:title-panel -->
##### 
<!-- div:left-panel -->
#### WP_CT_EVENT
This will add the section event under frontpage in the customizer, where you can define the grid parameters for the theme.
<!-- div:right-panel -->
```php
if (!defined('WP_CT_EVENT')) define('WP_CT_EVENT', false);
```

<!-- div:title-panel -->
##### 
<!-- div:left-panel -->
#### WP_CT_SINGLE
This will add the single BWPS post site with configuration options in the customizer.
<!-- div:right-panel -->
```php
if (!defined('WP_CT_SINGLE')) define('WP_CT_SINGLE', false);
```

<!-- div:title-panel -->
##### 
<!-- div:left-panel -->
#### WP_CT_ARCHIVE
This will add the Archive site with configuration options in the customizer. With this the function to make a list of selected categories comes along. If the archive needs to have specific categories selected.
<!-- div:right-panel -->
```php
if (!defined('WP_CT_ARCHIVE')) define('WP_CT_ARCHIVE', false);
```

<!-- div:title-panel -->
##### 
<!-- div:left-panel -->
#### WP_CT_OPEN
this will add the open hours section, where there comes 4 boxes, where they can define the specific open hours. The will alså add the functioniality to use the open_hours short code.
<!-- div:right-panel -->
```php
if (!defined('WP_CT_OPEN')) define('WP_CT_OPEN', false);
```


<!-- div:title-panel -->
## ACF fields
<!-- div:left-panel -->
#### WP_ACF_GALLERY
This will add the gallery ACF to all BWPS post. Where you can add 4 images.
<!-- div:right-panel -->
```php
if (!defined('WP_ACF_GALLERY')) define('WP_ACF_GALLERY', false);
```


<!-- div:title-panel -->
##### 
<!-- div:left-panel -->
#### WP_ACF_EVENTADDS
This will add a column with event details to VPWS opst;
- In slider true false
- Teaser text
<!-- div:right-panel -->
```php
if (!defined('WP_ACF_EVENTADDS')) define('WP_ACF_EVENTADDS', false);
```

<!-- div:title-panel -->
##### 
<!-- div:left-panel -->
#### WP_ACF_EXTRA_IMAGES
This will add extra images to an BWPS post. 
- Hero 
- Thumbnail
<!-- div:right-panel -->
```php
if (!defined('WP_ACF_EXTRA_IMAGES')) define('WP_ACF_EXTRA_IMAGES', false);
```

<!-- div:title-panel -->
##### 
<!-- div:left-panel -->
#### WP_ACF_EXTRA_RATIO_IMAGES
This will add extra images to an BWPS post as the BWPS ratio image type. 
- Hero 
- Thumbnail
<!-- div:right-panel -->
```php
if (!defined('WP_ACF_EXTRA_RATIO_IMAGES')) define('WP_ACF_EXTRA_RATIO_IMAGES', false);
```

<!-- div:title-panel -->
## Allyy fields
<!-- div:left-panel -->
#### ALLYY_CLIENT_ID
Allyy client id is added here.
<!-- div:right-panel -->
```php
if (!defined('ALLYY_CLIENT_ID')) define('ALLYY_CLIENT_ID', false);
```

<!-- div:left-panel -->
#### ALLYY_CLIENT_SECRET
Allyy clientsecret id is added here.
<!-- div:right-panel -->
```php
if (!defined('ALLYY_CLIENT_SECRET')) define('ALLYY_CLIENT_SECRET', false);
```


<!-- panels:end -->
