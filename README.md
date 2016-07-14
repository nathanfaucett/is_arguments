isArguments [![Build Status](https://travis-ci.org/nathanfaucett/is_arguments.svg?branch=master)](https://travis-ci.org/nathanfaucett/is_arguments)
=======

checks if value is an arguments object

```javascript
var isArguments = require("@nathanfaucett/is_arguments");


isArguments([]); // false
(function() {
    isArguments(arguments); // true
}());
```
