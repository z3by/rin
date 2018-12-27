const db = require("../../models/index");

module.exports.getMails = (req, res) => {
    db.MailList.findAll({}).then(result => {
        res.json(result);
    });
};

module.exports.getMail = (req, res) => {
    db.MailList.findAll({
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

module.exports.addMail = (req, res) => {
    let data = req.body;
    db.MailList.create(data)
        .then(result => {
            res.status(201).json(result);
        })
        .catch(err => {
            res.send(err);
        });
};

module.exports.deleteMail = (req, res) => {
    let data = req.body;
    db.MailList.destroy({
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
            role.setPermissions(data.permissionsIds)
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