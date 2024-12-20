import React, { useState, useEffect } from 'react';

export default function GoStrezzImunity() {
  const images = [
    '/path-to-image1.jpg',
    '/path-to-image2.jpg',
    '/path-to-image3.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change image every 500 milliseconds (1/2 second)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // 500ms interval for each image

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row mb-10 gap-6'>
      {/* Image Section */}
      <div className='w-full md:w-[40%]'>
        <img
          src={images[currentImageIndex]}
          alt=""
          className='w-full h-auto'
        />
      </div>
      
      {/* Text Section */}
      <div className='w-full md:w-[60%]'>
        <h1 className='text-black text-4xl font-bold'>What is Mind Immunity?</h1>
        <p className='text-xl pt-2'>Mind Immunity &gt;&gt;&gt; Body Immunity</p>
        <p className='text-2xl pt-2 font-bold'>
          According to a recent study, 80% of disorders are psychosomatic in nature.
        </p>
        <p className='text-black pt-2'>
          Mind being the Governor of the body, needs to develop Immunity against stress and stressful situations. Stress being an external factor, isn’t in our control. Like Gut Immunity, Mind Immunity is the ability of the mind to withstand or handle stress without getting affected by it.
        </p>
      </div>
    </div>
  );
}
