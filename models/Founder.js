"use strict";
module.exports = (sequelize, DataTypes) => {
  const Founder = sequelize.define(
    "Founder",
    {
      name: DataTypes.STRING
    },
    {
      tableName: "founders"
    }
  );
  Founder.associate = function(models) {
    // associations can be defined here
  };
  return Founder;
};
