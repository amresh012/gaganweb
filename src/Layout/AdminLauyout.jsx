import React from 'react'
import Navbar from '../User/Components/Navbar'
import { Outlet } from 'react-router-dom'

const AdminLauyout = () => {
  return (
   <>
   <Navbar/>
   <Outlet/>
   </>
  )
}

export default AdminLauyout