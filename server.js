var express = require("express");
var logger = require("morgan");
var PORT = process.env.PORT || 3001;
var app = express();

app.get("/api/articles", function(req, res){

});

app.post("/api/articles", function(req, res){

});

app.delete("/api/articles", function(req, res){

});

app.listen(PORT, function(){
    console.log(`App listening to http://localhost:${PORT}`);
});