import React from 'react'
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <img src={logo} alt="" className='h-12'/>
          <p className="text-gray-400">Leading pharmaceutical manufacturer with state-of-the-art facilities.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Generic Drugs</li>
            <li>Specialty Medicines</li>
            <li>OTC Products</li>
            <li>New Releases</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Contract Manufacturing</li>
            <li>Quality Testing</li>
            <li>R&D Services</li>
            <li>Consulting</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>gaganpharma03@gmail.com</li>
            <li>gagan.ayu@gmail.com</li>
            <li>H1-386-387 Agro Food Park, Udhyog Vihar,</li>
            <li>RIICO SriGanganagar Rajasthan</li>
            <li>(335001)</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>© 2024 GaganPharma. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer