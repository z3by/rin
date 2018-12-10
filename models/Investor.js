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
    Investor.belongsTo(models.Contact, { as: "contact" });
    Investor.belongsToMany(models.Project, {
      as: "projects",
      through: "project_investor",
      foreignKey: "investorId"
    });
  };
  return Investor;
};
