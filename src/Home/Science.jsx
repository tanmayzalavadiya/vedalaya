import React, { useState } from 'react';
import sattva from '../images/sattva.png';
import teer from '../images/teer.png';

export default function Science() {
  const [selectedText, setSelectedText] = useState('');

  const handleButtonClick = (text) => {
    setSelectedText(text);
  };

  return (
    <div className='mt-10'>
      <h1 className='max-w-screen-xl mx-auto text-black text-3xl font-bold text-center mb-[30px] px-4 '>
        SCIENCE BEHIND VEDALAY PRODUCTS
      </h1>
      <div className='bg-[#74b0d24d]'>
        <div className='max-w-screen-xl mx-auto flex flex-col items-center md:flex-row mb-10'>
          {/* left part */}
          <div className='w-1/3 flex justify-center'>
            <img src={sattva} alt="sattva" className='h-auto object-cover' />
          </div>

          {/* right part */}
          <div className='w-full md:w-2/3 flex flex-col justify-center text-center md:text-right space-y-1 mt-5 mb-5'>
            <h3 className='text-white bg-[#3d6787] text-center w-42'>The Positive in You</h3>
            <h2 className='text-[#3d6787] font-bold text-4xl self-center'>Sattva Therapy</h2>
            <p className='text-sm text-[#3d6787] self-center'>The therapy that works on manas (Mind) Gunas like</p>
            
            {/* Gunas buttons */}
            <div className='flex justify-between pt-4 pb-4 w-full'>
              <button 
                className='text-white bg-[#3d6787] py-2 px-4 rounded-full flex-1 mx-1 hover:bg-[#2f5069] transition duration-200' 
                onClick={() => handleButtonClick('Goodness, Positivity, Truth, Serenity, Balance, Peacefulness, Virtuousness, Knowledge, Harmony & Calmness.')}>
                Sattva
              </button>
              <button 
                className='text-white bg-[#3d6787] py-2 px-4 rounded-full flex-1 mx-1 hover:bg-[#2f5069] transition duration-200' 
                onClick={() => handleButtonClick('Dominating Mind, Excessive Movement/Fluctuations, Agitation, Turbulence, Tranquility, Physical excitement.')}>
                Rajas
              </button>
              <button 
                className='text-white bg-[#3d6787] py-2 px-4 rounded-full flex-1 mx-1 hover:bg-[#2f5069] transition duration-200' 
                onClick={() => handleButtonClick('State of Mudh (Forgetful) mind, Dull, Innert, Devoid of qualities like Determination, Slothful, Darkness, Lazy & Heaviness.')}>
                Tamas
              </button>
            </div>

            {/* Details */}
            <div className='bg-white rounded-lg p-5'>
              <p className='text-[#3d6787] text-center'>
                {selectedText || 'Goodness, Positivity, Truth, Serenity, Balance, Peacefulness, Virtuousness, Knowledge, Harmony & Calmness.'}
              </p>
            </div>

            <div className='pt-2 pb-2'>
              <p className='text-[#3d6787] text-center'>The basic fundament that makes VEDALAY unique from others. It works in mainly to improve your Mind Immunity help you cure from within rather than just pacifying symptoms.</p>
            </div>

            {/* Button */}
            <div className='flex justify-center mt-2'>
              <button className='bg-[#3d6787] text-white px-4 py-2 rounded-full inline-flex items-center gap-2 hover:bg-[#2f5069] transition duration-200'>
                Discover More
                <img src={teer} alt="arrow" className='w-4 h-4' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
