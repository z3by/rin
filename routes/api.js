const express = require("express");
const router = express.Router();

const s3Config = require("../config/s3.config");
const storiesAPI = require("../controllers/api/stories.controller");
const articlesAPI = require("../controllers/api/articles.controller");
const countriesAPI = require("../controllers/api/countries.controller");
const locationsAPI = require("../controllers/api/locations.controller");
const projectsAPI = require("../controllers/api/projects.controller");
const libraryAPI = require("../controllers/api/library.controller");
const adminAPI = require("../controllers/users/admin.controller");

// upload image route
router.post("/uploadimg", s3Config.uploadImg, (req, res) => {
  res.send(req.file);
});

// upload image route
router.post("/uploadpdf", s3Config.uploadPDF, (req, res) => {
  res.send(req.file);
});

//countries routes
router.get("/countries", countriesAPI.getCountries);
router.get("/countries/names", countriesAPI.getCountriesNames);

//stories routes
router.get("/stories", storiesAPI.getStories);
router.get("/stories/page", storiesAPI.getStoriesPage);
router.get("/stories/:id", storiesAPI.getStory);
router.post("/stories", storiesAPI.addStory);
router.put("/stories/:id", storiesAPI.updateStory);
router.delete("/stories/:id", storiesAPI.deleteStory);

//articles routes
router.get("/articles", articlesAPI.getArticles);
router.get("/articles/page", articlesAPI.getArticlesPage);
router.get("/articles/:id", articlesAPI.getArticle);
router.post("/articles", articlesAPI.addArticle);
router.put("/articles/:id", articlesAPI.updateArticle);
router.delete("/articles/:id", articlesAPI.deleteArticles);

// users routes
router.get("/members", adminAPI.getMembers);
router.get("/members/page", adminAPI.getMembersPage);
router.get("/members/:id", adminAPI.getMember);

//locations routes
router.get("/locations", locationsAPI.getLocations);
router.get("/locations/page", locationsAPI.getLocationsPage);
router.get("/locations/:id", locationsAPI.getLocation);
router.post("/locations", locationsAPI.addLocation);
router.put("/locations/:id", locationsAPI.updateLocation);
router.delete("/locations/:id", locationsAPI.deleteLocations);

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

// library routes

// links routes
router.get("/library/links/:index", libraryAPI.getLinks);
router.post("/library/links", libraryAPI.addLink);
router.put("/library/links/:id", libraryAPI.updateLink);
router.delete("/library/links/:id", libraryAPI.deleteLink);

// books routes
router.get("/library/books/:index", libraryAPI.getBooks);
router.post("/library/books", libraryAPI.addBook);
router.put("/library/books/:id", libraryAPI.updateBook);
router.delete("/library/books/:id", libraryAPI.deleteBook);

// researches routes
router.get("/library/researches/:index", libraryAPI.getResearches);
router.post("/library/researches", libraryAPI.addResearch);
router.put("/library/researches/:id", libraryAPI.updateResearch);
router.delete("/library/researches/:id", libraryAPI.deleteResearch);

module.exports = router;
