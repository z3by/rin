const validator = require("validator");
const isEmpty = require("./isEmpty");
const strongPassword = require("./isStrongPassword");

const validateRegisterInput = data => {
  let errors = {};

  const inputOrgName = !isEmpty(data.organization_name)
    ? data.organization_name
    : "";
  const inputUserRole = !isEmpty(data.user_role) ? data.user_role : "";
  const inputFiratName = !isEmpty(data.first_name) ? data.first_name : "";
  const inputLastName = !isEmpty(data.last_name) ? data.last_name : "";
  const inputPassword = !isEmpty(data.password) ? data.password : "";
  const inputPasswordConfirm = !isEmpty(data.password2) ? data.password2 : "";
  const inputEmail = !isEmpty(data.email) ? data.email : "";

  // check if the password is empty;
  if (validator.isEmpty(inputPassword)) {
    errors.password = "password is required";
  }

  // check if the first name is empty;
  if (validator.isEmpty(inputFiratName)) {
    errors.firstName = "first name is required";
  }

  // check if the last name is empty;
  if (validator.isEmpty(inputLastName)) {
    errors.lastName = "last name is required";
  }

  // check if the organization name is empty;
  if (validator.isEmpty(inputOrgName)) {
    errors.organizationName = "organization name is required";
  }

  // check if the user role is empty;
  if (validator.isEmpty(inputUserRole)) {
    errors.userRole = "user role is required";
  }

  // check if the confirm password is empty;
  if (validator.isEmpty(inputPasswordConfirm)) {
    errors.passwordConfirm = "confirm your password";
  }

  // check if the confirm password is empty;
  if (!validator.equals(inputPassword, inputPasswordConfirm)) {
    errors.passwordConfirm = "passwords doesn't match";
  }

  // check if the email is empty;
  if (validator.isEmpty(inputEmail)) {
    errors.email = "email is required";
  }

  //check if the password is invaild
  const inValidPassword = validator.isLength(inputPassword, {
    min: 6,
    max: 30
  });
  if (!inValidPassword) {
    errors.password = "password must be at least 6 characters";
  }

  // check if the email is invalid
  if (!validator.isEmail(inputEmail)) {
    errors.email = "email is invalid";
  }

  // check if the password is strong enough;
  if (!strongPassword.validate(inputPassword)) {
    const errorsArray = strongPassword.validate(inputPassword, { list: true });

    // check if the password contains spaces;
    if (errorsArray.includes("spaces")) {
      errors.password = "the password can not contain spaces";
    }

    // check if the password contains numbers;
    if (errorsArray.includes("digits")) {
      errors.password = "the password must contain at least one number";
    }

    // check if the password contains uppercase;
    if (errorsArray.includes("uppercase")) {
      errors.password =
        "the password must contain at least one uppercase character";
    }

    // check if the password contains lowercase;
    if (errorsArray.includes("lowercase")) {
      errors.password =
        "the password must contain at least one lowercase character";
    }
  }
  return errors;
};

module.exports = validateRegisterInput;
