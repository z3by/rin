const mysql = require("mysql");
const dbConfig = require("../db.config");

const connection = mysql.createConnection(dbConfig);
connection.connect(err => {
  if (err) throw err;
  console.log("connected");
});

module.exports.getLinks = (req, res) => {
  const index = req.params.index;

  let qry = "select * from library_links";
  connection.query(qry, (err, result) => {
    if (err) throw err;
    result = result.slice(index, index + 10);
    req.send(result);
  });
};
