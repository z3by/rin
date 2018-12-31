const db = require("../../models/index");

module.exports.getRoles = (req, res) => {
  db.Role.findAll({
    include: [
      {
        model: db.Permission,
        as: "permissions",
        attributes: ["id", "name"]
      }
    ]
  }).then(result => {
    res.json(result);
  });
};

module.exports.getRole = (req, res) => {
  db.Role.findAll({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: db.Permission,
        as: "permissions",
        attributes: ["id", "name"]
      }
    ]
  })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports.addRole = (req, res) => {
  let data = req.body;
  db.Role.create(data)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports.updateRole = (req, res) => {
  let data = req.body;
  db.Role.update(data, { where: { id: req.params.id } })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(400).send(err);
    });
};

module.exports.deleteRole = (req, res) => {
  let data = req.body;
  db.Role.destroy({
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

module.exports.setRolePermissions = (req, res) => {
  let data = req.body;
  db.Role.findOne({ where: { id: data.roleId } })
    .then(role => {
      role
        .setPermissions(data.permissionsIds)
        .then(result => {
          res.json(result);
        })
        .catch(err => {
          res.status(400).send(err);
        });
    })
    .catch(err => {
      res.send(err);
    });
};
