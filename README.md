# Form JS Framework
A Classic Form Styling With Ease using css, javascript and jQuery. Remember it is a simple framework only for your forms. Have fun ;) 
  
## Where to get Form JS  

From rawgit CDN
```
https://cdn.rawgit.com/the94air/formjs/aa4abe2b/css/formjs.css
// Or minfied version
https://cdn.rawgit.com/the94air/formjs/aa4abe2b/css/formjs.min.css
// FormJs JS 
https://cdn.rawgit.com/the94air/formjs/aa4abe2b/js/formjs.js
// Or minfied version
https://cdn.rawgit.com/the94air/formjs/aa4abe2b/js/formjs.min.js
```
Or download the [last release](https://github.com/the94air/formjs/releases)

## How to use
just add the css, js and jQuery files to your code

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Project</title>
	<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/the94air/formjs/aa4abe2b/css/formjs.min.css">
</head>
<body>

<!-- Content -->

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/the94air/formjs/aa4abe2b/js/formjs.min.js"></script>
</body>
</html>
```

## Easy to use formjs class

Just add `formjs` class to your input or spacify you input size  
  
`fromjs-sm` for small size  
`formjs`    for medium size (normal-size)  
`formjs-lg` for large size  
  
Except the button input you will add 2 classes  
  
`fromjs fromjs-sm` for small size  
`fromjs formjs`    for medium size (normal-size)  
`fromjs formjs-lg` for large size   
  
## Important
You can use this framework with or without jquery. But some components does require jquery. If you didn't use jquery you don't need formjs.js file and you shouldn't use these classes:  
  
(1)	`.disable` class  
(2) `.disableonfocus` class  
(3)`.formjs` Checkboxes  
(4)`.formjs` Radios  
(5)`.formjs` select [not multiple select]  
  
using these components without `.formjs` class will not effect your forms.  
we alse use javascript to disable submit buttons while the page is loading to save froms form resubmition while the form is submited.  
  
## Custom CSS for inputs (with good looking checkboxes, radios and selects)  
Example

![example](https://i.imgsafe.org/68c30c55dd.jpeg)  
  
## See full [documentation and components](https://form.js.org)
