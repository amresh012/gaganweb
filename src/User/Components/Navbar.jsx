import React from 'react'
import logo from "../../assets/logo.png"
import Drawer from "./UI/Drawer"
import { Menu, X} from 'lucide-react';
import {Link} from "react-router-dom"
import GalleryDropdown from "./UI/Dropdown"
import { Divider } from 'antd';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/">
            <div className="flex items-center p-4">
             <img src={logo} alt="" className='h-12' />
              <span className="ml-2 text-xl font-bold text-green-800">GaganPharma</span>
            </div>
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/products"><a className="text-gray-600 hover:text-green-600">Products</a></Link>
             <Link to="/manufacturing">
             <a className="text-gray-600 hover:text-green-600">Manufacturing</a>
             </Link>
              <a className="text-gray-600 relative">
                <li className="list-none group">Company</li>
                <div className="content opacity-0 group-hover:opacity-100  group-hover:translate-y-0 p-4 space-y-2 translate-y-9 duration-500 group-hover:block list-none bg-white left-0 rounded-md shadow-sm  w-[18rem] absolute">
                  <li className="list-none hover:bg-gray-100">CERTIFICATES</li>
                  <Divider/>
                  <li className="list-none hover:bg-gray-100">DIRECTORS DESK</li>
                  <Divider/>
                  <li className="list-none hover:bg-gray-100">MANUFACTURING UNIT</li>
                  <Divider/>
                  <li className="list-none hover:bg-gray-100">QUALITY CONTROL</li>
                  <Divider/>
                  <li className="list-none hover:bg-gray-100">RESEARCH & DEVELOPMENT</li>
                </div>
              </a>
              <Link to="/about">
              <a className="text-gray-600 hover:text-green-600">About Us</a>
              </Link>
              <Link to="/contactus"><a className="text-gray-600 hover:text-green-600">Contact</a></Link>
              <GalleryDropdown />
              <button className="bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-700">
                <Drawer text="Get Quote"/>
              </button>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a className="block px-3 py-2 text-gray-600">Products</a>
              <a className="block px-3 py-2 text-gray-600">Manufacturing</a>
              <a className="block px-3 py-2 text-gray-600">About Us</a>
              <a className="block px-3 py-2 text-gray-600">Contact</a>
              <a className="block px-3 py-2 text-gray-600">Gallery</a>
            </div>
          </div>
        )}
      </nav>
  )
}

export default Navbar