const express = require('express');
const cors = require('cors');
const connect = require('./schemas');
const app = express();
const port = 3000;

connect();

const postRouter = require('./routes/posts');
const commentRouter = require('./routes/comment');

const requestMiddleware = (req, res, next) => {
  console.log('Request URL:', req.originalUrl, '-', new Date());
  next();
};

app.use(cors());
app.use(express.json());
app.use(requestMiddleware);
app.use('/api', [postRouter, commentRouter]);

app.get('/', async (req, res) => {
  res.send('메인 페이지')
});

app.listen(port, () => {
  console.log(port, '포트로 서버가 켜졌습니다.');
});