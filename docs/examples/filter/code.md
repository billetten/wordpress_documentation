#### Example

##### Javascript
```javascript
    window.filter.init('media-grid');
```

##### Wordpress query args used 
These are the args used to get a post type and to get categories in these exampels
```php
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
```

##### View simple with filter on category
```php
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

##### View multiple filter on category
```php
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
        // Data-multiple is used to define, this is a multiple choice filter 
        <ul class="list-inline filter-group" data-filter-name="arrangementer" data-multiple>
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

##### View multiple and simple filter on category
```php
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
        // Data-multiple is used to define, this is a multiple choice filter 
        <ul class="list-inline filter-group" data-filter-name="arrangementer" data-multiple>
            @foreach($categories as $cat => $args)
                <li class="list-inline-item px-0 d-inline">
                    <a class="btn" href="#" data-filter=".category-{{ $args->slug }}">
                        {{ $args->cat_name}}
                    </a>
                </li>
            @endforeach
        </ul>

        <ul class="list-inline filter-group" data-filter-name="months" data-multiple>
            @foreach(array(1,2,3,4,5,6,7,8,9,10,11,12) as $month)
                <li class="list-inline-item px-0 d-inline">
                    <a class="btn" href="#" data-filter=".{{ wp_date('F', mktime(0,0,0,$month, 1, date('Y'))) }}">
                        {{ wp_date('F', mktime(0,0,0,$month, 1, date('Y')))}}
                    </a>
                </li>
            @endforeach
        </ul>

        <ul class="list-inline filter-group" data-filter-name="years">
            <li class="list-inline-item px-0 d-inline cat-item">
                <a class="btn selected" href="#" data-filter="">
                    Alle
                </a>
            </li>
            <li class="list-inline-item px-0 d-inline cat-item">
                <a class="btn" href="#" data-filter=".2022">
                    2022
                </a>
            </li>
            <li class="list-inline-item px-0 d-inline cat-item">
                <a class="btn" href="#" data-filter=".2023">
                    2023
                </a>
            </li>
        </ul>

    </div>
</div>

@include('partials.bwps-grid', ['args' => $queryArgs, 'id' => 'media-grid'])
```