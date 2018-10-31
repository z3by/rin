const validator = require("validator");

const validateLoginInput = data => {
  let errors = {};

  const inputEmail = data.email;
  const inputPassword = data.password;

  // check if the password is empty;
  if (validator.isEmpty(inputPassword) || !data.password) {
    errors.password = "password is required";
  }

  // check if the email is empty;
  if (validator.isEmpty(inputEmail) || !data.email) {
    errors.email = "email is required";
  }

  return errors;
};

module.exports = validateLoginInput;
