import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

dotenv.config();
const port = process.env.PORT;
// a fn to make DB connection & handle errors async-ly
connectDB();

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())

app.get('/', (req, res)=>{
    res.send('Hello world !')
})

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/orders', orderRoutes);

app.get('/api/config/paypal', (req, res)=>{
    res.send({clientId: process.env.PAYPAL_CLIENT_ID});
});

// for absolute path of current working folder(root-folder)
const __dirname = path.resolve()
// when a req is made at '/uploads' express will look for static files in given folder
app.use('/uploads', express.static(path.join(__dirname + '/uploads')));



app.listen(port, ()=>{
    console.log('Listening to 3000')
})