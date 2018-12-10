const db = require("../../models/index");

module.exports.getContacts = (req, res) => {
  db.Contact.findAll({
    include: [{ model: db.Contact, as: "contact" }]
  }).then(result => {
    res.json(result);
  });
};

module.exports.getContact = (req, res) => {
  db.Contact.findAll({
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

module.exports.addContact = (req, res) => {
  let data = req.body;
  db.Contact.create(data)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports.updateContact = (req, res) => {
  let data = req.body;
  db.Contact.update(data, {
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

module.exports.deleteContacts = (req, res) => {
  let data = req.body;
  db.Contact.destroy({
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
