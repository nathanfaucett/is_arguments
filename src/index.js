var isLength = require("is_length"),
    isFunction = require("is_function"),
    isObject = require("is_object"),
    isNullOrUndefined = require("is_null_or_undefined");


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
        return (
            isObject(value) &&
            isFunction(value.callee) &&
            isLength(value.length)
        ) || false;
    };
}


module.exports = isArguments;
