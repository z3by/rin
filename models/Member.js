"use strict";
module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define(
    "Member",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      organizationName: DataTypes.STRING,
      userRole: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
      tableName: "members"
    }
  );
  Member.associate = function(models) {
    // associations can be defined here
  };
  return Member;
};
