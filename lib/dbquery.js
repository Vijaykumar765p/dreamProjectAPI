var configdata = require('../config/config');
var dbmodel = require('../lib/dbquery');

exports.getlocality = function (req, conn, cb) {
    var sql_usr = "select * from dpdb.db_locality";

    conn.query(sql_usr, function (err, result) {
        console.log(err);
        cb(result);
    });
}

exports.getdevelopers = function (req, conn, cb) {
    var sql_usr = "select * from dpdb.db_developer";

    conn.query(sql_usr, function (err, result) {
        console.log(err);
        cb(result);
    });
}


