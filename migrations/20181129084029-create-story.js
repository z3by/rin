"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("stories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      buisness: {
        type: Sequelize.STRING
      },
      buisnessDescription: {
        type: Sequelize.STRING
      },
      storyText: {
        type: Sequelize.STRING
      },
      founders: {
        type: Sequelize.JSON
      },
      investors: {
        type: Sequelize.JSON
      },
      refugeeInvestmentType: {
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
      projectId: {
        type: Sequelize.INTEGER,
        references: {
          model: "projects",
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
    return queryInterface.dropTable("stories");
  }
};
