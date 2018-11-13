const helpers = require("../helpers/admin.helpers");

module.exports.isAdmin = (req, res) => {
  if (req.session.adminLogged) {
    res.send(true);
  } else {
    res.send(false);
  }
};

module.exports.loginAdmin = (req, res) => {
  if (req.body.username === "admin" && req.body.password === "admin") {
    req.session.adminLogged = true;
    res.send(true);
  } else {
    if (!req.session.adminLogged) {
      res.send(false);
    }
  }
};

// get all mmebers
module.exports.getAllMembers = (req, res) => {
  helpers
    .getAllUsers()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
    });
};
