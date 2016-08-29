(function () {
    'use strict';

    var eventConfig = require('./config').events;

    var Emitter = require('events');
    var emtr = new Emitter();

    emtr.on(eventConfig.GREET, function () {
        console.log('Someone say hello');
    });

    emtr.on(eventConfig.GREET, function () {
        console.log('A greeting occured')
    });

    console.log('Hello');
    emtr.emit(eventConfig.GREET);

}());