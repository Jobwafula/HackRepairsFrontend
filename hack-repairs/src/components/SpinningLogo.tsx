import React from 'react';
import './SpinningLogo.css'; // Import the CSS for spinning effect
import Image from 'next/image'

const SpinningLogo = () => {
  return (
    <div className="spinning-logo-container">
      <Image width={100} height={100} src="/path/to/your/logo.png" alt="Logo" className="spinning-logo" />
    </div>
  );
};

export default SpinningLogo;
