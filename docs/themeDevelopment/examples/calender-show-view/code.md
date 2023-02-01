```php
@extends('layouts.app')

@php 
  global $BWPS; 
  $days_array = array(); 
  $months_array = array(); 
  $all_shows = array(); 
  $query = new WP_Query([ 
    'post_type' => 'bwps', 
    'posts_per_page' => -1 
  ]); 
  if($query->have_posts()): 
    while ($query->have_posts()): 
      $query->the_post(); 
      if( get_post_type() == 'bwps'): 
        $event =$BWPS->get_event(); 
        $data = json_decode($event->json_blob); 
        if($data): 
          $all_shows = array_merge($all_shows, array_map(function($show) use ($data, $BWPS) { 
            $show->event_name = $data->event_name; 
            $show_time = new DateTime($show->show_time); 
            $show->unix = $show_time->getTimestamp(); 
            $show->time = $show_time->format('H:i'); 
            $show->post_id = get_the_ID(); 
            $show->has_price = $BWPS->has_price(); 
            $show->event_no = $data->event_no;
            $show->link = get_the_permalink(); 
            return $show;  
          }, $data->shows)); 
        endif; 
      endif; 
    endwhile; 
  endif; 
  usort($all_shows, function($a, $b) { 
    return strcasecmp($a->show_time, $b->show_time); 
  });
@endphp

@section('content')
    @if(count($all_shows)) 
    <div class="calendar"> 
        @for($i = 0; $i < count($all_shows); $i++) 
        @php 
            $show = $all_shows[$i]; 
            $day = wp_date('F d', $show->unix); 
            $month = wp_date('F Y', $show->unix); 
        @endphp
        
        @if(!in_array($month, $months_array)) 
            @php($months_array[$month] = $month) 
            @if($i !== 0) 
            <hr class="over-month-line"/> 
            @endif 
            <h2 class="month-title {{ $day }}">{{ $month }}</h2> 
        @endif
        
        @if(!in_array($day, $days_array)) 
            @php($days_array[$day] = $day) 
            <hr class="over-day-line"/> 
            <h3 class="day-title {{ $day }}">{{ $day }}</h3> 
        @endif 
        <div class="show {{ $show->availability === 1?'udsolgt':'' }}"> 
            <h4>{{ htmlspecialchars_decode(html_entity_decode(strip_tags($show->event_name)))}}</h4> 
            <p>Lokation: {{ $show->location_name}}</p> 
            <p>Tid: {{ $show->time}} </p>
            @if($show->availability === 1)
            udsolgt
            @else 
            @if($show->has_price)
                <a 
                class="btn pri buy-btn basm basm_select main-buy-btn" 
                data-event_no="{{ $show->event_no }}" 
                target="_blank"
                >
                @if($show->availability === 2)
                    Køb få billettertilbage
                @else 
                    Køb
                @endif
                </a>
            @else 
                <a class="btn pri" href="{{ $show->link }}">
                Læs mere
                </a>
            @endif
            @endif 
        </div>
        @endfor 
    </div>
    @endif
@endsection
```
