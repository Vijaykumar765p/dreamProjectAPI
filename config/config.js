var define = require("node-constants")(exports);

var mysqlconnection=
{
  host: "localhost",
  user: "root",
  password: ""
}


define({ 
  mysqlconnection:mysqlconnection
});