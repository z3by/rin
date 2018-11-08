module.exports = `
  CREATE TABLE IF NOT EXISTS lenses(
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
  )`;
