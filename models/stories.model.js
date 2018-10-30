module.exports = `
  CREATE TABLE IF NOT EXISTS stories(
    id INT AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    text JSON,
    imgs JSON,
    PRIMARY KEY (id)
  )`;
