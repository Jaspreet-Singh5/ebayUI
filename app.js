var methodOverride = require("method-override"),
    express = require("express"),
    indexRoute = require("./routes/index"),
    app     = express(),
    body    = require("body-parser"), 
    mysql   = require("mysql") ;
    

// EXPRESS CONFIG
app.use(require("express-session")({
    secret: "my dog is a cat",
    resave: false,
    saveUninitialized: false
}));

// APP CONFIG
app.use(body.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

// ROUTES
app.use(indexRoute);

// INITIALIZATION
app.listen(process.env.PORT, process.env.IP, function() {
   console.log("The ebay server has started."); 
});