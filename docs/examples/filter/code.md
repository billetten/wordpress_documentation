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
        <h2>Arrangementer</h2>
    </div>
</div>
<div class="row">
    <div class="col-12">

        // Filter search bar needs id #filter-search to work 
        <input id="filter-search" /> 

        // Filter group list needs this structure to work. 
        // Parent element with a data-fitler-name and class name filtergroup 
        // Child element in form of A-tags, with a data-filter 
        // The data-filter is used to categories after elements with that class that is the same as the data-filter
        <ul class="list-inline filter-group" data-filter-name="arrangementer">
            <li class="list-inline-item px-0 d-inline cat-item">
                <a class="btn selected" href="#" data-filter="">
                    Alle
                </a>
            </li>
            @foreach($categories as $cat => $args)
                <li class="list-inline-item px-0 d-inline">
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
