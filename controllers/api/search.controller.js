const db = require("../../models/index");

module.exports.search = (req, res) => {
  res.send([{ label: "ahamd", type: "project", id: "1" }, { label: "shatha" }]);
};

module.exports.searchProjects = (req, res, next) => {
  console.log(req.query);
  next();
};
