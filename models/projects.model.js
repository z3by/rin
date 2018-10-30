module.exports = `
  CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    start_date DATE,
    capacity INT NOT NULL,
    location_id INT,
    organization_name VARCHAR(255) NOT NULL,
    img_url VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    project_description TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (location_id)
        REFERENCES locations (id)
)`;
