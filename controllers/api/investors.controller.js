const db = require("../../models/index");

module.exports.getInvestors = (req, res) => {
  db.Investor.findAll({
    include: [{ model: db.Contact, as: "contact" }]
  }).then(result => {
    res.json(result);
  });
};

module.exports.getInvestorsPage = (req, res) => {
  const firstInvestorIndex = Number(req.query.first);
  const lastInvestorIndex = Number(req.query.last);

  db.Investor.findAndCountAll({
    offset: firstInvestorIndex,
    limit: lastInvestorIndex - firstInvestorIndex,
    include: [{ model: db.Contact, as: "contact" }]
  })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports.getInvestor = (req, res) => {
  db.Investor.findAll({
    where: {
      id: req.params.id
    },
    include: [{ model: db.Contact, as: "contact" }]
  })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports.addInvestor = (req, res) => {
  let data = req.body;
  db.Investor.create(data)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports.updateInvestor = (req, res) => {
  let data = req.body;
  db.Investor.update(data, {
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

module.exports.deleteInvestors = (req, res) => {
  let data = req.body;
  db.Investor.destroy({
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
