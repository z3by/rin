const mysql = require("mysql");

const DBconfig = require("../db.config");
const connection = mysql.createConnection(DBconfig);
connection.connect(err => {
  throw err;
});

// get all the users in the db
module.exports.getAllUsers = () => {
  connection.query("select * from members", (err, result) => {
    return new Promise((resolve, reject) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
