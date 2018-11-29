const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerValidator = require("../validators/register.validator");
const loginValidator = require("../validators/login.validator");
const db = require("../../models/index");

// check if user input is valid for register
module.exports.validateUserRegister = userInfo => {
  return new Promise((resolve, reject) => {
    const errors = registerValidator(userInfo);

    const isValid = Object.keys(errors).length === 0;
    if (isValid) {
      resolve(isValid);
    } else {
      reject(errors);
    }
  });
};

// create new user in the database
module.exports.register = userInfo => {
  return new Promise((resolve, reject) => {
    db.Member.create(userInfo).then(result => {
      resolve(result);
    });
  }).catch(err => {
    reject(err);
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
    db.Member.count({ where: { email: email } }).then(result => {
      if (result) {
        const errors = {
          email: "this email is already linked with another account"
        };
        reject(errors);
      } else {
        resolve(true);
      }
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
    db.Member.count({ where: { email: email } }).then(result => {
      if (!result) {
        const errors = {
          email: "make sure the email is correct and try again"
        };
        reject(errors);
      } else {
        resolve(true);
      }
    });
  });
};

// check if password is correct
module.exports.checkPassword = userInfo => {
  return new Promise((resolve, reject) => {
    db.Member.findAll({
      where: {
        email: userInfo.email
      }
    })
      .then(result => {
        const hashedPassword = result[0].dataValues.password;
        bcrypt.compare(userInfo.password, hashedPassword, (err, match) => {
          if (err) reject(err);
          else {
            resolve(!!match);
            console.log(!!match);
          }
        });
      })
      .catch(err => {
        reject(err);
      });
  });
};

// creat and create jwt for the user after login successfully
module.exports.createJWT = userInfo => {
  return new Promise((resolve, reject) => {
    const payload = userInfo;

    jwt.sign(
      payload,
      process.env.HASH_SECRET,
      { expiresIn: 5000 },
      (err, token) => {
        if (err) reject(err);
        else {
          resolve(token);
        }
      }
    );
  });
};

// check if jwt valid
module.exports.checkJWT = token => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.HASH_SECRET, (err, decoded) => {
      if (err) reject(err);
      else {
        resolve(decoded);
      }
    });
  });
};
