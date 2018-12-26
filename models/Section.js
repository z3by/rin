"use strict";
module.exports = (sequelize, DataTypes) => {
    const Section = sequelize.define(
        "Section",
        {
            title: DataTypes.STRING,
            subtitle: DataTypes.STRING,
            img: DataTypes.STRING,
            body: DataTypes.STRING
        },
        {
            tableName: "sections"
        }
    );
    Section.associate = function (models) {
        // associations can be defined here
    };
    return Section;
};
