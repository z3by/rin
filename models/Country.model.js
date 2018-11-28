const Sequelize = require("sequelize");

module.exports = {
  name: {
    type: Sequelize.STRING
  },
  capital: {
    type: Sequelize.STRING
  },
  region: {
    type: Sequelize.STRING
  },
  population: {
    type: Sequelize.INTEGER
  },
  lng: {
    type: Sequelize.FLOAT
  },
  lat: {
    type: Sequelize.FLOAT
  }
};
