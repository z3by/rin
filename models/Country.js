"use strict";
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define(
    "Country",
    {
      name: DataTypes.STRING
    },
    {
      tableName: "countires"
    }
  );
  Country.associate = function(models) {
    // associations can be defined here
  };
  return Country;
};
