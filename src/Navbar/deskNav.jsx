import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuOne from "../MenuOne/MenuOne"; // Make sure you are using MenuOne here
import cart from '../images/cart.png'
import { useCart } from '../Cart/CartContext';

const DeskNav = ({showNav,setShowNav}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHealthDropdownOpen, setIsHealthDropdownOpen] = useState(false);
  let timeoutId;

      const { cartItems} = useCart(); // Destructure cartItems and removeFromCart from useCart()
  

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

  const closeNav = () =>{
    setShowNav(false)      
  }

  return (
    <div className={`container  mx-auto flex flex-col sm:flex-row justify-between items-center py-4 ${showNav ? "" : "hidden"} `}>
      <div className="flex items-center mb-4 sm:mb-0">
        <Link to="/" className="text-2xl font-bold" onClick={closeNav}>
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
          <Link to="/Shop" className="text-black" onClick={closeNav} >Shop</Link>
          {isDropdownOpen && (
            <div className="shop-dropdown-content absolute left-0 mt-2 bg-white text-black shadow-lg z-10">
              <MenuOne setShowNav={setShowNav} closeNav={closeNav}/> {/* This renders the MenuOne component */}
            </div>
          )}
        </li>

        {/* Sattva Therapy Link */}
        <li>
          <Link to="/Sattva Therapy" onClick={closeNav}>Sattva Therapy</Link>
        </li>

        {/* About Us Link */}
        <li>
          <Link to="/About Us" onClick={closeNav}>About Us</Link>
        </li>

        {/* Health Concerns Dropdown */}
        <li
          onMouseEnter={handleHealthMouseEnter}
          onMouseLeave={handleHealthMouseLeave}
          className="relative"
        >
          <Link to="/Health Concerns"onClick={closeNav}>Health Concerns</Link>
          {isHealthDropdownOpen && (
            <div className="absolute left-0 mt-2 bg-white text-black shadow-lg z-10">
              <ul className="flex flex-col">
                <li>
                  <Link
                    to="/Health Concerns/Headache"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                    onClick={closeNav}
                  >
                    Headache
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Health Concerns/Anxiety"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                    onClick={closeNav}
                  >
                    Anxiety & Overthinking
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Health Concerns/Sleep"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                    onClick={closeNav}
                  >
                    Sleep Disturbance
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Health Concerns/PCOD"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                    onClick={closeNav}
                  >
                    PCOS/PCOD
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Health Concerns/Fatigues"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                    onClick={closeNav}
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
          <Link to="/Free Doctor Consultation" onClick={closeNav}>Free Doctor Consultation</Link>
        </li>
      </ul>

      {/* Search and Cart Links */}
      <div className="search-cart-links flex space-x-4 mt-4 sm:mt-0 ">
        <Link to="/search" onClick={closeNav}>Search</Link>
        <Link to="/cart" className="relative inline-block" onClick={closeNav}>
        {/* Badge */}
        <div className=" badge-container">
        {cartItems?.length ? cartItems.length : 0}
        </div>

        {/* PNG Image */}
        <img
          src={cart}
          alt="Cart Icon"
          className="w-6 h-6"
          onClick={closeNav}
        />
      </Link></div>
    </div>
  );
};

export default DeskNav;
