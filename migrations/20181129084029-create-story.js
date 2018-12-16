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
        type: Sequelize.STRING({ length: 10000 })
      },
      img: {
        type: Sequelize.STRING
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
