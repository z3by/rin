module.exports = {
  createDB: `
    CREATE DATABASE IF NOT EXISTS rin
`,

  createCountriesTable: `
  CREATE TABLE IF NOT EXISTS countries (
    id INT AUTO_INCREMENT,
    name NVARCHAR(100) NOT NULL,
    capital NVARCHAR(100) NOT NULL,
    region NVARCHAR(100) NOT NULL,
    population INT,
    lat DOUBLE ,
    lng DOUBLE ,
    PRIMARY KEY (id)
  )`,

  createLocationsTable: `
  CREATE TABLE IF NOT EXISTS locations (
    id INT AUTO_INCREMENT,
    country_id INT,
    lng DOUBLE NOT NULL,
    lat DOUBLE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (country_id)
        REFERENCES countries (id)
)`,

  createPartnersTable: `
CREATE TABLE IF NOT EXISTS partners(
  id INT AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  logo_url VARCHAR(255) NOT NULL,
  country_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (country_id)
        REFERENCES countries (id)
)`,

  createProjectsTable: `
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
)`,

  createStoriesTable: `
CREATE TABLE IF NOT EXISTS stories(
  id INT AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  text JSON,
  imgs JSON,
  PRIMARY KEY (id)
)`
};
