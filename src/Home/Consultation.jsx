import React from 'react';
import teer from '../images/teer.png';
import vedalaya from '../images/vedalaya.png';

export default function Consultation() {
  return (
    <div className='max-w-screen-xl mx-auto bg-lime-900 rounded-tr-3xl rounded-bl-3xl p-8 mb-10'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        <div className='w-full md:w-1/2 flex flex-col justify-center md:py-10 px-5 gap-4'>
          <p className='text-white text-sm'>Still some doubt?</p>
          <p className='text-white text-3xl leading-tight'>
            Free Consultation from <br /> Ayurvedic Doctor
          </p>
          <p className='text-white text-xl mt-2'>
            Free Online Video Consultation with B.A.M.S. Doctor
          </p>
          <div className='flex items-center mt-4'>
            <button className='bg-white text-green-900 px-4 py-2 rounded-full inline-flex items-center gap-2 hover:bg-green-50 transition duration-200'>
              Book Consultation
              <img src={teer} alt="arrow" className='w-4 h-4' />
            </button>
          </div>
        </div>
        <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
          <img src={vedalaya} alt="vedalaya" className='w-full md:w-3/4 h-auto object-contain' />
        </div>
      </div>
    </div>
  );
}
