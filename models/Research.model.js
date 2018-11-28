const Sequelize = require("sequelize");

module.exports = {
  title: {
    type: Sequelize.STRING
  },
  subtitle: {
    type: Sequelize.STRING
  },
  researchUrl: {
    type: Sequelize.STRING
  },
  imgUrl: {
    type: Sequelize.STRING
  },
  researchersNames: {
    type: Sequelize.JSON
  },
  year: {
    type: Sequelize.DATE
  },
  pages: {
    type: Sequelize.INTEGER
  },
  publisher: {
    type: Sequelize.STRING
  }
};
