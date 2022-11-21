var express = require('express');
var router = express.Router();
const { getData } = require("../controllers/data");

/* GET users listing. */
router.get("/getData", getData);

module.exports = router;
