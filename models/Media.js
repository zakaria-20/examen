const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const   MediaSchema=new Schema({
    image:{
        type:String,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
   

},{ timestamp: true })
const Media=mongoose.model("Media", MediaSchema)
module.exports=Media