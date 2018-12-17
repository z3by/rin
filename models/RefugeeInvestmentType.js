"use strict";
module.exports = (sequelize, DataTypes) => {
  const RefugeeInvestmentType = sequelize.define(
    "RefugeeInvestmentType",
    {
      name: DataTypes.STRING,
      img: DataTypes.STRING
    },
    {
      tableName: "refugeeInvestmentTypes"
    }
  );
  RefugeeInvestmentType.associate = function(models) {};
  return RefugeeInvestmentType;
};
