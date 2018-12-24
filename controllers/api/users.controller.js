const db = require("../../models/index");

module.exports.getUsers = (req, res) => {
    db.User.findAll({}).then(result => {
        res.json(result);
    });
};

module.exports.getUser = (req, res) => {
    db.User.findAll({
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

module.exports.addUser = (req, res) => {
    let data = req.body;
    console.log(data);

    db.User.create(data)
        .then(result => {
            res.status(201).json(result);
        })
        .catch(err => {
            res.send(err);
        });
};