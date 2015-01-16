var assert = require("assert"),
    isArguments = require("../src/index");


describe("isArguments", function() {
    it("should return true when the value is arguments", function() {
        assert.equal(isArguments(null), false);
        assert.equal(isArguments(undefined), false);
        assert.equal(isArguments({}), false);
        assert.equal(isArguments([]), false);
        assert.equal(isArguments(""), false);
        assert.equal(isArguments(/./), false);
        assert.equal(isArguments(function noop() {}), false);

        assert.equal(isArguments(arguments), true);
    });
});
