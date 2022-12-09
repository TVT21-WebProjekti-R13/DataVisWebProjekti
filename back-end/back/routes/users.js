const express = require('express');
const passport = require('passport');
const router = express.Router();
const { createUser, loginUser, deleteUser } = require("../controllers/users");

router.post("/create", createUser);
router.post("/login", passport.authenticate("basic", { session: false }), loginUser);
router.delete("/delete", passport.authenticate("jwt", { session: false }), deleteUser)

module.exports = router;
