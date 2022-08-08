#### Default
```php    
@extends('layouts.app')

@section('above_content')
    // Content over main
@endsection

@section('content')
    // Main content
@endsection

@section('below_content')
    // Content below main
@endsection
``` 

#### Exampel use
```php
@php
global $BWPS;
global $post;
$the_id = $post->ID;
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
@extends('layouts.app')
@section('above_content')
    <div class="container-fluid g-0">
        <x-slider :args="sliderArgs()" />
    </div>
@endsection
@section('content')
    @if (is_front_page())
        <div class="event_grid">
            @include('sections.frontpage.before-grid')
            @include('sections.frontpage.frontpage-grid')
            @include('sections.frontpage.after-grid')
        </div>
    @endif
@endsection
@section('below_content')
    <div class="page-box white">
        <x-container type="default">
            <h2>Huset</h2>
            <div class="event-tiles no-gutter columns-{!! $columns !!} pages">
                @foreach(get_children($the_id) as $child)
                    @if($child)
                        <x-bwps-item hideDate={{true}} location="" id="{{$child->ID}}" type="custom"/>
                    @endif
                @endforeach
            </div>
        </x-container>
    </div>
@endsection
``` 