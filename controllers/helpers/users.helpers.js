const mysql = require("mysql");

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
module.exports.register = userInfo => {
  console.log(userInfo);
};

// check if user input is valid for register
module.exports.validateUserLogin = (userInfo, res) => {
  const errors = loginValidator(userInfo);

  const isValid = Object.keys(errors).length === 0;

  if (!isValid) {
    return res.status(400).json(errors);
  }
};

// login user
module.exports.login = userInfo => {
  console.log(userInfo);
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
        }
      }
    );
  });
};
