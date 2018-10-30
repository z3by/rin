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

// use database
module.exports.createTable = (connection, model) => {
  connection.query(model, err => {
    if (err) throw err;
  });
};

// check if countries table is filled already
module.exports.checkIfCountriesExists = connection => {
  const countriesNumQry = "select count(*) from countries";

  connection.query(countriesNumQry, (err, res) => {
    if (err) throw err;

    const countriesNum = res[0]["count(*)"];

    return countriesNum ? true : false;
  });
};
