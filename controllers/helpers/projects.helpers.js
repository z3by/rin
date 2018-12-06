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
        country
          .addProject(project)
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
