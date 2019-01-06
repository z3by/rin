const countriesData = require("../../data/countries.json");
const db = require("../../models/index");

module.exports.getCountries = (req, res) => {
  db.Country.findAll().then(result => {
    res.status(200).json(result);
  });
};

module.exports.getCountriesNames = (req, res) => {
  db.Country.findAll().then(result => { 
    res.status(200).json(result)
  })
};
