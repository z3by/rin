"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("projects", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      pending: {
        type: Sequelize.BOOLEAN
      },
      impact: {
        type: Sequelize.STRING
      },
      thesis: {
        type: Sequelize.STRING
      },
      structure: {
        type: Sequelize.STRING
      },
      refugeeInvestmenType: {
        type: Sequelize.STRING
      },
      sdgs: {
        type: Sequelize.JSON
      },
      investmentSize: {
        type: Sequelize.INTEGER
      },
      countries: {
        type: Sequelize.JSON
      },
      img: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      contactInfo: {
        type: Sequelize.JSON
      },
      locationId: {
        type: Sequelize.INTEGER,
        references: {
          model: "locations",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("projects");
  }
};
