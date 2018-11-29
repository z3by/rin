"use strict";
module.exports = (sequelize, DataTypes) => {
  const location = sequelize.define(
    "location",
    {
      lng: DataTypes.FLOAT,
      lat: DataTypes.FLOAT
    },
    {}
  );
  location.associate = function(models) {
    // associations can be defined here
  };
  return location;
};
