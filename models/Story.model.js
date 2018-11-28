const Sequelize = require("sequelize");

module.exports = {
  business: {
    type: Sequelize.STRING
  },
  businessDescription: {
    type: Sequelize.STRING
  },
  storyText: {
    type: Sequelize.STRING
  },
  founders: {
    type: Sequelize.JSON
  },
  founders: {
    type: Sequelize.JSON
  },
  investors: {
    type: Sequelize.JSON
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
