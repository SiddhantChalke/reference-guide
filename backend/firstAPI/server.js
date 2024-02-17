const express = require('express');
const app = express();
const mongoose = require('mongoose')
// require('dotenv').config()

mongoose.connect('mongodb://localhost/followers')
const db = mongoose.connection
db.on('error',(error)=> console.error(error))
db.once('open',()=> console.log('Connected to DB'))

// for middleware
app.use(express.json())

const followersRouter = require('./routes/followers')
app.use('/followers', followersRouter)

app.listen(3000, ()=> console.log('Server Started'));