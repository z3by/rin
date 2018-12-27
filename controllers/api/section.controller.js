const db = require("../../models/index");

module.exports.getSections = (req, res) => {
    db.Section.findAll({}).then(result => {
        res.json(result);
    });
};

module.exports.getSectionById = (req, res) => {
    db.Section.findAll({
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

module.exports.getSectionByTitle = (req, res) => {
    db.Section.findAll({
        where: {
            title: req.params.title
        }
    })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.send(err);
        });
};

module.exports.addSection = (req, res) => {
    let data = req.body;

    db.Section.create(data)
        .then(result => {
            res.status(201).json(result);
        })
        .catch(err => {
            res.send(err);
        });
};

module.exports.updateSection = (req, res) => {
    let data = req.body;
    db.Section.update(data, { where: { id: req.params.id } })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.status(400).send(err);
        });
};

module.exports.deleteSection = (req, res) => {
    let data = req.body;
    db.Section.destroy({
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