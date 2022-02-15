const mongoose = require('mongoose');

// 삭제되어 더 이상 사용되지 않는 id 값 재사용 스키마
const removeId = mongoose.Schema({
  mode: Number, // 게시글, 댓글 구분 1: 게시글, 2: 댓글 (수정 필요)
  num: Number, // 삭제한 게시글, 댓글 id 값
});

module.exports = mongoose.model('RemoveId', removeId);