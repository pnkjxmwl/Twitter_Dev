import {TweetRepository,HashtagRepository} from "../repository/index.js";

class TweetService{

    constructor(){
          this.tweetRepository =new TweetRepository();
          this.hashtagRepository= new HashtagRepository();  
        }

    async create(data)
    {
        const content=data.content; 
       
        let tags= content.match(/#[a-zA-Z0-9_]+/g);
        tags= tags.map((tag)=>tag.substring(1))
                    .map(tag=>tag.toLowerCase());
        console.log("all tags ",tags);
        const tweet=await this.tweetRepository.create(data);
        let alreadyPresentTags= await this.hashtagRepository.findByName(tags);
       
        let titleofalreadyPresentTags=alreadyPresentTags.map(tags=>tags.title )
        console.log("already present tags",titleofalreadyPresentTags)
        let newTags= tags.filter(tag=>!titleofalreadyPresentTags.includes(tag))
        newTags=newTags.map(tag=> {
            return { 
                title:tag,
                tweets:[tweet.id]
            }
        });     
        console.log("new tags to create",newTags);
       const response= await this.hashtagRepository.bulkCreate(newTags);
       alreadyPresentTags.forEach((tag)=>{
        tag.tweets.push(tweet.id);
        tag.save();
    }) 
    
       //console.log(response);
        return tweet; 
    }
    async get(tweetid)
    {

        const tweet = await this.tweetRepository.getWithComments(tweetid)
        return tweet
    }

}

export default TweetService