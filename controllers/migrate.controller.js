const mysql = require("mysql");
const countriesHelpers = require("./helpers/countries.helpers");
const dbConfig = require("./db.config");

const countriesModel = require("../models/countries.model");
const projectsModel = require("../models/projects.model");
const locationsModel = require("../models/locations.model");
const storiesModel = require("../models/stories.model");

const migrateHelpers = require("./helpers/migrate.helpers");

// init mysql connection
const connection = mysql.createConnection(dbConfig);
connection.connect(err => {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = () => {
  // create database
  migrateHelpers.createDB(connection, "rin");

  // use database
  migrateHelpers.useDB(connection, "rin");

  // create countreis table
  migrateHelpers.createTable(connection, countriesModel);

  // create locations table
  migrateHelpers.createTable(connection, locationsModel);

  // create projects table
  migrateHelpers.createTable(connection, projectsModel);

  // create stories table
  migrateHelpers.createTable(connection, storiesModel);

  // fetch countries and insert them  into countries table
  if (!migrateHelpers.checkIfCountriesExists(connection)) {
    countriesHelpers.addCountries(connection);
  }
};
