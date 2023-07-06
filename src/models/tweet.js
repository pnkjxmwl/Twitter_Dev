const mongoose = require('mongoose')

const tweetSchema= new mongoose.Schema({

    content:{
        type:String,
        required:true
    },
    userEmail:{
            type:String
    },
    comments: [ {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }
    ]

},{timestamps:true})

tweetSchema.virtual('ContentWithEmail').get(function(){            // adding a virtual
    return ` ${this.content} \n Created By ${this.userEmail} `
})

const Tweet=  mongoose.model('Tweet',tweetSchema);
module.exports= Tweet;