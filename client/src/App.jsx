import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/header'
import Register from './Components/Register'
import Login from './Components/Login'
import AllPosts from './Components/AllPosts'
import MyCart from './Components/MyCart'
import MainCart from './Components/MainCart'

const App = () => {
  return (
    <div>
       <BrowserRouter>
       <Header/>
       <Routes>
        <Route path='/' element={<MainCart/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/posts' element={<AllPosts/>}/>
        <Route path='/myPosts' element={<MyCart/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
