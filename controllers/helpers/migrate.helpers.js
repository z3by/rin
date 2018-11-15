// create database if not exist
module.exports.createDB = (connection, dbName) => {
  connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName} `, err => {
    if (err) throw err;
    console.log(`Database ${dbName} created`);
  });
};

// use database
module.exports.useDB = (connection, dbName) => {
  connection.query(`use ${dbName} `, err => {
    if (err) throw err;
    console.log(`you are using database ${dbName}`);
  });
};

// create table
module.exports.createTable = (connection, model) => {
  connection.query(model, err => {
    if (err) throw err;
  });
};
