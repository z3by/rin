const mysql = require("mysql");
const dbConfig = require("../db.config");
const connection = mysql.createConnection(dbConfig);
connection.connect(err => {
    if (err) throw err;
});

module.exports.getLenses = (req, res) => {
    connection.query("select * from lenses", (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

module.exports.getLens = (req, res) => {
    let qry = `select * from lenses where id=${req.params.id}`;
    connection.query(qry, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

module.exports.addLens = (req, res) => {
    let data = {
        name: req.body.name,
        url: req.body.url
    };

    let qry = `insert into lenses(name, url) values("${data.name}", "${data.url}");`;

    connection.query(qry, (err, result) => {
        if (err) throw err;
        res.send("lens row inserted successfully");
    });
};

module.exports.updateLens = (req, res) => {
    let data = {
        name: req.body.name,
        url: req.body.url
    };

    let qry = `UPDATE lenses
                      SET name="${data.name}", url="${data.url}"
                      WHERE id=${req.params.id};`;
    connection.query(qry, (err, result) => {
        if (err) throw err;
        res.send("lens row has been updated successfully");
    });
};


module.exports.deleteLens = (req, res) => {
    let qry = `delete from lenses where id=${req.params.id}`;
    connection.query(qry, (err, result) => {
        if (err) throw err;
        res.send("lens row has been deleted successfully");
    });
};