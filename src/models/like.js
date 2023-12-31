import mongoose from "mongoose";

const likeSchema= new mongoose.Schema({

        onModel:{
            type:String,
            required:true,
            enum:['Tweet','Comment']
        },
        likeable:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            refPath:'onModel'
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user',
            required:true
        }

},{timestamps:true})


const like= mongoose.model('like',likeSchema)
export default like;