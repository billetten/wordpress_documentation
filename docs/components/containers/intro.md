The container component is made to make container wrappers easier. 

The point in them, is to use the fullwidth function from the customizer. 
The main content, the footer and the header all have a function in the customizer to be fullwidth. 
This parameter does the container component listen for, so you dont have to make that connection every time. 
This makes it easy to implement new sections and pages, which follow the fullwidth of the theme. 

Remember this component intention is to handle a fullwidth parameter from the customizer and not just a generic container.
Do you need a generic container use the [bootstrap container](https://getbootstrap.com/docs/5.0/layout/containers/).