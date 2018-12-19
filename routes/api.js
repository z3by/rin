const express = require("express");
const router = express.Router();

const s3Config = require("../config/s3.config");
const storiesAPI = require("../controllers/api/stories.controller");
const articlesAPI = require("../controllers/api/articles.controller");
const countriesAPI = require("../controllers/api/countries.controller");
const projectsAPI = require("../controllers/api/projects.controller");
const libraryAPI = require("../controllers/api/library.controller");
const adminAPI = require("../controllers/users/admin.controller");
const membersAPI = require("../controllers/users/members.controller");
const foundersAPI = require("../controllers/api/founders.controller");
const investorsAPI = require("../controllers/api/investors.controller");
const sdgsAPI = require("../controllers/api/sdgs.controller");
const sectorsAPI = require("../controllers/api/sectors.controller");
const refugeeInvestmentTypesAPI = require("../controllers/api/refugeeInvestmentTypes.controller");
const loactionAPI = require("../controllers/api/locations.controller");
const contactsAPI = require("../controllers/api/contacts.controller");

// upload image route
router.post("/upload/img", s3Config.uploadImg, (req, res) => {
  res.send(req.file);
});

// upload image route
router.post("/upload/pdf", s3Config.uploadPDF, (req, res) => {
  res.send(req.file);
});

//countries routes
router.get("/countries", countriesAPI.getCountries);
router.get("/countries/names", countriesAPI.getCountriesNames);

// locations routes
router.get("/locations", loactionAPI.getLocations);
router.post("/locations", loactionAPI.addLocation);

//stories routes
router.get("/stories/filter", storiesAPI.filterStories);
router.get("/stories", storiesAPI.getStories);
router.get("/stories/page", storiesAPI.getStoriesPage);
router.get("/stories/search", storiesAPI.searchStories);
router.get("/stories/:id", storiesAPI.getStory);
router.post("/stories", storiesAPI.addStory);
router.put("/stories/:id", storiesAPI.updateStory);
router.delete("/stories/:id", storiesAPI.deleteStory);

//articles routes
router.get("/articles", articlesAPI.getArticles);
router.get("/articles/search", articlesAPI.searchArticles);
router.get("/articles/page", articlesAPI.getArticlesPage);
router.get("/articles/:id", articlesAPI.getArticle);
router.post("/articles", articlesAPI.addArticle);
router.put("/articles/:id", articlesAPI.updateArticle);
router.delete("/articles/:id", articlesAPI.deleteArticles);

// users routes
router.get("/members", adminAPI.getMembers);
router.get("/users/search", membersAPI.searchMembers);
router.get("/members/page", adminAPI.getMembersPage);
router.get("/members/:id", adminAPI.getMember);

//projects routes
router.get("/projects", projectsAPI.getProjects);
router.get("/projects/names", projectsAPI.getProjectsNames);
router.get("/projects/search", projectsAPI.searchProjects);
router.get("/projectslocations", projectsAPI.getProjectsLocations);
router.get("/projects/page", projectsAPI.getProjectsPage);
router.get("/projects/:id", projectsAPI.getProject);
router.post("/projects", projectsAPI.addProject);
router.put("/projects/:id", projectsAPI.updateProject);
router.delete("/projects/:id", projectsAPI.deleteProjects);
// // project requests
router.get("/requests", projectsAPI.getProjectRequestsPage);
router.get("/requests/accept/:id", projectsAPI.acceptRequest);

// investors routes
router.get("/investors", investorsAPI.getInvestors);
router.get("/investors/page", investorsAPI.getInvestorsPage);
router.get("/investors/:id", investorsAPI.getInvestor);
router.post("/investors", investorsAPI.addInvestor);
router.put("/investors/:id", investorsAPI.updateInvestor);
router.delete("/investors/:id", investorsAPI.deleteInvestors);

// contacts routes
router.get("/contacts", contactsAPI.getContacts);
router.get("/contacts/:id", contactsAPI.getContact);
router.post("/contacts", contactsAPI.addContact);
router.put("/contacts/:id", contactsAPI.updateContact);
router.delete("/contacts/:id", contactsAPI.deleteContacts);

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

// sectors routes
router.get("/sectors", sectorsAPI.getSectors);
router.get("/sectors/:id", sectorsAPI.getSector);
router.post("/sectors", sectorsAPI.addSector);

// Refugee Investment Types routes
router.get(
  "/refugeeinvestmenttypes",
  refugeeInvestmentTypesAPI.getRefugeeInvestmentTypes
);
router.get(
  "/refugeeinvestmenttypes/:id",
  refugeeInvestmentTypesAPI.getRefugeeInvestmentType
);
router.post(
  "/refugeeinvestmenttypes",
  refugeeInvestmentTypesAPI.addRefugeeInvestmentType
);

// library routes ---------------------------
// news routes
router.get("/news", libraryAPI.getLinks);
router.get("/news/page", libraryAPI.getLinksPage);
router.get("/news/:id", libraryAPI.getLink);
router.post("/news", libraryAPI.addLink);
router.put("/news/:id", libraryAPI.updateLink);
router.delete("/news/:id", libraryAPI.deleteLinks);

// researches routes
router.get("/researches", libraryAPI.getResearches);
router.get("/researches/page", libraryAPI.getResearchesPage);
router.get("/researches/:id", libraryAPI.getResearch);
router.post("/researches", libraryAPI.addResearch);
router.put("/researches/:id", libraryAPI.updateResearch);
router.delete("/researches/:id", libraryAPI.deleteResearches);
module.exports = router;
