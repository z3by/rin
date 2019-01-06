"use strict";

const countriesData = require("../data/countries.json");
const filterData = countriesData.map(country => {
  
  return {
    name: country.name,
    alpha3Code: country.alpha3Code,
    createdAt: new Date(),
    UpdatedAt: new Date()
  };
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("countries", filterData, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("countries", null, {});
  }
};
