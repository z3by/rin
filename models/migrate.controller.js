const mysql = require("mysql");
const migrateQuery = require("./query/migrate");

module.exports = () => {
  const connection = mysql.createConnection({
    host: process.env.RDS_HOSTNAME || "localhost",
    user: process.env.RDS_USERNAME || "root",
    password: process.env.RDS_PASSWORD || "123456",
    port: process.env.RDS_PORT || "3306"
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

    connection.query(migrateQuery.createLocationTable, function(err, result) {
      if (err) throw err;
      console.log("location table created");
    });

    connection.query(migrateQuery.createProjectsTable, function(err, result) {
      if (err) throw err;
      console.log("projects table created");
    });
  });
};
