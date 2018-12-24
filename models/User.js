'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    organizationName: DataTypes.STRING,
    isSuperUser: DataTypes.BOOLEAN,
    password: DataTypes.STRING
  },
    {
      tableName: "users"
    });
  User.associate = function (models) {
    // associations can be defined here
    User.belongsTo(models.Role, { as: "role" });
  };
  return User;
};