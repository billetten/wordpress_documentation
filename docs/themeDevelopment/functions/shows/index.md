# Show functions
<!-- panels:start -->

<!-- div:title-panel -->
## Intro
<!-- div:left-panel -->
#### Getting started
First you need to add the global shows to the file: 

Afterwards you can use the functions, which comes along with it.
<!-- div:right-panel -->
```php
@php
    global $Shows;
@endphp
```

<!-- div:title-panel -->
## getMonthCount
<!-- div:left-panel -->
#### Desciption
Get month count is a function, to get all the months with events in them:
`$Shows->getMonthCount()`

returns: 
```php
[
    {
        date: string, // Unix
        count: int,  // Events in month count
        mount: string
    }
]
```
<!-- div:right-panel -->
#### Function example
```php
<ul class="list-inline filter-group" data-filter-name="date" data-multiple>
    @foreach($Shows->getMonthCount() as $date)
        <li class="list-inline-item px-0 d-inline">
            <a class="btn months" href="#" data-filter=".{{ wp_date( 'FY', strtotime($date->date)) }}">
                {{ wp_date( 'M y', strtotime($date->date)) }}
            </a>
        </li>
    @endforeach
</ul>
```

<!-- div:title-panel -->
## getShows
<!-- div:left-panel -->
#### Desciption
`$Shows->getShows()`

returns: 
```php
[
    {

    }
]
```
<!-- div:right-panel -->
#### Function example
```php
```

<!-- div:title-panel -->
## getShowsForEvent
<!-- div:left-panel -->
#### Desciption
`$Shows->getShowsForEvent($event_no, $limit)`

returns: 
```php
[
    {

    }
]
```
<!-- div:right-panel -->
#### Function example
```php
```

<!-- div:title-panel -->
## getUpcomingShows
<!-- div:left-panel -->
#### Desciption
`$Shows->getUpcomingShows($today, $limit)`

returns: 
```php
[
    {

    }
]
```
<!-- div:right-panel -->
#### Function example
```php
```



<!-- panels:end -->

