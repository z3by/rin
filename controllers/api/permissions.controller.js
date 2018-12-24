const db = require("../../models/index");

module.exports.getPermissions = (req, res) => {
    db.Permission.findAll({}).then(result => {
        res.json(result);
    });
};

module.exports.getPermission = (req, res) => {
    db.Permission.findAll({
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

module.exports.addPermission = (req, res) => {
    let data = req.body;
    db.Permission.create(data)
        .then(result => {
            res.status(201).json(result);
        })
        .catch(err => {
            res.send(err);
        });
};
