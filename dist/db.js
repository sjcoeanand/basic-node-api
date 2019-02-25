"use strict";

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_basic"
});

con.connect(function (err) {
  if (err) throw err;
  console.log('*****');
});

module.exports = con;
//# sourceMappingURL=db.js.map