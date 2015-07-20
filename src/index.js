var isNullOrUndefined = require("is_null_or_undefined");


var objectToString = Object.prototype.toString,
    isArguments;


if ((function() {
        return objectToString.call(arguments) === "[object Arguments]";
    }())) {
    isArguments = function isArguments(value) {
        return !isNullOrUndefined(value) && objectToString.call(value) === "[object Arguments]" || false;
    };
} else {
    isArguments = function isArguments(value) {
        return !isNullOrUndefined(value) && !isNullOrUndefined(value.callee) || false;
    };
}


module.exports = isArguments;
