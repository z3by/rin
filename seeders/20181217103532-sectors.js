"use strict";
const sectors = require("../data/sectors");

const filterData = sectors.map(sector => {
  return {
    name: sector,
    createdAt: new Date(),
    UpdatedAt: new Date()
  };
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("sectors", filterData, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("sectors", null, {});
  }
};
