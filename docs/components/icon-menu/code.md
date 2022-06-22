#### Default use
```php
<x-icons />
``` 

#### The icon component code
The intention of this component is to change it in every theme. 
```php
<ul class="nav_icon_menu">
    <li>
        <a class="search_trigger" href="#"><i class="icon-search"></i></a>
    </li>
    <li>
        <a class="user_link basm basm_profile_btn" href="#"><i class="icon-user"></i></a>
    </li>
    <li class="basket_link basm basm_basket_btn" href="#">
        <i class="icon-basket-shopping-solid"></i>
        <span class="basm basm_basket_indicator">
            <span class="basm basm_basket_count">0</span>
        </span>
    </li>
</ul>

<div class="container searchBar_fp searchBar_header">
    <form class="search-form form-inline" action="<?php echo site_url('/'); ?>" method="get" role="search">
        <label class="sr-only"></label>
        <input class="searchInput" type="search" required="" placeholder="Søg" name="s" value="" />
        <button class="btn {{ Xooom\xooom_get_fallback('navigation.settings.search-btn') }}" type="submit">
            <span class="icon-search" aria-hidden="true"></span>
        </button>
    </form>
</div>
``` 