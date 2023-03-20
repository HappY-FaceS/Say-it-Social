const express = require('express');
const app = express();

const connect = require('./config/database');

const Tweet = require('./models/tweet');
const Comment = require('./models/comment');

const TweetRepository = require('./repository/tweet-repository');


app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('Mongo db connected');

    // const tweet = await Tweet.create({
    //    content: 'welcome to twitter',
    //    userEmail: 'rishav@gmail.com',
    // });
    // const comment =await Comment.create({content:'Jai Shree Ram !'});
    // tweet.comments.push(comment);
    // await tweet.save();
    // console.log(tweet);

    // const tweets = await Tweet.find({userEmail: 'rishav@gmail.com'});
    // console.log(tweets)

    const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.update('6417019aa1b388b29e4d7190',{content:'Hi this is rishav'});
    // console.log(tweet);
    const tweet = await tweetRepo.create({content: 'With hooks now'});
    console.log(tweet);


});