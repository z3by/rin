const mysql = require("mysql");
const axios = require("axios");
const dbConfig = require("./db.config");

module.exports.getCountries = (req, res) => {
  const connection = mysql.createConnection(dbConfig);

  connection.connect(err => {
    if (err) throw err;
    console.log("Connected!");

    connection.query(`USE rin`, function(err, result) {
      if (err) throw err;
      console.log("Database used");
    });

    connection.query("select * from countries", (err, result) => {
      if (err) throw err;
      res.send(result);
    });
    connection.end();
  });
};

module.exports.getCountry = (req, res) => {
  const connection = mysql.createConnection(dbConfig);

  connection.connect(err => {
    if (err) throw err;
    console.log("Connected!");

    connection.query(`USE rin`, function(err, result) {
      if (err) throw err;
      console.log("Database used");
    });

    let qry = `select * from countries where id=${req.params.id}`;
    connection.query(qry, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
};

module.exports.addCountries = (req, res) => {
  const connection = mysql.createConnection(dbConfig);

  connection.connect(err => {
    if (err) throw err;
    console.log("Connected!");

    connection.query(`USE rin`, function(err, result) {
      if (err) throw err;
      console.log("Database used");
    });

    axios.get("https://restcountries.eu/rest/v2/all").then(result => {
      for (let i = 0; i < result.data.length; i++) {
        if (i === 33 || i === 79) {
          //this condition was set because record 33 has a problem, which causes a server error
          continue;
        }
        let id = i + 1;
        let name = result.data[i].name;
        let capital = result.data[i].capital;
        let region = result.data[i].region;
        let population = result.data[i].population;
        let lat = result.data[i].latlng[0];
        let lng = result.data[i].latlng[1];

        let qry = `insert into countries values(${id}, "${name}", "${capital}", "${region}", ${population}, ${lat}, ${lng});`;
        connection.query(qry, (err, result2) => {
          if (err) throw err;
          console.log("row inserted", i);
        });
      }
      res.send("countries added!??");
    });
  });
};
