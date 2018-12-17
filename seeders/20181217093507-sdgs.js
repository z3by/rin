"use strict";
const sdgsData = require("../data/sdgs");

const filterData = sdgsData.map(sdg => {
  return {
    name: sdg.name,
    logo: sdg.logo,
    createdAt: new Date(),
    UpdatedAt: new Date()
  };
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("sdgs", filterData, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("sdgs", null, {});
  }
};
