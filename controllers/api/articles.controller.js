const db = require("../../models/index");
const Op = db.Sequelize.Op;

module.exports.getArticles = (req, res) => {
  db.Article.findAll({}).then(result => {
    res.json(result);
  });
};

module.exports.getArticlesPage = (req, res) => {
  const firstArticleIndex = Number(req.query.first);
  const lastArticleIndex = Number(req.query.last);

  db.Article.findAndCountAll({
    offset: firstArticleIndex,
    limit: lastArticleIndex - firstArticleIndex
  })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports.getArticle = (req, res) => {
  db.Article.findAll({
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

module.exports.addArticle = (req, res) => {
  let data = req.body;
  db.Article.create(data)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports.updateArticle = (req, res) => {
  let data = req.body;
  db.Article.update(data, {
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

module.exports.deleteArticles = (req, res) => {
  let data = req.body;
  db.Article.destroy({
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

module.exports.searchArticles = (req, res) => {
  db.Article.findAll({
    where: {
      title: { [Op.like]: `%${req.query.value}%` }
    },
    limit: 10
  })
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(404).json(err);
    });
};
