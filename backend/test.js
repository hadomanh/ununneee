var mysql = require('mysql');
const express = require('express');
const app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'hadm',
    password: '123456',
    database: 'hb-05'
});

connection.connect();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/student', function (req, res) {
    connection.query('SELECT * FROM student', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].email);
        res.send(results);
    });
})

app.listen(5000, function () {
    console.log("Listening on port 5000...");

})

// connection.end();