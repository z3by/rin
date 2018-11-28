const Sequelize = require("sequelize");

module.exports = {
  title: {
    type: Sequelize.STRING
  },
  subtitle: {
    type: Sequelize.STRING
  },
  bookUrl: {
    type: Sequelize.STRING
  },
  coverUrl: {
    type: Sequelize.STRING
  }
};
