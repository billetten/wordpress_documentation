#### Example

##### Javascript
```javascript
    window.filter.init('media-grid');
```

##### View simple with filter on category
```php
@php
    $parent = get_term_by( 'slug', 'arrangementer', 'category' );
    $categories = get_categories([
        'taxonomy' => 'category',
        'parent' => $parent->term_id,
        'hide_empty' => false, 
    ]);
    $queryArgs = [
        'post_type' => 'bwps',
        'cat' => $parent->term_id,
        'posts_per_page' => -1
    ];
@endphp

<div class="row">
    <div class="col-12">

        <ul class="d-inline list-inline filter-group" data-filter-name="arrangementer">
            <li class="list-inline-item border-0 px-0 d-inline cat-item">
                <a class="btn selected" href="#" data-filter="">
                    Alle
                </a>
            </li>
            @foreach($categories as $cat => $args)
                <li class="list-inline-item border-0 px-0 d-inline">
                    <a class="btn" href="#" data-filter=".category-{{ $args->slug }}">
                        {{ $args->cat_name}}
                    </a>
                </li>
            @endforeach
        </ul>

        <ul class="d-inline list-inline filter-group" data-filter-name="arrangementer1">
            <li class="list-inline-item border-0 px-0 d-inline cat-item">
                <a class="btn selected" href="#" data-filter="">
                    Alle
                </a>
            </li>
            @foreach($categories as $cat => $args)
                <li class="list-inline-item border-0 px-0 d-inline">
                    <a class="btn" href="#" data-filter=".category-{{ $args->slug }}">
                        {{ $args->cat_name}}
                    </a>
                </li>
            @endforeach
        </ul>
    </div>
</div>

@include('partials.bwps-grid', ['args' => $queryArgs, 'id' => 'media-grid'])
```
