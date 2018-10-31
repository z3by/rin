// load input validators;
const registerValidator = require("../validators/register.validator");
const loginValidator = require("../validators/login.validator");
const usersHelpers = require("../helpers/users.helpers");

// sign up new user controller;
module.exports.registerNewMember = (req, res) => {
  // validate user input;
  const errors = registerValidator(req.body);
  const isValid = Object.keys(errors).length === 0;
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // register new user if the input is valid
  usersHelpers.register(req.body);
};

// log in user
module.exports.loginMember = (req, res) => {
  // validate user input;
  const errors = loginValidator(req.body);
  const isValid = Object.keys(errors).length === 0;

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;
  const userInfo = {
    email,
    password
  };
  // login user if the input is valid
  usersHelpers.login(userInfo);
};
