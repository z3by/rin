const mysql = require("mysql");
const dbConfig = require("../../config/db.config");
const helpers = require("../helpers/admin.helpers");

const connection = mysql.createConnection(dbConfig);
connection.connect(err => {
  if (err) throw err;
  console.log("connected");
});


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

// get the count of all members
module.exports.getUsersCount = (req, res) => {
  connection.query("select count(*) from members", (err, result) => {
    if (err) throw err;
    res.send(result[0]);
  });
}

//het selected page users in UsersList component
module.exports.getSelectedPageUsers = (req, res) => {
  const firstUserIndex = req.query.first;
  const lastUserIndex = req.query.last;

  connection.query("select * from members", (err, result) => {
    if (err) throw err;
    const allUsers = result;
    const selectPageUsers = allUsers.slice(firstUserIndex, lastUserIndex);
    res.send(selectPageUsers);
  });
}

// get the results of searching members in admin dashboard
module.exports.getSearchedMembers = (req, res) => {
  const filterOption = req.params.options;

  let qry = `SELECT * FROM members WHERE email LIKE "%${filterOption}%" OR first_name LIKE "%${filterOption}%" OR last_name LIKE "%${filterOption}%" OR organization_name LIKE "%${filterOption}%" OR user_role LIKE "%${filterOption}%"`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};



