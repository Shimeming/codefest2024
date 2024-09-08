'use client';

import { useEffect, useState } from 'react';
import { FaTimes, FaUser } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; // Correct router hook in App Router

const TopBar = () => {
  const [isClient, setIsClient] = useState(false); // State to check client-side rendering
  const router = useRouter(); // Initialize router

  useEffect(() => {
    setIsClient(true); // When the component is mounted, we know it's client-side
  }, []);

  const handleUserIconClick = () => {
    if (isClient) {
      router.push('/personal-page'); // Only perform navigation client-side
    }
  };

  const handleCrossClick = () => {
    console.log('Cross icon clicked');
  };

  return (
    <div className="flex justify-between items-center bg-white px-4 py-2 shadow-md">
      {/* Left Cross Icon */}
      <FaTimes className="text-2xl cursor-pointer" onClick={handleCrossClick} />

      {/* Centered Text */}
      <p className="text-xl font-bold" style={{ fontFamily: 'PingFang SC, sans-serif' }}>
        Taipei Townder
      </p>

      {/* Right User Icon */}
      <FaUser className="text-2xl cursor-pointer" onClick={handleUserIconClick} />
    </div>
  );
};

export default TopBar;
