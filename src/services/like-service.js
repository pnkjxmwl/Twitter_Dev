import like from "../models/like.js";
import Tweet from "../models/tweet.js";
import { TweetRepository,LikeRepository } from "../repository/index.js";


class LikeService{

    constructor(){ 
        this.likerepository=new LikeRepository()
        this.tweetrepository=new TweetRepository();
    }

    async toggleLike(modelId,modelType,userId)
    {   
        
            if(modelType=='Tweet')
            {

                 var likeable= await Tweet.findById(modelId).populate({path:'likes'});
                 console.log(likeable);  
              
            }
            else if(modelType=='Comment')
            { 
                
            }
            else{
                throw new Error('unknown model type')
            }
            //console.log(modelId,modelType,userId,likeable);
            const exists= await this.likerepository.findByUserAndLikable(
                {
                    user:userId,
                    onModel:modelType,
                    likeable:modelId
                }
            )
            if(exists){
                    likeable.likes.pull(exists.id)
                    await likeable.save();
                    await exists.deleteOne();
                    var isadded=false
 
                    console.log("removed like");
  
                }
            else{
                 const newlike= await this.likerepository.create(
                    {
                        user:userId,
                        onModel:modelType,
                        likeable:modelId
                    }
                 )
                 likeable.likes.push(newlike)
                 await likeable.save();
                    var isadded=true
                
                    console.log("added like");
                }
            return isadded;
    }


}
export default LikeService