const storyValidator = require("../validators/story.validator");
const db = require("../../models/index");

module.exports.getStories = (req, res) => {
  db.Story.findAll({}).then(result => {
    res.json(result);
  });
};

module.exports.getStoriesPage = (req, res) => {
  const firstStoryIndex = Number(req.query.first);
  const lastStoryIndex = Number(req.query.last);

  db.Story.findAndCountAll({
    offset: firstStoryIndex,
    limit: lastStoryIndex - firstStoryIndex
  })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports.getStory = (req, res) => {
  db.Story.findAll({
    where: {
      id: req.params.id
    }
  })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports.addStory = (req, res) => {
  let data = req.body;
  db.Story.create(data)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports.updateStory = (req, res) => {
  let data = req.body;
  db.Story.update(data, {
    where: {
      id: req.params.id
    }
  })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(400).send(err);
    });
};

module.exports.deleteStory = (req, res) => {
  db.Story.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(400).send(err);
    });
};
