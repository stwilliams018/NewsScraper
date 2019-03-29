var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  body: String
});

var comment = mongoose.model("comment", CommentSchema);

module.exports = comment;