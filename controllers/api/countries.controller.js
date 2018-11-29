const countriesData = require("../../data/countries.json");

module.exports.getCountries = (req, res) => {
  res.json(countriesData);
};

module.exports.getCountriesNames = (req, res) => {
  const countries = [];
  countriesData.forEach(country => {
    countries.push(country.name);
  });
  res.json(countries);
};
