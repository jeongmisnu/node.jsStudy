const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog', { ignoreUndefined: true }).catch((err) => {
  console.log(err);
});

const RemoveId = require('../schemas/RemoveId');
const postIdCount = require('../schemas/postIdCount');
const commentIdCount = require('../schemas/commentIdCount');

// 지워진 ID 저장
async function recyClingId(mode, num) {
  let id = await RemoveId.find({mode});
  let recyclingId = '';

  console.log(id[0].num);

  if (!id.length) {
    console.log('ID: 없음');

    recyclingId = null;
  } else {
    console.log('ID: 있음')

    recyclingId = id[0].num;
    RemoveId.deleteOne({ num: recyclingId });
  }

  return recyclingId;

}

// 지운 포스트 아이디 값 저장
exports.RemoveId = async (mode, num) => {
  await RemoveId.create({ mode, num })

  return 0;
}

// 게시글 ID 카운터
exports.postCount = async () => {
  // let id = RemoveId();
  let id = await recyClingId(1, 0);

  if (id === null) {
    id = await postIdCount.find({});

    if (!id.length) {
      await postIdCount.create({ num: 1 });
      // console.log(newId.num);
      let newId = await postIdCount.find({});

      return newId[0].num;
    } else {
      await postIdCount.updateOne(
        { num: id[0].num }, 
        { $set: { num: ++id[0].num } }
        );
        
      id = await postIdCount.find({});
      // console.log('보냄', id[0].num);

      return id[0].num;
    }
  } else {
    return id;
  }
}

// 댓글 ID 카운터
exports.commentCount = async (postId) => {
  let id = await commentIdCount.find({ postId: postId });

  console.log(id);

  if (!id.length) {
    await commentIdCount.create({ postId: postId, num: 1 });
    id = await commentIdCount.find({postId: postId});
    console.log(id);
    return id[0].num;
  } else {
    await commentIdCount.updateOne(
      { postId: postId, num: id[0].num }, 
      { $set: { num: ++id[0].num } }
      );
    
    id = await commentIdCount.find({ postId: postId });

    return id[0].num;
  }
}