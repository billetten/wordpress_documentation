#### Example of a custom header
```php    
<div class="row justify-content-between g-0" style="min-width: 100%; padding: 15px 0;">
    <div class="col-sm-4 justify-content-start d-flex">
        @include('layouts.header.partials.brand')
      </div>

    <div class="col-sm-8 justify-content-end d-flex">
        <div>
            <div class="top-menu right d-flex justify-content-end">
                @if (has_nav_menu('secondary_navigation'))
                    {!! wp_nav_menu(['theme_location' => 'secondary_navigation', 'menu_class' => 'nav', 'container_class' => 'nav_container']) !!}
                @endif
                <x-icons />
            </div>
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
        </div>
    </div>
</div>  
  
``` 