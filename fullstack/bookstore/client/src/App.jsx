import './App.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import CreateBook from './CreateBook'

function App() {
  

  return (
    <>
      {/* <Home /> */}
      <Router>

        <Routes>
          <Route path='/books/all' element={<Home/>}>Home</Route>
          <Route path='/books/create' element={<CreateBook/>}>New Book</Route>
          {/* <Route path='/books/details/:id' element={<ShowBook/>}>Show Book</Route> */}
          {/* <Route path='/books/edit/:id' element={<EditBook/>}>Edit</Route> */}
          {/* <Route path='/books/delete/:id' element={<DeleteBook/>}>Delete</Route> */}
        </Routes>

        {/* <Foot/> */}
      </Router>
    </>
  )
}

export default App
