const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
        connection.end();
      }
    );
  });
};

// creat and send jwt for the user after login successfully
module.exports.sendJWT = (userInfo, res) => {
  const payload = userInfo;

  jwt.sign(
    payload,
    process.env.HASH_SECRET,
    { expiresIn: 5000 },
    (err, token) => {
      if (err) throw err;
      else {
        res.json({
          success: true,
          token: `Bearer ${token}`
        });
      }
    }
  );
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

// check if email is exists
module.exports.checkEmail = (email, res) => {
  const connection = mysql.createConnection(DBconfig);
  connection.connect(err => {
    if (err) throw err;
    connection.query(
      `select exists(select * from members where members.email = "${email}" limit 1)`,
      (err, exists) => {
        if (err) throw err;
        if (!exists) {
          const errors = {};
          errors.email = "this email is not correct";
          res.status(400).json(errors);
          connection.end();
        }
      }
    );
  });
};

// check if password is correct
module.exports.checkPassword = (userInfo, res) => {
  const connection = mysql.createConnection(DBconfig);

  connection.connect(err => {
    if (err) throw err;
    connection.query(
      `select * from members where members.email = "${userInfo.email}" limit 1`,
      (err, result) => {
        const password = result[0].password;
        bcrypt.compare(userInfo.password, password, (err, match) => {
          if (err) throw err;

          if (!match) {
            const errors = {};
            errors.password = "password is wrong";
            res.status(400).json(errors);
            connection.end();
          }
        });
      }
    );
  });
};
