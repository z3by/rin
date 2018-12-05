const express = require("express");
const router = express.Router();

const s3Config = require("../config/s3.config");
const storiesAPI = require("../controllers/api/stories.controller");
const articlesAPI = require("../controllers/api/articles.controller");
const countriesAPI = require("../controllers/api/countries.controller");
const projectsAPI = require("../controllers/api/projects.controller");
const libraryAPI = require("../controllers/api/library.controller");
const adminAPI = require("../controllers/users/admin.controller");
const foundersAPI = require("../controllers/api/sdgs.controller");
const investorsAPI = require("../controllers/api/investors.controller");
const sdgsAPI = require("../controllers/api/sdgs.controller");

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
router.get("/countries/migrate", countriesAPI.fillCountryTable);

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

// investors routes
router.get("/investors", investorsAPI.getInvestors);
router.get("/investors/page", investorsAPI.getInvestorsPage);
router.get("/investors/:id", investorsAPI.getInvestor);
router.post("/investors", investorsAPI.addInvestor);
router.put("/investors/:id", investorsAPI.updateInvestor);
router.delete("/investors/:id", investorsAPI.deleteInvestors);

// founders routes
router.get("/founders", foundersAPI.getFounders);
router.get("/founders/page", foundersAPI.getFoundersPage);
router.get("/founders/:id", foundersAPI.getFounder);
router.post("/founders", foundersAPI.addFounder);
router.put("/founders/:id", foundersAPI.updateFounder);
router.delete("/founders/:id", foundersAPI.deleteFounders);

// sdgs routes
router.get("/sdgs", sdgsAPI.getSdgs);
router.get("/sdgs/:id", sdgsAPI.getSdg);
router.post("/sdgs", sdgsAPI.addSdg);

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
