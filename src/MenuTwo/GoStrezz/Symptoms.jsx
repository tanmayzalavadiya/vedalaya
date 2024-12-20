import React, { useState } from 'react';
// Import images for both physical and mental symptoms
import lowenergy from '../../images/GoStrezz/lowenergy.png'; // Example for physical
import sleep from '../../images/GoStrezz/sleep.png';
import headache from '../../images/GoStrezz/headache.png';
import diarrhea from '../../images/GoStrezz/diarrhea.png';

import anger from '../../images/GoStrezz/anger.png'; // Example for mental
import depression from '../../images/GoStrezz/depression.png';
import inattention from '../../images/GoStrezz/inattention.png';
import overthinking from '../../images/GoStrezz/overthinking.png';
import eating from '../../images/GoStrezz/eating.png';

import mental from '../../images/GoStrezz/mental.png';
import physical from '../../images/GoStrezz/physical.png';

export default function Symptoms() {
  const [stressType, setStressType] = useState('physical');

  // Content for physical and mental stress
  const content = {
    physical: {
      image: physical,
      symptoms: [
        { image: lowenergy, title: 'Low Energy' },
        { image: sleep, title: 'Sleep' },
        { image: headache, title: 'Headache' },
        { image: diarrhea, title: 'Diarrhea' },
      ],
    },
    mental: {
      image: mental,
      symptoms: [
        { image: anger, title: 'Anger' },
        { image: depression, title: 'Depression' },
        { image: inattention, title: 'Inattention' },
        { image: overthinking, title: 'Overthinking' },
        { image: eating, title: 'Eating' },
      ],
    },
  };

  const currentContent = content[stressType];

  return (
    <div className='max-w-screen-xl mx-auto mb-10'>
      {/* Buttons to toggle between Physical and Mental stress */}
      <div className='flex justify-center mb-4 space-x-4'>
        <button
          className='px-4 py-2 bg-[#7caf95] text-white rounded-md'
          onClick={() => setStressType('physical')}
        >
          Physical Stress
        </button>
        <button
          className='px-4 py-2 bg-[#7caf95] text-white rounded-md'
          onClick={() => setStressType('mental')}
        >
          Mental Stress
        </button>
      </div>

      <div className='flex flex-col md:flex-row'>
        {/* Left Part: Smaller Image */}
        <div className='w-full md:w-[40%] flex justify-center items-center'>
          <img
            src={currentContent.image}
            alt={`${stressType} stress`}
            className='w-[150px] h-[150px] object-cover' // Smaller size for the image
          />
        </div>

        {/* Right Part: Symptoms Box with Horizontal Icons */}
        <div className='w-full md:w-[60%] bg-[#eff8f3] p-6 rounded-md flex flex-col justify-center'>
          <h2 className='text-xl font-bold mb-4 text-center'>Symptoms</h2>

          {/* Display Icons Horizontally */}
          <div className='flex flex-wrap justify-center items-center'>
            {currentContent.symptoms.map((symptom, index) => (
              <div key={index} className='flex flex-col items-center w-[30%] mb-4'>
                {/* Display the image for each symptom */}
                <img
                  src={symptom.image}
                  alt={symptom.title}
                  className='w-16 h-16 mb-2'
                />
                <p className='text-md font-medium text-center'>{symptom.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
