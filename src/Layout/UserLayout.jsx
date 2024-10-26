import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../User/Components/Navbar"
import Footer from '../User/Components/Footer'
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