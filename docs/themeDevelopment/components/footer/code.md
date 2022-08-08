#### Use
When you need to use the component:
```php
<x-footer />
```
When used like above, the component returns the predefine footer, which is choosen in the customizer.

So if you want to return something other than that, you can write the direct name of the header fil, which you would like to use: 

```php
<x-footer type="somename"/>
```

this will return: **resources/views/layouts/footer/somename.blade.php**