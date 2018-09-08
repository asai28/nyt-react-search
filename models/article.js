const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, trim: true, required: true },
  date: { type: Date, default: Date.now },
  url: {type: String, trim: true, required: true},
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Note"
    }
  ]

});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
 