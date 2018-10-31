const usersHelpers = require("../helpers/users.helpers");

// sign up new user controller;
module.exports.registerNewMember = (req, res) => {
  // validate user input;
  usersHelpers.validateUserRegister(req.body, res);

  // check if the email is taken
  usersHelpers.checkIfEmailTaken(req.body.email, res);

  // register new user if the input is valid
  usersHelpers.register(req.body, res);
};

// log in user
module.exports.loginMember = (req, res) => {
  // validate user input;
  usersHelpers.validateUserLogin(req.body, res);

  const email = req.body.email;
  const password = req.body.password;
  const userInfo = {
    email,
    password
  };
  // login user if the input is valid
  usersHelpers.login(userInfo);
};
