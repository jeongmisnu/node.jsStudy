const mongoose = require('mongoose');

const connect = () => {
  mongoose.connect('mongodb://localhost:27017/blog', { ignoreUndefined: true }).catch((err) => {
    console.log(err);
  });
};
// test:test@:27017
module.exports = connect;