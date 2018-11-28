const mysql = require("mysql");

const DBconfig = require("../db.config");

// get all the rows in specifec table
module.exports.getAll = table => {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(DBconfig);
    connection.connect(err => {
      if (err) throw err;
      connection.query(`select * from ${table}`, (err, result) => {
        if (err) {
          reject(err);
          connection.end();
        } else {
          resolve(result);
          connection.end();
        }
      });
    });
  });
};
