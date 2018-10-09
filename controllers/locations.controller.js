const mysql = require('mysql');
const axios = require("axios");

module.exports.getLocations = (req, res) => {
    const connection = mysql.createConnection({
        host: process.env.RDS_HOSTNAME || "localhost",
        user: process.env.RDS_USERNAME || "root",
        password: process.env.RDS_PASSWORD || "123456",
        port: process.env.RDS_PORT || "3306"
    });

    connection.connect((err) => {
        if (err) throw err;
        console.log("Connected!");

        connection.query(`USE rin`, function (err, result) {
            if (err) throw err;
            console.log("Database used");
        });

        connection.query('select * from locations', (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    })
}

module.exports.getLocation = (req, res) => {
    const connection = mysql.createConnection({
        host: process.env.RDS_HOSTNAME || "localhost",
        user: process.env.RDS_USERNAME || "root",
        password: process.env.RDS_PASSWORD || "123456",
        port: process.env.RDS_PORT || "3306"
    });

    connection.connect((err) => {
        if (err) throw err;
        console.log("Connected!");

        connection.query(`USE rin`, function (err, result) {
            if (err) throw err;
            console.log("Database used");
        });

        let qry = `select * from locations where id=${req.params.id}`;
        connection.query(qry, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    })
}

module.exports.addLocation = (req, res) => {
    const connection = mysql.createConnection({
        host: process.env.RDS_HOSTNAME || "localhost",
        user: process.env.RDS_USERNAME || "root",
        password: process.env.RDS_PASSWORD || "123456",
        port: process.env.RDS_PORT || "3306"
    });

    connection.connect((err) => {
        if (err) throw err;
        console.log("Connected!");

        connection.query(`USE rin`, function (err, result) {
            if (err) throw err;
            console.log("Database used");
        });

        let data = {
            id: req.body.id,
            country_id: req.body.country_id,
            lng: req.body.lng,
            lat: req.body.lat
        };

        let qry = `insert into locations values(${data.id},${data.country_id}, ${data.lng}, ${data.lat});`;
        connection.query(qry, (err, result) => {
            if (err) throw err;
            res.send("location row inserted successfully");
        });
    })
}

module.exports.updateLocation = (req, res) => {
    const connection = mysql.createConnection({
        host: process.env.RDS_HOSTNAME || "localhost",
        user: process.env.RDS_USERNAME || "root",
        password: process.env.RDS_PASSWORD || "123456",
        port: process.env.RDS_PORT || "3306"
    });

    connection.connect((err) => {
        if (err) throw err;
        console.log("Connected!");

        connection.query(`USE rin`, function (err, result) {
            if (err) throw err;
            console.log("Database used");
        });

        let data = {
            country_id: req.body.country_id,
            lng: req.body.lng,
            lat: req.body.lat
        }

        let qry = `UPDATE locations
                    SET country_id=${data.country_id}, lng=${data.lng}, lat=${data.lat}
                    WHERE id=${req.params.id};`;
        connection.query(qry, (err, result) => {
            if (err) throw err;
            res.send("location row has been updated successfully");
        });
    })
}

module.exports.deleteLocation = (req, res) => {
    const connection = mysql.createConnection({
        host: process.env.RDS_HOSTNAME || "localhost",
        user: process.env.RDS_USERNAME || "root",
        password: process.env.RDS_PASSWORD || "123456",
        port: process.env.RDS_PORT || "3306"
    });

    connection.connect((err) => {
        if (err) throw err;
        console.log("Connected!");

        connection.query(`USE rin`, function (err, result) {
            if (err) throw err;
            console.log("Database used");
        });

        let qry = `delete from locations where id=${req.params.id}`;
        connection.query(qry, (err, result) => {
            if (err) throw err;
            res.send("location row has been deleted successfully");
        });
    })
}