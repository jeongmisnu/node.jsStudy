const mongoose = require('mongoose');

const postschema = mongoose.Schema({
  postId: Number,
  title: String,
  content: String,
  authorId: String,
  writeDate: String,
});

module.exports = mongoose.model('Posts', postschema);