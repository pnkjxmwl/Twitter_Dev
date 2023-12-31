import { CommentRepository, TweetRepository } from "../repository/index.js";

class CommentService{

    constructor(){
            this.commentrepo=new CommentRepository();
            this.tweetrepo=new TweetRepository();
    }

    async create(modelId,modelType,userId,content)
    {   
        console.log(modelId,modelType,content,userId,content);
        if(modelType=='Tweet')
        {
             var commentable= await this.tweetrepo.find(modelId)
             console.log(commentable);  
        }
        else if(modelType=='Comment')
        {  
            var commentable= await this.commentrepo.get(modelId)
        }
        else{
            throw new Error('unknown model type')
        }

        const comment= await this.commentrepo.create(
            {
                content:content,
                userId:userId,
                onModel:modelType,
                commentable:modelId,
                comments:[]
            }
        )
        commentable.comments.push(comment)
        await commentable.save()
         return comment   
    }
}

export default CommentService