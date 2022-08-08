```php    
<footer class="content-info" @php if($footerImage) echo "style='background-image: url($footerImage)'"; @endphp>
  <x-container type="footer" class="custom">

    <a class="btn kontakt-os" href="/kontakt-os/">
      åbningstider og kontakt
    </a>

    <div div class="col-12 d-flex">
      <a class="brand" href="/">
        <span> Sønderborghus </span>
      </a>
    </div>

    <div class="col-12 d-flex justify-content-between flex-wrap">
      @php dynamic_sidebar('sidebar-footer') @endphp
    </div>

    <div class="col-12 d-flex justify-content-between flex-wrap special my-3">
      @include( 'layouts.footer.partials.copyright' )
      <x-some-icons color="#fff" size="24px"/>
    </div>

  </x-container>
</footer> 
``` 