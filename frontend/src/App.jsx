import React from 'react'
import{BrowserRouter, Routes, Route, Link} from 'react-router-dom'


import Login from './component/Login'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Signup from './component/Signup'
import { SnackbarProvider } from 'notistack'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <SnackbarProvider >
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup/>}/>
     
     
      </Routes>
      </SnackbarProvider>
      </BrowserRouter>
    </div>
  )
}

export default App