const isEmpty = value => {
  const isValEmpty =
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length !== 0) ||
    (typeof value === "string" && value.trim().length === 0);

  return isValEmpty;
};

module.exports = isEmpty;
