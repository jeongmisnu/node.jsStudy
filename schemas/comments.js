const mongoose = require('mongoose');

const commentschema = mongoose.Schema({
  postId: Number,
  commentId: Number,
  content: String,
  authorId: String,
  writeDate: String,
});

module.exports = mongoose.model('Comments', commentschema);