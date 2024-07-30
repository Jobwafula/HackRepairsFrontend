// components/Navbar.tsx
import React from 'react';
import { Input } from "@/components/ui/input"
import { cn } from '@/lib/utils';
import { title } from 'process';

const Navbar: React.FC = () => {
  const extraLinks = [
    {
      title:"Products"
    },
    {
      title:"Sell With Us"
    },
    {
      title:"About our Products"
    }
    ,{
      title:"About Us"
    }
  ]
  return (
    <div>
    <nav className="bg-gray-800 text-white ">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <div>
            <a href="/" className="text-white text-xl font-bold md:text-2xl">
              Hack-Repairs
            </a>
          </div>
          <div className="md:hidden">
            <button type="button" className="text-white focus:outline-none">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M4 5h16M4 12h16m-7 7h7"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="md:flex items-center">
          <a href="#home" className="text-white py-2 mx-4">Home</a>
          <a href="#services" className="text-white py-2 mx-4">Cart</a>
          <a href="#services" className="text-white py-2 mx-4">orders</a>
          <a href="#contact" className="text-white py-2 mx-4">Contact</a>
        </div>
      </div>
    </nav>
    <div className='m-6 flex items-center'>
      <div>
    <Input type="text" placeholder="Search all phone screens (e.g Tecno,Samsung) " className={cn('outline-none')} />
    </div> <div>
      <ul className='flex'>
        {extraLinks.map((link,index)=>{
          return (<div>
            <li>{link.title}</li>
          </div>)
           

        })}
       
      </ul>
    </div>
    </div>
    </div>
  );
}

export default Navbar;
