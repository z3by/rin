module.exports = `
  CREATE TABLE IF NOT EXISTS articles (
    id INT AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    subtitle VARCHAR(3000) NOT NULL,
    text VARCHAR(3000),
    imgs JSON,
    PRIMARY KEY (id)
  )`;
