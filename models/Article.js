"use strict";
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    "Article",
    {
      title: DataTypes.STRING,
      subtitle: DataTypes.STRING,
      text: DataTypes.STRING,
      img: DataTypes.STRING
    },
    {
      tableName: "articles"
    }
  );
  Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};
