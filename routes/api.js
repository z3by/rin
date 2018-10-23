const express = require("express");
const router = express.Router();
const countriesAPI = require("../controllers/countries.controller");
const storiesAPI = require("../controllers/stories.controller");
const partnersAPI = require("../controllers/partners.controller");
const locationsAPI = require("../controllers/locations.controller");
const projectsAPI = require("../controllers/projects.controller");

//countries routes
router.get("/countries", countriesAPI.getCountries);
router.get("/countries/:id", countriesAPI.getCountry);

//stories routes
router.get("/stories", storiesAPI.getStories);
router.get("/stories/:id", storiesAPI.getStory);
router.post("/stories", storiesAPI.addStory);
router.put("/stories/:id", storiesAPI.updateStory);
router.delete("/stories/:id", storiesAPI.deleteStory);

//partners routes
router.get("/partners", partnersAPI.getPartners);
router.get("/partners/:id", partnersAPI.getPartner);
router.post("/partners", partnersAPI.addPartner);
router.put("/partners/:id", partnersAPI.updatePartner);
router.delete("/partners/:id", partnersAPI.deletePartner);

//locations routes
router.get("/locations", locationsAPI.getLocations);
router.get("/locations/:id", locationsAPI.getLocation);
router.post("/locations", locationsAPI.addLocation);
router.put("/locations/:id", locationsAPI.updateLocation);
router.delete("/locations/:id", locationsAPI.deleteLocation);

//projects routes
router.get("/projects", projectsAPI.getProjects);
router.get("/projects/locations", projectsAPI.getLocations);
router.get("/projects/:id", projectsAPI.getProject);
router.post("/projects", projectsAPI.addProject);
router.put("/projects/:id", projectsAPI.updateProject);
router.delete("/projects/:id", projectsAPI.deleteProject);

module.exports = router;
