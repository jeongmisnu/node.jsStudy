const mongoose = require('mongoose');

const commentschema = mongoose.Schema({
  postId: Number,
  commentId: Number,
  content: String,
  authorId: String,
});

module.exports = mongoose.model('Comments', commentschema);