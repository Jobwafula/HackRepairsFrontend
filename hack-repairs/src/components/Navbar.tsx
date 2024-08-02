'use client'

// components/Navbar.tsx
import React, { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { cn } from '@/lib/utils';
import { FiLogOut, FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import Link from 'next/link'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from './ui/button';
import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
  interface User {
    email: string;
    name: string;
    // Add any other properties that the User object should have
  }
  const [user, setUser] = useState<User | null>(null);
  const {signout} = useAuth();
  const router = useRouter();


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

  useEffect(() => {
    // Get user from local storage
    const localUser = localStorage.getItem('user');
    
    // Check if the localUser exists and parse it if it's not null
    if (localUser) {
      try {
        const parsedUser: User = JSON.parse(localUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Failed to parse user from localStorage", error);
      }
    } else {
      setUser(null); // If no user is found in localStorage
    }
    
    console.log("local user", localUser);
  }, []);


  const handleSignout = () => {
    signout(() => {
      window.location.reload();
    });
  };

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
            {user ? (
              <div >
                <Popover>
                  <PopoverTrigger>{user.name}</PopoverTrigger>
                  <PopoverContent><Button onClick={handleSignout}><FiLogOut className='mr-4'/> Signout</Button></PopoverContent>
                </Popover>
              </div>
            ) : (
              <Link href="/signin" className="text-white py-2 flex items-center gap-2">
                <FaRegUser />Sign In
              </Link>
            )}
                        
            <Link href="#home" className="text-white py-2 flex items-center gap-2"></Link>
          </div>
        </div>    
      </nav>
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
        <Input type="text" placeholder="Search all phone screens (e.g Tecno, Samsung)" className={cn('outline-none p-2 w-full md:w-1/2 rounded-md border border-gray-300')} />
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
