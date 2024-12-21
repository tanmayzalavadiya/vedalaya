import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "./dropdown.css";
import MenuTwo from "../MenuTwo/MenuTwo"; // Import the MenuTwo component
import hamburger from "../images/hamburger.png";
import DeskNav from "./deskNav";

const Navbar = () => {
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

  const [toggle, setToggle] = useState(false);
  const handlemenu = () => {
    setToggle(!toggle);
    console.log(toggle);
    
  };

  useEffect(()=>{
    if(window?.innerWidth <= 400){
      setToggle(!toggle);
      
    }
  },[window.innerWidth])
  
  // console.log(window.innerWidth);

  return (
    <nav className={`navbar ${
      toggle ? "h-screen" : ""
    }`}>
      {/* {window.innerWidth <= 400 ? (
        <img
          src={hamburger}
          alt="menu-button"
          className="w-8 p-2"
          onClick={handlemenu}
        />
      ) : ( */}
      <div className="flex items-baseline">
        {toggle && <div>
          <img src={hamburger} alt="menu-btn" className="w-8 p-2"  />
        </div>}
        {!toggle && 
           <DeskNav />}
           </div>
      {/* )} */}
    </nav>
  );
};

export default Navbar;
