(function () {
    'use strict';

    var Emitter = require('./emmiter');
    var emtr = new Emitter();

    emtr.on('greet', function () {
        console.log('Someone say hello');
    });
    
    emtr.on('greet', function () {
        console.log('A greeting occured')
    });

    console.log('Hello');
    emtr.emit('greet');

}());