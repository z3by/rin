"use strict";
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define(
    "Contact",
    {
      phone1: DataTypes.STRING,
      phone2: DataTypes.STRING,
      email1: DataTypes.STRING,
      email2: DataTypes.STRING,
      website: DataTypes.STRING,
      facebook: DataTypes.STRING,
      twitter: DataTypes.STRING,
      instagram: DataTypes.STRING,
      fax: DataTypes.STRING,
      address: DataTypes.STRING
    },
    {
      tableName: "contacts"
    }
  );
  Contact.associate = function(models) {};
  return Contact;
};
