import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    
    <div
  className="d-flex flex-column vh-100 flex-shrink-0 p-3 "
  style={{ width: 280, backgroundColor:"lightskyblue" }}
>
  <a
    href="/"
    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
  >
    <svg className="bi pe-none me-2" width={40} height={32}>
      <use xlinkHref="#bootstrap" />
    </svg>
    <span className="fs-4">Top5EduGuru</span>
  </a>
  <hr />
  <ul className="nav nav-pills flex-column mb-auto">
    <li className="nav-item">
      <Link to="/Manageuniversity" className="nav-link text-dark" aria-current="page">
        <svg className="bi pe-none me-2" width={16} height={16}>
          <use xlinkHref="#home" />
        </svg>
        University
      </Link>
    </li>
    <li>
      <Link to="/Managecollege" className="nav-link link-body-emphasis">
        <svg className="bi pe-none me-2" width={16} height={16}>
          <use xlinkHref="#speedometer2" />
        </svg>
        College
      </Link>
    </li>
    <li>
      <Link to="/Manageschool" className="nav-link link-body-emphasis">
        <svg className="bi pe-none me-2" width={16} height={16}>
          <use xlinkHref="#table" />
        </svg>
        School
      </Link>
    </li>
    <li>
      <Link to="/Manageplayway" className="nav-link link-body-emphasis">
        <svg className="bi pe-none me-2" width={16} height={16}>
          <use xlinkHref="#grid" />
        </svg>
        Playway
      </Link>
    </li>
    
  </ul>
  <hr />
  <div className="dropdown">
    <a
      href="#"
      className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <img
        src="https://i.pngimg.me/thumb/f/720/m2H7G6H7H7Z5G6m2.jpg"
        alt=""
        width={32}
        height={32}
        className="rounded-circle me-2"
      />
      <strong>Admin</strong>
    </a>
    <ul className="dropdown-menu text-small shadow">
      <li>
        <a className="dropdown-item" href="#">
          New project...
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Settings
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Profile
        </a>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Sign out
        </a>
      </li>
    </ul>
  </div>
</div>

    
    </>
  )
}

export default Sidebar