const db = require("../../models/index");
const Op = db.Sequelize.Op;
const projectHelpers = require("../helpers/projects.helpers");

module.exports.getProjects = (req, res) => {
  db.Project.findAll({
    where: {
      pending: false
    },
    include: [
      { model: db.Location, as: "locations" },
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

module.exports.getProjectsNames = (req, res) => {
  db.Project.findAll({
    where: {
      pending: false
    },
    attributes: ["id", "name"]
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
      { model: db.Location, as: "locations" },
      { model: db.Story, as: "stories" },
      { model: db.Contact, as: "contact" },
      { model: db.Investor, through: { attributes: [] }, as: "Investors" },
      { model: db.Founder, through: { attributes: [] }, as: "Founders" },
      { model: db.Country, through: { attributes: [] }, as: "Countries" },
      { model: db.Sdg, through: { attributes: [] }, as: "Sdgs" }
    ],
    offset: firstProjectIndex,
    limit: lastProjectIndex - firstProjectIndex
  }).then(result => {
    res.json(result);
  });
};

module.exports.getProject = (req, res) => {
  db.Project.findAll({
    where: {
      pending: false,
      id: req.params.id
    },
    include: [
      { model: db.Location, as: "locations" },
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

module.exports.addProject = (req, res) => {
  let data = req.body;
  // add contact record
  db.Project.create(data).then(project => {
    // create project locations records;
    projectHelpers
      .addLocations(data.locations, project.id)
      .then(locationsAdded => {
        // join project with countries;
        projectHelpers
          .joinProjectWithCountries(data.countries, project)
          .then(() => {
            // join project with sdgs
            projectHelpers
              .joinProjectWithSdgs(data.sdgs, project)
              .then(() => {
                res.send(201);
              })
              .catch(err => {
                res.send(err);
              });

            // join project with investors
            projectHelpers
              .joinProjectWithInvestors(data.investors, project)
              .then(() => {
                res.send(201);
              })
              .catch(err => {
                res.send(err);
              });

            // join project with founders
            projectHelpers
              .joinProjectWithFounders(data.founders, project)
              .then(() => {
                res.send(201);
              })
              .catch(err => {
                res.send(err);
              });
          })
          .catch(err => {
            res.send(err);
          });
      })
      .catch(err => {
        res.send(err);
      });
  });
};

module.exports.updateProject = (req, res) => {
  let data = req.body;
  db.Project.findOne({
    where: {
      id: req.params.id
    }
  }).then(project => {
    // update project info
    project.update(data).then(updated => {
      // update project location
      projectHelpers
        .updateProjectLocations(project, data.locations)
        .then(() => {
          // update project investors
          project.setInvestors([]).then(result => {
            projectHelpers
              .joinProjectWithInvestors(data.investors, project)
              .then(result => {
                res.send(result);
              })
              .catch(err => {
                res.send(err);
              });
          });
          // update project founders
          project.setFounders([]).then(result => {
            projectHelpers
              .joinProjectWithFounders(data.founders, project)
              .then(result => {
                res.send(result);
              })
              .catch(err => {
                res.send(err);
              });
          });
          // update project countries
          project.setCountries([]).then(result => {
            projectHelpers
              .joinProjectWithCountries(data.countries, project)
              .then(result => {
                res.send(result);
              })
              .catch(err => {
                res.send(err);
              });
          });
          // update project sdgs
          project.setSdgs([]).then(result => {
            projectHelpers
              .joinProjectWithSdgs(data.sdgs, project)
              .then(result => {
                res.send(result);
              })
              .catch(err => {
                res.send(err);
              });
          });
        })
        .catch(err => {
          res.send(err);
        });
    });
  });
};

module.exports.acceptRequest = (req, res) => {
  db.Project.update(
    { pending: false },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(accepted => {
      res.status(200).send(accepted);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports.deleteProjects = (req, res) => {
  db.Location.destroy({ where: { ProjectId: req.params.id } })
    .then(() => {
      db.Story.destroy({
        where: {
          projectId: req.params.id
        }
      })
        .then(deleted => {
          db.Project.findOne({ where: { id: req.params.id } })
            .then(project => {
              project
                .destroy()
                .then(result => {
                  db.Contact.destroy({
                    where: {
                      id: project.contactId
                    }
                  });
                  res.sendStatus(200);
                })
                .catch(err => {
                  res.status(400).send(err);
                });
            })
            .catch(err => {
              res.send(err);
            });
        })
        .catch(err => {
          res.send(err);
        });
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports.getProjectRequestsPage = (req, res) => {
  db.Project.findAndCountAll({
    where: {
      pending: true
    }
  })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports.getProjectsLocations = (req, res) => {
  let whereClause = {
    pending: false
  };

  db.Project.findAll({
    where: whereClause,
    attributes: ["id", "sector"],
    include: [{ model: db.Location, as: "locations" }]
  }).then(result => {
    res.json(result);
  });
};

module.exports.searchProjects = (req, res) => {
  db.Project.findAll({
    where: {
      name: { [Op.like]: `%${req.query.value}%` }
    },
    limit: 10
  })
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(404).json(err);
    });
};
