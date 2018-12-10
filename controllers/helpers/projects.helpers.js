const db = require("../../models/index");

module.exports.addLocations = (locations, projectId) => {
  return new Promise((resolve, reject) => {
    locations.forEach((location, i) => {
      location["ProjectId"] = projectId;
      db.Location.create(location)
        .then(added => {
          if (i === locations.length - 1) {
            resolve(true);
          }
        })
        .catch(err => {
          return reject(err);
        });
    });
  });
};

module.exports.joinProjectWithCountries = (countries, project) => {
  return new Promise((resolve, reject) => {
    countries.forEach((countryId, i) => {
      db.Country.find({ where: { id: countryId } }).then(country => {
        project
          .addCountry(country)
          .then(result => {
            if (i === countries.length - 1) {
              resolve(true);
            }
          })
          .catch(err => {
            reject(err);
          });
      });
    });
  });
};

module.exports.joinProjectWithSdgs = (sdgs, project) => {
  return new Promise((resolve, reject) => {
    sdgs.forEach((sdgId, i) => {
      db.Sdg.find({ where: { id: sdgId } }).then(sdg => {
        project
          .addSdg(sdg)
          .then(result => {
            if (i === sdgs.length - 1) {
              resolve(true);
            }
          })
          .catch(err => {
            reject(err);
          });
      });
    });
  });
};

module.exports.joinProjectWithInvestors = (investors, project) => {
  return new Promise((resolve, reject) => {
    investors.forEach((investorId, i) => {
      db.Investor.find({ where: { id: investorId } }).then(investor => {
        project
          .addInvestor(investor)
          .then(result => {
            if (i === investors.length - 1) {
              resolve(true);
            }
          })
          .catch(err => {
            reject(err);
          });
      });
    });
  });
};

module.exports.joinProjectWithFounders = (founders, project) => {
  return new Promise((resolve, reject) => {
    founders.forEach((founderId, i) => {
      db.Founder.find({ where: { id: founderId } }).then(founder => {
        project
          .addFounder(founder)
          .then(result => {
            if (i === founders.length - 1) {
              resolve(true);
            }
          })
          .catch(err => {
            reject(err);
          });
      });
    });
  });
};

module.exports.updateProjectLocations = (project, locations) => {
  return new Promise((resolve, reject) => {
    db.Location.destroy({ where: { ProjectId: project.id } }).then(() => {
      locations.forEach((location, i) => {
        location["ProjectId"] = project.id;
        db.Location.create(location)
          .then(added => {
            if (i === locations.length - 1) {
              resolve(true);
            }
          })
          .catch(err => {
            return reject(err);
          });
      });
    });
  });
};
