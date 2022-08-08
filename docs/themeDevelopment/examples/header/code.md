```php    
<header id="navigation" class="banner {{ $fixed?'fixed':''; }} {{ $zeroHeight?'zero':''; }} top">
    <x-container type="header" class="custom">

        <div class="row justify-content-between" style="min-width: 100%; padding: 15px 0;">
            <div class="col-sm-2 justify-content-start d-flex">
                @include('layouts.header.partials.brand')
            </div>

            <div class="col-sm-8 justify-content-xl-center justify-content-end d-flex align-items-center">
                <div class="nav-primary burger-cn">
                    <div class="burger">
                        <span></span>
                    </div>
                </div>
                <nav class="nav-primary">
            
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
            
                </nav>
            </div>

            <div class="col-sm-2 justify-content-end d-xl-flex d-none">
                <x-icons />
            </div>

        </div>

        <div class="overlay-menu nav"></div>

    </x-container>
</header>
``` 

