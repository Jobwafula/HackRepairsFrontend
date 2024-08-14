

import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        <img
          src="/hack-repairs.jpg" 
          alt="Logo"
          className="w-72 h-72"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-72 w-72 border-t-4 border-button border-solid"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
