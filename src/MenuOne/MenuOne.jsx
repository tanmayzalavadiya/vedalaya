import React from 'react';
import { Link } from 'react-router-dom';
import './DropDownOne.css';

const MenuOne = ({closeNav}) => {
  return (
      <div className="w-auto dropdown dropdown-content"   style={{
        overflowY: 'auto',
        scrollbarWidth: 'none', // For Firefox
        msOverflowStyle: 'none', // For IE/Edge
      }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-screen-xl mx-auto p-4">
          
          {/* Daily Wellness Section */}
          <div className="p-4 bg-white">
            <h3 className="font-bold text-xl mb-2" >Daily Wellness</h3>
            <ul>
              <li><Link to="/Shop/GoStrezz" className="text-black hover:underline" onClick={closeNav}>GoStrezz</Link></li>
              <li><Link to="/Shop/GoSleep" className="text-black hover:underline" onClick={closeNav}>GoSleep</Link></li>
            </ul>
          </div>

          {/* Male Wellness Section */}
          <div className="p-4 bg-white">
            <h3 className="font-bold text-xl mb-2">Male Wellness</h3>
            <ul>
              <li><Link to="/Shop/GoBold" className="text-black hover:underline" onClick={closeNav}>GoBold</Link></li>
              <li><Link to="/Shop/GoSurge" className="text-black hover:underline" onClick={closeNav}>GoSurge</Link></li>
            </ul>
          </div>

          {/* Migraine & Headaches Section */}
          <div className="p-4 bg-white">
            <h3 className="font-bold text-xl mb-2">Migraine & Headaches</h3>
            <ul>
              <li><Link to="/Shop/GoMygraine" className="text-black hover:underline" onClick={closeNav}>GoMygraine</Link></li>
            </ul>
          </div>

          {/* Female Wellness Section */}
          <div className="p-4 bg-white">
            <h3 className="font-bold text-xl mb-2">Female Wellness</h3>
            <ul>
              <li><Link to="/Shop/GoRegular" className="text-black hover:underline" onClick={closeNav}>GoRegular</Link></li>
            </ul>
          </div>

        </div>
      </div>
  );
};

export default MenuOne;
