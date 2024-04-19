import React from 'react'
import './App.css'

import{BrowserRouter, Routes, Route, Link} from 'react-router-dom'


import Login from './component/Login'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Signup from './component/Signup'
 
import { SnackbarProvider } from 'notistack'
import ContactUs from './component/ContactUs'
import View from './component/View'
import AddSchool from './component/Admin/Addschool'
import AddUniversity from './component/Admin/Adduniversity'
import AddCollege from './component/Admin/Addcollege'
import AddPlayway from './component/Admin/Addplayway'
import Sidebar from './component/Sidebar'
import Aboutus from './component/Aboutus'



import School from './component/Mainpage/School'
import College from './component/Mainpage/College'
import University from './component/Mainpage/University'
import Playway from './component/Mainpage/Playway'
import Update from './component/Update'
import Manageschool from './component/Manageschool'



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <SnackbarProvider >
      <Navbar/>
      <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contactUs' element={<Contactus/>} />
      <Route path='/view' element={<View/>} />
    
      <Route path="/AddSchool" element={<AddSchool />} />
      <Route path="/AddUniversity" element={<AddUniversity />} />
      <Route path="/AddCollege" element={<AddCollege />} />
      <Route path="/AddPlayway" element={<AddPlayway />} />
      <Route path="/Sidebar" element={<Sidebar />} />
      <Route path="/Aboutus" element={<Aboutus />} />
      
    
     
      </Routes>
      </SnackbarProvider>
      </BrowserRouter>
    </div>
  )
}

export default App