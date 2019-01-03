"use strict";
const routes = [
  "projects",
  "stories",
  "blog",
  "researches",
];

let permissions = [];
routes.forEach(route => { 
  permissions = [
    ...permissions,
    'can create new ' + route,
  ]
})

const permissionsRecords = permissions.map(permission => {
  return {
      name: permission,
      createdAt: new Date(),
      UpdatedAt: new Date()
  };
});



module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("permissions", permissionsRecords, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("permissions", null, {});
  }
};
