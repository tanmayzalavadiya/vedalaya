import React from 'react';
import process from '../images/process.png';

export default function Process() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className=''>
        {/* Left Section */}
        <div className='mb-10'>
          <h3 className='font-bold text-3xl text-black text-center'>
            Ahitebhyo Arthebhyo Manonigraha
          </h3>
        </div>

        {/* Right Section */}
        <div className='flex flex-col md:flex-row'>
          <div className='w-full justify-between md:flex flex-col items-center'>
            {/* Image Section */}
            <img src={process} alt="Process logo" className="w-full h-auto" />
          </div>

          <div className='w-full justify-between md:flex flex-col items-center md:items-start p-4'>
            {/* Paragraph Section */}
            <p className='text-black text-lg text-justify pt-16 px-2'>
              According to our Vedas, Knowledge or consciousness is the combination of three values:
              Since we are also a creation of consciousness, we can correlate these three aspects of
              consciousness with the three aspects of our nature- Soul, Mind and Body, three aspects
              of our Gunas- Sattva, Rajas and Tamas, and the three aspects of our Doshas- Vatta, Pitta
              and Kapha.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
