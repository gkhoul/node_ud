(function () {
    'use strict';

    module.exports = function (app) {

        app.get('/api/person/:id', function (req, res) {
            //get data from db
            res.json({firstname: 'John Doe', lastname: 'Doe'});
        });

        app.post('/api/person', function (req, res) {
            //save to db
        });

        app.delete('/api/person/:id', function (req, res) {
            //delete from db
        });

    };
}());