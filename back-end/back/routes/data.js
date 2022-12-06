const express = require('express');
const passport = require("passport");
const router = express.Router();
const { getData, getProtectedData, saveData } = require("../controllers/data");
router.post("/saveData", saveData);
router.get("/getData", getData);
router.get("/protected", passport.authenticate("jwt", { session: false }), getProtectedData);

module.exports = router;
