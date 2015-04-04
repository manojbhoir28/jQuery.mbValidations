/*!
* jQuery.mbValidations <https://github.com/manojbhoir28/jQuery.mbValidations>
*
* Copyright (c) 2014-2015, Manoj Bhoir.
* Licensed under the MIT License.
*/
jQuery.fn.ForceNumeric = function () {
    return this.each(function () {
        $(this).keydown(function (e) {
            var key = e.which || e.keyCode;
            if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
                // numbers   
                key >= 48 && key <= 57 ||
                // Numeric keypad
                key >= 96 && key <= 105 ||
                // comma, period and minus, . on keypad
               key == 109 ||  //|| key == 188 || key == 110 || key == 190 || 
                // Backspace and Tab and Enter
               key == 8 || key == 9 || key == 13 ||
                // Home and End
               key == 35 || key == 36 ||
                // left and right arrows
               key == 37 || key == 39 ||
                // Del and Ins
               key == 46 || key == 45)
                return true;
            var pos = $(this).offset();
            var h = $(this).height();
            var w = $(this).width();
            $("<div class='custom-error'>Please Enter Number's Only!</div>").appendTo("body").css({ left: pos.left + w + 10, top: pos.top }).fadeOut(3000);
            return false;
        });
    });
}