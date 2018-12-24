const db = require("../../models/index");

module.exports.getRoles = (req, res) => {
    db.Role.findAll({}).then(result => {
        res.json(result);
    });
};

module.exports.getRole = (req, res) => {
    db.Role.findAll({
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
