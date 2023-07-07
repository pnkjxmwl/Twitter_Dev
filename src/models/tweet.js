import mongoose from "mongoose";

const tweetSchema= new mongoose.Schema({

    content:{
        type:String,
        required:true,
        max: [250,"Tweet Cannot be more than 250 characters"]
    },
    hashtags:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Hashtag'
        }
    ]

},{timestamps:true})

// tweetSchema.virtual('ContentWithEmail').get(function(){            // adding a virtual
//     return ` ${this.content} \n Created By ${this.userEmail} `
// })

// tweetSchema.pre('save',function(next){     //before saving or creating a document calling this hook
//     console.log("inside a hook");
//     this.content= this.content+'...';
//     next();
// })

const Tweet=  mongoose.model('Tweet',tweetSchema);
export default Tweet;