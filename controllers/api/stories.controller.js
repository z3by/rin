const mysql = require("mysql");
const axios = require("axios");
const dbConfig = require("../db.config");

module.exports.getStories = (req, res) => {
  const connection = mysql.createConnection(dbConfig);

  connection.connect(err => {
    if (err) throw err;
    connection.query("select * from stories", (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
};

module.exports.getStory = (req, res) => {
  const connection = mysql.createConnection(dbConfig);

  connection.connect(err => {
    if (err) throw err;
    let qry = `select * from stories where id=${req.params.id}`;
    connection.query(qry, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
};

module.exports.addStory = (req, res) => {
  const connection = mysql.createConnection(dbConfig);

  connection.connect(err => {
    if (err) throw err;
    let data = {
      title: req.body.title,
      text: JSON.stringify(req.body.text), //text is an array of strings
      imgs: JSON.stringify(req.body.imgs) //imgs is an array of urls
    };

    let qry = `insert into stories(title, text, imgs) values("${
      data.title
    }", '${data.text}', '${data.imgs}');`;
    // let qry = `insert into stories(title) values("${data.title}"); DROP TABLE stories;--")`;
    connection.query(qry, (err, result) => {
      if (err) throw err;
      res.send("story row inserted successfully");
    });
  });
};

module.exports.uploadImage = (req, res) => {
  res.send(req.file);
};

module.exports.updateStory = (req, res) => {
  const connection = mysql.createConnection(dbConfig);

  connection.connect(err => {
    if (err) throw err;
    let data = {
      title: req.body.title,
      text: JSON.stringify(req.body.text), //text is an array of strings
      imgs: JSON.stringify(req.body.imgs) //imgs is an array of urls
    };

    let qry = `UPDATE stories
                   SET title="${data.title}", text='${data.text}', imgs='${
      data.imgs
    }',
                   WHERE id=${req.params.id};`;
    connection.query(qry, (err, result) => {
      if (err) throw err;
      res.send("story row has been updated successfully");
    });
  });
};

module.exports.deleteStory = (req, res) => {
  const connection = mysql.createConnection(dbConfig);

  connection.connect(err => {
    if (err) throw err;
    let qry = `delete from stories where id=${req.params.id}`;
    connection.query(qry, (err, result) => {
      if (err) throw err;
      res.send("story row has been deleted successfully");
    });
  });
};
