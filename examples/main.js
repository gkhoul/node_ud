(function () {
    'use strict';

    var util = require('util');

    var name = 'Gleb';
    var greeting = util.format('Hello, %s', name);
    util.log(greeting);
//
//     const http = require('http');
//
//     const hostname = '127.0.0.1';
//     const port = 3000;
//
//     const server = http.createServer((req, res) => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Hello World\n');
//     });
//
//     server.listen(port, hostname, () => {
//         console.log(`Server running at http://${hostname}:${port}/`);
// });


}());