const express = require("express")
const router = express.Router()

router.get("/", function(req, res, next) {
    console.log("Palvelin päällä")
    res.send("Testi toimii")
})

module.exports = router