const mysql = require("mysql");
const dbConfig = require("../db.config");
const storyValidator = require("../validators/story.validator");

const connection = mysql.createConnection(dbConfig);
connection.connect(err => {
  if (err) throw err;
  console.log("connected");
});

module.exports.getArticles = (req, res) => {
  let qry = "select * from articles";

  connection.query(qry, (err, result) => {
    if (err) throw err;
    const parsed = result.map(article => {
      article.imgs = JSON.parse(article.imgs);
      return article;
    });
    res.send(parsed);
  });
};

module.exports.getArticle = (req, res) => {
  let qry = `select * from articles where id=${req.params.id}`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    const parsed = result.map(article => {
      article.imgs = JSON.parse(article.imgs);
      return article;
    });

    res.send(parsed);
  });
};

module.exports.addArticle = (req, res) => {
  let data = {
    title: req.body.title,
    subtitle: req.body.subtitle,
    text: req.body.text,
    imgs: JSON.stringify(req.body.imgs)
  };

  let qry = `insert into articles(title, subtitle, text, imgs) values("${
    data.title
  }", "${data.subtitle}", '${data.text}', '${data.imgs}');`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.sendStatus(201);
  });
};

module.exports.uploadImage = (req, res) => {
  res.sendStatus(201);
};

module.exports.updateArticle = (req, res) => {
  let data = {
    title: req.body.title,
    pre_description: req.body.subtitle,
    text: req.body.text,
    imgs: JSON.stringify(req.body.imgs)
  };

  let qry = `UPDATE articles
                   SET title="${data.title}", subtitle="${
    data.subtitle
  }", text="${data.text}", imgs='${data.imgs}'
                   WHERE id=${req.params.id};`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.sendStatus(201);
  });
};

module.exports.deleteArticles = (req, res) => {
  let qry = `delete from articles where id=${req.params.id}`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.sendStatus(200);
  });
};
