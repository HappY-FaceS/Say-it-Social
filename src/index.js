const express = require('express');
const app = express();

const connect = require('./config/database');
const PORT=3000;

const TweetService = require('./services/tweet-service')

app.listen(PORT, async () => {
    console.log('server started at',PORT);
    await connect();
    console.log('Mongo db connected')
    
    //create a tweet and update the tags in hashtag db

    //  let service= new TweetService();
    //  const tweet= await service.create({
    //     content: 'Welcome ,I am #travel vlogger . i am #Excited to share #videos with u',

    //  });
    //  console.log(tweet);

});