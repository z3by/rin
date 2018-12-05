const countriesData = require("../../data/countries.json");
const db = require("../../models/index");

module.exports.getCountries = (req, res) => {
  db.Country.findAll().then(result => {
    res.status(200).json(result);
  });
};

module.exports.getCountriesNames = (req, res) => {
  db.Country.findAll().then(result => {
    const countries = [];
    result.forEach(country => {
      countries.push(country.name);
    });
    res.status(200).json(countries);
  });
};

module.exports.fillCountryTable = (req, res) => {
  let i = 1;
  db.Country.count().then(count => {
    if (!!count) {
      return;
    }
  });
  countriesData.forEach(country => {
    db.Country.create(country).then(created => {
      i++;
      if (i >= countriesData.length) {
        res.send(201);
      }
    });
  });
};
