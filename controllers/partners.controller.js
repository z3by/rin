const mysql = require('mysql');
const axios = require("axios");
const dbConfig = require("./db.config");

module.exports.getPartners = (req, res) => {
    const connection = mysql.createConnection(dbConfig);

    connection.connect((err) => {
        if (err) throw err;
        console.log("Connected!");

        connection.query(`USE rin`, function (err, result) {
            if (err) throw err;
            console.log("Database used");
        });

        connection.query('select * from partners', (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    })
}

module.exports.getPartner = (req, res) => {
    const connection = mysql.createConnection(dbConfig);

    connection.connect((err) => {
        if (err) throw err;
        console.log("Connected!");

        connection.query(`USE rin`, function (err, result) {
            if (err) throw err;
            console.log("Database used");
        });

        let qry = `select * from partners where id=${req.params.id}`;
        connection.query(qry, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    })
}

module.exports.addPartner = (req, res) => {
    const connection = mysql.createConnection(dbConfig);

    connection.connect((err) => {
        if (err) throw err;
        console.log("Connected!");

        connection.query(`USE rin`, function (err, result) {
            if (err) throw err;
            console.log("Database used");
        });

        let data = {
            id: req.body.id,
            name: req.body.name,
            logo_url: req.body.logo_url,
            country_id: req.body.country_id
        };

        let qry = `insert into partners values(${data.id},"${data.name}", "${data.logo_url}", ${data.country_id});`;
        connection.query(qry, (err, result) => {
            if (err) throw err;
            res.send("partner row inserted successfully");
        });
    })
}

module.exports.updatePartner = (req, res) => {
    const connection = mysql.createConnection(dbConfig);

    connection.connect((err) => {
        if (err) throw err;
        console.log("Connected!");

        connection.query(`USE rin`, function (err, result) {
            if (err) throw err;
            console.log("Database used");
        });

        let data = {
            name: req.body.name,
            logo_url: req.body.logo_url,
            country_id: req.body.country_id
        };

        let qry = `UPDATE partners 
                   SET name="${data.name}", logo_url="${data.logo_url}", country_id=${data.country_id}
                   WHERE id=${req.params.id};`;
        connection.query(qry, (err, result) => {
            if (err) throw err;
            res.send("partner row has been updated successfully");
        });
    })
}

module.exports.deletePartner = (req, res) => {
    const connection = mysql.createConnection(dbConfig);

    connection.connect((err) => {
        if (err) throw err;
        console.log("Connected!");

        connection.query(`USE rin`, function (err, result) {
            if (err) throw err;
            console.log("Database used");
        });

        let qry = `delete from partners where id=${req.params.id}`;
        connection.query(qry, (err, result) => {
            if (err) throw err;
            res.send("partner row has been deleted successfully");
        });
    })
}