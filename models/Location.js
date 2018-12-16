"use strict";
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define(
    "Location",
    {
      lng: DataTypes.FLOAT,
      lat: DataTypes.FLOAT
    },
    {
      tableName: "locations"
    }
  );
  Location.associate = function(models) {};
  return Location;
};
