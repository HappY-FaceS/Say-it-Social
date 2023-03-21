import express from 'express' ;
import {connect} from './config/database.js' ;


const app = express();
const PORT=3000;


app.listen(PORT, async () => {
    console.log('server started at',PORT);
    await connect();
    console.log('Mongo db connected');

     
    
});