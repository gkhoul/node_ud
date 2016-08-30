(function () {
    'use strict';

    var express = require('express');
    var app = express();
    var mongoose = require('mongoose');

    mongoose.connect('mongodb://lwduser:khsfbkgGg2idbS@ds019946.mlab.com:19946/abook');

    var Schema = mongoose.Schema;

    var personSchema = new Schema({
        firstname: String,
        lastname: String,
        address: String
    });

    var Person = mongoose.model('Person', personSchema);

    var john = Person({
        firstname: 'John',
        lastname: 'Doe',
        address: '555 Main St.'
    });

    john.save(function (err) {
        if (err) throw err;
        console.log('Person saved.')
    });
    var jane = Person({
        firstname: 'Jane',
        lastname: 'Doe',
        address: '555 Main St.'
    });

    jane.save(function (err) {
        if (err) throw err;
        console.log('Person saved.')
    });

    var apiController = require('./controllers/apiController');
    var htmlController = require('./controllers/htmlController');

    var port = process.env.PORT || 3000;

    app.use('/assets', express.static(__dirname + '/public'));

    app.set('view engine', 'ejs');

    app.use('/', function (req, res, next) {
        console.log('Request url: ' + req.url);

        //get all the users
        Person.find({}, function (err, users) {
            if (err) throw err;
            
            console.log(users);
        });

        next();
    });

    apiController(app);
    htmlController(app);
    
    app.listen(port);
}());