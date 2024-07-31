// components/Hero.tsx
import React from 'react';
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <div className="h-screen relative bg-white">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 h-full">
        <div className="text-center flex flex-col justify-center items-center lg:items-start z-50 lg:text-left h-full">
          <h2 className="text-3xl font-bold text-white  md:text-black md:text-6xl">
            Phone Screen Repair & Sales
          </h2>
          <p className="mt-6 text-xl  md:text-lg text-white  md:text-gray-600">
            We provide top-notch phone screen repair services and sell high-quality replacement screens for all major brands.
          </p>
          <div className="mt-8">
            <Link href="#services" className="bg-[#003300] text-white py-2 px-6 rounded-full text-lg hover:bg-blue-700 transition duration-300">
              Explore Services
            </Link>
          </div>
        </div>
        <div className="h-screen absolute md:relative inset-0 flex items-center justify-center md:justify-end">
          <img src="/repair.png" alt="Phone Repair" className="mx-auto lg:ml-auto lg:mr-20 w-full h-full max-w-md animate-rotate" />
        <div className='absolute bg-black inset-0 bg-opacity-75 md:hidden'></div></div>
      </div>
    </div>
  );
}

export default Hero;
