var express = require('express');
var router = express.Router();
const { createUser } = require("../controllers/users");

/* GET users listing. */
router.post('/create', function(req, res, next) {
  createUser(req.body);
  res.send('respond with a resource');
});

module.exports = router;
