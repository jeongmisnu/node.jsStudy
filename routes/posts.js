const express = require('express');
const Posts = require('../schemas/posts');
const Comments = require('../schemas/comments');
const commentIdCount = require('../schemas/commentIdCount');
const idCount = require('../tools/idCount');

const routes = express.Router();


// 전체 게시글 목록 불러오기
routes.get('/posts', async (req, res) => {
  const { category } = req.query;
  const posts = await Posts.find({ category });

  res.json({
    posts
  });
});

// 게시글 작성
routes.post('/posts', async (req, res) => {
  const { title, content, authorId } = req.body;

  // 날짜 받기
  let today = new Date();
  // id 받기
  const id = await idCount.postCount();
  console.log(id);


  const post = await Posts.create({ postId: id, title, content, authorId, writeDate: today });

  console.log(today);
  res.status(201).json({
    post
  });
});

// 게시글 조회
routes.get('/posts/:postid', async (req, res) => {
  const { postid } = req.params;
  const post = await Posts.findOne({ postId: postid });

  // console.log(post);

  res.status(200).json({ post })
});

// 게시글 수정
routes.put('/posts/:postid', async (req, res) => {
  const { postid } = req.params;
  const { title, content, authorId } = req.body;
  const post = await Posts.findOne({ postId: postid });

  let success = false;

  if (post.authorId === authorId) {
    await Posts.updateOne({ postId: postid }, { $set: { title, content } });

    success = true;

    res.status(200).json({
      success,
      message: '수정되었습니다.'
    });
  } else {
    res.status(200).json({
      success,
      message: authorId + '님이 작성한 글이 아닙니다.'
    });
  }

});

// 게시글 삭제
routes.delete('/posts/:postid', async (req, res) => {
  const { postid } = req.params;
  const { authorId } = req.body;

  const post = await Posts.findOne({ postId: postid });

  if (post.authorId === authorId) {
    await commentIdCount.deleteMany({ postId: postid });
    await Comments.deleteMany({ postId: postid });
    await Posts.deleteOne({ postId: postid });

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