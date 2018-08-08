var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var configdata = require('./config/config');
const cors = require('cors');
var dbmodel = require('./lib/dbquery');

var mysql = require('mysql');

var mysqlconn = mysql.createConnection(configdata.mysqlconnection);
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// GET METHODS
/*----------------------------------------------------------------------------------------------------------*/
app.get('/locality', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'false')
    res.setHeader('Access-Control-Expose-Headers', 'Content-Length, X-JSON');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');

    dbmodel.getlocality(req, mysqlconn, function (result) {
        res.json(result);
    });
});

app.get('/developers', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'false')
    res.setHeader('Access-Control-Expose-Headers', 'Content-Length, X-JSON');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');

    dbmodel.getdevelopers(req, mysqlconn, function (result) {
        res.json(result);
    });
});


/*----------------------------------------------------------------------------------------------------------*/
http.createServer(app).listen(2000, function (err) {
    console.log('running server on port 2000');
});
