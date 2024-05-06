import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'


const Admin = () => {
  return (
    <>
    
    <Sidebar />
    <Outlet />
    
    </>
  )
}

export default Admin