// 3TPj23iNj1RzgMLa

// mongodb+srv://neerajmjoshi1:<password>@cluster0.txd5xtp.mongodb.net/?retryWrites=true&w=majority

// imports
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./router/book-routes');
const cors = require('cors');

// creds
const password = "3TPj23iNj1RzgMLa";
const port = 8000



// middleware
app.use(express.json())
app.use(cors())
app.use('/books', router)




mongoose.connect(`mongodb+srv://neerajmjoshi1:${password}@cluster0.txd5xtp.mongodb.net/libsystem?retryWrites=true&w=majority`)
.then((error) => {

    console.log('Connected to DB......')
})
.then((error) => {

    app.listen(port)

}).catch((error) => {

    console.log(error)
})


