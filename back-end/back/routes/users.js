var express = require('express');
var router = express.Router();
const { createUser } = require("../controllers/users");

/* GET users listing. */
router.post("/create", createUser);

module.exports = router;
