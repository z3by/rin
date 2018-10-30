module.exports = `
  CREATE TABLE IF NOT EXISTS locations (
    id INT AUTO_INCREMENT,
    country_id INT,
    lng DOUBLE NOT NULL,
    lat DOUBLE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (country_id)
        REFERENCES countries (id)
)`;
