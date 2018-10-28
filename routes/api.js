const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");

const countriesAPI = require("../controllers/api/countries.controller");
const storiesAPI = require("../controllers/api/stories.controller");
const partnersAPI = require("../controllers/api/partners.controller");
const locationsAPI = require("../controllers/api/locations.controller");
const projectsAPI = require("../controllers/api/projects.controller");

const storage = multer.diskStorage({
  destination: "public/imgs/uploads/",
  filename: function(req, file, cb) {
    cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }
}).single("img");

//countries routes
router.get("/countries", countriesAPI.getCountries);
router.get("/countries/:id", countriesAPI.getCountry);

//stories routes
router.get("/stories", storiesAPI.getStories);
router.get("/stories/:id", storiesAPI.getStory);
router.post("/stories", storiesAPI.addStory);
router.post("/stories/image", upload, storiesAPI.uploadImage);
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
router.get("/projects/location/:id", projectsAPI.getProjectCountry);
router.get("/projects/:id", projectsAPI.getProject);
router.post("/projects", projectsAPI.addProject);
router.put("/projects/:id", projectsAPI.updateProject);
router.delete("/projects/:id", projectsAPI.deleteProject);

module.exports = router;
