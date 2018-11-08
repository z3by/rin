module.exports = `
  CREATE TABLE IF NOT EXISTS members(
    id INT AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    organization_name VARCHAR(255) NOT NULL,
    user_role VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
  )`;
