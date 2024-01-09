const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const CommentSchema=new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'Posts',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    Other: {
        type: String,
        required: false
    }

  

},{ timestamp: true })
const Comment=mongoose.model("Comment",CommentSchema)
module.exports=Comment