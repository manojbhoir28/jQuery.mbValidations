/*
* jQuery.mbValidations Plugin
* <https://github.com/manojbhoir28/jQuery.mbValidations>
* Verion 1.0
* Description : jQuery.mbValidations Plugin help you to validate user input as per your requirement
* Copyright (c) 2014-2015, Manoj Kishor Bhoir.
* Licensed under the MIT License.
*/

(function ($) {
    /*
    *To allow only Numbers in input field
    */
    $.fn.ForceOnlyNumeric = function () {
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
    /*
    * To allow only Alphabets in input field
    */
    $.fn.ForceOnlyAlpha = function () {
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
    /*
    * To allow only alphanumeric values in input field
    */
    $.fn.ForceOnlyAlphaNumeric = function () {
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
    /*
    * Validate input data for maximum length defined by user
    * @param length - Maximum length allowed
    */
    $.fn.MaxLength = function (length) {
        return this.each(function () {
            $(this).keydown(function (e) {
                var key = e.which || e.keyCode;
                // backspace
                if (key == 8 || key == 9 || $(this).val().length < length)
                    return true;
                ShowErrorMessage(this, 'Maximum length allowed is ' + length + '!</div>');
                return false;
            });
        });
    }
	/*
    * Validate input data for minimum length defined by user
    * @param length - Minimum length allowed
    */
    $.fn.MinLength = function (length) {
        return this.each(function () {
            $(this).focusout(function () {
                if ($(this).val().length == 0 || $(this).val().length >= length)
                    return true;
                ShowErrorMessage(this, 'Minimum length required is ' + length + '!</div>');
				$(this).val('')
                return false;
            });
        });
    }
    /*
    * To allow only Numbers wih decimal ex.(100.0)
    */
    $.fn.ForceAmount = function () {
        $(this).css("text-align", "right");
        return this.each(function () {
            $(this).keydown(function (e) {
                var key = e.which || e.keyCode;
                if (!e.shiftKey && !e.altKey && !e.ctrlKey && !($(this).val().split(".").length > 1 && (key == 110 || key == 190)) &&
                    // numbers   
                   (key >= 48 && key <= 57 ||
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
                    // decimal
                   key == 110 || key == 190 ||
                    // Del and Ins
                   key == 46 || key == 45)) 
                    return true;
                ShowErrorMessage(this, 'Please Enter Valid Amount!');
                return false;
            });
            $(this).keyup(function (e) {
                if ($(this).val().indexOf('.') != -1) {
                    if ($(this).val().split(".")[1].length > 1) {
                        if (isNaN(parseFloat(this.value))) return;
                        this.value = parseFloat(this.value).toFixed(2);
                    }
                }
            });
            $(this).focusout(function () {
                if ($(this).val().substr(-1) === ".") 
                    $(this).val(($(this).val().slice(0, -1)));
                if($(this).val().substr(-3) === ".00")
                    $(this).val(($(this).val().slice(0, -3)));
                return true;
            });
        });
    }
    /*
    * To validate Email Address
    */
    $.fn.ForceEmail = function () {
        return this.each(function () {
            $(this).focusout(function () {
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if ($(this).val().length == 0 || regex.test($(this).val()))
                    return true;
                ShowErrorMessage(this, 'Invalid Email Id! Please Enter Valid Email.</div>');
                $(this).val('')
                return false;
            });
        });
    }
    /*
    * To validate Contact Number
    */
    $.fn.ForceContactNumber = function () {
        return this.each(function () {
            $(this).keydown(function (e) {
                var key = e.which || e.keyCode;
                //alert(e.shiftKey && key == 61);
                // backspace
                if ((!e.shiftKey && !e.altKey && !e.ctrlKey && 
                    // numbers   
                   key >= 48 && key <= 57 ||
                    // Numeric keypad
                   key >= 96 && key <= 105 ||
                    // comma, period and minus, . on keypad
                   key == 109 || key == 173 || key == 107 || key == 61 || 
                    // Home and End
                   key == 35 || key == 36 ||
                    // left and right arrows
                   key == 37 || key == 39 ||
                    // Del and Ins
                   key == 46 || key == 45 || key == 8 || key == 9) 
                    && ($(this).val().length < 15) ||
                    // Backspace and Tab and Enter
                    key == 8 || key == 9 || key == 13)
                    return true;
                ShowErrorMessage(this, 'Please Enter Valid Contact Number!</div>');
                return false;
            });
        });
    }
    /*
    *Validate Required Fields
    */
    PerformValidations = function () {
        var all = $(".required").map(function () {
            return $(this).attr('id');
        }).get();
        jQuery.each(all, function (index, value) {
            if (!$('#' + this + '').val()) {
                $('#' + this + '').val('');
                $('#' + this + '').prop('required', true);
                ShowErrorMessage($('#' + this + ''), 'Required Field!');
            }
        });
    };
    /*
    *Clear All Fields and Clear Required Field Validation Marking
    */
    ClearRequiredMark = function () {
        var all = $(".required").map(function () {
            return $(this).attr('id');
        }).get();
        jQuery.each(all, function (index, value) {
            $('#' + this + '').val('');
            $('#' + this + '').prop('required', false);;
        });
    }
    /*
    * To display error message if invalid value is entered
    */
    function ShowErrorMessage(control, message) {
        var pos = $(control).offset();
        var h = $(control).height();
        var w = $(control).width();
        $("<div class='custom-error'>" + message + "</div>").appendTo("body").css({ left: pos.left + w + 10, top: pos.top }).fadeOut(3000);
    };

})(jQuery);



