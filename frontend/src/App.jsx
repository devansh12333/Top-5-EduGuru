import React from 'react'
import './App.css'

<<<<<<< HEAD

import{BrowserRouter, Routes, Route, Link} from 'react-router-dom'
=======
import{BrowserRouter, Routes, Route} from 'react-router-dom'
>>>>>>> bc8d3886eb8820aff68af2ed9df9a6696e4e94a6


import Login from './component/Login'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Signup from './component/Signup'
 
import { SnackbarProvider } from 'notistack'
<<<<<<< HEAD
import ContactUs from './component/ContactUs'
=======
import Contactus from './component/ContactUs'
>>>>>>> bc8d3886eb8820aff68af2ed9df9a6696e4e94a6
import View from './component/View'
import AddSchool from './component/Admin/Addschool'
import AddUniversity from './component/Admin/Adduniversity'
import AddCollege from './component/Admin/Addcollege'
import AddPlayway from './component/Admin/Addplayway'
<<<<<<< HEAD
import Sidebar from './component/Sidebar'
import Aboutus from './component/Aboutus'



=======
>>>>>>> bc8d3886eb8820aff68af2ed9df9a6696e4e94a6
import School from './component/Mainpage/School'
import College from './component/Mainpage/College'
import University from './component/Mainpage/University'
import Playway from './component/Mainpage/Playway'
import Update from './component/Update'
import Manageschool from './component/Manageschool'
<<<<<<< HEAD
import Reviewandrating from './component/Reviewandrating'
=======
>>>>>>> bc8d3886eb8820aff68af2ed9df9a6696e4e94a6



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <SnackbarProvider >
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
<<<<<<< HEAD

=======
>>>>>>> bc8d3886eb8820aff68af2ed9df9a6696e4e94a6
      <Route path='/Home' element={<Home/>}/>

      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contactUs' element={<ContactUs/>} />
      <Route path='/view' element={<View/>} />
    
      <Route path="/AddSchool" element={<AddSchool />} />
      <Route path="/AddUniversity" element={<AddUniversity />} />
      <Route path="/AddCollege" element={<AddCollege />} />
      <Route path="/AddPlayway" element={<AddPlayway />} />
<<<<<<< HEAD
      <Route path="/Sidebar" element={<Sidebar />} />
      <Route path="/Aboutus" element={<Aboutus />} />
      <Route path="/Reviewandrating" element={<Reviewandrating />} />
      
=======
      <Route path="/School" element={<School />} />
      <Route path="/College" element={<College />} />
      <Route path="/University" element={<University />} />
      <Route path="/Playway" element={<Playway />} />
      <Route path="/Update/:id" element={<Update />} />
      <Route path="/Manageschool" element={<Manageschool />} />

>>>>>>> bc8d3886eb8820aff68af2ed9df9a6696e4e94a6
    
     
      </Routes>
      </SnackbarProvider>
      </BrowserRouter>
    </div>
  )
}

export default App