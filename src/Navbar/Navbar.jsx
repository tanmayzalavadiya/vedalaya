import React, { useEffect, useState } from "react";
import "./Navbar.css";
import "./dropdown.css";
import hamburger from "../images/hamburger.png";
import DeskNav from "./deskNav";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  

  useEffect(()=>{
    if(window?.innerWidth <= 400){
      setToggle(!toggle);
      
    }
  },[window.innerWidth,toggle])
  
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
