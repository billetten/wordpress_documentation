## Intro 
The multiselect component is a javascript plugin, made to make a select, where you can select multiple items. 

You can use this with the filter component, and to see exampels of that, check out the javascipt plugin filter. 

### Initialize 
To initialize the component you need to write this in a javascript file. 

The string you give with, is the clas you use for the multiselect. I suggest just giving the string as followed in the example, cause there is a little pre made css for those clas. 

It is possible to have multiple instances of the multiselect without initializes multiple, as long as all have the same classe as the one you give with.
```javascript
window.multiselect.init('.multiselect');
```

If you use it with the filter component, remember to initialize the multiselect before the filter: 
And just to be sure, you get the right multiselects, send all classes you use with on them as seen below. 
```javascript
window.multiselect.init('.filter-group.multiselect');
window.filter.init('media-grid');
```

You can combine this with some logic, if you load your javascript on every page, and don't want to execute everytime: 
```javascript
// Body tag get class from the template, so in this exampel this will only be executed on page that uses the template "arrangementer"
if($('body').hasClass('page-template-arrangementer')) {
    window.multiselect.init('.multiselect');
};
```

### HTML 
Now we can begin making the multiselect:
```html
<div 
    class="multiselect" 
    placeholder="Numbers" 
    showSelectNumberBefore 
>
    <div class="option-container">
        <div class="selector-title">Test <span class="select-number"></span></div>
        <div class="option" value="1">Option 1</div>
        <div class="option" value="2">Option 2</div>
        <div class="option" value="3">Option 3</div>
        <div class="option" value="4">Option 4</div>
    </div>
</div>
```

#### Attributes 
There are 3 attributes you can give with it: 
- `placeholder` -> Which will give a name to the select
- `showSelectNumberBefore` -> Will add a span before the placeholder which counts select items in the select. 
- `showSelectNumberAfter` -> Will add a span after the placeholder which counts select items in the select. 

#### HTML elements 
Important html components: 
- `<div class="option-container"></div>` -> the options container, which is the wrapper, taht shows when you click on the select. So all the content the select should have, should be in here. 
- `<div class="option" value="some value">Option 1</div>` -> You need to have the options elements as the following structure. The option element, will get the class selected when clicked. 
- `<button class="clear-group">nulstill</button>` -> The clear button, which clears all selected.
- `<button class="close">close</button>` -> A close button, which isn't nesecery, cause you can click outside the select to close the select.
- `<span class="select-number"></span>` -> This is a span which you can add every where, it will always contain the number of selected options. 

The html structure is irrelevant in, just as long as you have options with values in the an option container, then it will work. You can add other buttons or images if you want. 

### CSS
This is just a skelet of the css you can use, just to get a fast start on the styling, cause there isn't that much styled from the start. 
```scss
.multiselect {
    .select-number {
    }
    .selector {
        &::after {
            // The arrow, which show wether it's open or not
        }
        .select-number {
        }
    }
    .option-container {
        .selector-title {
            .select-number {
            } 
        }
        .option {
            &.selected {
            }
        }
        .bottom-actions {
            .clear-group {
            }
            .close {   
            }
        }
    }
    &.open {
        .option-container {
        }
        .selector::after {
        }
    }
}
```

### Javascript 
You have 1 eventlisteners you can use.
```javascript
const select = document.getElementById('multiselect');
// Fired everytime a user click an option or clears the selection
select.addEventListener('selectChange', (evt) => {
    const  { value, values } = evt.detail; 
    // value is the clicked option as a string
    // values is all selected values in an array of strings
})
```

## Examples

### Exampel with a lot of titles 
```html
<div 
    class="multiselect" 
    placeholder="Numbers" 
    showSelectNumberBefore 
>
    <div class="option-container">
        <div class="selector-title biggest-title">All numbers we have selected:<span class="select-number"></span></div>
        <div class="selector-title">First 4 <span class="select-number"></span></div>
        <div class="option" value="1">Option 1</div>
        <div class="option" value="2">Option 2</div>
        <div class="option" value="3">Option 3</div>
        <div class="option" value="4">Option 4</div>
        <div class="selector-title">Next 4 <span class="select-number"></span></div>
        <div class="option" value="5">Option 5</div>
        <div class="option" value="6">Option 6</div>
        <div class="option" value="7">Option 7</div>
        <div class="option" value="8">Option 8</div>
    </div>
</div>
```

### PHP auto generated exampel 
Here we make a select with the 12 months in it. You can clear it with the clear button or you can close on the close button.
It has a count after the placeholder. 
```php
<div 
    class="multiselect" 
    placeholder="Måneder" 
    showSelectNumberAfter
>
    <div class="option-container">

        <div class="selector-title">Test <span class="select-number"></span></div>

        @foreach(array(1,2,3,4,5,6,7,8,9,10,11,12) as $month)
            <div class="option" value=".{{ wp_date('F', mktime(0,0,0,$month, 1, date('Y'))) }}">
                {{ wp_date('F', mktime(0,0,0,$month, 1, date('Y')))}}
            </div>
        @endforeach

        <div class="bottom-actions">
            <button class="clear-group">nulstill</button>
            <button class="close">close</button>
        </div>
    </div>
</div>
```