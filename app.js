(function () {
    'use strict';

    var express = require('express');
    var app = express();
    var mysql = require('mysql');

    var apiController = require('./controllers/apiController');
    var htmlController = require('./controllers/htmlController');

    var port = process.env.PORT || 3000;

    app.use('/assets', express.static(__dirname + '/public'));

    app.set('view engine', 'ejs');

    app.use('/', function (req, res, next) {
        console.log('Request url: ' + req.url);
        var con = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'addressbook'
        });

        con.query("select people.ID, Firstname, Lastname, Address FROM People INNER JOIN PersonAddresses ON  People.ID = PersonAddresses.PersonID INNER JOIN Addresses ON PersonAddresses.AddressID = Addresses.ID", function (err, rows) {
            if(err) throw err;
            console.log(rows);
        });

        next();
    });

    apiController(app);
    htmlController(app);
    
    app.listen(port);
}());