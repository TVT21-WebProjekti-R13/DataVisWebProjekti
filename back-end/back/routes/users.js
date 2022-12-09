const express = require('express');
const passport = require('passport');
const router = express.Router();
const { createUser, loginUser } = require("../controllers/users");

router.post("/create", createUser);
router.post("/login", passport.authenticate("basic", { session: false }), loginUser);

module.exports = router;
