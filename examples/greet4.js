(function () {
    'use strict';
    
    function Greetr() {
        this.greeting = 'Hello world!!';
        this.greet = function () {
            console.log(this.greeting);
        }
    }

    module.exports = new Greetr();
}());