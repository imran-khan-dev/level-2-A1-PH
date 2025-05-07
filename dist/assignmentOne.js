"use strict";
function formatString(input, toUpper) {
    if (toUpper == null) {
        return input.toUpperCase();
    }
    if (toUpper) {
        return input.toUpperCase();
    }
    else {
        return input.toLowerCase();
    }
}
console.log(formatString("Hello"));
