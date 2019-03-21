# Form JS Framework
A Classic Form Styling With Ease using css, javascript and jQuery. Remember it is a simple framework only for your forms. Have fun ;)  
[![CDNJS](https://img.shields.io/cdnjs/v/formjs.svg)](https://cdnjs.com/libraries/formjs)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/the94air/formjs/master/License.txt)

## Installation

From CDNjs
```
https://cdnjs.cloudflare.com/ajax/libs/formjs/1.1.1/formjs.min.css
https://cdnjs.cloudflare.com/ajax/libs/formjs/1.1.1/formjs.min.js
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
	<link rel="stylesheet" type="text/css" href="/bath/to/formjs.min.css">
</head>
<body>

<!-- Content -->

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script type="text/javascript" src="/bath/to/formjs.min.css"></script>
</body>
</html>
```

## Easy to use formjs class

Just add `formjs` class to your input or spacify you input size  
  
`fromjs-sm` for small size  
`formjs`    for medium size (normal-size)  
`formjs-lg` for large size  
  
Except the button input you need to add 2 classes  
  
`fromjs fromjs-sm` for small size  
`fromjs formjs`    for medium size (normal-size)  
`fromjs formjs-lg` for large size   
  
## Important
If you didn't want to use jquery just use the `formjs.css` and forget about `formjs.js` file.  
You can use this framework with or without jquery. But some components does require jquery so you shouldn't use these classes:  
(1)	`.disable` class  
(2) `.disableonfocus` class  
(3)`.formjs` Checkboxes  
(4)`.formjs` Radios  
(5)`.formjs` select [not multiple select]   
`formjs.js` will disable submit buttons when the page is loading to save forms from resubmition while the form is submited.  
  
## Custom CSS for inputs (with good looking checkboxes, radios and selects)  
Example

![example](https://i.imgsafe.org/68c30c55dd.jpeg)  
