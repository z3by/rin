const express = require("express");
const router = express.Router();

const adminCtrl = require("../controllers/users/admin.controller");
const membersCtrl = require("../controllers/users/members.controller");

//admin routes
router.get("/isadmin", adminCtrl.isAdmin);
router.post("/loginadmin", adminCtrl.loginAdmin);

router.post("/register", membersCtrl.registerNewMember);
router.post("/login", membersCtrl.loginMember);

router.get("/users", adminCtrl.getAllMembers);
router.get("/users/count", adminCtrl.getUsersCount);
router.get("/allusers/search/:options", adminCtrl.getSearchedMembers);
router.get("/users/selectedpage", adminCtrl.getSelectedPageUsers);

module.exports = router;
