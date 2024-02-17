const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.getTodos) // get all todos
router.post('/new',taskController.addTodo) //add new todo
router.put('/update/:id', taskController.updateTodo) //update
router.delete('/delete/:id', taskController.deleteTodo) //delete

module.exports = router;