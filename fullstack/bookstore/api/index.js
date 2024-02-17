import express from 'express';
import mongoose from 'mongoose';
import {port, mongoDbURL} from './config.js'
import bookRoutes from './routes/bookRoutes.js'
import cors from 'cors'

const app = express();

// middleware for parsing res body
app.use( express.json() );
// middleware for handling cors allowing all origins
app.use( cors() );
// for handling custom origins
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'PUT', 'POST', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
// }))

app.get('/', (req, res)=>{
    console.log(req);
    return res.status(234).send('Welcome')
}); //http method to get the response from server

// handle each /books request w this middleware
app.use('/books', bookRoutes);

// Db connection
mongoose.connect(mongoDbURL)
.then( ()=> {
    console.log('Connected to Db');
    
    app.listen(port, ()=>{
        console.log(`App running on ${port}`);
    });
})
.catch( (err)=> console.log(err) )