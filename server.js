// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3001;
var mongoose = require("mongoose");
// Initialize Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
// Set up a static folder (public) for our web app
app.use(express.static("public"));

// Database configuration
// Save the URL of our database as well as the name of our collection
mongoose.connect("mongodb://localhost/nytreact");
var Article = require("./models/index").Article;

app.get("/api/articles", function(req, res){
    Article.find({}).then(function(articles){
        res.json(articles);
    }).catch(function(err){
      res.json(err);
    })
});

app.post("/api/articles", function(req, res){
  Article.create(req.body).then(function(savedArticle){ 
      res.json(savedArticle);
  })
}).catch(function(err){
  res.json(err);
});


// Set the app to listen on port 3000
app.listen(PORT, function() {
  console.log(`App running on PORT ${PORT}!`);
});
