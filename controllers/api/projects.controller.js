const db = require("../../models/index");
const Op = db.Sequelize.Op;

module.exports.getProjects = (req, res) => {
  db.Project.findAll({
    where: {
      pending: false
    },
    include: [
      { model: db.Location, as: "locations", attributes: ["lng", "lat"] },
      { model: db.Story, as: "stories" },
      { model: db.Contact, as: "contact" },
      { model: db.Investor, through: { attributes: [] }, as: "Investors" },
      { model: db.Founder, through: { attributes: [] }, as: "Founders" },
      { model: db.Country, through: { attributes: [] }, as: "Countries" },
      { model: db.Sdg, through: { attributes: [] }, as: "Sdgs" }
    ]
  }).then(result => {
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
    include: [
      { model: db.Location, as: "locations", attributes: ["lng", "lat"] },
      { model: db.Story, as: "stories" },
      { model: db.Contact, as: "contact" },
      { model: db.Investor, through: { attributes: [] }, as: "investors" },
      { model: db.Founder, through: { attributes: [] }, as: "founders" },
      { model: db.Sdg, through: { attributes: [] }, as: "Sdgs" },
      { model: db.Country, through: { attributes: [] }, as: "countries" }
    ],
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
    },
    include: [
      { model: db.Location, as: "locations", attributes: ["lng", "lat"] },
      { model: db.Story, as: "stories" },
      { model: db.Contact, as: "contact" },
      { model: db.Investor, through: { attributes: [] }, as: "investors" },
      { model: db.Founder, through: { attributes: [] }, as: "founders" },
      { model: db.Sdg, through: { attributes: [] }, as: "Sdgs" },
      { model: db.Country, through: { attributes: [] }, as: "countries" }
    ]
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
  db.Contact.create(data.contact).then(contact => {
    data.project.contactId = contact.id;
    const project = db.Project.build(data.project);
    project.save().then(added => {
      res.json(added);
    });
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

const checkProjectsFilterOptions = (clause, query) => {
  if (query.sector) {
    clause["sector"] = query.sector;
  }
  if (query.name) {
    clause["name"] = {
      [Op.like]: `%${query.name}%`
    };
  }
  if (query.organization) {
    clause["organization"] = {
      [Op.like]: `%${query.organization}%`
    };
  }
  if (query.refugeeInvestmenType) {
    clause["refugeeInvestmentType"] = query.refugeeInvestmentType;
  }

  if (query.investmentSize) {
    clause["investmentSize"] = {
      [Op.gt]: query.investmentSize
    };
  }

  return clause;
};

module.exports.getProjectsLocations = (req, res) => {
  let whereClause = {
    pending: false
  };

  whereClause = checkProjectsFilterOptions(whereClause, req.query);

  db.Project.findAll({
    where: whereClause,
    attributes: ["id", "sector"],
    include: [{ model: db.Location, as: "Location" }]
  }).then(result => {
    res.json(result);
  });
};
