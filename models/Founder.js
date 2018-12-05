"use strict";
module.exports = (sequelize, DataTypes) => {
  const Founder = sequelize.define(
    "Founder",
    {
      name: DataTypes.STRING
    },
    {
      tableName: "founders"
    }
  );
  Founder.associate = function(models) {
    Founder.belongsTo(models.Contact, { as: "contact" });
    Founder.belongsToMany(models.Project, {
      as: "projects",
      through: "project_founder",
      foreignKey: "founderId"
    });
  };
  return Founder;
};
