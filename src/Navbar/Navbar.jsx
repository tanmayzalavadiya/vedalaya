import React, { useEffect, useState } from "react";
import "./Navbar.css";
import "./dropdown.css";
import hamburger from "../images/hamburger.png";
import DeskNav from "./deskNav";

const Navbar = () => {

  const [showHamburger, setShowHamburger] = useState(false);
  const [showNav, setShowNav] = useState(false);
  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 638) {
        setShowHamburger(true);
      } else {
        setShowHamburger(false);
        setShowNav(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hamburgerHandler = () => {
    setShowNav(!showNav);
  }
  
  return (
    <nav className={`navbar ${
      showNav ? "h-screen sticky top-0 w-screen z-30" : ""
    }`}>
      <div className="flex items-baseline">
        {showHamburger && <div>
          <img src={hamburger} alt="menu-btn" className="w-4 m-[25.4px] z-50" onClick={hamburgerHandler} />
        </div>}
        {(!showHamburger || showNav) && 
           <DeskNav showNav={showNav} />}
      </div>
      {/* )} */}
    </nav>
  );
};

export default Navbar;
