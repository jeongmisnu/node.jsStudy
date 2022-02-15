const mongoose = require('mongoose');

const postIdCount = mongoose.Schema({
  num: Number,
})

module.exports = mongoose.model('postIdCount', postIdCount);