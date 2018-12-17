"use strict";
module.exports = (sequelize, DataTypes) => {
  const Sector = sequelize.define(
    "Sector",
    {
      name: DataTypes.STRING
    },
    {
      tableName: "sectors"
    }
  );
  Sector.associate = function(models) {
    // associations can be defined here
  };
  return Sector;
};
