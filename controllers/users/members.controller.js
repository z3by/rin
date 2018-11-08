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
  usersHelpers
    .validateUserLogin(userInfo)
    .then(valid => {
      // check if email is correct
      usersHelpers
        .checkEmail(userInfo.email)
        .then(exists => {
          if (exists) {
            // check if password is correct
            usersHelpers
              .checkPassword(userInfo)
              .then(match => {
                if (match) {
                  // create jwt and send it to the client
                  usersHelpers.createJWT(userInfo).then(jwt => {
                    res.status(200).json({ token: jwt });
                  });
                }
              })
              .catch(errors => {
                return res.status(400).json(errors);
              });
          }
        })
        .catch(errors => {
          return res.status(400).json(errors);
        });
    })
    .catch(errors => {
      return res.status(400).json(errors);
    });
};

// check if the user is logged in
module.exports.isLoggedin = (req, res) => {
  const token = req.body.token;

  usersHelpers
    .checkJWT(token)
    .then(decoded => {
      const currentDate = new Date().getTime() / 1000;
      if (decoded.exp < currentDate) {
        res.status(404).json({
          status: "expiered"
        });
      } else {
        res.status(200).json({
          status: "valid"
        });
      }
    })
    .catch(err => {
      res.status(400).json({
        status: "expiered"
      });
    });
};
