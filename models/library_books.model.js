module.exports = `
  CREATE TABLE IF NOT EXISTS library_books (
    id INT AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    subtitle VARCHAR(300) NOT NULL,
    url VARCHAR(300),
    img VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
  )`;
