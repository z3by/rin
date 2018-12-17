"use strict";
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    "Project",
    {
      pending: DataTypes.BOOLEAN,
      name: DataTypes.STRING,
      organization: DataTypes.STRING,
      impact: DataTypes.STRING,
      thesis: DataTypes.STRING,
      structure: DataTypes.STRING,
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
    Project.hasMany(models.Story, { as: "stories", onDelete: "cascade" });
    Project.hasMany(models.Location, { as: "locations", onDelete: "cascade" });
    Project.belongsTo(models.Contact, { as: "contact", onDelete: "cascade" });
    Project.belongsTo(models.Sector, { as: "sector" });
    Project.belongsTo(models.RefugeeInvestmentType, {
      as: "refugeeInvestmentType"
    });
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
