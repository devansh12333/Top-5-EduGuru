import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    
    <div className="container-fluid">
  <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between  mb-4 border-bottom">
    <div className="col-md-3  mb-md-0">
      <a
        href="/"
        className="d-inline-flex link-body-emphasis text-decoration-none"
      >
        <svg
          className="bi"
          width={40}
          height={32}
          role="img"
          aria-label="Bootstrap"
        >
          <use xlinkHref="#bootstrap" />
        </svg>
      </a>
    </div>
    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li>
        <Link to="/" className="nav-link px-2 text-white fs-5 " style={{fontFamily:"serif"}}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/Aboutus" className="nav-link px-2 text-white fs-5" style={{fontFamily:"serif"}}>
          About us
        </Link>
      </li>
      <li>
        <Link to="/contactUs" className="nav-link px-2 text-white fs-5" style={{fontFamily:"serif"}}>
          Contact us
        </Link>
      </li>
      <li>
        <Link to="/Reviewandrating" className="nav-link px-2 text-white fs-5" style={{fontFamily:"serif"}}>
          Feedback
        </Link>
      </li>
     
    </ul>
    <div className="col-md-3 text-end">
      <Link type="button" to="/login" className="btn btn-primary fs-5 px-3 me-2" style={{fontFamily:"serif"}}>
        Login
      </Link>
      <Link type="button" to="/signup" className="btn px-3 btn-danger fs-5  me-3" style={{fontFamily:"serif"}}>
        Sign-up
      </Link>
    </div>
  </header>
</div>

    
    </>
  )
}

export default Navbar