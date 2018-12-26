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

module.exports.addRolePermissions = (req, res) => {
    let data = req.body;
    db.Role.findOne({ where: { id: data.roleId } })
        .then(role => {
            data.permissionsIds.forEach(permissionId => {
                db.Permission.find({ where: { id: permissionId } }).then(permission => {
                    role.addPermission(permission)
                        .then(result => {
                            console.log("Permission has been added");
                        })
                        .catch(err => {
                            console.log(err);
                        });
                })
            });
            res.send(201);
        })
        .catch(err => {
            console.log(err);
        })
};