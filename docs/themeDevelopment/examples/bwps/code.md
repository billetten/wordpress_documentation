```php
@php 
  global $BWPS; 
  $timestamp = $BWPS->get_the_first_show_time();
@endphp

# Good idea to put the event-tile class in the class list
# Personally i also put the date in it 
# And i put a custom class as well, so my css want hurt other types 
<div  @php(post_class('event-tile custom_class ' . wp_date('F Y', $timestamp )))>
  <a href="{{ $link }}" class="event-tile-link">
    <div class="bwps_thumbnail" style="background-image:url({{ $image }});">
    </div>
  </a>
  <article>
    <div class="entry-summary">
      <a href="{{ $link }}" class="event-tile-link">

        <p class="show_location">
          <span class="show_date">
            <x-time type="{{ $timeType }}" timestamp={{$timestamp}} hide={{$hideDate}} />
          </span> 
          <span class="show_location">
            {{ $location }}
          </span>
        </p>

        <p class='show_name search_name'>{{ $title }}</p>

        # You can use the generic overlay
        # You can see the overlay in resources/views/components/bwps/utils
        @include('components.bwps.utils.overlay')

      </a>
    </div>
  </article>
</div>
```