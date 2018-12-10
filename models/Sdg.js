"use strict";
module.exports = (sequelize, DataTypes) => {
  const Sdg = sequelize.define(
    "Sdg",
    {
      name: DataTypes.STRING,
      logo: DataTypes.STRING
    },
    {
      tableName: "sdgs"
    }
  );
  Sdg.associate = function(models) {
    Sdg.belongsToMany(models.Project, { through: "project_sdg" });
  };
  return Sdg;
};
