#### Lazyload 
There is implemented a lazyload class in javascript. It is allways enable you just need to write div and img tag en a different way, in order to use it. 

##### Simple img 
```html
<img data-src="the_image_url" lazyload>
```
##### Simple img with src-set
```html
<img data-src="the_image_url" data-srcset="the_image_srcset" lazyload>
```
##### Simple img with a load img
The load image shoul be a very small sized image, otherwise it wouldn't make sense. 
```html
<img data-src="the_image_url" src="url_to_load_image" lazyload>
```

##### If you want lazyload on css background image
```html
<div data-src="the_image_url" lazyload></div>
```

##### If you want lazyload on css background image with gradient or something else 
```html
<div data-src="the_image_url" data-background="linear-gradient(to top, #222 0%, #999 40px, rgba(0,0,0,0) 60%, rgba(0,0,0,0) 100%)" lazyload></div>
```