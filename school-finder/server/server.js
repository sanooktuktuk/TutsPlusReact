var express = require("express");
var path = require("path");

var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));
app.listen(7777,function(){
    console.log("Started listening on port", 7777);
})

//So above piece of code creates an express app which listens to http requests on port 7777. It also configures express to serve static content like html, css, images etc. from school-finder/app/dist directory
