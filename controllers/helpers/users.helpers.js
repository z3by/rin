const mysql = require("mysql");
const bcrypt = require("bcryptjs");

const registerValidator = require("../validators/register.validator");
const loginValidator = require("../validators/login.validator");
const DBconfig = require("../db.config");

// check if user input is valid for register
module.exports.validateUserRegister = (userInfo, res) => {
  const errors = registerValidator(userInfo);

  const isValid = Object.keys(errors).length === 0;

  if (!isValid) {
    return res.status(400).json(errors);
  }
};

// create new user in the database
module.exports.register = (userInfo, res) => {
  const connection = mysql.createConnection(DBconfig);
  connection.connect(err => {
    if (err) throw err;
    connection.query(
      `insert into members (email, password) values ("${userInfo.email}", "${
        userInfo.password
      }")`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  });
};

// check if user input is valid for register
module.exports.validateUserLogin = (userInfo, res) => {
  const errors = loginValidator(userInfo);

  const isValid = Object.keys(errors).length === 0;

  if (!isValid) {
    return res.status(400).json(errors);
  }
};

// check if email is taken
module.exports.checkIfEmailTaken = (email, res) => {
  const connection = mysql.createConnection(DBconfig);
  connection.connect(err => {
    if (err) throw err;
    connection.query(
      `select email from members where members.email like "${email}"`,
      (err, result) => {
        if (result.length) {
          const errors = {
            email: "this email is already linked with another account"
          };
          res.status(400).json(errors);
          connection.end();
        }
      }
    );
  });
};

// hash password
module.exports.hashPassword = (password, cb) => {
  const salt = process.env.HASH_SECRET;
  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err;
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) throw err;
      cb(hash);
    });
  });
};

// login user
module.exports.login = userInfo => {
  console.log(userInfo);
};
