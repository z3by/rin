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
      sector: {
        type: Sequelize.STRING
      },
      pending: {
        type: Sequelize.BOOLEAN
      },
      organization: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.DATE
      },
      impact: {
        type: Sequelize.STRING({ length: 1000 })
      },
      thesis: {
        type: Sequelize.STRING({ length: 1000 })
      },
      structure: {
        type: Sequelize.STRING({ length: 1000 })
      },
      refugeeInvestmentType: {
        type: Sequelize.STRING
      },
      investmentSize: {
        type: Sequelize.INTEGER
      },
      img: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      contactId: {
        type: Sequelize.INTEGER,
        references: {
          model: "contacts",
          key: "id"
        }
      },
      refugeeInvestmentTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "refugeeInvestmentTypes",
          key: "id"
        }
      },
      sectorId: {
        type: Sequelize.INTEGER,
        references: {
          model: "sectors",
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
