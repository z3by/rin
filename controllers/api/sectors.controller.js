const db = require("../../models/index");

module.exports.getSectors = (req, res) => {
  db.Sector.findAll({}).then(result => {
    res.json(result);
  });
};

module.exports.getSector = (req, res) => {
  db.Sector.findAll({
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

module.exports.addSector = (req, res) => {
  let data = req.body;
  db.Sector.create(data)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      res.send(err);
    });
};
