const db = require("../../models/index");

module.exports.getProjects = (req, res) => {
  db.Project.findAll({}).then(result => {
    res.json(result);
  });
};

module.exports.getProjectsPage = (req, res) => {
  const firstProjectIndex = Number(req.query.first);
  const lastProjectIndex = Number(req.query.last);

  db.Project.findAndCountAll({
    where: {
      pending: false
    },
    offset: firstProjectIndex,
    limit: lastProjectIndex - firstProjectIndex
  })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports.getProject = (req, res) => {
  db.Project.findAll({
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

module.exports.addProject = (req, res) => {
  let data = req.body;
  db.Project.create(data)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports.updateProject = (req, res) => {
  let data = req.body;
  db.Project.update(data, {
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

module.exports.deleteProjects = (req, res) => {
  let data = req.body;
  db.Project.destroy({
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

module.exports.getProjectRequestsPage = (req, res) => {
  const firstProjectIndex = Number(req.query.first);
  const lastProjectIndex = Number(req.query.last);

  db.Project.findAndCountAll({
    where: {
      pending: true
    },
    offset: firstProjectIndex,
    limit: lastProjectIndex - firstProjectIndex
  })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.send(err);
    });
};
