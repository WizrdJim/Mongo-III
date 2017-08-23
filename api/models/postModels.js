const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  text: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: { 
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  content: {
    type: String,
    required: true
  },
  comments: [CommentSchema]
})

module.exports = mongoose.model('Post', PostSchema);