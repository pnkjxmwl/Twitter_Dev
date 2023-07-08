import TweetService from "../services/tweet-service.js";

const tweetservice= new TweetService();

export const createTweet= async(req,resp)=>{

        try {
            const response= await tweetservice.create(req.body)
            return resp.status(201).json({
                success:true,
                message:'SuccesFully Created a new tweet',
                data:response,
                err:{}
            })
        } catch (error) {
            console.log(error);
            return resp.status(500).json({
                success:false,
                message:'Not Success in Creating a new tweet',
                data:{},
                err:{error}
            })
        }

}
export const getTweet= async(req,resp)=>{

    try {
        const response= await tweetservice.get(req.params.id)
        return resp.status(201).json({
            success:true,
            message:'SuccesFully fetched  tweet',
            data:response,
            err:{}
        }) 
    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            success:false,
            message:'Not Success in fetching  tweet',
            data:{},
            err:{error}
        })
    }

}