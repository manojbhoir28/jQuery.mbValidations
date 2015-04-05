# jQuery.mbValidations - For easy validation
The jQuery.mbValidation Plugin provides you all basic required validation to make your development process easy.
##Demo
Click here for [jQuery.mbValidation Demo](https://manojbhoir28.github.io/jQuery.mbValidations/demo/index.html)
## Getting Started
### Including it on your page
Include jQuery and jQuery.mbValidation plugin on a page.
```html
<script src="jquery.js"></script>
<script src="jQuery.mbValidations.js"></script>
```
How to use jQuery.mbValidations with your application?
```js
$(document).ready(function () {
   // Only numeric values allowed
   $("#txtDemoField1").ForceOnlyNumeric();
   // Only alphabets allowed
   $("#txtDemoField2").ForceOnlyAlpha();
   // Only alpha-numeric values allowed
   $("#txtDemoField3").ForceOnlyAlphaNumeric();
   // Data with specific length allowed
   $("#txtDemoField4").MaxLength(8);
   // Only amount allowed
   $("#txtDemoField5").ForceAmount();
   // To allowe valid email address
   $("#txtDemoField6").ForceEmail();
   // To allow valid contact number
   $("#txtDemoField7").ForceContactNumber();
});
```
For required field validation specify class="required" for input and call PerformValidations() on button onClick event.
```html
<input type="text" id="txtDemoField1" class="required" />
<button id="btnValidate" type="button" onClick="PerformValidations();">Validate</button>
```
## License
Copyright &copy; Manoj Kishor Bhoir<br>
Licensed under the MIT license.
