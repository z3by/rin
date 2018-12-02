"use strict";
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    "Project",
    {
      pending: DataTypes.BOOLEAN,
      name: DataTypes.STRING,
      organization: DataTypes.STRING,
      sector: DataTypes.STRING,
      impact: DataTypes.STRING,
      thesis: DataTypes.STRING,
      structure: DataTypes.STRING,
      refugeeInvestmentType: DataTypes.STRING,
      sdgs: DataTypes.JSON,
      investmentSize: DataTypes.INTEGER,
      countries: DataTypes.JSON,
      img: DataTypes.STRING,
      logo: DataTypes.STRING,
      year: DataTypes.DATE,
      contactInfo: DataTypes.JSON
    },
    {
      tableName: "projects"
    }
  );
  Project.associate = function(models) {
    Project.belongsTo(models.Location, {
      foreignKey: "locationId",
      as: "Location"
    });
  };
  return Project;
};
