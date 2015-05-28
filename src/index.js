var objectToString = Object.prototype.toString;


module.exports = isArguments;


function isArguments(obj) {
    return obj != null && (
        objectToString.call(obj) === "[object Arguments]" || (!!obj.callee)
    );
}
