#### Default
```php
@php
    $args = array(
        'nav' => bool,
        'dots' => bool,
        'loop' => bool,
        'autoplay' => bool,
        'autoplay-timeout' => int, # -> miliseconds
        'items' => int, # -> items pr slide
        'in' => string, # -> animation class 
        'out' => string, # -> animation class  
        'transition' => int, # -> miliseconds
        'nav-color' => string, # -> Choose between pri / sec / ter / qua
        'slider-height' => string, # -> css variable
        'slides' => array(
            1=> array(
                'image' => url,
                'title' => string,
                'text' => string,
                'button' => string,
                'url' => url,
                'text-position' => string, # -> Choose between left / center / right
                'slide-type' => bool, # -> Heading over or under text
                'text-color' => string, # -> hex or rgba 
                'text-width' => int, # -> px
                'button-type' => string, # -> Choose between pri / sec / ter / qua
                'image-position' => string, # -> css background position 
            ),
        ),
    );
@endphp
<x-slider :args="$sliderArgs" />
```

#### Simple use
```php
@php
    $args = array(
        'slides' => array(
            1=> array(
                'image' => url,
            ),
            2=> array(
                'image' => url,
            ),
            3=> array(
                'image' => url,
            ),
            4=> array(
                'image' => url,
            ),
        ),
    );
@endphp
<x-slider :args="$sliderArgs" />
```