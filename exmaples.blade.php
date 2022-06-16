<?php
/*
***---------------------------------------------
* 
    ** Example use for slider **
    ``  @php
            $args = array(
                'nav' => bool,
                'dots' => bool,
                'loop' => bool,
                'autoplay' => bool,
                'autoplay-timeout' => int, -> miliseconds
                'items' => int, -> items pr slide
                'in' => string, -> animation class find here: https://animate.style/
                'out' => string, -> animation class find here: https://animate.style/
                'transition' => int, miliseconds
                'nav-color' => string, /pri/sec/ter/qua
                'slider-height' => string, -> css variable
                'slides' => array(
                    1=> array(
                        'image' => url,
                        'title' => string,
                        'text' => string,
                        'button' => string,
                        'url' => url,
                        'text-position' => string, -> left/center/right
                        'slide-type' => bool, -> Heading over or under text
                        'text-color' => string, -> hex or rgba 
                        'text-width' => int, -> px
                        'button-type' => string, /pri/sec/ter/qua
                        'image-position' => string, -> css background position 
                    ),
                ),
            );
        @endphp
        <x-slider :args="$sliderArgs" />
        @include('components.slider.slider', ['args' => $args])
    ``

    OBS:
    Remember to style it using the wp customizer 
***---------------------------------------------
*/


/*
***---------------------------------------------
* 
    ** Example use for BWPS grid **
    EXAMPEL WITH ARGS FOR WP QUERY:
    ``  
        @php
            $args = array(
                'post_type' => 'bwps',
                'posts_per_page' => xx
            );
        @endphp
        @include('components.bwps.grid', ['args' => $args])
    ``
    USEFUL: https://code.tutsplus.com/tutorials/wp_query-arguments-categories-and-tags--cms-23070

    USE LIKE THIS IF QUERY IS ALREADY IN SCOPE, LIKE ARCHIVE AND SEARCH PAGE  
    ``
        @include('components.bwps.grid')
    ``
    
    OBS:
    Remember to style it using the wp customizer 
    Both style the bwps and the grid 
***---------------------------------------------
*/

?>