const mongoose = require('mongoose');

const postschema = mongoose.Schema({
  postId: Number,
  title: String,
  content: String,
  authorId: String,
  writdDate: Date,
});

module.exports = mongoose.model('Posts', postschema);