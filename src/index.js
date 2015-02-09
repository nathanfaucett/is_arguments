var isLength = require("is_length"),
    isObjectLike = require("is_object_like");


var objectArgumentsStr = "[object Arguments]",
    objectToString = Object.prototype.toString;


module.exports = function isArguments(obj) {
    var length = isObjectLike(obj) ? obj.length : undefined;
    return (isLength(length) && objectToString.call(obj) === objectArgumentsStr) || false;
};
