const mysql = require('mysql');
const axios = require("axios");

module.exports.getProjects = (req, res) => {
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

        connection.query('select * from projects', (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    })
}

module.exports.getProject = (req, res) => {
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

        let qry = `select * from projects where id=${req.params.id}`;
        connection.query(qry, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    })
}

module.exports.addProject = (req, res) => {
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
            title: req.body.title,
            start_date: req.body.start_date,
            capacity: req.body.capacity,
            location_id: req.body.location_id,
            partner_id: req.body.partner_id,
            organization_name: req.body.organization_name,
            img_url: req.body.img_url,
            type: req.body.type,
            project_description: req.body.project_description
        };

        let qry = `insert into projects values(${data.id},"${data.title}", '${data.start_date}', ${data.capacity}, ${data.location_id}, ${data.partner_id}, "${data.organization_name}", "${data.img_url}", "${data.type}", "${data.project_description}");`;
        connection.query(qry, (err, result) => {
            if (err) throw err;
            res.send("project row inserted successfully");
        });
    })
}

module.exports.updateProject = (req, res) => {
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
            title: req.body.title,
            start_date: req.body.start_date,
            capacity: req.body.capacity,
            location_id: req.body.location_id,
            partner_id: req.body.partner_id,
            organization_name: req.body.organization_name,
            img_url: req.body.img_url,
            type: req.body.type,
            project_description: req.body.project_description
        };

        let qry = `UPDATE projects 
                  SET title="${data.title}", start_date='${data.start_date}', capacity=${data.capacity}, location_id=${data.location_id}, partner_id=${data.partner_id}, organization_name="${data.organization_name}", img_url="${data.img_url}", type="${data.type}", project_description="${data.project_description}"
                  WHERE id=${req.params.id};`;
        connection.query(qry, (err, result) => {
            if (err) throw err;
            res.send("project row has been updated successfully");
        });
    })
}

module.exports.deleteProject = (req, res) => {
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

        let qry = `delete from projects where id=${req.params.id}`;
        connection.query(qry, (err, result) => {
            if (err) throw err;
            res.send("project row has been deleted successfully");
        });
    })
}
