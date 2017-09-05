// JavaScript Document
myApp.filter('myFilter', function () {
    // In the return function, we must pass in a single parameter which will be the data we will work on.
    // We have the ability to support multiple other parameters that can be passed into the filter optionally
    return function (input, optional1, optional2) {

        var output;

        // Do filter work here
        return output;
    };

});

// var app = angular.module("demoApp", ['ngResource']);

myApp.filter('unsafe', function ($sce) {
    return $sce.trustAsHtml;
});


myApp.filter('toHours', function () {
    var timeFormatted = "";
    return function (input) {
        if (input) {
            var hours = (input / 60);
            var intHours=parseInt(hours,10)
            if (hours != 0) {
                var mins = input - (intHours * 60);
                var timeFormatted = intHours + " Hours " + mins + " Mins";
                console.log("toHours", timeFormatted);
            }

            return timeFormatted;

        } else {
            return "AA";
        }
    };
});




myApp.filter('serverimage', function () {
    return function (input, width, height, style) {
        if (input) {
            if (input.substr(0, 4) == "http") {
                return input;
            } else {
                image = imgpath + "?file=" + input;
                if (width) {
                    image += "&width=" + width;
                }
                if (height) {
                    image += "&height=" + height;
                }
                if (style) {
                    image += "&style=" + style;
                }
                return image;
            }

        } else {
            return "img/logo.png";
        }
    };
});

myApp.filter('indianCurrency', function () {
    return function (getNumber) {
        if (!isNaN(getNumber)) {
            var numberArr = getNumber.toString().split('.');
            var lastThreeDigits = numberArr[0].substring(numberArr[0].length - 3);
            var otherDigits = numberArr[0].substring(0, numberArr[0].length - 3);
            if (otherDigits != '') {
                lastThreeDigits = ',' + lastThreeDigits;
            }
            var finalNumber = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThreeDigits;
            if (numberArr.length > 1) {
                var getRoundedDecimal = parseInt(numberArr[1].substring(0, 2)) + 1;
                finalNumber += "." + getRoundedDecimal;
            }
            // return '₹' + finalNumber;
            return finalNumber;
        }
    }
});