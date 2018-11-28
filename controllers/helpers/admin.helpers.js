const mysql = require("mysql");

const DBconfig = require("../../config/db.config");

// get all the users in the db
module.exports.getAllUsers = () => {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(DBconfig);
    connection.connect(err => {
      if (err) throw err;
      connection.query("select * from members", (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  });
};
