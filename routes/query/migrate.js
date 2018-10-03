module.exports = {
  createDB: `
    CREATE DATABASE IF NOT EXISTS rin
`,
  createTypeTable: `    
CREATE TABLE IF NOT EXISTS project_type (
    id INT AUTO_INCREMENT,
    project_type VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
)`,
  createLocationTable: `

CREATE TABLE IF NOT EXISTS location (
    id INT AUTO_INCREMENT,
    country VARCHAR(255) NOT NULL,
    lng VARCHAR(255) NOT NULL,
    lat VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
)`,
  createProjectsTable: `

CREATE TABLE IF NOT EXISTS project (
    id INT AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    start_date DATE,
    capacity INT NOT NULL,
    location_id INT NOT NULL,
    organization_name VARCHAR(255) NOT NULL,
    img_url VARCHAR(255) NOT NULL,
    type_id INT NOT NULL,
    project_description TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (location_id)
        REFERENCES location (id),
    FOREIGN KEY (type_id)
        REFERENCES project_type (id)
)
`
};
