import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';

import {connect} from './config/database.js';
import apiRoutes from './routes/index.js';
import { passportAuth } from './config/jwt-middleware.js';


const startServer = async () =>{
    
    const app = express(),PORT=3000;
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use(passport.initialize());
    passportAuth(passport);
    
    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
    console.log('server started at',PORT);
    await connect();
    console.log('Mongo db connected');


});

};

startServer();