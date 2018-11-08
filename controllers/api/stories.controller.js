const mysql = require("mysql");
const axios = require("axios");
const dbConfig = require("../db.config");
const connection = mysql.createConnection(dbConfig);
connection.connect(err => {
  if (err) throw err;
  console.log("connected");
});

module.exports.getStories = (req, res) => {
  connection.query("select * from stories", (err, result) => {
    if (err) throw err;
    const parsed = result.map(story => {
      story.imgs = JSON.parse(story.imgs);
      story.text = JSON.parse(story.text);
      return story;
    });
    res.send(parsed);
  });
};

module.exports.getStory = (req, res) => {
  let qry = `select * from stories where id=${req.params.id}`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    const parsed = result.map(story => {
      story.imgs = JSON.parse(story.imgs);
      story.text = JSON.parse(story.text);
      return story;
    });

    res.send(parsed);
  });
};

module.exports.addStory = (req, res) => {
  let data = {
    title: req.body.title,
    pre_description: req.body.pre_description,
    lens: req.body.lens,
    text: JSON.stringify(req.body.text), //text is an array of strings
    imgs: JSON.stringify(req.body.imgs) //imgs is an array of urls
  };

  let qry = `insert into stories(title, pre_description, lens, text, imgs) values("${data.title}", "${data.pre_description}", "${data.lens}", '${
    data.text
    }', '${data.imgs}');`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.send("story row inserted successfully");
  });
};

module.exports.uploadImage = (req, res) => {
  res.send(req.file);
};

module.exports.updateStory = (req, res) => {
  let data = {
    title: req.body.title,
    pre_description: req.body.pre_description,
    lens: req.body.lens,
    text: JSON.stringify(req.body.text), //text is an array of strings
    imgs: JSON.stringify(req.body.imgs) //imgs is an array of urls
  };

  let qry = `UPDATE stories
                   SET title="${data.title}", pre_description="${data.pre_description}", lens="${data.lens}", text='${data.text}', imgs='${
    data.imgs
    }'
                   WHERE id=${req.params.id};`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.send("story row has been updated successfully");
  });
};

module.exports.deleteStory = (req, res) => {
  let qry = `delete from stories where id=${req.params.id}`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.send("story row has been deleted successfully");
  });
};
