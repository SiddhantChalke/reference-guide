const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const http = require('http').Server(app);
const router = require('./router/tsk-routes')
// const Task = require('./models/tskmodel');


// middleswares
app.use(express.json());
app.use(cors());
app.use('/todos', router)


mongoose.connect('mongodb+srv://en19331041:3D8AQqdA606KsfLS@todos.d4tiyor.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('Connected to DB')
})
.catch(console.error);

// app.get('/todos', async (req, res) => {
// 	const todos = await Task.find();

// 	res.json(todos);
// });

// app.post('/todo/new', (req, res) => {
// 	const todo = new Task({
// 		text: req.body.text
// 	})

// 	todo.save();

// 	res.json(todo);
// });

// app.delete('/todo/delete/:id', async (req, res) => {
// 	const result = await Task.findByIdAndDelete(req.params.id);

// 	res.json({result});
// });

// app.get('/todo/complete/:id', async (req, res) => {
// 	const todo = await Task.findById(req.params.id);

// 	todo.complete = !todo.complete;

// 	todo.save();

// 	res.json(todo);
// })

// app.put('/todo/update/:id', async (req, res) => {
// 	const todo = await Task.findById(req.params.id);

// 	todo.text = req.body.text;

// 	todo.save();

// 	res.json(todo);
// });

http.listen(3000, ()=>{
    console.log('Server is running!');
});