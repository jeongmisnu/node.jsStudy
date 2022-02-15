const express = require('express');
const Comments = require('../schemas/comments');
const { commentCount } = require('../tools/idCount');
const { today } = require('../tools/tDate');

const routes = express.Router();

// 댓글 목록 조회
routes.get('/posts/:post/comments', async (req, res) => {
  const { post } = req.params;
  const comment = await Comments.find({ postId: post }).sort({writeDate: -1});

  res.status(200).json({ comment });
})

// 댓글 작성
routes.post('/posts/:post/comments', async (req, res) => {
  const { post } = req.params;
  const { content, authorId } = req.body;


  // 댓글 아이디 카운터
  const id = await commentCount(post);

  // 날짜
  const writeDate = today();

  const comment = await Comments.create({ 
    postId: post, 
    commentId: id, 
    content, authorId, 
    writeDate 
  });

  res.status(200).json({
    comment
  });
});

// 댓글 수정
routes.put('/posts/:post/:comment', async (req, res) => {
  const { post, comment } = req.params;
  const { content, authorId } = req.body;
  let coment = await Comments.findOne({ postId: post, commentId: comment });
  let boln = false;

  if (coment.authorId === authorId) {
    await Comments.updateOne(
      { postId: post, commentId: comment }, 
      { $set: { content } }
      );
    boln = true;
  }

  res.status(200).json({
    success: boln,
    message: '수정 완료'
  });
});

// 댓글 삭제
routes.delete('/posts/:post/:comment/', async (req, res) => {
  const { post, comment } = req.params;
  const { authorId } = req.body;
  const coment = Comments.findOne({ postId: post, commentId: comment });

  if (coment.authorId === authorId) {
    await Comments.deleteOne({ postId: post, commentId: comment });
    res.status(200).json({
      success: true,
      message: '삭제 완료'
    });
  } else {
    res.status(400).json({
      success: false,
      message: '삭제할 수 없는 댓글입니다.'
    });
  }

});

module.exports = routes;