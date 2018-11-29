'use strict';
module.exports = (sequelize, DataTypes) => {
  const Link = sequelize.define('Link', {
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    url: DataTypes.STRING,
    imgUrl: DataTypes.STRING
  }, {});
  Link.associate = function(models) {
    // associations can be defined here
  };
  return Link;
};