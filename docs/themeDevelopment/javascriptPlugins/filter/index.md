## Intro
The filter component is a javascript plugin, made to sort and filter on items. 
It's mainly made to use combine with the bwps items. 

The filter works by sorting on classes. So the things we sort, need to have the class we sort for. 
Exampel an sort on months, then items need the month as a class. An item which is only shown in sort for november, need november as a class on it. 

### Initialize
You need to initialize the filter. You do this by executing this javascript line:
The string you give with, is the id for the filter box container. 
```javascript
window.filter.init('media-grid');
```
If you use this plugin with the multi select component, remember to initialize the multiselect first: 
```javascript
window.multiselect.init('.filter-group.multiselect');
window.filter.init('media-grid');
```

You can combine this with some logic, if you load your javascript on every page, and don't want to execute everytime: 
```javascript
// Body tag get class from the template, so in this exampel this will only be executed on page that uses the template "arrangementer"
if($('body').hasClass('page-template-arrangementer')) {
    window.filter.init('media-grid');
};
```
### HTML
Here is all the different filter components you can use. 

Important to notice is, you can use as many elements on one mediagrid as you want. You can both have a search and a multipleselect to one grid as an example.

#### Search filter element 
    Here you need to put the id with, others wise it want work
```html
<input id="filter-search" /> 
```

#### Simple filter element 
    Filter group list needs this structure to work. 
    Parent element with a data-fitler-name and class name filtergroup.
    Child element in form of A-tags, with a data-filter.
    The data-filter is used to categories after elements with that class that is the same as the data-filter
```html
<ul class="list-inline filter-group" data-filter-name="categories">
    <li class="list-inline-item px-0 d-inline cat-item">
        <a class="btn selected" href="#" data-filter="">
            Alle
        </a>
    </li>
    <li class="list-inline-item px-0 d-inline">
        <a class="btn" href="#" data-filter=".category-one">
            category one
        </a>
    </li>
    <li class="list-inline-item px-0 d-inline">
        <a class="btn" href="#" data-filter=".category-two">
            category two
        </a>
    </li>
</ul>
```

#### Multiple filter element 
    Filter group list needs this structure to work. 
    Parent element with a data-fitler-name and class name filtergroup 
    Child element in form of A-tags, with a data-filter 
    The data-filter is used to categories after elements with that class that is the same as the data-filter
    Data-multiple is used to define, this is a multiple choice filter 
```html
<ul class="list-inline filter-group" data-filter-name="categories" data-multiple>
    <li class="list-inline-item px-0 d-inline cat-item">
        <a class="btn selected" href="#" data-filter="">
            Alle
        </a>
    </li>
    <li class="list-inline-item px-0 d-inline">
        <a class="btn" href="#" data-filter=".category-one">
            category one
        </a>
    </li>
    <li class="list-inline-item px-0 d-inline">
        <a class="btn" href="#" data-filter=".category-two">
            category two
        </a>
    </li>
</ul>
```

#### Simple select element 
    This is a select, where you can only select one at a time. 
    The important thing here is, if you want a clear / select all, the value needs to be *. 
    The select needs the data-filter-name to work. 
```html
<select class="filter-group select" data-filter-name="categories" placeholder="Kategorier">
    <option value="*">All</option>
    <option value=".category-one">category one</option>
    <option value=".category-two">category two</option>
    <option value=".category-three">category three</option>
    <option value=".category-four">category four</option>
</select>
```

#### Multiple select element 
You can get the complete overview over the multiselect by checkingout [Multiselect](themeDevelopment/javascriptPlugins/multiselect/index.md)
```html
<div 
    class="filter-group multiselect" 
    data-filter-name="categories" 
    placeholder="Kategorier" 
    showSelectNumberAfter
    data-multiple
>
    <div class="option-container">
        <div class="selector-title">Test <span class="select-number"></span></div>
        <div class="option" value=".category-one">category one</div>
        <div class="option" value=".category-two">category two</div>
        <div class="option" value=".category-three">category three</div>
        <div class="option" value=".category-four">category four</div>
        <div class="bottom-actions">
            <button class="clear-group">nulstill</button>
            <button class="close">close</button>
        </div>
    </div>
</div>
```


## Examples
### WP query 
These are the args used to get either posts or categories.
```php
$parent = get_term_by( 'slug', 'arrangementer', 'category' );
$categories = get_categories([
    'taxonomy' => 'category',
    'parent' => $parent->term_id,
    'hide_empty' => false, 
]);

$query = new WP_Query([
    'post_type' => 'bwps',
    'cat' => $parent->term_id,
    'posts_per_page' => -1
]);
```
### Search
```php
<div class="row">
    <div class="col-12">
        // Filter search bar needs id #filter-search to work 
        <input id="filter-search" /> 
    </div>
</div>
@if ($query->have_posts())  
    <div id="media-grid" class="event-tiles no-gutter columns-4">
        @while ($query->have_posts()) 
            @php $query->the_post(); @endphp
            <x-bwps-item type="custom" />
        @endwhile
    </div>
@endif
```

