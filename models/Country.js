"use strict";
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define(
    "Country",
    {
      name: DataTypes.STRING,
      capital: DataTypes.STRING,
      region: DataTypes.STRING,
      population: DataTypes.INTEGER,
      lng: DataTypes.FLOAT,
      lat: DataTypes.FLOAT
    },
    {}
  );
  Country.associate = function(models) {
    // associations can be defined here
    
  };
  return Country;
};
