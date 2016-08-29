(function () {
    'use strict';

    var greeting = 'Hellow!';

    function greet() {
        console.log(greeting)
    }

    module.exports = {
        greet: greet
    }

}());