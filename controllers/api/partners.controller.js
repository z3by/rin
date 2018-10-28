const mysql = require("mysql");
const dbConfig = require("../db.config");
const connection = mysql.createConnection(dbConfig);

module.exports.getPartners = (req, res) => {
  connection.connect(err => {
    if (err) throw err;
    connection.query("select * from partners", (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
};

module.exports.getPartner = (req, res) => {
  connection.connect(err => {
    if (err) throw err;
    let qry = `select * from partners where id=${req.params.id}`;
    connection.query(qry, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
};

module.exports.addPartner = (req, res) => {
  connection.connect(err => {
    if (err) throw err;
    let data = {
      id: req.body.id,
      name: req.body.name,
      logo_url: req.body.logo_url,
      country_id: req.body.country_id
    };

    let qry = `insert into partners values(${data.id},"${data.name}", "${
      data.logo_url
    }", ${data.country_id});`;
    connection.query(qry, (err, result) => {
      if (err) throw err;
      res.send("partner row inserted successfully");
    });
  });
};

module.exports.updatePartner = (req, res) => {
  connection.connect(err => {
    if (err) throw err;
    let data = {
      name: req.body.name,
      logo_url: req.body.logo_url,
      country_id: req.body.country_id
    };

    let qry = `UPDATE partners 
                   SET name="${data.name}", logo_url="${
      data.logo_url
    }", country_id=${data.country_id}
                   WHERE id=${req.params.id};`;
    connection.query(qry, (err, result) => {
      if (err) throw err;
      res.send("partner row has been updated successfully");
    });
  });
};

module.exports.deletePartner = (req, res) => {
  connection.connect(err => {
    if (err) throw err;
    let qry = `delete from partners where id=${req.params.id}`;
    connection.query(qry, (err, result) => {
      if (err) throw err;
      res.send("partner row has been deleted successfully");
    });
  });
};
