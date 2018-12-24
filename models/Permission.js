'use strict';
module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define('Permission', {
    name: DataTypes.STRING
  },
    {
      tableName: "permissions"
    });
  Permission.associate = function (models) {
    Permission.belongsToMany(models.Role, {
      as: "roles",
      through: "role_permission",
      foreignKey: "permissionId"
    });
  };
  return Permission;
};