const express = require("express");
const router = express.Router();

const adminCtrl = require("../controllers/users/admin.controller");

//admin routes
router.get("/isadmin", adminCtrl.isAdmin);
router.post("/loginadmin", adminCtrl.loginAdmin);

module.exports = router;
