"use strict";
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define(
    "Story",
    {
      buisness: DataTypes.STRING,
      buisnessDescription: DataTypes.STRING,
      storyText: DataTypes.STRING,
      img: DataTypes.STRING
    },
    {
      tableName: "stories"
    }
  );
  Story.associate = function(models) {
    Story.belongsTo(models.Project, { as: "project" });
  };
  return Story;
};
