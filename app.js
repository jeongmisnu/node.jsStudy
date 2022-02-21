const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const connect = require('./schemas');
const app = express();
const port = 3000;

connect();

const postRouter = require('./routes/posts');
const commentRouter = require('./routes/comment');

app.use(rateLimit({
  windowMs: 1 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
}));

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