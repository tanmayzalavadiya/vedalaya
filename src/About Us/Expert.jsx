import React from 'react';
import expert from '../images/photos/expert.png';

export default function Expert() {
  return (
    <div className='max-w-screen-xl mx-auto py-8'>
      <div className='w-full'>
        <h2 className='text-black text-4xl font-bold text-center mb-8'>
          Meet Our Expert - Dr. Vinay Vora
        </h2>
      </div>

      <div className='flex flex-col md:flex-row w-full items-center justify-between space-y-8 md:space-y-0 md:space-x-8'>

        {/* Left Part - Image */}
        <div className='w-full md:w-1/2 flex justify-center'>
          <img src={expert} alt="Dr. Vinay Vora" className="max-w-full h-auto rounded-lg " />
        </div>

        {/* Right Part - Text */}
        <div className='w-full md:w-1/2'>
          <p className='text-black text-justify'>
            Dr. Vinay Vora, is an Ayurvedic doctor, practising ayurveda in 28 different countries. With more than 4 decades of experience in treating common yet complex disorders, we have borrowed his expertise in formulating these medicines. Graduated as a Gold Medallist, from world’s biggest Gujarat Ayurveda University, Jamnagar (Gujarat) in 1987 he started his practice in Ahmedabad. He got selected as a Vaidya by Maharishi Vedic University, Holland. He was personal physician to President of Mozambique over a period of 1 year. During his journey in Southern African countries, Europe, Nordic countries, and Middle east, he found big problem with stress, anxiety, depression, migraine etc. Currently running a private clinic in Ahmedabad, Bergen, Norway, Lausanne, Switzerland and director of Skandinaviska Ayurveda Academy, Stockholm, Sweden since 1997.
          </p>
        </div>
      </div>
    </div>
  );
}
