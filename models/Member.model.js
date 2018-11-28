const Sequelize = require("sequelize");

module.exports = {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  organizationName: {
    type: Sequelize.STRING
  },
  userRole: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
};
