'use strict';
module.exports = (sequelize, DataTypes) => {
  const Research = sequelize.define('Research', {
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    researchUrl: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    researchers: DataTypes.JSON,
    year: DataTypes.DATE,
    pages: DataTypes.INTEGER,
    publisher: DataTypes.STRING
  }, {});
  Research.associate = function(models) {
    // associations can be defined here
  };
  return Research;
};