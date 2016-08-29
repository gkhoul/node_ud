(function () {
    'use strict';

    var greet = require('./greetmod')
    greet.english();
    greet.spanish();

    var greet2 = require('./greet2');
    greet2();

    var greet3 = require('./greet3').greet;
    greet3();

    var Greet5 = require('./greet5');
    var grtr5 = new Greet5();
    grtr5.greet();
    grtr5.greeting = 'Changeed hellow';

    var greet5 = require('./greet5');
    var greet5b = new greet5();
    greet5b.greet();
    greet5b.greeting = 'Changeed hellow';

    var greet6 = require('./greet6').greet;
    greet6();

}());