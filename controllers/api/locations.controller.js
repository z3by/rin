const db = require("../../models/index");

module.exports.getLocations = (req, res) => {
  db.Location.findAll({}).then(result => {
    res.json(result);
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
