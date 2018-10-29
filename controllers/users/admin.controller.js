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
