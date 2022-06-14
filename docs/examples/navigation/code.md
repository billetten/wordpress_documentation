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