"use strict";
const sections = require("../data/sections");

const filterData = sections.map(section => {
  return {
    title: section.title,
    subtitle: section.subtitle,
    img: section.img,
    body: section.body,
    createdAt: new Date(),
    UpdatedAt: new Date()
  };
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("sections", filterData, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("sections", null, {});
  }
};
