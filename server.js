var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log("Serve Listening on: http://localhost: " + PORT)
});

