import React from 'react';
import { Menu, X, ChevronRight, Beaker, Building2, Award, Search, Phone} from 'lucide-react';
import {Link} from "react-router-dom"
import Capsule from "../assets/capsules.png"
import Syrup from "../assets/syrup.png"
import Whey from "../assets/whey.png"
import Marquee from "react-fast-marquee"
import logo from "../assets/logo.png"
import {C1,
  C2,
  C3,
  C4,
  C5,
} from "../assets/index"
import CountUp from 'react-countup';
import Drawer from "./Components/Drawer"

  const ClientImages =  [C1,C2,C3,C4,C5]
const PharmaWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 const manufac = [
  {
    id:0,
    title:"Tablets & Capsules",
    desc:"We Offer Ranges Of Ayurvedic & Herbal Tablets and Capsules To Boost Health, Vitality & Immunity. Our 100% Authentic and...",
    image:Capsule
  },
  {
    id:0,
    title:"Syrup & Oil",
    desc:"We Offer Ranges Of Ayurvedic & Herbal Syrups and Oils To Boost Health, Vitality & Immunity. Our 100% Authentic and...",
    image:Syrup
  },
  {
    id:0,
    title:"Powder & Juices",
    desc:"We Offer Ranges Of Ayurvedic & Herbal Powders and Juices To Boost Health, Vitality & Immunity. Our 100% Authentic and...",
    image:Whey
  }
 ]
  return (
    <div className=" bg-white">
            {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Excellence in Pharmaceutical
              <span className="text-green-800"> Manufacturing</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Leading manufacturer of high-quality pharmaceuticals with state-of-the-art facilities for both proprietary and third-party manufacturing.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <button className="w-full flex items-center justify-center  border border-transparent text-base font-medium rounded-md text-white bg-green-800 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                  Explore Products
                </button>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <button className="w-full flex items-center justify-center border  text-base font-medium rounded-md text-green-600 hover:text-white duration-300  hover:bg-green-800  border-green-800 md:py-4 md:text-lg md:px-2">
                  Manufacturing Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
     {/* About us */}
     <div className="About-us">
      <div className="">
        <div className="left-content  ">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
          {/* <div className="">
            <h1 className='text-4xl font-bold text-green-800 mb-4'>About Us</h1>
          </div> */}
            <h1 className="text-4xl font-bold text-green-800 mb-4">
              Advancing Healthcare Through Innovation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over three decades, GaganPharma has been at the forefront of pharmaceutical excellence, 
              combining cutting-edge technology with unwavering commitment to quality and patient care.
            </p>
          </div>
        </div>
      </div>
        </div>
        <div className="right-content ">
        <div className="bg-white py-12 -mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
            <div className="bg-white p-6 min-h-44 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2"><CountUp start={0}
  end={30}
  duration={5} />+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2"><CountUp start={0}
  end={1000}
  duration={5} />+</div>
              <div className="text-gray-600">Employees</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2"><CountUp start={0}
  end={50}
  duration={5} />+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2"><CountUp start={0}
  end={200}
  duration={5} />+</div>
              <div className="text-gray-600">Products</div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
     </div>
      {/* {Abou us end} */}







      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Own Products */}
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <Beaker className="h-12 w-12 text-green-800 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Own Products</h3>
              <p className="text-gray-600">
                Innovative pharmaceutical solutions developed through extensive research and development.
              </p>
              <a className="mt-4 text-green-800 flex items-center">
                Learn more <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>

            {/* Contract Manufacturing */}
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <Building2 className="h-12 w-12 text-green-800 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contract Manufacturing</h3>
              <p className="text-gray-600">
                State-of-the-art facilities and expertise for third-party pharmaceutical manufacturing.
              </p>
              <a className="mt-4 text-green-800 flex items-center">
                Learn more <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>

            {/* Quality Assurance */}
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <Award className="h-12 w-12 text-green-800 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Rigorous quality control processes ensuring the highest standards of pharmaceutical manufacturing.
              </p>
              <a className="mt-4 text-green-800 flex items-center">
                Learn more <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Search Products Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Find Our Products</h2>
            <p className="mt-4 text-gray-600">Search our extensive catalog of pharmaceutical products</p>
            <div className="mt-8 flex justify-center">
              <div className="mt-1 relative rounded-md shadow-sm max-w-xl w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="focus:ring-green-700 focus:border-green-800 block w-full pl-10 pr-12 py-3 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Search products..."
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button className="h-full px-4 py-2 text-sm font-medium text-white bg-green-800 hover:bg-green-700 rounded-r-md">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* product category */}
      <div className="bg-gray-100 h-[100vh]  mt-12 p-4">
        <div className="">
          <div className="header">
            <h1 className='text-3xl font-bold text-gray-900 text-center'>Exclusive Product Range</h1>
            <p className="mt-4 text-gray-600 text-center">Explore our extensive catalog of pharmaceutical products</p>
          </div>
          <div className="product-range-body">
            {
              [...Array(4)].map((i)=>(
                <div className=""></div>
              ))
            }
          </div>
        </div>
      </div>

      {/* manufacture service */}
      <div className="  mt-12 p-4">
        <div className="flex  flex-col gap-12">
          <div className="header">
            <h1 className='text-3xl font-bold text-gray-900 text-center'>Manufacturing Product Ranges</h1>
            <p className="mt-4 text-gray-600 text-center">We offer the wide range of product in manufacturing</p>
          </div>
          <div className="product-range-body flex items-center justify-around gap-4 flex-wrap">
            {
             manufac.map((i)=>(
                <div className="border-gray-200 w-[20rem] group hover:shadow-md border min-h-[20rem]  p-4 rounded-md gap-4  flex flex-col items-center justify-around" key={i.id}>
                  <img src={i.image} alt=""  className='h-12 group-hover:scale-105 duration-300 group-hover:rotate-12' />
                  <h1 className='text-green-800 font-bold uppercase md:text-2xl sm:text-base'>{i.title}</h1>
                  <p className="text-center text-gray-500">{i.desc}</p>
                  <button className=" text-green-800 px-4 py-2 flex items-center gap-2 border-b border-green-800  ">
                   Get Quote <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      {/* clients we serve */}
      <div className="  mt-12 p-4">
        <div className="flex  flex-col gap-12">
          <div className="header">
            <h1 className='text-3xl font-bold text-gray-900 text-center'>Clients We Serve</h1>
            <p className="mt-4 text-gray-600 text-center">Our Prestegious Clients whome we server the best </p>
          </div>
          <div className="product-range-body flex items-center justify-around gap-4">
              <Marquee autoFill={true}>
             { ClientImages.map((i)=>(
                  <img src={i} alt=""  className='h-12 group-hover:scale-105 duration-300 group-hover:rotate-12' />
              ))}
                </Marquee>
          </div>
        </div>
      </div>
      {/* clients we serve */}


      {/* Contact Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-4 text-gray-600">Get in touch for inquiries about our products or manufacturing services</p>
            <div className="mt-8 flex justify-center items-center">
              <Phone className="h-6 w-6 text-green-800 mr-2" />
              <span className="text-xl text-gray-700">+91-7230890003 || +91-9351600009</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default PharmaWebsite;