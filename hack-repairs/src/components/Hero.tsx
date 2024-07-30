// components/Hero.tsx
import React from 'react';
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-800 md:text-6xl">
            Phone Screen Repair & Sales
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            We provide top-notch phone screen repair services and sell high-quality replacement screens for all major brands.
          </p>
          <div className="mt-8">
            <Link href="#services" className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-700 transition duration-300">
              Explore Services
            </Link>
            
          </div>
        </div>
        <div className="text-center lg:text-right">
          <img src="/phone.jpeg" alt="Phone Repair" className="mx-auto lg:ml-auto lg:mr-0 w-full max-w-md rounded-lg shadow-lg" />
          <div
          className='inset-0  bg-black bg-opacity-75'></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
