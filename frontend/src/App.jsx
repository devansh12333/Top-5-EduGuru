import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './component/Login'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Signup from './component/Signup'
import { SnackbarProvider } from 'notistack'
import AddSchool from './component/Admin/Addschool'
import AddCollege from './component/Admin/Addcollege'
import AddPlayway from './component/Admin/Addplayway'
import School from './component/Mainpage/School'
import College from './component/Mainpage/College'
import University from './component/Mainpage/University'
import Playway from './component/Mainpage/Playway'
import Update from './component/Update'
import ContactUs from './component/ContactUs'
import Aboutus from './component/Aboutus'
import Reviewandrating from './component/Reviewandrating'
import Admin from './component/Admin/Index'
import Review from './component/collegeReview'
import { AppProvider } from './component/Context/UserContext'
import Managecollege from './component/Admin/Managecollege'
import Manageschool from './component/Admin/Manageschool'
import Dashboard from './component/Admin/Dashboard'
import Manageplaway from './component/Admin/Manageplayway'
import Manageuser from './component/Admin/Manageuser'
import ViewCollege from './component/Mainpage/Viewcollege'
import ViewUniversity from './component/Mainpage/Viewuniversity'

import ViewPlayway from './component/Mainpage/Viewplayway'
import Manageuniversity from './component/Admin/Manageuniversity'
import AddUniversity from './component/Admin/Adduniversity'
import Mainpage from './component/Mainpage/Index'

import User from './component/User/Index'
import Profile from './component/User/Profile'
import Editprofile from './component/User/editProfile'
import ViewSchool from './component/Mainpage/Viewschool'
import TopCollege from './component/Mainpage/Top5College'
<<<<<<< HEAD
import ForgotPassword from './component/Mainpage/ForgotPassword'
=======
import TopSchool from './component/Mainpage/Top5School'
import TopUniversity from './component/Mainpage/Top5University'
import TopPlayway from './component/Mainpage/Top5Playway'
>>>>>>> d57287ea0cce443e3d319cf201129fbecb0221d8


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppProvider>
          <SnackbarProvider >
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Home' element={<Home />} />

              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/contactUs' element={<ContactUs />} />
              <Route path='/Aboutus' element={<Aboutus />} />

              <Route path="/Update/:id" element={<Update />} />

              <Route path="/Reviewandrating" element={<Reviewandrating />} />

              <Route path="/collegeReview/:id" element={<Review />} />

              <Route path='Mainpage' element={<Mainpage />}>
                <Route path="Viewcollege/:id" element={<ViewCollege />} />
                <Route path="Viewuniversity/:id" element={<ViewUniversity />} />
                <Route path="Viewschool/:id" element={<ViewSchool />} />
                <Route path="Viewplayway/:id" element={<ViewPlayway />} />
                <Route path="School" element={<School />} />
                <Route path="College" element={<College />} />
                <Route path="University" element={<University />} />
                <Route path="Playway" element={<Playway />} />
                <Route path="Top5College" element={<TopCollege />} />
<<<<<<< HEAD
                <Route path="forgotPassword" element={<ForgotPassword/>} />
=======
                <Route path="Top5School" element={<TopSchool />} />
                <Route path="Top5University" element={<TopUniversity />} />
                <Route path="Top5Playway" element={<TopPlayway/>} />
>>>>>>> d57287ea0cce443e3d319cf201129fbecb0221d8
              </Route>


              <Route path='/User' element={<User />}>
                <Route path='Profile' element={<Profile />} />
                <Route path='editProfile' element={<Editprofile />} />

              </Route>

              <Route path='Admin' element={<Admin />}>

                <Route path='Dashboard' element={<Dashboard />} />
                <Route path="Managecollege" element={<Managecollege />} />
                <Route path="AddCollege" element={<AddCollege />} />
                <Route path="AddSchool" element={<AddSchool />} />
                <Route path="AddPlayway" element={<AddPlayway />} />
                <Route path="Adduniversity" element={<AddUniversity />} />
                <Route path="Manageuser" element={<Manageuser />} />
                <Route path="ManageSchool" element={<Manageschool />} />
                <Route path="ManagePlayway" element={<Manageplaway />} />
                <Route path="Manageuniversity" element={<Manageuniversity />} />
                <Route path="Manageuser" element={<Manageuser />} />
              </Route>
            </Routes>
          </SnackbarProvider>
        </AppProvider>
      </BrowserRouter>
    </div>
  )
}

export default App