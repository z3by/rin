const mysql = require("mysql");
const migrateQuery = require("../models/query/migrate");
const addCountries = require("./countries.controller").addCountries;
const dbConfig = require("./db.config");

module.exports = () => {
  const connection = mysql.createConnection(dbConfig);

  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    connection.query(migrateQuery.createDB, function(err, result) {
      if (err) throw err;
      console.log("Database created");
    });

    connection.query(`USE rin`, function(err, result) {
      if (err) throw err;
      console.log("Database used");
    });

    connection.query(migrateQuery.createCountriesTable, function(err, result) {
      if (err) throw err;
      let countriesNumQry = "select count(*) from countries";
      connection.query(countriesNumQry, function(err, res) {
        if (err) throw err;
        let countriesNum = res[0]["count(*)"];
        if (!countriesNum) {
          addCountries();
        }
      });
      console.log("countries table created");
    });

    connection.query(migrateQuery.createLocationsTable, function(err, result) {
      if (err) throw err;
      console.log("locations table created");
    });

    connection.query(migrateQuery.createPartnersTable, function(err, result) {
      if (err) throw err;
      console.log("partners table created");
    });

    connection.query(migrateQuery.createProjectsTable, function(err, result) {
      if (err) throw err;
      console.log("projects table created");
    });

    connection.query(migrateQuery.createStoriesTable, function(err, result) {
      if (err) throw err;
      console.log("stories table created");
    });
  });
};
