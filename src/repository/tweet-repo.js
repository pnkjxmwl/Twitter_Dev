import Tweet from '../models/tweet.js';

class TweetRepository{

    async create(data)
    {
            try {

                const tweet= await Tweet.create(data)
                return tweet
               } catch (error) {
                    console.log(error);
            }
    }

    async get(id)
    {
        try {

            const tweet= await Tweet.findById(id)
            return tweet
           } catch (error) {
                console.log(error);
        }

    }
    async getWithComments(id)
    {
        try {
            const tweet= await Tweet.findById(id).populate({path:'comments'})
            return tweet; 
        } catch (error) {
            console.log(error);
        }


    }
    async getAll(offset,limit) //pagination
    {
        try {
            const tweet= await Tweet.find().skip(offset).limit(limit)
            return tweet; 
        } catch (error) {
            console.log(error);
        }

    }
    async update(tweetid,data)
    {
        try {
            //new:true so that we get updated data not old data
            const tweet= await Tweet.findByIdAndUpdate(tweetid,data, {new:true})
            return tweet
           } catch (error) {
                console.log(error);
        }
    }

    async destroy(id)
    {
        try {

            const tweet= await Tweet.findByIdAndRemove(id)
            
           } catch (error) {
                console.log(error);
        }
    }

}
export default TweetRepository