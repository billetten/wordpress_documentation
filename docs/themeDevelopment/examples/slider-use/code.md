An exampel of how to use the slider component with BWPS items. 

[See the component](/components/index.md?id=slider) for deeper undertanding of the args.

#### BWPS exampel
```php
@php
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
            $text = "<strong>" . get_time('short') . "</strong>" . wp_get_post_terms( get_the_ID(), array( 'location' ) )[0]->name?:'';
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