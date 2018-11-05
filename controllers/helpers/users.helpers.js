const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerValidator = require("../validators/register.validator");
const loginValidator = require("../validators/login.validator");
const DBconfig = require("../db.config");

// check if user input is valid for register
module.exports.validateUserRegister = () => {
  return new Promise((resolve, reject) => {
    const errors = registerValidator(userInfo);

    const isValid = Object.keys(errors).length === 0;

    if (!isValid) {
      resolve(true);
    } else {
      reject(errors);
    }
  });
};

// create new user in the database
module.exports.register = userInfo => {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(DBconfig);
    connection.connect(err => {
      if (err) throw err;
      connection.query(
        `insert into members (email, password) values ("${userInfo.email}", "${
          userInfo.password
        }")`,
        (err, result) => {
          if (err) reject(err);
          else {
            resolve(result);
            connection.end();
          }
        }
      );
    });
  });
};

// creat and send jwt for the user after login successfully
module.exports.sendJWT = userInfo => {
  return new Promise((resolve, reject) => {
    const payload = userInfo;

    jwt.sign(
      payload,
      process.env.HASH_SECRET,
      { expiresIn: 5000 },
      (err, token) => {
        if (err) reject(err);
        else {
          resolve(`Bearer ${token}`);
        }
      }
    );
  });
};

// check if user input is valid for register
module.exports.validateUserLogin = userInfo => {
  return new Promise((resolve, reject) => {
    const errors = loginValidator(userInfo);

    const isValid = Object.keys(errors).length === 0;

    if (!isValid) {
      reject(errors);
    } else {
      resolve(true);
    }
  });
};

// check if email is taken
module.exports.checkIfEmailTaken = email => {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(DBconfig);
    connection.connect(err => {
      if (err) throw err;
      connection.query(
        `select email from members where members.email like "${email}"`,
        (err, result) => {
          if (err) {
            connection.end();
            reject(err);
          }
          if (result.length) {
            const errors = {
              email: "this email is already linked with another account"
            };
            connection.end();
            resolve(errors);
          } else {
            connection.end();
            resolve(false);
          }
        }
      );
    });
  });
};

// hash password
module.exports.hashPassword = password => {
  return new Promise((resolve, reject) => {
    const salt = process.env.HASH_SECRET;
    bcrypt.genSalt(10, (err, salt) => {
      if (err) throw err;
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) reject(err);
        resolve(hash);
      });
    });
  });
};

// check if email is exists
module.exports.checkEmail = email => {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(DBconfig);
    connection.connect(err => {
      if (err) throw err;
      connection.query(
        `select exists(select * from members where members.email = "${email}" limit 1)`,
        (err, exists) => {
          if (err) throw reject(err);
          connection.end();
          resolve(exists);
        }
      );
    });
  });
};

// check if password is correct
module.exports.checkPassword = userInfo => {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(DBconfig);

    connection.connect(err => {
      if (err) throw reject(err);
      connection.query(
        `select * from members where members.email = "${
          userInfo.email
        }" limit 1`,
        (err, result) => {
          if (err) {
            reject(err);
          }

          const password = result[0].password;
          bcrypt.compare(userInfo.password, password, (err, match) => {
            if (err) reject(err);

            connection.end();
            resolve(match);
          });
        }
      );
    });
  });
};
