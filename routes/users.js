const express = require("express");
const router = express.Router();

const adminCtrl = require("../controllers/users/admin.controller");
const membersCtrl = require("../controllers/users/members.controller");

//admin routes
router.get("/isadmin", adminCtrl.isAdmin);
router.post("/loginadmin", adminCtrl.loginAdmin);

router.post("/register", membersCtrl.registerNewMember);
router.post("/login", membersCtrl.loginMember);

module.exports = router;
