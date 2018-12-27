"use strict";
const adminInfo = require("../data/adminInfo");


const adminData = {
    firstName: adminInfo.firstName,
    lastName: adminInfo.lastName,
    email: adminInfo.email,
    organizationName: adminInfo.organizationName,
    isSuperUser: adminInfo.isSuperUser,
    password: adminInfo.password,
    createdAt: new Date(),
    UpdatedAt: new Date()
};

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("users", [adminData], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("users", null, {});
    }
};