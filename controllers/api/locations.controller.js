const mysql = require("mysql");
const dbConfig = require("../db.config");
const connection = mysql.createConnection(dbConfig);
connection.connect(err => {
  if (err) throw err;
});

module.exports.getLocations = (req, res) => {
  connection.query("select * from locations", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

module.exports.getLocation = (req, res) => {
  let qry = `select * from locations where id=${req.params.id}`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

module.exports.addLocation = (req, res) => {
  let data = {
    country_id: req.body.country_id,
    lng: req.body.lng,
    lat: req.body.lat
  };

  let qry = `insert into locations(country_id, lng, lat) values(${data.id},${
    data.country_id
  }, ${data.lng}, ${data.lat});`;

  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.send("location row inserted successfully");
  });
};

module.exports.updateLocation = (req, res) => {
  let data = {
    country_id: req.body.country_id,
    lng: req.body.lng,
    lat: req.body.lat
  };

  let qry = `UPDATE locations
                    SET country_id=${data.country_id}, lng=${data.lng}, lat=${
    data.lat
  }
                    WHERE id=${req.params.id};`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.send("location row has been updated successfully");
  });
};

module.exports.deleteLocation = (req, res) => {
  let qry = `delete from locations where id=${req.params.id}`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.send("location row has been deleted successfully");
  });
};
