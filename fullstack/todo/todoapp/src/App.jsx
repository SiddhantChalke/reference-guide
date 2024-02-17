import { useState, useEffect } from 'react'
import './App.css'
const URL = 'http://localhost:3000';

function App() {
  const [todos, setTodos] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    GetTodos();

  }, []);

  console.log(todos)
  
  const GetTodos = () => {
    fetch(URL + '/todos')
    .then(res => res.json())
    .then(data => setTodos(data.todos))
    // .then(data => console.log(data.todos))
    .catch((err) => console.error("Error: ", err));
  }

  const completeTodo = async id => {
    const data = await fetch(URL + '/todo/complete/' + id).then(res => res.json());

    setTodos(todos => todos.map(todo => {
      if (todo._id === data._id) {
        todo.complete = data.complete;
      }

      return todo;
    }));

  }

  const addTodo = async () => {
    try {
      const response = await fetch(URL + "/todos/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          text: newTodo
        })
      });
      if (!response.ok) {
        throw new Error(`Failed to add todo: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      setTodos(prevTodos => [...prevTodos, data]);
      // setTodos(prevTodos => prevTodos ? [...prevTodos, data] : [data]);
      // console.log(todos)
      setPopupActive(false);
      setNewTodo("");
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  }

    const deleteTodo = async id => {
      const data = await fetch(URL + '/todos/delete/' + id, { method: "DELETE" }).then(res => res.json());
      console.log(data.result)
      setTodos(todos => todos.filter(todo => todo._id !== data.result._id));
    }

    return (
      <>
        <button className="addPopup" onClick={() => setPopupActive(true)}>+</button>
        <h4><u>Your tasks</u></h4>

        <div className="todos">
          {todos.length > 0 ? todos.map(todo => (
            <div className={
              "todo" + (todo.complete ? " is-complete" : "")
            } key={todo._id} onClick={() => completeTodo(todo._id)}>
              <div className="checkbox"></div>

              <div className="text">{todo.text}</div>

              <button className="delete-todo" onClick={() => deleteTodo(todo._id)}>x</button>
            </div>
          )) : (
            <p>You currently have no tasks</p>
          )}
        </div>


        {popupActive ? (
          <div className="popup">
            <div className="closePopup" onClick={() => setPopupActive(false)}>X</div>
            <div className="content">
              <h3>Add ToDo</h3>
              <input type="text" className="add-todo-input" onChange={e => setNewTodo(e.target.value)} value={newTodo} />
              <div className="button" onClick={addTodo}>Create ToDo</div>
            </div>
          </div>
        ) : ''}

      </>
    )
  }

  export default App
