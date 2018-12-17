"use strict";
const refugeeInvestmentTypesData = require("../data/refugeeInvestmentTypes");

const filterData = refugeeInvestmentTypesData.map(rft => {
  return {
    name: rft.name,
    img: rft.img,
    createdAt: new Date(),
    UpdatedAt: new Date()
  };
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("refugeeInvestmentTypes", filterData, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("refugeeInvestmentTypes", null, {});
  }
};
