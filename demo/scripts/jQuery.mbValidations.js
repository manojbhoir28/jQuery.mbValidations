/*!
* jQuery.mbValidations <https://github.com/manojbhoir28/jQuery.mbValidations>
*
* Copyright (c) 2014-2015, Manoj Kishor Bhoir.
* Licensed under the MIT License.
*/
jQuery.fn.ForceOnlyNumeric = function () {
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
            ShowErrorMessage(this, 'Please Enter Number\'s Only!');
            return false;
        });
    });
}

jQuery.fn.ForceOnlyAlpha = function () {
    return this.each(function () {
        $(this).keydown(function (e) {
            var key = e.which || e.keyCode;
            if (e.shiftKey ||
                //For UpperCase Charecters
              key >= 65 && key <= 90 ||
                // For LowerCase Charecters
              key == 8 || key == 9 || key == 13 ||
                // left and right arrows
              key == 37 || key == 39 ||
                // Del and Ins
              key == 46 || key == 45)
                return true;
            ShowErrorMessage(this, 'Please Enter Alphabet\'s Only!</div>');
            return false;
        });
    });
}

jQuery.fn.ForceOnlyAlphaNumeric = function () {
    return this.each(function () {
        $(this).keydown(function (e) {
            var key = e.which || e.keyCode;
            if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
                // numbers   
              key >= 48 && key <= 57 ||
                // Numeric keypad
              key >= 96 && key <= 105 ||
                //For UpperCase Charecters
              key >= 65 && key <= 90 ||
                // For LowerCase Charecters
              key == 8 || key == 9 || key == 13 ||
                // left and right arrows
              key == 37 || key == 39 ||
                // Del and Ins
              key == 46 || key == 45)
                return true;
            ShowErrorMessage(this, 'Please Enter Numbers or Alphabet\'s Only!</div>');
            return false;
        });
    });
}

jQuery.fn.MaxLength = function (length) {
    return this.each(function () {
        $(this).keydown(function (e) {
            var key = e.which || e.keyCode;
            if (key == 8 || $(this).val().length < length)
                return true;
            ShowErrorMessage(this, 'Maximum length should be ' + length + '!</div>');
            return false;
        });
    });
}

function ShowErrorMessage(control, message) {
    var pos = $(control).offset();
    var h = $(control).height();
    var w = $(control).width();
    $("<div class='custom-error'>" + message + "</div>").appendTo("body").css({ left: pos.left + w + 10, top: pos.top }).fadeOut(3000);
};