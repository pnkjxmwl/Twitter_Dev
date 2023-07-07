import express from 'express'
import { connect } from './config/database.js'
const app= express()

// const TweetRepository= require('./repository/tweet-repo')
// const Comment= require('./models/comment')
// const Tweet= require('./models/tweet')
// const HashtagRepository= require('./repository/hashtag-repo')
// const TweetService= require('./services/tweet-service')

import TweetService from './services/tweet-service.js'

app.listen(4000,async ()=>{
    console.log("server started")
    await connect()
    console.log('mongodb connected')

    // CREATING A NEW TWEET 
    // const tweet= await Tweet.create({
    //     content:"third Tweet"
    // })

    //GETTING ALL TWEETS HAVING {conditons}
   // const tweets= await Tweet.find({userEmail:'a@b.com'});
    
    //UPDATING A TWEET BY ITS ID
   // const tweet= await Tweet.findById('64a52b605063a81c3f3b9960')
    // tweet.content='just updated ';
    // tweet.userEmail='temp@gmail.com'
    // await tweet.save();

   // const tweetrepo= new TweetRepository();
// BY DEFAULT MONGO RETTURNS THE OLD DATA NOT THE UPDATED DATA    
 //   const tweet=  await tweetrepo.update('64a52bea6c62dae146a1c78c',{content:'new my twwet works'})

    // const tweet= await tweetrepo.create({content:"yo vro"})
    // tweet.comments.push({content:'first comment'})
    // await tweet.save()
    // console.log(tweet)

    // const tweet= await Tweet.create({content:"new tweet with comment"});
    // const comment= await Comment.create({content:"new first comment"});
    // tweet.comments.push(comment);
    // await tweet.save();

    //const tweet = await tweetrepo.getWithComments('64a53d1eeca99c8449409553');


    //const tweets= await tweetrepo.getAll(2,5); //pagination
   // const tweet= await tweetrepo.get('64a52b42be217188ae7196eb')
    
    // const tweet= await tweetrepo.create({content:"with hooks"})
    // console.log(tweet);

   //  let repo= new HashtagRepository()
    // await repo.bulkCreate([
    //     { title:"trend",
    //     tweets:[]
    // },{
    //     title:"excited",
    //     tweets:[]
    // },{
    //     title:"python",
    //     tweets:[]
    // }
    // ])
    // const resp= await repo.findByName(['trend','excited']);
    // console.log(resp);
   
   
    // const  tweetservice= new TweetService();
    // const tweet = await tweetservice.create({ content:"Welcome and have #fun and dont get #bore while its #new"})
    // console.log(tweet);

    let service= new TweetService()
    await service.create({content:"#done with #moduling"})

})