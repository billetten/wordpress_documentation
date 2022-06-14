#### Default:
```php   
@include('partials.bwps-grid')
``` 

#### You define the bwps query:
```php   
@php
    $args = array(
        'post_type' => 'bwps',
        'posts_per_page' => xx
    );
@endphp
@include('partials.bwps-grid', ['args' => $args])
```     
#### How the partial look:
```php   
@if(isset($args))
    @php $query = new WP_Query(array_merge([], $args)); @endphp
    @if ($query->have_posts())  
        <div class="event-tiles no-gutter columns-{!! $columns !!}">
            @while ($query->have_posts()) 
                @php $query->the_post(); @endphp
                <x-bwps />
            @endwhile
        </div>
    @endif
@else 
    @if (have_posts())  
        <div class="event-tiles no-gutter columns-{!! $columns !!}">
            @while (have_posts()) 
                @php the_post(); @endphp
                @if( get_post_type() == 'bwps' )
                    <x-bwps />
                @endif
            @endwhile
        </div>
    @endif
@endif
```     
