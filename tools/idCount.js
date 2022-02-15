const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog', { ignoreUndefined: true }).catch((err) => {
  console.log(err);
});

const RemoveId = require('../schemas/RemoveId');
const postIdCount = require('../schemas/postIdCount');
const commentIdCount = require('../schemas/commentIdCount');

// 지워진 ID 저장
// async function RemoveId() {
//   try {
//     const id = await removeId.find({});
//   } catch {
//     console.log('실패');
//     removeId.create({num: 0});
//   }
//   const id = await removeId.find({});
//   let recyclingId = null;

//   // 사용 안하는 아이디가 있다면 재사용
//   if (id.length > 0) {
//     recyclingId = id[0].num;
//     removeId.deleteOne({ num: recyclingId });
//   }

//   return recyclingId;
// }

// 게시글 ID 카운터
exports.postCount = async () => {
  // let id = RemoveId();
  let id = await postIdCount.find({});

  // console.log(id);

  if (!id.length) {
    let newId = await postIdCount.create({num: 1});
    // console.log(newId.num);
    
    return newId.num;

  } else {
    await postIdCount.updateOne({num: id[0].num}, {$set: {num: ++id[0].num}});

    id = await postIdCount.find({});
    // console.log('보냄', id[0].num);

    return id[0].num;
  }
}

// 댓글 ID 카운터
exports.commentCount = () => {

}