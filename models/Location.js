"use strict";
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define(
    "Location",
    {
      lng: DataTypes.FLOAT,
      lat: DataTypes.FLOAT
    },
    {}
  );
  Location.associate = function(models) {
    Location.belongsTo(models.Country);
  };
  return Location;
};
