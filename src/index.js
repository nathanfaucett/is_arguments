var isLength = require("is_length"),
    isObjectLike = require("is_object_like");


var objectToString = Object.prototype.toString;


module.exports = isArguments;


function isArguments(obj) {
    return (
        isObjectLike(obj) &&
        isLength(obj.length) &&
        objectToString.call(obj) === "[object Arguments]"
    ) || false;
}
