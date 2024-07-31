// components/Navbar.tsx
import React from 'react';
import { Input } from "@/components/ui/input";
import { cn } from '@/lib/utils';
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import Link from 'next/link'
import { FaSearch } from "react-icons/fa";

const Navbar: React.FC = () => {

 
  const extraLinks = [
    {
      title: "Products"
    },
    {
      title: "Sell With Us"
    },
    {
      title: "About our Products"
    },
    {
      title: "About Us"
    }
  ];

  return (
    <div>
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <a href="/" className="text-white text-xl font-bold md:text-2xl">
              Hack-Repairs
            </a>
            <div className="md:hidden">
              <button type="button" className="text-white focus:outline-none">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M4 5h16M4 12h16m-7 7h7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="hidden  md:flex items-center space-x-4">
            
            <Link href="#cart" className="text-white py-2 flex items-center gap-2"><FiShoppingCart />Cart</Link>
            <Link href="#orders" className="text-white py-2 flex items-center gap-2">Orders</Link>

            
            <Link href="/signin" className="text-white py-2 flex items-center gap-2"><FaRegUser />Sign In</Link>
          
            
            <Link href="#home" className="text-white py-2 flex items-center gap-2"></Link>
          </div>
        </div>    
      </nav>
      <div className="container mx-auto px-6 py-4 flex flex-col  md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
       <div className='flex items-center border w-full md:w-1/2'>
       <input type="text" placeholder="Search all phone screens  (e.g Tecno, Samsung)" className='h-full p-2 outline-none w-full  rounded-md ' />
       <span className='bg-button text-white p-4 h-full'><FaSearch /></span></div> 
        <ul className="flex flex-wrap gap-4">
          {extraLinks.map((link, index) => (
            <li key={index} className="text-gray-800 hover:text-gray-600">
              {link.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
