// load input validators;
const registerValidator = require("../../validators/register");
const loginValidator = require("../../validators/login");
const helpers = require("../helpers/users.helpers");

// sign up new user controller;
module.exports.signUp = (req, res) => {
  // validate user input;
  const errors = registerValidator(req.body);
  const isValid = Object.keys(errors).length === 0;
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // register new user if the input is valid
  helpers.signUpNewUser(req.body);
};
