#### Example:
```php   
<div class="event-tiles no-gutter columns-{{ $columns }}">
    @foreach($mediaFiles as $path)
        @include('components.media.modal', ['path' => $path, 'class' => 'event-tile standard'])
    @endforeach
</div>
``` 
#### Modal component:
```php   
@include('components.media.modal', ['path' => $path, 'class' => 'event-tile standard'])
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