const usersHelpers = require("../helpers/users.helpers");

// sign up new user controller;
module.exports.registerNewMember = (req, res) => {
  const userInfo = req.body;

  // validate user input;
  usersHelpers.validateUserRegister(userInfo, res);

  // check if the email is taken
  usersHelpers.checkIfEmailTaken(userInfo.email, res);

  usersHelpers.hashPassword(userInfo.password, hashedPassword => {
    // register new user with hashed password
    userInfo.password = hashedPassword;
    usersHelpers.register(userInfo, res);
  });
};

// log in user
module.exports.loginMember = (req, res) => {
  const userInfo = req.body;

  // validate user input;
  usersHelpers.validateUserLogin(userInfo, res);

  // check if email is correct
  usersHelpers.checkEmail(userInfo.email, res);

  // check if password is correct
  usersHelpers.checkPassword(userInfo, res);

  // create jwt and send it to the client
  usersHelpers.sendJWT(userInfo, res);
};
