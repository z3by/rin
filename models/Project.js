"use strict";
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    "Project",
    {
      name: DataTypes.STRING,
      impact: DataTypes.STRING,
      thesis: DataTypes.STRING,
      structure: DataTypes.STRING,
      refugeeInvestmenType: DataTypes.STRING,
      sdgs: DataTypes.JSON,
      investmentSize: DataTypes.INTEGER,
      countries: DataTypes.JSON,
      img: DataTypes.STRING,
      logo: DataTypes.STRING,
      contactInfo: DataTypes.JSON
    },
    {
      tableName: "projects"
    }
  );
  Project.associate = function(models) {
    Project.belongsTo(models.Location);
  };
  return Project;
};
