### Include a font 
If you've downlaoded a font and put the font files in the font folder.  
You can in a scss file write this:
```css
@include fontInclude('Utopia', 'otf')
```
This will automatically include all the files from the font folder as a fon-face in css. 