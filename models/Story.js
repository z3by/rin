"use strict";
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define(
    "Story",
    {
      buisness: DataTypes.STRING,
      buisnessDescription: DataTypes.STRING,
      storyText: DataTypes.STRING,
      founders: DataTypes.JSON,
      investors: DataTypes.JSON,
      refugeeInvestmentType: DataTypes.STRING,
      sdgs: DataTypes.JSON,
      investmentSize: DataTypes.INTEGER,
      countries: DataTypes.JSON,
      img: DataTypes.STRING,
      logo: DataTypes.STRING,
      contactInfo: DataTypes.JSON
    },
    {
      tableName: "stories"
    }
  );
  Story.associate = function(models) {
    Story.belongsTo(models.Project);
  };
  return Story;
};