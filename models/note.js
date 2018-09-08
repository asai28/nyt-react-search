var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const NoteSchema = new Schema({
     // `author` must be of type String
  author: String,
  // `title` must be of type String
  title: String

});

var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;