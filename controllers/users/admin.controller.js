const db = require("../../models/index");

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

module.exports.getMembers = (req, res) => {
  db.Member.findAll({}).then(result => {
    res.json(result);
  });
};

module.exports.getMember = (req, res) => {
  db.Article.findAll({
    where: {
      id: req.params.id
    }
  })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports.getMembersPage = (req, res) => {
  const firstMemberIndex = Number(req.query.first);
  const lastMemberIndex = Number(req.query.last);

  db.Member.findAndCountAll({
    offset: firstMemberIndex,
    limit: lastMemberIndex - firstMemberIndex
  })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.send(err);
    });
};
