import React from 'react';
import whyus from '../../images/GoStrezz/whyus.png'

export default function WhyUs() {
  return (
    <div className='max-w-screen-xl mx-auto mb-10'>
      {/* Title Section */}
      <div className='w-full text-center pt-5 pb-5'>
        <h1 className='text-3xl text-black font-bold pb-2'>Why Us?</h1>
        <p className='text-black text-lg pb-2'>Safer | Better | Healthier</p>
      </div>

      {/* Image and Paragraph + Logos Section */}
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src={whyus} alt="Why Us" className="w-full h-auto object-cover rounded-lg" />
        </div>
        
        {/* Right Side with Paragraph and Vertical Logos */}
        <div className="w-full lg:w-1/2 text-left">
          {/* Paragraph */}
          <p className="text-lg text-gray-800 mb-6">
          With a doctor formulated and time-tested formula, we are here to bring a change and help people manage Stress safely, naturally, and effectively. Coming from an ayurvedic lineage, treating disorder, and treating a person is not always the same thing. Our priority is to find a solution for the person and not just the symptoms, Starting with you!
          </p>
          
          {/* Vertically Stacked Logos and Titles */}
          <div className="space-y-6">
            {/* Logo 1 */}
            <div className="flex items-center">
              <img src="logo1.png" alt="Logo 1" className="w-16 h-16 object-cover mr-4" />
              <h2 className="text-xl">Doctor formulated medicine</h2>
            </div>

            {/* Logo 2 */}
            <div className="flex items-center">
              <img src="logo2.png" alt="Logo 2" className="w-16 h-16 object-cover mr-4" />
              <h2 className="text-xl">35 year experienced formulation</h2>
            </div>

            {/* Logo 3 */}
            <div className="flex items-center">
              <img src="logo3.png" alt="Logo 3" className="w-16 h-16 object-cover mr-4" />
              <h2 className="text-xl">Clinically researched ingredients</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
