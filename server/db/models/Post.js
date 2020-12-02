const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    // subtitle: {
    //   type: String,
    //   required: true,
    //   trim: true
    // },
    title: {
      type: String,
      required: true,
      // unique: true,
      trim: true
    },
    image: {
      type: String,
      trim: true
    },
    text: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
