var tape = require("tape"),
    isArguments = require("../src");


tape("isArguments(object): should return true when the value is arguments", function(assert) {
    assert.equal(isArguments(null), false);
    assert.equal(isArguments(undefined), false);
    assert.equal(isArguments({}), false);
    assert.equal(isArguments({
        length: 0
    }), false);
    assert.equal(isArguments([]), false);
    assert.equal(isArguments(""), false);
    assert.equal(isArguments(/./), false);
    assert.equal(isArguments(function noop() {}), false);

    assert.equal(isArguments(arguments), true);

    assert.end();
});
