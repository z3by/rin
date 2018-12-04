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
    Project.hasMany(models.Location, { as: "locations" });
    Project.belongsTo(models.Contact, { as: "contact" });
    Project.belongsToMany(models.Investor, {
      as: "Investors",
      through: "project_investor",
      foreignKey: "projectId"
    });
    Project.belongsToMany(models.Founder, {
      as: "Founders",
      through: "project_founder",
      foreignKey: "projectId"
    });
    Project.belongsToMany(models.Country, {
      as: "Countries",
      through: "project_country",
      foreignKey: "projectId"
    });
    Project.belongsToMany(models.Sdg, { as: "Sdgs", through: "project_sdg" });
  };

  return Project;
};
