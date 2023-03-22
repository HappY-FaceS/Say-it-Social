import express from 'express';
import bodyParser from 'body-parser';

import {connect} from './config/database.js';
import apiRoutes from './routes/index.js';
// import { UserRespository, TweetRepository } from './repository/index.js';
// import LikeService from './services/like-service.js';


const startServer = async () =>{
    
    const app = express(),PORT=3000;
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
    console.log('server started at',PORT);
    await connect();
    console.log('Mongo db connected');

    // const userRepo = new UserRespository();
    // const tweetRepo = new TweetRepository();
    // const likeService = new LikeService();
     
    // const user = await userRepo.create({
    //     email:'rishavkumarcgc@gmail.com' ,
    //     password:'jaishreeram' ,
    //     name:'Rishav' ,
    //     username: 'DevGaii'
    // });
    // console.log(user);

    
    // const response = await likeService.toggleLike('6419df52498df991299a5f04', 'Tweet', '641aedb1c580c7968bff62f5');
    // console.log(response);
    



});

};

startServer();