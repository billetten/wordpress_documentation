#### Default
```php
<x-bwps-item />
```

#### With id
```php
<x-bwps-item id="{{id}}" />
```

#### With another name
If you call your bwps something other than cutom, you call it like this: 
```php
<x-bwps-item type="somename" />
```
As long as it is place in the type folder, every name goes: **resources/views/components/bwps/types/somename.blade.php**

#### You can overide must of the details if nessecery:  
```php
<x-bwps-item title="some title" location="some text here" />
```

#### You can hide date as well:  
```php
<x-bwps-item hideDate={{true}} />
```