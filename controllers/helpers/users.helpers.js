const registerValidator = require("../validators/register.validator");
const loginValidator = require("../validators/login.validator");

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
