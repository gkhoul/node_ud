(function () {
    'use strict';

    // var fs = require('fs');
    // var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 32 * 1024 });
    //
    // readable.on('data', function (chunk) {
    //     console.log(chunk.length);
    // });

    var fs = require('fs');
    var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });

    var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

    readable.on('data', function (chunk) {
        // console.log(chunk.length);
        writable.write(chunk);
    });



}());