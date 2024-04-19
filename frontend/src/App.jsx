import React from 'react'
import './App.css'

import{BrowserRouter, Routes, Route, Link} from 'react-router-dom'


import Login from './component/Login'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Signup from './component/Signup'
 
import { SnackbarProvider } from 'notistack'
import Contactus from './component/Contactus'
import View from './component/View'
import AddSchool from './component/Admin/Addschool'
import AddUniversity from './component/Admin/Adduniversity'
import AddCollege from './component/Admin/Addcollege'
import AddPlayway from './component/Admin/Addplayway'
<<<<<<< HEAD
import Sidebar from './component/Sidebar'
import Aboutus from './component/Aboutus'


=======
import School from './component/Mainpage/School'
import College from './component/Mainpage/College'
import University from './component/Mainpage/University'
import Playway from './component/Mainpage/Playway'
import Update from './component/Update'
import Manageschool from './component/Manageschool'
>>>>>>> 6a51c60c8286dc078bb58bc630e7e34f031f133a



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
<<<<<<< HEAD
      <Route path="/Sidebar" element={<Sidebar />} />
      <Route path="/Aboutus" element={<Aboutus />} />
      
=======
      <Route path="/School" element={<School />} />
      <Route path="/College" element={<College />} />
      <Route path="/University" element={<University />} />
      <Route path="/Playway" element={<Playway />} />
      <Route path="/Update/:id" element={<Update />} />
      <Route path="/Manageschool" element={<Manageschool />} />

>>>>>>> 6a51c60c8286dc078bb58bc630e7e34f031f133a
    
     
      </Routes>
      </SnackbarProvider>
      </BrowserRouter>
    </div>
  )
}

export default App