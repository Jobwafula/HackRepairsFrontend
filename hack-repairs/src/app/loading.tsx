
import Image from 'next/image';
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        <Image
          src="/hack-repairs.jpg" 
          width={100}
          height={100}
          alt="Logo"
          className=""
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-[100px] w-[100px] border-t-4 border-button border-solid"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
