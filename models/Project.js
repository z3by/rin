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
      investmentSize: DataTypes.INTEGER,
      img: DataTypes.STRING,
      logo: DataTypes.STRING,
      year: DataTypes.DATE
    },
    {
      tableName: "projects"
    }
  );

  Project.associate = function(models) {
    Project.hasMany(models.Story, { as: "stories" });
    Project.hasOne(models.Contact, { as: "contact" });
    Project.belongsToMany(models.Investor, { through: "ProjectInvestor" });
    Project.belongsToMany(models.Founder, { through: "ProjectFounder" });
    Project.belongsToMany(models.Country, { through: "ProjectCountry" });
    Project.belongsToMany(models.Sdg, { through: "ProjectSdg" });
  };

  return Project;
};
