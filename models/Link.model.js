const Sequelize = require("sequelize");

module.exports = {
  title: {
    type: Sequelize.STRING
  },
  subtitle: {
    type: Sequelize.STRING
  },
  url: {
    type: Sequelize.STRING
  },
  imgUrl: {
    type: Sequelize.STRING
  }
};
