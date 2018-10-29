const mysql = require("mysql");
const migrateQuery = require("../models/query/migrate");
const addCountries = require("./api/countries.controller").addCountries;
const dbConfig = require("./db.config");
const connection = mysql.createConnection(dbConfig);
connection.connect(err => {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = () => {
  connection.query(migrateQuery.createDB, err => {
    if (err) throw err;
    console.log("Database created");

    connection.query("use rin");
    connection.query(migrateQuery.createCountriesTable, err => {
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

    connection.query(migrateQuery.createLocationsTable, err => {
      if (err) throw err;
      console.log("locations table created");
    });

    connection.query(migrateQuery.createPartnersTable, err => {
      if (err) throw err;
      console.log("partners table created");
    });

    connection.query(migrateQuery.createProjectsTable, err => {
      if (err) throw err;
      console.log("projects table created");
    });

    connection.query(migrateQuery.createStoriesTable, err => {
      if (err) throw err;
      console.log("stories table created");
    });
  });
};
