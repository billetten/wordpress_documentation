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

#### Standard
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

#### BWPS exampel
```php
@php
    use Xooom\View\Composers\Components\BWPS\Item;
function sliderArgs() {
    $args = array(
        'nav' => true,
        'dots' => true,
        'loop' => true,
        'autoplay' => true,
        'nav-color' => 'ter', 
        'slider-height' => '50vh', 
    ); 
    $bwpsSlider = new \WP_Query( array( 
        'post_type' => 'bwps',
        'posts_per_page' => 5
    ));
    if($bwpsSlider->have_posts()) :
        while($bwpsSlider->have_posts()) : 
            $bwpsSlider->the_post();
            $text = "<strong>" . Item::getStandard(get_post(get_the_ID())->first_show_unix_time) . "</strong>" . wp_get_post_terms( get_the_ID(), array( 'location' ) )[0]->name?:'';
            $args['slides'][get_the_ID()]=array(
                'image' => get_the_post_thumbnail_url()?:@get_theme_file_uri('dist/images/slider-default.jpg'),
                'title' => get_the_title()?:false,
                'text' => $text,
                'url' => get_the_permalink()?: '#',
                'text-position' => 'left',
                'text-color' => '#fff',
                'text-width' => '400', 
            );
        endwhile;
    endif;

    return $args;
}
@endphp
<x-slider :args="sliderArgs()" />
```