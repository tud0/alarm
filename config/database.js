const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0126",
  database: "alarm",
  port: "8080",
});

db.connect((err) => {
  if (!err) console.log("db정상가동");
});

module.exports = db;
