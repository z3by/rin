const mysql = require("mysql");
const axios = require("axios");
const dbConfig = require("../db.config");
const connection = mysql.createConnection(dbConfig);
connection.connect(err => {
  if (err) throw err;
  console.log("connected");
});

module.exports.getCountries = (req, res) => {
  connection.query("select * from countries", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

module.exports.getCountry = (req, res) => {
  let qry = `select * from countries where id=${req.params.id}`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};
