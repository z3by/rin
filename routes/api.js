const express = require("express");
const router = express.Router();
const mysql = require("mysql");

/* GET home page. */
router.get("/migrate", (req, res, next) => {
  const migrateQuery = require("./query/migrate");

  const connection = mysql.createConnection({
    user: "root",
    password: "123456",
    host: "localhost"
  });

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
    connection.query(migrateQuery.createTypeTable, function(err, result) {
      if (err) throw err;
      console.log("type table created");
    });

    connection.query(migrateQuery.createLocationTable, function(err, result) {
      if (err) throw err;
      console.log("location table created");
    });

    connection.query(migrateQuery.createProjectsTable, function(err, result) {
      if (err) throw err;
      console.log("projects table created");
      res.send("migration completed");
    });
  });
});

module.exports = router;
