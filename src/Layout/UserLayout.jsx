import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../User/Components/Navbar"
const Layout = () => {
  return (
   <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
   </div>
  )
}

export default Layout