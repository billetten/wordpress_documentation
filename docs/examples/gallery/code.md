#### Example:
```php   
<div class="event-tiles no-gutter columns-5">
    @foreach($mediaFiles as $src)
        <x-modal src="{{$src}}" class="gallery-item items-{{count($mediaFiles)}}"/>
    @endforeach
</div>
``` 
#### Modal component:
```php   
<x-modal src="{{$src}}" class="gallery-item items-{{count($mediaFiles)}}"/>
``` 
#### Array structure in exampel: 
```php   
$mediaFiles = array(
    '/assets/images/some_image_1.png',
    '/assets/images/some_image_2.png',
    '/assets/images/some_image_3.png',
    '/assets/images/some_image_4.png',
);
``` 