const Task = require('../models/tskmodel');

// get all todos
const getTodos = async (req, res) => {

    try{
        const todos = await Task.find()

        
        if( !todos || todos.length===0 ){
            return res.status(404).json({message : "Todos not found"})
        }
        else{
            return res.status(200).json({todos})
        }
    }catch(error){
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

// add todo

const addTodo = async (req, res) => {
    try{
        const todo = new Task({
            text: req.body.text,
        })
        await todo.save();
        return res.status(201).json(todo);

    }catch(error){
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }

	// const todo = new Task({
	// 	text: req.body.text
	// })

	// todo.save();

	// res.json(todo);

}

// update todo

const updateTodo = async (req, res) => {
    const _id = req.params.id;

    try{
        const todo = await  Task.findByIdAndUpdate(_id , {
            text: req.body.text
        })

        todo = await book.save()

        if(!todo){
            return res.status(404).json({message : "todo not found"});
        }
        else{
            return res.status(201).json({message : "todo udpated succesfully"});
        }
    }catch(error){
        console.log(error)
    }
}

// delete

const deleteTodo = async (req, res) => {
    const _id = req.params.id;
    try{
        const todo = await Task.findByIdAndDelete(_id);

        if(!todo){
            res.status(404).json({message : "todo not found"});
        }else{
            res.status(200).json({message : "todo deleted"});
        }
    }catch(error){
        console.log(error);
    }
}



exports.getTodos = getTodos;
exports.addTodo = addTodo;
exports.updateTodo = updateTodo;
exports.deleteTodo = deleteTodo;