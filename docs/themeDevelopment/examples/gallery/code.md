#### Example:
```php 
@php
    $mediaFiles = array(
        '/assets/images/some_image_1.png',
        '/assets/images/some_image_2.png',
        '/assets/images/some_image_3.png',
        '/assets/images/some_image_4.png',
    );
@endphp  

<div class="event-tiles no-gutter columns-4">
    @foreach($mediaFiles as $src)
        <x-modal src="{{$src}}" class="gallery-item"/>
    @endforeach
</div>
``` 

This is an example, where we use the same design for the grid.
So it will create a grid with as many columns, as there is specified in the theme custumizer for the BWPS grid. 

You can change columns to any of these if needed in the wrapper class: 
- columns-1
- columns-2
- columns-3
- columns-4
- columns-5