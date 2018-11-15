module.exports = `
  CREATE TABLE IF NOT EXISTS countries (
    id INT AUTO_INCREMENT,
    name NVARCHAR(100) NOT NULL,
    capital NVARCHAR(100) NOT NULL,
    region NVARCHAR(100) NOT NULL,
    population INT,
    lat DOUBLE ,
    lng DOUBLE ,
    PRIMARY KEY (id)
  )`;
