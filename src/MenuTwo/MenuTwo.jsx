import React from 'react';
import { Link } from 'react-router-dom';
import './DropDownTwo.css'; // Ensure this path is correct

const MenuTwo = () => {
  return (
    <div className="dropdown"> {/* Wrap in dropdown div */}
      {/* Trigger text for the dropdown */}
      <span className="hover:text-blue-500 cursor-pointer">Shop</span>
      <div className="dropdown-content"> {/* Dropdown content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-screen-xl mx-auto p-4">
          {/* Daily Wellness Section */}
          <div className="p-4 bg-white">
            <h3 className="font-bold text-xl mb-2">Daily Wellness</h3>
            <ul>
              <li><Link to="/Shop/GoStrezz" className="text-black hover:underline">GoStrezz</Link></li>
              <li><Link to="/Shop/GoSleep" className="text-black hover:underline">GoSleep</Link></li>
            </ul>
          </div>

          {/* Male Wellness Section */}
          <div className="p-4 bg-white">
            <h3 className="font-bold text-xl mb-2">Male Wellness</h3>
            <ul>
              <li><Link to="/GoBold" className="text-black hover:underline">GoBold</Link></li>
              <li><Link to="/GoSurge" className="text-black hover:underline">GoSurge</Link></li>
            </ul>
          </div>

          {/* Migraine & Headaches Section */}
          <div className="p-4 bg-white">
            <h3 className="font-bold text-xl mb-2">Migraine & Headaches</h3>
            <ul>
              <li><Link to="/GoMygraine" className="text-black hover:underline">GoMygraine</Link></li>
            </ul>
          </div>

          {/* Female Wellness Section */}
          <div className="p-4 bg-white">
            <h3 className="font-bold text-xl mb-2">Female Wellness</h3>
            <ul>
              <li><Link to="/GoRegular" className="text-black hover:underline">GoRegular</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuTwo;
