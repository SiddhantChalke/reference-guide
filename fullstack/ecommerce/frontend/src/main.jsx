import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createRoutesFromElements } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/features/store.js'
// Auth
import Login from './pages/Auth/Login.jsx'
import Register from './pages/Auth/Register.jsx'
// Private route
import PrivateRoute from './components/PrivateRoute.jsx'
import Profile from './pages/User/Profile.jsx'
// Admin route
import AdminRoutes from './pages/Admin/AdminRoutes.jsx'
import UserList from './pages/Admin/userList.jsx'
import ProductList from './pages/Admin/ProductList.jsx'
import ProductUpdate from './pages/Admin/ProductUpdate.jsx'
import AllProducts from './pages/Admin/AllProducts.jsx'
import Home from './pages/Home.jsx'
import Favorites from './pages/Products/Favorites.jsx'
import ProductDetails from './pages/Products/ProductDetails.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >

      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route index={true} path='/' element={<Home />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/product/:id' element={<ProductDetails />} />

      {/* Registered routes */}
      <Route path='' element={<PrivateRoute />} >
        <Route path='/profile' element={<Profile />} />
      </Route>

      {/* Admin routes */}
      <Route path='/admin' element={<AdminRoutes />} >
        <Route path='userlist' element={<UserList />} />
        {/* Absolute route path "/userlist" nested under path "/admin" is not valid. An absolute child route path must start with the combined path of all its parent routes. */}
        <Route path='productlist' element={<ProductList />} />
        <Route path='productlist/:pageNo' element={<ProductList />} />
        <Route path='allproducts' element={<AllProducts />} />
        <Route path='updateproduct/:id' element={<ProductUpdate />} />
      </Route>

    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
