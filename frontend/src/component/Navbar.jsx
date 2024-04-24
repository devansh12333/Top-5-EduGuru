import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
         
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="/Mainlogo.png" alt="" style={{height:75, width:57}}
      />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">
            Home
          </Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/Aboutus">
            About us
          </Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link " to="/Contactus">
            Contact us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/Reviewandrating">
            Feedback
          </Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        {/* <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        /> */}
        <Link to={"/signup"} className='btn btn-outline-success me-3' type='button'>Signup</Link>
        <Link to={"/login"} className="btn btn-outline-success me-3" type="button">
          Login
        </Link>
      </form>
    </div>
  </div>
</nav>



        </div>
    )
}

export default Navbar