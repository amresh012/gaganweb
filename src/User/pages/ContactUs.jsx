import React from 'react'
import {CustomDropdown} from '../Components/QuoteForm'
import { Divider } from 'antd'

const ContactUs = () => {
  return (
    <>
    <div className="">
      <div className="h-[50vh] contact-bg bg-black rounded-b-2xl">
         <h1 className=''>
         </h1>
      </div>
      <div className="flex items-start justify-around p-4">
      <div className="flex items-center  justify-center p-4">
        <div className="header flex flex-col items-center justify-start gap-4">
           <h1 className='text-3xl font-bold text-gray-900 uppercase'>Contact With Us</h1>
           <p className="text-center">
           We promise, your message won’t disappear into the abyss. We’re standing by and ready to help with any questions, comments, or thoughts you may have.
           </p>
           <div className="flex flex-col items-start justify-center gap-4">
          <p> Call at:  +91-7230890003</p>

           <p>Email:  gaganpharma03@gmail.com, info@gaganpharmaceuticals.com
           </p>
           <p>Address :
           H1-386-387 Agro Food Park, Udhyog Vihar, RIICO Sri Ganganagar Rajasthan (335001)</p>
           </div>
        </div>
      </div>
      <div className="contact-form w-2/3 bg-gray-100">
      <div className="text-xl text-center mt-5 font-bold text-green-800 px-4">
        <p>Leave Us Your Message</p>
        <Divider/>
      </div>
      <form className="p-4 space-y-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                className="w-full border h-9 border-gray-300 outline-none rounded-md px-2 placeholder:px-2"
                id="name"
                placeholder="enter your name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Your Email</label>
              <input
                type="email"
                className="w-full border h-9 border-gray-300 outline-none rounded-md px-2 placeholder:px-2"
                id="name"
                placeholder="enter your email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="contact">Your Contact</label>
              <input
                type="number"
                className="w-full border h-9 border-gray-300 outline-none rounded-md px-2 placeholder:px-2"
                id="name"
                placeholder="enter your contact"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="company name">Company Name</label>
              <input
                type="text"
                className="w-full border h-9 border-gray-300 outline-none rounded-md px-2 placeholder:px-2"
                id="name"
                placeholder="enter your company name"
              />
            </div>
            {/* <div className="flex flex-col gap-1">
              <label htmlFor="product name">Product Name</label>
              <input
                type="text"
                className="w-full border h-9 border-gray-300 outline-none rounded-md px-2 placeholder:px-2"
                id="name"
                placeholder="enter your name"
              />
              <CustomDropdown/>
            </div> */}
            {/* <div className="flex flex-col gap-1">
              <label htmlFor="name">Minimum Quantity (Pcs)</label>
              <input
                type="text"
                className="w-full border h-9 border-gray-300 outline-none rounded-md px-2 placeholder:px-2"
                id="name"
                placeholder="enter your name"
              />
            </div> */}
            <div className="textarea flex flex-col">
              <label htmlFor="textarea">Your Message</label>
                <textarea placeholder="enter your query" rows="4" className="border rounded-sm border-green-800"></textarea>
            </div>
           <button type="submit" className="px-6 py-1 rounded-sm shadow-sm active:scale-95 bg-green-800 hover:bg-green-700 duration-300 text-white">
            Submit Form
           </button>
          </form>
      </div>
      </div>
    </div>
    </>
  )
}

export default ContactUs