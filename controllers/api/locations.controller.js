const db = require("../../models/index");

module.exports.getLocations = (req, res) => {
  db.Location.findAll({}).then(result => {
    res.json(result);
  });
};

module.exports.getLocationsPage = (req, res) => {
  const firstLocationIndex = Number(req.query.first);
  const lastLocationIndex = Number(req.query.last);

  db.Location.findAndCountAll({
    offset: firstLocationIndex,
    limit: lastLocationIndex - firstLocationIndex
  })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports.getLocation = (req, res) => {
  db.Location.findAll({
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

module.exports.addLocation = (req, res) => {
  let data = req.body;
  db.Location.create(data)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports.updateLocation = (req, res) => {
  let data = req.body;
  db.Location.update(data, {
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

module.exports.deleteLocations = (req, res) => {
  let data = req.body;
  db.Location.destroy({
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
