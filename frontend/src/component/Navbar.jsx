import { LuUserCircle2 } from "react-icons/lu";
import { PiListDashesBold } from "react-icons/pi";

import logo from '../../public/Logo2.png'
// import { Link } from 'react-router-dom'
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import { FaSearch } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import useAppContext from "./Context/UserContext";
// import { IoAddCircleOutline } from "react-icons/io5";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showMenu, setshowMenu] = useState(false)
  const handleShowMenu = () => {
    setshowMenu(preve => !preve)
  }

  const location = useLocation();

  // Specify the paths where you want to hide the Navbar
  const hideNavbarPaths = ['/login', '/signup', '/AddCollege', '/Admin', '/Admin/ManageCollege', '/Admin/Manageuniversity', '/Admin/Adduniversity', '/Admin/Dashboard', '/Admin/ManageReviews', '/Admin/Manage', '/Admin/AddPlayway', '/Admin/AddSchool', '/Admin/AddCollege', '/Admin/AddUniversity', '/Admin/ManageSchool', '/Admin/ManagePlayway', '/Admin/ManageUniversity', '/Admin/Manageuser'];

  // Check if the current path is in the hideNavbarPaths array
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  // Render Navbar only if shouldHideNavbar is false

  const { loggedIn, logout } = useAppContext();

  console.log(loggedIn);

  const showLoggedin = () => {
    if (loggedIn) {
      return (
        <div className=" ">
          <div className="container d-flex flex-wrap justify-content-end ">

            <div className="text-end">
              <button onClick={logout} type="button" className="btn btn-danger mx-2 text-white px-3 py-1 rounded ">
                Logout
              </button>

              <Link to={"/User/Profile"} type="button" className="btn btn-primary  text-white px-3 py-1 rounded ">
                Profile
              </Link>


            </div>
          </div>
        </div>
      );
    } else {
      return <div className=" ">
        <div className="container d-flex flex-wrap justify-content-end">

          <div className="text-end">
            <Link to={"/login"} type="button" className="btn text-white px-3 py-1 rounded btn-dark" style={{ fontFamily: "initial" }}>
              Login
            </Link>
            <Link to={"/signup"} type="button" className="btn btn-primary mx-2 hover:bg-blue-700 text-white px-3 py-1 rounded " style={{ fontFamily: "initial" }}>
              SignUp
            </Link>
          </div>
        </div>
      </div>
    }
  }

  return shouldHideNavbar ? null : (
    <>
      <nav className="navbar navbar-expand-lg py-0 bg-white sticky-top shadow-lg">

        <div className="container-fluid">
          <div className="d-flex">
          <PiListDashesBold className="text-4xl my-auto" onClick={handleShow} />

            {/* </Button> */}
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton >
                <img src={logo} className='w-50 ' alt="" />
                <Offcanvas.Title></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>



                <Link className="nav-link fs-4 bg-blue-900 text-white rounded-lg py-1 font-serif hover:bg-blue-600 text-center mb-3" aria-current="page" to="/Mainpage/Playway">
                  Playway
                </Link>
                <Link className="nav-link fs-4 bg-blue-900 text-white rounded-lg py-1 font-serif hover:bg-blue-600 text-center mb-3" aria-current="page" to="/Mainpage/School">
                  School
                </Link>
                <Link className="nav-link fs-4 bg-blue-900 text-white rounded-lg py-1 font-serif hover:bg-blue-600 text-center mb-3" aria-current="page" to="/Mainpage/College">
                  College
                </Link>
                <Link className="nav-link fs-4 bg-blue-900 text-white rounded-lg py-1 font-serif hover:bg-blue-600 text-center mb-3" aria-current="page" to="/Mainpage/University">
                  University
                </Link>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
          <div style={{ fontFamily: "cursive", fontSize: "large" }}>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-blue-900 font-serif" aria-current="page" to="/Home">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-blue-900 font-serif" to="/Aboutus"  >
                  About us
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-blue-900 font-serif" to="/Contactus" >
                  Contact us
                </Link>
              </li>
          
            </ul>
          </div>
          <div className=" text-slate-600" onClick={handleShowMenu}>
            <div className="text-2xl cursor-pointer">
              <LuUserCircle2 className="text-slate-600 fw-bold fs-2 hover:text-blue-500 " />
            </div>
            {showMenu &&
              <div className="absolute right-0 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col">
                {showLoggedin()}
              </div>
            }
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar