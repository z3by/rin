"use strict";
const routes = [
  "projects",
  "stories",
  "blog",
  "users",
  "researches",
  "news",
  "roles",
];

let permissions = [];
routes.forEach(route => { 
  permissions = [
    ...permissions,
    'can see ' + route,
    'can create new ' + route,
    'can update ' + route,
    'can delete ' + route,
    'can approve ' + route + ' creation',
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
