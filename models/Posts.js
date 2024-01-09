const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PostSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
  })
  const Post = mongoose.model("Post", PostSchema);
  module.exports = Post; 
  