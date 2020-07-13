var express = require("express"),
    router = express.Router();
    
// LANDING PAGE
router.get("/", function(req,res) {
    res.render("landing.ejs"); 
});

module.exports = router;