var objectToString = Object.prototype.toString,
    isArguments;


if (objectToString.call(arguments) === "[object Arguments]") {
    isArguments = function isArguments(value) {
        return value != null && objectToString.call(value) === "[object Arguments]" || false;
    };
} else {
    isArguments = function isArguments(value) {
        return value != null && (!!value.callee) || false;
    };
}

module.exports = isArguments;
