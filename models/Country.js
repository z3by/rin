"use strict";
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define(
    "Country",
    {
      name: DataTypes.STRING,
      flag: DataTypes.STRING,
      alpha3Code: DataTypes.STRING
    },
    {
      tableName: "countries"
    }
  );
  Country.associate = function(models) {
    Country.belongsToMany(models.Project, {
      as: "projects",
      through: "project_country",
      foreignKey: "countryId"
    });
  };
  return Country;
};
