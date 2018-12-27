'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: DataTypes.STRING
  },
    {
      tableName: "roles"
    });
  Role.associate = function (models) {
    Role.belongsToMany(models.Permission, {
      as: "permissions",
      through: "role_permission",
      foreignKey: "roleId"
    });
  };
  return Role;
};