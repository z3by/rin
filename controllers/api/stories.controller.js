const mysql = require("mysql");
const axios = require("axios");
const dbConfig = require("../db.config");
const storyValidator = require("../validators/story.validator");

const connection = mysql.createConnection(dbConfig);
connection.connect(err => {
  if (err) throw err;
  console.log("connected");
});

const checkInputAndModifyQuery = (qry, input) => {
  let hasPrevCondition = false;

  if (input.title) {
    qry += ` WHERE title LIKE "%${input.title}%"`;
    hasPrevCondition = true;
  }

  if (input.lens) {
    if (hasPrevCondition) {
      qry += ` AND lens LIKE "%${input.lens}%"`;
    } else {
      qry += ` WHERE lens LIKE "%${input.lens}%"`;
      hasPrevCondition = true;
    }
  }

  if (input.SDGs) {
    if (hasPrevCondition) {
      for (let i = 0; i < input.SDGs.length; i++) {
        qry += ` AND JSON_SEARCH(SDGs, 'one', '${input.SDGs[i]}') IS NOT NULL`;
      }
    } else {
      qry += ` WHERE JSON_SEARCH(SDGs, 'one', '${input.SDGs[0]}') IS NOT NULL`;
      if (input.SDGs.length > 1) {
        for (let i = 1; i < input.SDGs.length; i++) {
          qry += ` AND JSON_SEARCH(SDGs, 'one', '${input.SDGs[i]}') IS NOT NULL`;
        }
      }
    }
    hasPrevCondition = true;
  }

  return qry;
}

module.exports.getStories = (req, res) => {
  const filterOptions = req.query;

  let qry = "select * from stories";
  //check if a user has entered any search value
  if (filterOptions) {
    qry = checkInputAndModifyQuery(qry, filterOptions);
  }

  connection.query(qry, (err, result) => {
    if (err) throw err;
    const parsed = result.map(story => {
      story.imgs = JSON.parse(story.imgs);
      story.SDGs = JSON.parse(story.SDGs);
      return story;
    });
    res.send(parsed);
  });
};

//this function enables the admin searching stories in admin dashboard
module.exports.getSearchedStories = (req, res) => {
  const filterOptions = req.params.options;

  let qry = `SELECT * FROM stories WHERE title like "%${filterOptions}%" OR lens like "%${filterOptions}%" OR pre_description like "%${filterOptions}%"`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    const parsed = result.map(story => {
      story.imgs = JSON.parse(story.imgs);
      story.SDGs = JSON.parse(story.SDGs);
      return story;
    });
    res.send(parsed);
  });
};

module.exports.getStoriesCount = (req, res) => {
  let qry = "select count(*) from stories;";
  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.send(result[0]);
  });
}

module.exports.getSelectedPageStories = (req, res) => {
  const firstStoryIndex = req.query.first;
  const lastStoryIndex = req.query.last;

  let qry = "select * from stories";
  connection.query(qry, (err, result) => {
    if (err) throw err;
    const parsed = result.map(story => {
      story.imgs = JSON.parse(story.imgs);
      story.SDGs = JSON.parse(story.SDGs);
      return story;
    });

    const allStories = parsed.slice(firstStoryIndex, lastStoryIndex);
    res.send(allStories);
  });
};

module.exports.getStory = (req, res) => {
  let qry = `select * from stories where id=${req.params.id}`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    const parsed = result.map(story => {
      story.imgs = JSON.parse(story.imgs);
      story.SDGs = JSON.parse(story.SDGs);
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
    text: req.body.text,
    imgs: JSON.stringify(req.body.imgs), //imgs is an array of urls
    SDGs: JSON.stringify(req.body.SDGs)
  };

  const errors = storyValidator(data);
  if (Object.keys(errors).length) {
    return res.status(400).json(errors);
  }

  let qry = `insert into stories(title, pre_description, lens, text, imgs, SDGs) values("${
    data.title
    }", "${data.pre_description}", "${data.lens}", '${data.text}', '${
    data.imgs
    }', '${data.SDGs}');`;
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
    text: req.body.text,
    imgs: JSON.stringify(req.body.imgs), //imgs is an array of urls
    SDGs: JSON.stringify(req.body.SDGs)
  };

  const errors = storyValidator(data);
  if (Object.keys(errors).length) {
    return res.status(400).json(errors);
  }

  let qry = `UPDATE stories
                   SET title="${data.title}", pre_description="${
    data.pre_description
    }", lens="${data.lens}", text="${data.text}", imgs='${data.imgs}', SDGs='${
    data.SDGs
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
