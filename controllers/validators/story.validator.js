const validator = require("validator");

const validateStory = data => {
  let errors = {};

  const inputTitle = data.title;
  const inputDesc = data.pre_description;
  const inputLens = data.lens;
  const inputText = data.text;
  const inputImgs = data.imgs;

  if (validator.isEmpty(inputTitle)) {
    errors.title = "story title is required";
  }

  if (validator.isEmpty(inputDesc)) {
    errors.desc = "story description is required";
  }

  if (validator.isEmpty(inputImgs[0])) {
    errors.imgs = "story image is required";
  }

  if (validator.isEmpty(inputLens)) {
    errors.lens = "story lens is required";
  }

  if (validator.isEmpty(inputText)) {
    errors.text = "story text is required";
  }

  return errors;
};

module.exports = validateStory;
