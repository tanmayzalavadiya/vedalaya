import React, { useState } from 'react';
import home1 from '../images/home1.png';
import home2 from '../images/home2.png';
import home3 from '../images/home3.png';

const images = [home1, home2, home3]; // Array of images

export default function HomeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current slide

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Move to next slide
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Move to previous slide
  };

  return (
    <div className='relative w-full overflow-hidden'>
      {/* Background image */}
      <div
        className='w-full h-64 bg-cover bg-center transition-transform duration-500'
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      />

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow'
      >
        &#9664; {/* Left arrow */}
      </button>
      
      <button
        onClick={nextSlide}
        className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow'
      >
        &#9654; {/* Right arrow */}
      </button>
    </div>
  );
}
