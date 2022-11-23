### All variables
You can give alot of variables to the slider: 
```html
<div
    data-slider-nav="1"
    data-slider-dots="1"
    data-slider-loop="1"
    data-slider-autoplay="0"
    data-slider-autoplay-timeout="8000"
    data-slider-items="1"
    data-slider-in="0"
    data-slider-out="0"
    data-slider-speed="500"
    data-slider-responsive="1"
>
```

### Slider exampel with ACF Pro gallery field
There can be cases where the best solution for the slider, is to make it likes this. 
Now you have full control over the slide it self. 
```php
@php
    // Advanved custom fields, specific the gallery field
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

### Slider made from events
1 is true and 0 is false, so this doesn't autoplay but have a nav. 
data-slider-in and data-slider-out is the animation, when they a 0, they refer to the native animation. 
```php
@php
    $ctaOne = new WP_Query(array( 
        'post_type' => array ('post', 'page'),
        'post_per_page' => -1,
        'post__in' => $events,
    ));
@endphp
<div class="owl-carousel cta owl-loaded owl-drag simple-slider sec"
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
    @if ( $ctaOne->have_posts() ) :
        @while ($ctaOne->have_posts()) 
            @php $ctaOne->the_post(); @endphp
            <div class="slide">
                <article @php(post_class())>
                    <div class="container-image">
                        <a href="@php if($link) { echo esc_url($link_url); } else { the_permalink(); } @endphp"> 
                            @php echo wp_get_attachment_image(get_field('billede_post'), 'custom size'); @endphp
                        </a>
                    </div>
                    <div class="content">
                        <a href="@php if($link) { echo esc_url($link_url); } else { the_permalink(); } @endphp"> 
                            <h2>@php the_field('cta_titel'); @endphp</h2>
                            <p>
                                <a href="<?php the_permalink() ?>">
                                    Læs mere her
                                </a>
                            </p>
                        </a>
                    </div>
                </article>
            </div>
        @endwhile;
    @endif
    @php wp_reset_postdata(); @endphp
</div>
```
