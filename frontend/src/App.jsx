import React from 'react'
import './App.css'

import{BrowserRouter, Routes, Route} from 'react-router-dom'


import Login from './component/Login'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Signup from './component/Signup'
 
import { SnackbarProvider } from 'notistack'
// import Contactus from './component/ContactUs'
import View from './component/View'
import AddSchool from './component/Admin/Addschool'
import AddUniversity from './component/Admin/Adduniversity'
import AddCollege from './component/Admin/Addcollege'
import AddPlayway from './component/Admin/Addplayway'
import School from './component/Mainpage/School'
import College from './component/Mainpage/College'
import University from './component/Mainpage/University'
import Playway from './component/Mainpage/Playway'
import Update from './component/Update'
import Manageschool from './component/Manageschool'
import ContactUs from './component/ContactUs'
import Aboutus from './component/Aboutus'
import Managecollege from './component/Managecollege'
import Reviewandrating from './component/Reviewandrating'
import Viewcollege from './component/Viewcollege'
import Viewuniversity from './component/Viewuniversity'
import ViewSchool from './component/Viewschool'
import ViewPlayway from './component/Viewplayway'
import Manageplayway from './component/Manageplayway'
import Manageuniversity from './component/Manageuniversity'
import Admin from './component/Admin/Index'
<<<<<<< HEAD
import Collegereview from './component/Mainpage/Collegereview'
import Playwayreview from './component/Mainpage/Playwayreview'
import Schoolreview from './component/Mainpage/Schoolreview'
import Universityreview from './component/Mainpage/Universityreview'





=======
import Review from './component/collegeReview'
import { AppProvider } from './component/Context/UserContext'
>>>>>>> 12ee9fe8cc2379989ca9b31d8056492c19b152dd

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <AppProvider>
      <SnackbarProvider >
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Home' element={<Home/>}/>

      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contactUs' element={<ContactUs/>} />
      <Route path='/Aboutus' element={<Aboutus />} />

      <Route path='/view' element={<View/>} />
    
      <Route path="/AddSchool" element={<AddSchool />} />
      <Route path="/AddUniversity" element={<AddUniversity />} />
      <Route path="/AddCollege" element={<AddCollege />} />
      <Route path="/AddPlayway" element={<AddPlayway />} />
      <Route path="/School" element={<School />} />
      <Route path="/College" element={<College />} />
      <Route path="/University" element={<University />} />
      <Route path="/Playway" element={<Playway />} />
      <Route path="/Update/:id" element={<Update />} />
      <Route path="/Manageschool" element={<Manageschool />} />
      <Route path="/Managecollege" element={<Managecollege />} />
      <Route path="/Manageplayway" element={<Manageplayway />} />
  
      <Route path="/Manageuniversity" element={<Manageuniversity />} />
      <Route path="/Reviewandrating" element={<Reviewandrating/>} />
      <Route path="/Viewcollege/:id" element={<Viewcollege/>} />
      <Route path="/Viewuniversity/:id" element={<Viewuniversity/>} />
      <Route path="/Viewschool/:id" element={<ViewSchool/>} />
      <Route path="/Viewplayway/:id" element={<ViewPlayway/>} />
<<<<<<< HEAD
      <Route path="/Collegereview/:id" element={<Collegereview/>} />
      <Route path="/Playwayreview/:id" element={<Playwayreview/>} />
      <Route path="/Schoolreview/:id" element={<Schoolreview/>} />
      <Route path="/Universityreview/:id" element={<Universityreview/>} />
      
      
      

=======
      <Route path="/collegeReview/:id" element={<Review/>} />
>>>>>>> 12ee9fe8cc2379989ca9b31d8056492c19b152dd


      <Route path="/Admin" element={<Admin/>} >
     

      </Route>
      

    
     
      </Routes>
      </SnackbarProvider>
      </AppProvider>
      </BrowserRouter>
    </div>
  )
}

export default App