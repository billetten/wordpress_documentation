This is a navigation with support for dropdown and mobile view, if there is a need for that. 

Change the class to left, to make it foldout from left to right in the drop down.

This navigation have a burger and a menu for mobil. 
We include the icon-menu, which is a partial with the default icons we use. 


```php   
<nav class="nav-primary right">
    <div class="the_menu">
        <div class="mobile-menu">
            <x-icons />
            @if (has_nav_menu('secondary_navigation'))
                {!! wp_nav_menu(['theme_location' => 'secondary_navigation', 'menu_class' => 'nav', 'container_class' => 'nav-container-second']) !!}
            @endif
        </div>
        @if (has_nav_menu('primary_navigation'))
            {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav', 'container_class' => 'nav_container']) !!}
        @endif
    </div>
    <div class="nav-primary burger-cn">
        <div class="burger">
            <span></span>
        </div>
    </div>
</nav>
``` 