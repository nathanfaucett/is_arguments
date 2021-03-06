var isLength = require("@nathanfaucett/is_length"),
    isFunction = require("@nathanfaucett/is_function"),
    isArray = require("@nathanfaucett/is_array"),
    isObject = require("@nathanfaucett/is_object"),
    isNullOrUndefined = require("@nathanfaucett/is_null_or_undefined");


var objectToString = Object.prototype.toString,
    isArguments;


if (
    (function() {
        return objectToString.call(arguments) === "[object Arguments]";
    }())
) {
    isArguments = function isArguments(value) {
        return !isNullOrUndefined(value) && objectToString.call(value) === "[object Arguments]" || false;
    };
} else {
    isArguments = function isArguments(value) {
        return (!isArray(value) &&
            isObject(value) &&
            isLength(value.length) &&
            isFunction(value.callee)
        ) || false;
    };
}


module.exports = isArguments;
