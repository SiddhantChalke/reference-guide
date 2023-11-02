// import './App.css'
import About from './About'
import Contact from './Contact'
// import Comp3 from './Comp3'
// import Comp4 from './Comp4'
// import Comp5 from './Comp5'
import UseState from './UseState'
import Services from './Services'
import SideNav from './SideNav'
import Home from './Home'
import Movies from './Movies'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import API from './API'
import ReduxCounter from './ReduxCounter'

function App() {
  
  return (
    <>
      <Router>
        <SideNav/>

        <Routes>
          <Route path='/' element={<Home/>}>Home</Route>
          <Route path='/about' element={<About/>}>About</Route>
          <Route path='/contact' element={<Contact/>}>Contact</Route>
          <Route path='/services' element={<Services/>}>Services</Route>
          <Route path='/books' element={<Movies/>}>Books</Route>
          <Route path='/usestate' element={<UseState/>}>useState</Route>
          <Route path='/api' element={<API/>}>API</Route>
          <Route path='/rdxcntr' element={<ReduxCounter/>}>ReduxCounter</Route>
          
        </Routes>

        {/* <Foot/> */}
      </Router>
    </>
  )
}

export default App
