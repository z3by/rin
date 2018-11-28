const Sequelize = require("sequelize");

module.exports = {
  title: {
    type: Sequelize.STRING
  },
  subtitle: {
    type: Sequelize.STRING
  },
  text: {
    type: Sequelize.STRING
  },
  img: {
    type: Sequelize.STRING
  }
};
