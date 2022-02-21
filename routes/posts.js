const express = require('express');
const Posts = require('../schemas/posts');
const Comments = require('../schemas/comments');
const commentIdCount = require('../schemas/commentIdCount');
const idCount = require('../tools/idCount');
const { today } = require('../tools/tDate');

const routes = express.Router();

// 전체 게시글 목록 불러오기
routes.get('/posts', async (req, res) => {
  const posts = await Posts.find({}).sort({writeDate: -1});

  res.status(200).json({
    posts
  });
});


// 게시글 작성
routes.post('/posts', async (req, res) => {
  const { title, content, authorId } = req.body;

  // 날짜 받기
  const writeDate = today();
  // console.log(typeof writeDate)

  // id 받기
  const postId = await idCount.postCount();
  console.log(postId);

  const post = await Posts.create({ postId, title, content, authorId, writeDate });

  res.status(201).json({
    post
  });
});

// 게시글 조회
routes.get('/posts/:postId', async (req, res) => {
  const { postId } = req.params;
  const post = await Posts.findOne({ postId });

  // console.log(post);

  res.status(200).json({ post });
});

// 게시글 수정
routes.put('/posts/:postId', async (req, res) => {
  const { postId } = req.params;
  const { title, content, authorId } = req.body;
  const post = await Posts.findOne({ postId });

  if (post.authorId === authorId) {
    await Posts.updateOne({ postId }, { $set: { title, content } });

    res.status(200).json({
      success: true,
      message: '수정되었습니다.'
    });
  } else {
    res.status(200).json({
      success: false,
      message: authorId + '님이 작성한 글이 아닙니다.'
    });
  }

});

// 게시글 삭제
routes.delete('/posts/:postId', async (req, res) => {
  const { postId } = req.params;
  const { authorId } = req.body;

  const post = await Posts.findOne({ postId });

  if (post.authorId === authorId) {
    await commentIdCount.deleteMany({ postId });
    await Comments.deleteMany({ postId });
    await Posts.deleteOne({ postId });
    await idCount.RemoveId(1, postId);
    
    res.status(200).json({
      success: true,
      message: '삭제가 완료되었습니다.'
    });
  } else {
    res.status(400).json({
      success: false,
      message: authorId + '님이 작성한 글이 아닙니다.'
    });
  }
});

module.exports = routes;