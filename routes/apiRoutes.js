var db = require("../models/index");

module.exports = function(app){
    app.get("api/articles", function(req, res){
        db.Article.find({}, function(err, found){
            if(err){
                return res.json(err);
            }
            else{
                return res.json(found);
            }
        })
    });

}