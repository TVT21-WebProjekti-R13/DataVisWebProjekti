var express = require('express');
var router = express.Router();
const { createUser } = require("../controllers/users");
const { loginUser } = require("../controllers/users");
/* GET users listing. */
router.post("/create", createUser);
router.post("/login", loginUser);
module.exports = router;
