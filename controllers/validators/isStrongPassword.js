const passwordValidator = require("password-validator");

const schema = new passwordValidator();

// Add properties to it
schema
  .is()
  .min(6) // Minimum length 8
  .is()
  .max(30) // Maximum length 100
  .has()
  .uppercase() // Must have uppercase letters
  .has()
  .lowercase() // Must have lowercase letters
  .has()
  .digits() // Must have digits
  .has()
  .not()
  .spaces(); // Should not have spaces

module.exports = schema;
