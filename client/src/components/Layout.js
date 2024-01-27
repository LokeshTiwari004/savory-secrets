import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='container'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout