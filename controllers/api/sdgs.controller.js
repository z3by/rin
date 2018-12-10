const db = require("../../models/index");

module.exports.getSdgs = (req, res) => {
  db.Sdg.findAll({}).then(result => {
    res.json(result);
  });
};

module.exports.getSdg = (req, res) => {
  db.Sdg.findAll({
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

module.exports.addSdg = (req, res) => {
  let data = req.body;
  db.Sdg.create(data)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      res.send(err);
    });
};
