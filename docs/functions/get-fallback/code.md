Exampel 1:
```php  
@php
    use function Xooom\xooom_get_fallback; 
@endphp
<p>{{ xooom_get_fallback('footer.copyright')}}</p>
``` 

Exampel 2:
```php  
@php
    use function Xooom\xooom_get_fallback; 
@endphp
@if(xooom_get_fallback('socialmedia.' . $some . '.url') !== '#')
    @php
        $url = parse_url(xooom_get_fallback('socialmedia.' . $some . '.url'));
        $scheme = isset($url['scheme'])?$url['scheme']:'https';
        $host = isset($url['host'])?$url['host']:'';
        $path = isset($url['path'])?$url['path']:'';
    @endphp
    <li class="list-inline-item border-0 px-0 d-inline">
        <a href="{{$scheme}}://{{$host}}{{$path}}" target="_blank" rel="noopener">
            <i  class="icon-{{$some}}" >
            </i>
        </a>
    </li>
@endif
``` 