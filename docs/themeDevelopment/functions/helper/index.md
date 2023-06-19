# Show functions
<!-- panels:start -->

<!-- div:title-panel -->
## Intro
<!-- div:left-panel -->
#### Getting started
All the helper functions is located under the xooom namespace, which means you can use this syntax to get them all: 
<!-- div:right-panel -->
```php
@php
    use function Xooom\%function name%;
@endphp
```

<!-- div:title-panel -->
## get_bwps_image
<!-- div:left-panel -->
#### Desciption
The get_bwps_image returns an object with a url and alt tag. 

Per default it uses the thumbnail from wordpress, but if the `WP_ACF_EXTRA_IMAGES` or `WP_ACF_EXTRA_RATIO_IMAGES` is set to true in the configuration, then it will return the url from those acf fields. 

input: `get_bwps_image(param1: 'hero' | 'thumb', param2: int)`
- param1: Wether it should be a hero or a thumbnail size
- param2: The post ID 

returns: 
```php
{
    url: string,
    alt: string
}
```
<!-- div:right-panel -->
#### Function example
```php
@php $image = get_bwps_image('hero', get_the_ID()); @endphp
<img src="{{ $image['url'] }}"/>
```
<!-- panels:end -->
