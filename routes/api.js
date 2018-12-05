const express = require("express");
const router = express.Router();

const s3Config = require("../config/s3.config");
const storiesAPI = require("../controllers/api/stories.controller");
const articlesAPI = require("../controllers/api/articles.controller");
const investorAPI = require("../controllers/api/investors.controller");
const countriesAPI = require("../controllers/api/countries.controller");
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

//projects routes
router.get("/projects", projectsAPI.getProjects);
router.get("/projectslocations", projectsAPI.getProjectsLocations);
router.get("/projects/page", projectsAPI.getProjectsPage);
router.get("/projects/:id", projectsAPI.getProject);
router.post("/projects", projectsAPI.addProject);
router.put("/projects/:id", projectsAPI.updateProject);
router.delete("/projects/:id", projectsAPI.deleteProjects);
// // project requests
router.get("/requests", projectsAPI.getProjectRequestsPage);

// investor routes
router.get("/investors", investorAPI.getInvestors);
router.get("/investors/page", investorAPI.getInvestorsPage);
router.get("/investors/:id", investorAPI.getInvestor);
router.post("/investors", investorAPI.addInvestor);
router.put("/investors/:id", investorAPI.updateInvestor);
router.delete("/investors/:id", investorAPI.deleteInvestors);

// library routes ---------------------------
// links routes
router.get("/links", libraryAPI.getLinks);
router.get("/links/page", libraryAPI.getLinksPage);
router.get("/links/:id", libraryAPI.getLink);
router.post("/links", libraryAPI.addLink);
router.put("/links/:id", libraryAPI.updateLink);
router.delete("/links/:id", libraryAPI.deleteLinks);

// books routes
router.get("/books", libraryAPI.getBooks);
router.get("/books/page", libraryAPI.getBooksPage);
router.get("/books/:id", libraryAPI.getBook);
router.post("/books", libraryAPI.addBook);
router.put("/books/:id", libraryAPI.updateBook);
router.delete("/books/:id", libraryAPI.deleteBooks);

// researches routes
router.get("/researches", libraryAPI.getResearches);
router.get("/researches/page", libraryAPI.getResearchesPage);
router.get("/researches/:id", libraryAPI.getResearch);
router.post("/researches", libraryAPI.addResearch);
router.put("/researches/:id", libraryAPI.updateResearch);
router.delete("/researches/:id", libraryAPI.deleteResearches);
module.exports = router;
