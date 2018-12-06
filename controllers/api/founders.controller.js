const db = require("../../models/index");

module.exports.getFounders = (req, res) => {
  db.Founder.findAll({
    include: [{ model: db.Contact, as: "contact" }]
  }).then(result => {
    res.json(result);
  });
};

module.exports.getFoundersPage = (req, res) => {
  const firstFounderIndex = Number(req.query.first);
  const lastFounderIndex = Number(req.query.last);

  db.Founder.findAndCountAll({
    offset: firstFounderIndex,
    limit: lastFounderIndex - firstFounderIndex,
    include: [{ model: db.Contact, as: "contact" }]
  })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports.getFounder = (req, res) => {
  db.Founder.findAll({
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

module.exports.addFounder = (req, res) => {
  let data = req.body;
  db.Founder.create(data)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports.updateFounder = (req, res) => {
  let data = req.body;
  db.Founder.update(data, {
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

module.exports.deleteFounders = (req, res) => {
  let data = req.body;
  db.Founder.destroy({
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
