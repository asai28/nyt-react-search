var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const NoteSchema = new Schema({
  author: String,
  title: String,
  date: Date.now()
});

var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;