### Simple
```php
<div class="row">
    <div class="col-12">
        // Simple filter
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
@if ($query->have_posts())  
    <div id="media-grid" class="event-tiles no-gutter columns-4">
        @while ($query->have_posts()) 
            @php $query->the_post(); @endphp
            <x-bwps-item type="custom" />
        @endwhile
    </div>
@endif
```

### Simple select
```php
<div class="row">
    <div class="col-12">
        // Simple select filter
        <select class="filter-group select" data-filter-name="arrangementer" placeholder="Arrangementer">
            <option value="*">All</option>
            @foreach($categories as $cat => $args)
                <option value=".category-{{ $args->slug }}">
                    {{ $args->cat_name}}
                </option>
            @endforeach
        </select>
    </div>
</div>
@if ($query->have_posts())  
    <div id="media-grid" class="event-tiles no-gutter columns-4">
        @while ($query->have_posts()) 
            @php $query->the_post(); @endphp
            <x-bwps-item type="custom" />
        @endwhile
    </div>
@endif
```

### Multiple
```php
<div class="row">
    <div class="col-12">
        // Multiple
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

@if ($query->have_posts())  
    <div id="media-grid" class="event-tiles no-gutter columns-4">
        @while ($query->have_posts()) 
            @php $query->the_post(); @endphp
            <x-bwps-item type="custom" />
        @endwhile
    </div>
@endif
```

### Multipleselect
```php
<div class="row">
    <div class="col-12">
        // Multipleselect
        <div 
            class="filter-group multiselect" 
            data-filter-name="months" 
            placeholder="Måneder" 
            showSelectNumberBefore
            data-multiple
        >
            <div class="option-container">
                <div class="selector-title">Test <span class="select-number"></span></div>

                @foreach(array(1,2,3,4,5,6,7,8,9,10,11,12) as $month)
                    <div class="option" value=".{{ wp_date('F', mktime(0,0,0,$month, 1, date('Y'))) }}">
                        {{ wp_date('F', mktime(0,0,0,$month, 1, date('Y')))}}
                    </div>
                @endforeach

                <div class="bottom-actions">
                    <button class="clear-group">nulstill</button>
                    <button class="close">close</button>
                </div>
            </div>
        </div>
    </div>
</div>

@if ($query->have_posts())  
    <div id="media-grid" class="event-tiles no-gutter columns-4">
        @while ($query->have_posts()) 
            @php $query->the_post(); @endphp
            <x-bwps-item type="custom" />
        @endwhile
    </div>
@endif
```

### Simpel + Multiple + Search
```php
<div class="row">
    <div class="col-12">
        // Search bar 
        <input id="filter-search" /> 
        // Multiple select categories
        <ul class="list-inline filter-group" data-filter-name="arrangementer" data-multiple>
            @foreach($categories as $cat => $args)
                <li class="list-inline-item px-0 d-inline">
                    <a class="btn" href="#" data-filter=".category-{{ $args->slug }}">
                        {{ $args->cat_name}}
                    </a>
                </li>
            @endforeach
        </ul>
        // Multiple select months
        <ul class="list-inline filter-group" data-filter-name="months" data-multiple>
            @foreach(array(1,2,3,4,5,6,7,8,9,10,11,12) as $month)
                <li class="list-inline-item px-0 d-inline">
                    <a class="btn" href="#" data-filter=".{{ wp_date('F', mktime(0,0,0,$month, 1, date('Y'))) }}">
                        {{ wp_date('F', mktime(0,0,0,$month, 1, date('Y')))}}
                    </a>
                </li>
            @endforeach
        </ul>
        // Simple select years
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

@if ($query->have_posts())  
    <div id="media-grid" class="event-tiles no-gutter columns-4">
        @while ($query->have_posts()) 
            @php $query->the_post(); @endphp
            <x-bwps-item type="custom" />
        @endwhile
    </div>
@endif
```

### Multipleselect + simple select
```php
<div class="row">
    <div class="col-12">
        // Simple select years
        <select class="filter-group select" data-filter-name="years" placeholder="År">
            <option value="*">All</option>
            <option value=".2022">2022</option>
            <option value=".2023">2023</option>
            <option value=".2024">2024</option>
        </select>
        // Multipleselect months
        <div 
            class="filter-group multiselect" 
            data-filter-name="months" 
            placeholder="Måneder" 
            showSelectNumberBefore
            data-multiple
        >
            <div class="option-container">
                <div class="selector-title">Test <span class="select-number"></span></div>

                @foreach(array(1,2,3,4,5,6,7,8,9,10,11,12) as $month)
                    <div class="option" value=".{{ wp_date('F', mktime(0,0,0,$month, 1, date('Y'))) }}">
                        {{ wp_date('F', mktime(0,0,0,$month, 1, date('Y')))}}
                    </div>
                @endforeach

                <div class="bottom-actions">
                    <button class="clear-group">nulstill</button>
                    <button class="close">close</button>
                </div>
            </div>
        </div>
    </div>
</div>

@if ($query->have_posts())  
    <div id="media-grid" class="event-tiles no-gutter columns-4">
        @while ($query->have_posts()) 
            @php $query->the_post(); @endphp
            <x-bwps-item type="custom" />
        @endwhile
    </div>
@endif
```