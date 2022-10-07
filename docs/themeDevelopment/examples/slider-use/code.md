An exampel of how to use the slider component with BWPS items. 

<!-- [See the component](/components/index.md?id=slider) for deeper undertanding of the args. -->

<!-- #### Slider component exampel
Here we use the slider component, which i primarely made for BWPS.
Though you can generate your own slides, see more in about this in the component array explanation. 
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
``` -->

#### Slider exampel with ACF Pro gallery field
There can be cases where the best solution for the slider, is to make it likes this. 
Now you have full control over the slide it self. 
```php
@php
    $slides = get_field('frontpage_slider');
@endphp

@if ($slides)
    <div class="owl-carousel owl-loaded owl-drag simple-slider" 
        data-slider-nav="{{ false }}"
        data-slider-dots="{{ true }}" 
        data-slider-loop="{{ true }}"
        data-slider-autoplay="{{ true }}" 
        data-slider-autoplay-timeout="8000"
        data-slider-items="1">
        @foreach ($slides as $slide)
            <div class="slide" style="height: 400px">
                <div class="media" style="background-image: url({{ $slide['url'] }})">
                </div>
            </div>
        @endforeach
    </div>
@endif
```

#### Slider made from events
1 is true and 0 is false, so this doesn't autoplay but have a nav. 
data-slider-in and data-slider-out is the animation, when they a 0, they refer to the native animation. 
```php
    <div class="owl-carousel cta owl-loaded owl-drag simple-slider sec"
    style="<?php if($border == 'string') : ?> border-bottom: 2px solid #a7a9ab; padding-bottom: 30px; <?php endif; ?>"
        data-slider-nav="1"
        data-slider-dots="1"
        data-slider-loop="1"
        data-slider-autoplay="0"
        data-slider-autoplay-timeout="8000"
        data-slider-items="1"
        data-slider-in="0"
        data-slider-out="0"
        data-slider-speed="500"
    >
        <?php
            $ctaOne = new WP_Query( array( 
            'post_type' => array ('post', 'page'),
            'post_per_page' => -1,
            'post__in' => $events,
            ) );
        ?>
        
        <?php if ( $ctaOne->have_posts() ) :
        while ($ctaOne->have_posts()) : $ctaOne->the_post(); ?>
            @include('sections.frontpage.cta-slider')
        <?php endwhile;
        endif; ?>
        <?php wp_reset_postdata(); ?>
    </div>
```