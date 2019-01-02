"use strict";
const routes = [
  "stories",
  "blog",
  "projects",
  "library",
  "founders",
  "sectors",
  "roles",
  "users"
];

let permissions = [];
routes.forEach(route => { 
  permissions = [
    ...permissions,
    'can add new ' + route,
    'can update ' + route,
    'can delete ' + route,
    'can see ' + route,
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

  down: (queryInterface, Sequelize) => {}
};
