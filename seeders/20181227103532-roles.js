"use strict";
const roles = require("../data/roles");

const filterData = roles.map(role => {
    return {
        name: role,
        createdAt: new Date(),
        UpdatedAt: new Date()
    };
});

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("roles", filterData, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("roles", null, {});
    }
};