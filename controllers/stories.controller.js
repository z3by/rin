const mysql = require('mysql');
const axios = require("axios");
const dbConfig = require("./db.config");

module.exports.getStories = (req, res) => {
    const connection = mysql.createConnection(dbConfig);

    connection.connect((err) => {
        if (err) throw err;
        console.log("Connected!");

        connection.query(`USE rin`, function (err, result) {
            if (err) throw err;
            console.log("Database used");
        });

        connection.query('select * from stories', (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    })
}

module.exports.getStory = (req, res) => {
    const connection = mysql.createConnection(dbConfig);

    connection.connect((err) => {
        if (err) throw err;
        console.log("Connected!");

        connection.query(`USE rin`, function (err, result) {
            if (err) throw err;
            console.log("Database used");
        });

        let qry = `select * from stories where id=${req.params.id}`;
        connection.query(qry, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    })
}

module.exports.addStory = (req, res) => {
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
            title: req.body.title,
            text: JSON.stringify(req.body.text), //text is an array of strings
            imgs: JSON.stringify(req.body.imgs), //imgs is an array of urls
            partner_id: req.body.partner_id,
            project_id: req.body.project_id
        };

        let qry = `insert into stories(title, text, imgs, partner_id, project_id) values("${data.title}", '${data.text}', '${data.imgs}', ${data.partner_id}, ${data.project_id});`;
        // let qry = `insert into stories(title) values("${data.title}"); DROP TABLE stories;--")`;
        connection.query(qry, (err, result) => {
            if (err) throw err;
            res.send("story row inserted successfully");
        });
    })
}

module.exports.updateStory = (req, res) => {
    const connection = mysql.createConnection(dbConfig);

    connection.connect((err) => {
        if (err) throw err;
        console.log("Connected!");

        connection.query(`USE rin`, function (err, result) {
            if (err) throw err;
            console.log("Database used");
        });

        let data = {
            title: req.body.title,
            text: JSON.stringify(req.body.text), //text is an array of strings
            imgs: JSON.stringify(req.body.imgs), //imgs is an array of urls
            partner_id: req.body.partner_id,
            project_id: req.body.project_id
        };

        let qry = `UPDATE stories
                   SET title="${data.title}", text='${data.text}', imgs='${data.imgs}', partner_id=${data.partner_id}, project_id=${data.project_id}
                   WHERE id=${req.params.id};`;
        connection.query(qry, (err, result) => {
            if (err) throw err;
            res.send("story row has been updated successfully");
        });
    })
}

module.exports.deleteStory = (req, res) => {
    const connection = mysql.createConnection(dbConfig);

    connection.connect((err) => {
        if (err) throw err;
        console.log("Connected!");

        connection.query(`USE rin`, function (err, result) {
            if (err) throw err;
            console.log("Database used");
        });

        let qry = `delete from stories where id=${req.params.id}`;
        connection.query(qry, (err, result) => {
            if (err) throw err;
            res.send("story row has been deleted successfully");
        });
    })
}