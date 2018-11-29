const countriesData = require("../../data/countries.json");

module.exports.getCountries = (req, res) => {
  const countries = [];
  countriesData.forEach(country => {
    countries.push(country.name);
  });
  res.json(countries);
};
