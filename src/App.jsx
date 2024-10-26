import { Route, Router, Routes } from "react-router-dom"
import UserLayout from "./Layout/UserLayout"
import AdminLauyout from "./Layout/AdminLauyout"
import {Home} from "./User/index"
import Manufacturing from "./User/pages/Manufacturing"
import Aboutus from "./User/pages/Aboutus"
import Dashboard from "./Admin/Dashboard"
import ContactUs from "./User/pages/ContactUs"
function App() {

  return (
    <>
      {/* userRoutes */}
      <Routes>
        <Route path="/" element={<UserLayout/>}>
        <Route index element = {<Home/>}/>
        <Route path='/manufacturing' element = {<Manufacturing/>}/>
        <Route path="/about" element={<Aboutus/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        </Route>




      {/* AdminRoutes */}
        <Route path="/admin" element={<AdminLauyout/>}>
         <Route index element={<Dashboard/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
