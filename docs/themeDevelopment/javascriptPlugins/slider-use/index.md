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
></div>
```

You can parse the prob value in 2 ways:
`data-slider-nav="1"`
or
`data-slider-nav="{{ true }}"`,
These mean the same thing.

| Property                     | Description                                                                             | Required | Default |
| ---------------------------- | ------------------------------------------------------------------------------------------ | --- | ----- |
| data-slider-nav              | Wether or not you want to display arrows on either side                                    | No  | false |
| data-slider-dots             | Wether or not you want to display the dots on the bottom of the slider                     | No  | false |
| data-slider-loop             | If you want to make it loop and un forever                                                 | No  | false |
| data-slider-autoplay         | If you want it to autoplay                                                                 | No  | false |
| data-slider-autoplay-timeout | If you want it to autoplay, but first after some time. Time is in miliseconds.             | No  | 8000  |
| data-slider-autoplay-speed   | The time it takes the slider to change slide in miliseconds                                | No  | 5000  |
| data-slider-items            | Number of items on a slide, here 1 and 0 doesn't mean true or false                        | No  | 1     |
| data-slider-in               | The class you give it on slide in, switch can be used to give an animation to this class   | No  |       |
| data-slider-out              | The class you give it on slide out, switch can be used to give an animation to this class  | No  |       |
| data-slider-speed            | The speed used on the standard transition in miliseconds                                   | No  | 300   |
| data-slider-lazy             | If the owl should use it's own lazyload, there is an example further down.                 | No  | false |
| data-slider-lazy-eager       | The amount of images it should preload. Here 1 and 0 is true or false.                     | No  | false |
| data-slider-responsive       | Responsive or not. If you type 1, you will implement the standard responsiveness. <br /> You can make your own, see the example further down. | No  | false |

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

### Slider with owl lazy load

You can read more about it [here](https://owlcarousel2.github.io/OwlCarousel2/demos/lazyLoad.html).

```php
@php
    // Advanved custom fields, specific the gallery field
    $slides = get_field('frontpage_slider');
@endphp
<div class="owl-carousel owl-loaded owl-drag simple-slider ter"
    data-slider-nav="{{ false }}"
    data-slider-dots="{{ true }}"
    data-slider-loop="{{ true }}"
    data-slider-autoplay="{{ true }}"
    data-slider-autoplay-timeout="{{ 8000 }}"
    data-slider-lazy="1"
    >
    @foreach ($slides as $slide)
        <div class="slide owl-lazy" style="height: 400px" data-src="{{ $slide['url'] }}">
        </div>
    @endforeach
</div>
```

### Slider with custom responsiveness

You can read more about it [here](https://owlcarousel2.github.io/OwlCarousel2/demos/responsive.html).

```php
@php
    // Advanved custom fields, specific the gallery field
    $slides = get_field('frontpage_slider');
@endphp
<div class="owl-carousel owl-loaded owl-drag simple-slider ter"
    data-slider-nav="{{ false }}"
    data-slider-dots="{{ true }}"
    data-slider-loop="{{ true }}"
    data-slider-autoplay="{{ true }}"
    data-slider-autoplay-timeout="{{ 8000 }}"
    data-slider-responsive='{"340": {"items": 2}, "540": {"items": 3}, "768": {"items":4}}'
    >
    @foreach ($slides as $slide)
        <div class="slide" style="height: 400px">
            <div class="media" style="background-image: url({{ $slide['url'] }})">
            </div>
        </div>
    @endforeach
</div>
```
