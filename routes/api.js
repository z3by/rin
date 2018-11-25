const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");

const countriesAPI = require("../controllers/api/countries.controller");
const storiesAPI = require("../controllers/api/stories.controller");
const articlesAPI = require("../controllers/api/articles.controller");
const partnersAPI = require("../controllers/api/partners.controller");
const locationsAPI = require("../controllers/api/locations.controller");
const projectsAPI = require("../controllers/api/projects.controller");
const lensesAPI = require("../controllers/api/lenses.controller");
const libraryAPI = require("../controllers/api/library.controller");

// Configure aws s3 SDK (update authentication)
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const s3 = new AWS.S3();

// Unique name of aws s3 bucket created
const myBucket = "rin-2018";

// Multer upload (Use multer-s3 to save directly to AWS instead of locally)
var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: myBucket,
    // Set public read permissions
    acl: "public-read",
    // Auto detect contet type
    contentType: multerS3.AUTO_CONTENT_TYPE,
    // Set key/ filename as original uploaded name
    filename: function (req, file, cb) {
      cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
    }
  }),
  limits: {
    fileSize: 1000000
  }
}).single("img");

// upload image route
router.post("/upload", upload, storiesAPI.uploadImage);

//countries routes
router.get("/countries", countriesAPI.getCountries);
router.get("/countries/:id", countriesAPI.getCountry);

//stories routes
router.get("/stories", storiesAPI.getStories);
router.get("/stories/search/:options", storiesAPI.getSearchedStories);
router.get("/stories/selectedpage", storiesAPI.getSelectedPageStories);
router.get("/stories/count", storiesAPI.getStoriesCount);
router.get("/stories/:id", storiesAPI.getStory);
router.post("/stories", storiesAPI.addStory);
router.put("/stories/:id", storiesAPI.updateStory);
router.delete("/stories/:id", storiesAPI.deleteStory);

//articles routes
router.get("/articles", articlesAPI.getArticles);
router.get("/articles/count", articlesAPI.getArticlesCount);
router.get("/articles/selectedpage", articlesAPI.getSelectedPageArticles);
router.get("/articles/:id", articlesAPI.getArticle);
router.post("/articles", articlesAPI.addArticle);
router.put("/articles/:id", articlesAPI.updateArticle);
router.delete("/articles/:id", articlesAPI.deleteArticles);

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

// project requests
router.get("/requests", projectsAPI.getProjectRequests);
router.put("/requests", projectsAPI.acceptProjectRequest);

//projects routes
router.get("/projects", projectsAPI.getProjects);
router.get("/projects/locations", projectsAPI.getLocations);
router.get("/projects/search/:options", projectsAPI.getSearchedProjects);
router.get("/projects/selectedpage", projectsAPI.getSelectedPageProjects);
router.get("/projects/location/:id", projectsAPI.getProjectCountry);
router.get("/projects/count", projectsAPI.getProjectsCount);
router.get("/projects/:id", projectsAPI.getProject);
router.post("/projects", projectsAPI.addProject);
router.put("/projects/:id", projectsAPI.updateProject);
router.delete("/projects/:id", projectsAPI.deleteProject);

//lenses routes
router.get("/lenses", lensesAPI.getLenses);
router.get("/lenses/:id", lensesAPI.getLens);
router.post("/lenses", lensesAPI.addLens);
router.put("/lenses/:id", lensesAPI.updateLens);
router.delete("/lenses/:id", lensesAPI.deleteLens);

// library routes
// links routes
router.get("/library/links/:index", libraryAPI.getLinks);
router.post("/library/links", libraryAPI.addLink);
router.put("/library/links/:id", libraryAPI.updateLink);
router.delete("/library/links/:id", libraryAPI.deleteLink);

module.exports = router;
