(function () {
    'use strict';

    var name = 'Jane';


    (function (lastname) {
        var name = 'John';
        console.log(name);
        console.log(lastname);

    }('Doe'));

    console.log(name);

}());