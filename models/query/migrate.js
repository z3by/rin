module.exports = {
  createDB: `
    CREATE DATABASE IF NOT EXISTS rin
`,

  createCountriesTable: `
  CREATE TABLE IF NOT EXISTS countries (
    id INT AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    capital VARCHAR(50) NOT NULL,
    region VARCHAR(50) NOT NULL,
    population INT,
    lat FLOAT,
    lng FLOAT,
    PRIMARY KEY (id)
  )`,

  createLocationsTable: `
  CREATE TABLE IF NOT EXISTS locations (
    id INT AUTO_INCREMENT,
    country_id INT,
    lng FLOAT NOT NULL,
    lat FLOAT NOT NULL,
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
    partner_id INT,
    organization_name VARCHAR(255) NOT NULL,
    img_url VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    project_description TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (location_id)
        REFERENCES locations (id),
    FOREIGN KEY (partner_id)
        REFERENCES partners (id)
)`,

  createStoriesTable: `
CREATE TABLE IF NOT EXISTS stories(
  id INT AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  text JSON,
  imgs JSON,
  partner_id INT,
  project_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (partner_id)
        REFERENCES partners (id),
  FOREIGN KEY (project_id)
        REFERENCES projects (id)
)`,
};
