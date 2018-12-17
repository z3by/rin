const db = require("../../models/index");

module.exports.getRefugeeInvestmentTypes = (req, res) => {
  db.RefugeeInvestmentType.findAll({}).then(result => {
    res.json(result);
  });
};

module.exports.getRefugeeInvestmentType = (req, res) => {
  db.RefugeeInvestmentType.findAll({
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

module.exports.addRefugeeInvestmentType = (req, res) => {
  let data = req.body;
  db.RefugeeInvestmentType.create(data)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      res.send(err);
    });
};
