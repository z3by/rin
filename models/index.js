const sequelize = require("../config/sequelize.config");

const models = [
  "Article",
  "Book",
  "Country",
  "Link",
  "Location",
  "Member",
  "Project",
  "Research",
  "Story"
];

const db = {};

const createModels = () => {
  models.forEach(modelName => {
    const Model = require(`./${modelName}.model`);
    db[modelName] = sequelize.define(modelName.toLowerCase(), Model);
  });
};

module.exports.db = db;
module.exports.createModels = createModels;
