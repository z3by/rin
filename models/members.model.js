module.exports = `
  CREATE TABLE IF NOT EXISTS members(
    id INT AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
  )`;
