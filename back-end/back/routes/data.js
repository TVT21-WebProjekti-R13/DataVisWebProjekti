const express = require('express');
const passport = require("passport");
const router = express.Router();
const { getData, getUserVisuals, saveData, getCustomData, Update } = require("../controllers/data");
router.post("/saveData", passport.authenticate("jwt", { session: false }), saveData);
router.get("/getData", getData);
router.get("/update", Update);
router.get("/getUserVisuals", passport.authenticate("jwt", { session: false }), getUserVisuals);
router.get("/getCustomData", getCustomData);

module.exports = router;
