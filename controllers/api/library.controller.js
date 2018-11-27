const mysql = require("mysql");
const dbConfig = require("../db.config");

const connection = mysql.createConnection(dbConfig);
connection.connect(err => {
  if (err) throw err;
  console.log("connected");
});

//----------------- library links -------------------------
module.exports.getLinks = (req, res) => {
  const index = req.params.index;

  let qry = "select * from library_links";
  connection.query(qry, (err, result) => {
    if (err) throw err;
    result = result.slice(index, index + 10);
    res.send(result);
  });
};

module.exports.addLink = (req, res) => {
  let data = {
    title: req.body.title,
    subtitle: req.body.subtitle,
    url: req.body.url,
    img: req.body.img
  };

  let qry = `insert into library_links (title, subtitle, url, img) values("${
    data.title
  }", "${data.subtitle}", '${data.url}', '${data.img}');`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.sendStatus(201);
  });
};

module.exports.updateLink = (req, res) => {
  let data = {
    title: req.body.title,
    subtitle: req.body.subtitle,
    url: req.body.url,
    img: req.body.img
  };

  let qry = `UPDATE library_links SET title="${data.title}", subtitle="${
    data.subtitle
  }", url="${data.url}", img='${data.img}' WHERE id=${req.params.id};`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.sendStatus(201);
  });
};

module.exports.deleteLink = (req, res) => {
  let qry = `delete from library_links where id=${req.params.id}`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.sendStatus(200);
  });
};

//----------------- library books -------------------------
module.exports.getBooks = (req, res) => {
  const index = req.params.index;

  let qry = "select * from library_books";
  connection.query(qry, (err, result) => {
    if (err) throw err;
    result = result.slice(index, index + 10);
    res.send(result);
  });
};

module.exports.addBook = (req, res) => {
  let data = {
    title: req.body.title,
    subtitle: req.body.subtitle,
    url: req.body.url,
    img: req.body.img
  };

  let qry = `insert into library_books (title, subtitle, url, img) values("${
    data.title
  }", "${data.subtitle}", '${data.url}', '${data.img}');`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.sendStatus(201);
  });
};

module.exports.updateBook = (req, res) => {
  let data = {
    title: req.body.title,
    subtitle: req.body.subtitle,
    url: req.body.url,
    img: req.body.img
  };

  let qry = `UPDATE library_books SET title="${data.title}", subtitle="${
    data.subtitle
  }", url="${data.url}", img='${data.img}' WHERE id=${req.params.id};`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.sendStatus(201);
  });
};

module.exports.deleteBook = (req, res) => {
  let qry = `delete from library_books where id=${req.params.id}`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.sendStatus(200);
  });
};

//----------------- library researches -------------------------
module.exports.getResearches = (req, res) => {
  const index = req.params.index;

  let qry = "select * from library_researches";
  connection.query(qry, (err, result) => {
    if (err) throw err;
    result = result.slice(index, index + 10);
    res.send(result);
  });
};

module.exports.addResearch = (req, res) => {
  let data = {
    title: req.body.title,
    subtitle: req.body.subtitle,
    url: req.body.url,
    img: req.body.img
  };

  let qry = `insert into library_researches (title, subtitle, url, img) values("${
    data.title
  }", "${data.subtitle}", '${data.url}', '${data.img}');`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.sendStatus(201);
  });
};

module.exports.updateResearch = (req, res) => {
  let data = {
    title: req.body.title,
    subtitle: req.body.subtitle,
    url: req.body.url,
    img: req.body.img
  };

  let qry = `UPDATE library_researches SET title="${data.title}", subtitle="${
    data.subtitle
  }", url="${data.url}", img='${data.img}' WHERE id=${req.params.id};`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.sendStatus(201);
  });
};

module.exports.deleteResearch = (req, res) => {
  let qry = `delete from library_researches where id=${req.params.id}`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.sendStatus(200);
  });
};
