const usersHelpers = require("../helpers/users.helpers");

// sign up new user controller;
module.exports.registerNewMember = (req, res) => {
  const userInfo = req.body;

  // validate user input;
  usersHelpers
    .validateUserRegister(userInfo)
    .then(valid => {
      // check if the email is taken
      usersHelpers
        .checkIfEmailTaken(userInfo.email)
        .then(valid => {
          // hash the password before adding it to the database
          usersHelpers.hashPassword(userInfo.password).then(hash => {
            userInfo.password = hash;
            usersHelpers.register(userInfo).then(added => {
              return res.status(201).json(added);
            });
          });
        })
        .catch(errors => {
          return res.status(400).json(errors);
        });
    })
    .catch(errors => {
      return res.status(400).json(errors);
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
