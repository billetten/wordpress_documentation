# Advanced Slider
<!-- panels:start -->

<!-- div:title-panel -->
## Intro
If you want more configurations on the slider, you can combine the slider with javascript, where you can add all the functions from [owl](https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html).

<!-- div:title-panel -->
## Initial setup
<!-- div:left-panel -->
#### HTML 
On the side, you can see some simple html, with some of the default classes, which you can give to owl. 

The important thing is, to give it a class / id / tag, which you can grab with the javascript afterwards: 

 **( in the example we use the class: 'cta-slider-single')**
<!-- div:right-panel -->
```html
    <div class="cta-slider owl-carousel owl-loaded owl-drag" >
    <!-- Here you'll add the slides in a foreach / while / for loop -->
    </div>
```
<!-- div:title-panel -->
####
<!-- div:left-panel -->
#### Javascript 
In the javascript we start the owl carousel like this, where you can parse all the owl parameters you want with it. 
<!-- div:right-panel -->
```js
    window.slider.init(".cta-slider", {
        items: 4,
        loop: true,
        margin: 10, // in px,
        freeDrag: true,
        onChanged: function (evt) {},
        onInitialized: function (evt) {}
    })
```
remember to see **[owl list](https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html).**
<!-- panels:end -->
