import React from 'react';
import sattva from '../images/sattva.png';

const Intro = () => {
  return (
    <div className="bg-[#ecefe9] py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Section */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl md:text-6xl md:text-left font-bold text-center text-[#3e602d] mb-6">
              Sattva <br /> Therapy
            </h1>
            <p className="text-xl text-[#3e602d] leading-relaxed">
              VEDALAY products help in reducing Devata (Rajas) and Chandas (Tamas)
              and increases Sattva. The Sattva gunas are increased by using Sattva therapy
              in the manufacturing process.
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={sattva}
              alt="Sattva Therapy"
              className="w-3/4 md:w-1/2 h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
