const Sequelize = require("sequelize");

module.exports = {
  name: {
    type: Sequelize.STRING
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
  refugeeInvestementType: {
    type: Sequelize.STRING
  },
  sdgs: {
    type: Sequelize.STRING
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
  }
};
