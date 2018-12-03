"use strict";
module.exports = (sequelize, DataTypes) => {
  const Investor = sequelize.define(
    "Investor",
    {
      name: DataTypes.STRING,
      logo: DataTypes.STRING
    },
    {
      tableName: "investors"
    }
  );
  Investor.associate = function(models) {
    Investor.belongsToMany(models.Project, { through: "ProjectInvestor" });
  };
  return Investor;
};
