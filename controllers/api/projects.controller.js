const db = require("../../models/index");
const Op = db.Sequelize.Op;
const projectHelpers = require("../helpers/projects.helpers");

module.exports.getProjects = (req, res) => {
  db.Project.findAll({
    where: {
      pending: false
    },
    include: [
      {
        model: db.Location,
        as: "locations",
        attributes: ["id", "lng", "lat", "ProjectId"]
      },
      { model: db.Story, as: "stories" },
      { model: db.Contact, as: "contact" },
      { model: db.Sector, as: "sector", attributes: ["id", "name"] },
      {
        model: db.RefugeeInvestmentType,
        as: "refugeeInvestmentType",
        attributes: ["id", "name", "img"]
      },
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
      {
        model: db.Location,
        as: "locations",
        attributes: ["id", "lng", "lat", "ProjectId"]
      },
      { model: db.Story, as: "stories" },
      {
        model: db.RefugeeInvestmentType,
        as: "refugeeInvestmentType",
        attributes: ["id", "name", "img"]
      },
      { model: db.Contact, as: "contact" },
      { model: db.Sector, as: "sector", attributes: ["id", "name"] },
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
      id: req.params.id
    },
    include: [
      {
        model: db.Location,
        as: "locations",
        attributes: ["id", "lng", "lat", "ProjectId"]
      },
      { model: db.Story, as: "stories" },
      {
        model: db.RefugeeInvestmentType,
        as: "refugeeInvestmentType",
        attributes: ["id", "name", "img"]
      },
      { model: db.Contact, as: "contact" },
      { model: db.Sector, as: "sector", attributes: ["id", "name"] },
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

module.exports.acceptProjectRequest = (req, res) => {
  const id = req.params.id;
  db.Project.findOne({ where: { id: id } })
    .then(project => {
      project.update({ pending: false }).then(result => {
        res.status(201).json(result);
      });
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
  let andQuery = [
    {
      pending: false
    }
  ];

  if (req.query.year) {
    andQuery.push({
      year: db.sequelize.where(
        db.sequelize.fn("YEAR", db.sequelize.col("year")),
        req.query.year
      )
    });
  }

  if (req.query.sectorId > 0) {
    andQuery.push({
      sectorId: req.query.sectorId
    });
  }

  if (req.query.refugeeInvestmentTypeId > 0) {
    andQuery.push({
      refugeeInvestmentTypeId: req.query.refugeeInvestmentTypeId
    });
  }

  if (req.query.investmentSize) {
    andQuery.push({
      investmentSize: {
        [Op.gte]: Number(req.query.investmentSize)
      }
    });
  }

  let ProjectWhere = {
    [Op.and]: andQuery
  };

  db.Project.findAll({
    where: ProjectWhere,
    attributes: ["id"],
    include: [
      {
        model: db.Location,
        as: "locations",
        attributes: ["id", "lng", "lat", "ProjectId"]
      },
      {
        model: db.Sector,
        as: "sector",
        attributes: ["id", "name"]
      },
      {
        model: db.Sdg,
        as: "Sdgs",
        through: { attributes: [] },
        attributes: ["id"]
      }
    ]
  })
    .then(result => {
      if (!req.query.sdgs) {
        res.status(200).json(result);
      } else {
        let filteredLocations = result.filter(project => {
          let valid = true;
          project.Sdgs.forEach(sdg => {
            if (!req.query.sdgs.includes(String(sdg.id))) {
              valid = false;
            }
          });
          return valid;
        });

        res.status(200).json(filteredLocations);
      }
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports.projectStatistics = (req, res) => {
  const data = {
    labels: [],
    datasets: [
      {
        data: []
      }
    ]
  };
  db.Sector.findAll({}).then(sectors => {
    const sectorNames = sectors.map(sector => {
      return sector.name;
    });
    data["labels"] = sectorNames;
    const counts = [];
    sectors.forEach((sector, i) => {
      db.Project.count({ where: { sectorId: sector.id } }).then(count => {
        counts.push(count);
        if (counts.length == sectorNames.length) {
          data.datasets = [
            {
              data: counts,
              backgroundColor: [
                "#e83338",
                "#ff9068",
                "#ffb75e",
                "#8dc26f",
                "#64b3f4",
                "#6441a5",
                "#fc67fa"
              ],
              hoverBackgroundColor: [
                "#e83338",
                "#ff9068",
                "#ffb75e",
                "#8dc26f",
                "#64b3f4",
                "#6441a5",
                "#fc67fa"
              ]
            }
          ];
          res.send(data);
        }
      });
    });
  });
};
