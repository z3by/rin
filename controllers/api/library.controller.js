const db = require("../../models/index");

// links handlers
module.exports.getLinks = (req, res) => {
  db.Link.findAll({}).then(result => {
    res.json(result);
  });
};

module.exports.getLinksPage = (req, res) => {
  const firstLinkIndex = Number(req.query.first);
  const lastLinkIndex = Number(req.query.last);

  db.Link.findAndCountAll({
    offset: firstLinkIndex,
    limit: lastLinkIndex - firstLinkIndex
  })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports.getLink = (req, res) => {
  db.Link.findAll({
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

module.exports.addLink = (req, res) => {
  let data = req.body;
  db.Link.create(data)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports.updateLink = (req, res) => {
  let data = req.body;
  db.Link.update(data, {
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

module.exports.deleteLinks = (req, res) => {
  db.Link.destroy({
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

// researches handlers
module.exports.getResearches = (req, res) => {
  db.Research.findAll({}).then(result => {
    res.json(result);
  });
};

module.exports.getResearchesPage = (req, res) => {
  const firstResearchIndex = Number(req.query.first);
  const lastResearchIndex = Number(req.query.last);

  db.Research.findAndCountAll({
    offset: firstResearchIndex,
    limit: lastResearchIndex - firstResearchIndex
  })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports.getResearch = (req, res) => {
  db.Research.findAll({
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

module.exports.addResearch = (req, res) => {
  let data = req.body;
  db.Research.create(data)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports.updateResearch = (req, res) => {
  let data = req.body;
  db.Research.update(data, {
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

module.exports.deleteResearches = (req, res) => {
  let data = req.body;
  db.Research.destroy({
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
