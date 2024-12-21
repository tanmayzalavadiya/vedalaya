import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuOne from "../MenuOne/MenuOne"; // Make sure you are using MenuOne here

const DeskNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHealthDropdownOpen, setIsHealthDropdownOpen] = useState(false);
  let timeoutId;

  const handleShopMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };

  const handleShopMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
  };

  const handleHealthMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsHealthDropdownOpen(true);
  };

  const handleHealthMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsHealthDropdownOpen(false);
    }, 300);
  };

  return (
    <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-4">
      <div className="flex items-center mb-4 sm:mb-0">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-white">
            VAD
            <span className="relative text-[2em]">a</span>
            LAYA
          </span>
        </Link>
      </div>

      <ul className="nav-links flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
        {/* Shop Dropdown */}
        <li
          className="relative shop-dropdown"
          onMouseEnter={handleShopMouseEnter}
          onMouseLeave={handleShopMouseLeave}
        >
          <Link to="/Shop" className="text-black">Shop</Link>
          {isDropdownOpen && (
            <div className="shop-dropdown-content absolute left-0 mt-2 bg-white text-black shadow-lg z-10">
              <MenuOne /> {/* This renders the MenuOne component */}
            </div>
          )}
        </li>

        {/* Sattva Therapy Link */}
        <li>
          <Link to="/Sattva Therapy">Sattva Therapy</Link>
        </li>

        {/* About Us Link */}
        <li>
          <Link to="/About Us">About Us</Link>
        </li>

        {/* Health Concerns Dropdown */}
        <li
          onMouseEnter={handleHealthMouseEnter}
          onMouseLeave={handleHealthMouseLeave}
          className="relative"
        >
          <Link to="/Health Concerns">Health Concerns</Link>
          {isHealthDropdownOpen && (
            <div className="absolute left-0 mt-2 bg-white text-black shadow-lg z-10">
              <ul className="flex flex-col">
                <li>
                  <Link
                    to="/Health Concerns/Headache"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                  >
                    Headache
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Health Concerns/Anxiety"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                  >
                    Anxiety & Overthinking
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Health Concerns/Sleep"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                  >
                    Sleep Disturbance
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Health Concerns/PCOD"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                  >
                    PCOS/PCOD
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Health Concerns/Fatigues"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                  >
                    Fatigues
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        {/* Free Doctor Consultation Link */}
        <li>
          <Link to="/Free Doctor Consultation">Free Doctor Consultation</Link>
        </li>
      </ul>

      {/* Search and Cart Links */}
      <div className="search-cart-links flex space-x-4 mt-4 sm:mt-0">
        <Link to="/search">Search</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
};

export default DeskNav;
