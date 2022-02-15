const mongoose = require('mongoose');

const commentIdCount = mongoose.Schema({
  postId: Number,
  num: Number,
})

module.exports = mongoose.model('commentIdCount', commentIdCount);