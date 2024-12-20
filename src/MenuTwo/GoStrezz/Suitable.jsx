import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination'; // Import pagination styles
import { Autoplay, Pagination } from 'swiper/modules'; // Import Autoplay and Pagination modules
import { motion } from 'framer-motion'; // Import Framer Motion

export default function Suitable() {
  // Sample data for 8 cards
  const cardData = [
    { logo: 'logo1.png', title: 'Card 1', description: 'This is a description for card 1.' },
    { logo: 'logo2.png', title: 'Card 2', description: 'This is a description for card 2.' },
    { logo: 'logo3.png', title: 'Card 3', description: 'This is a description for card 3.' },
    { logo: 'logo4.png', title: 'Card 4', description: 'This is a description for card 4.' },
    { logo: 'logo5.png', title: 'Card 5', description: 'This is a description for card 5.' },
    { logo: 'logo6.png', title: 'Card 6', description: 'This is a description for card 6.' },
    { logo: 'logo7.png', title: 'Card 7', description: 'This is a description for card 7.' },
    { logo: 'logo8.png', title: 'Card 8', description: 'This is a description for card 8.' }
  ];

  const swiperRef = useRef(null); // Create a ref for the Swiper

  // Function to handle pagination button click
  const handlePaginationClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index); // Use the slideTo method to go to the corresponding slide
    }
  };

  return (
    <div className='bg-[#fbfdfc]'>
    <div className='max-w-screen-xl mx-auto mb-4'>
      <div className='w-full text-center pt-4'>
        <h1 className='text-3xl text-black font-black pb-2'>Who is it for</h1>
        <p className='text-black text-xl pb-4'>GoStrezz tablets are suitable for you if</p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        onSwiper={(swiper) => { swiperRef.current = swiper; }} // Attach the swiper instance to the ref
        spaceBetween={20} // Space between slides
        slidesPerView={4} // Show 4 cards per page
        loop={false} // Disable infinite loop for better pagination control
        autoplay={{ delay: 5000, disableOnInteraction: false }} // Autoplay slides every 5 seconds
        pagination={{ clickable: false }} // Disable default pagination
        modules={[Autoplay, Pagination]} // Include Autoplay and Pagination modules
        className='py-6' // Padding for Swiper
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className='shadow-lg w-60 h-60 rounded-lg p-4 bg-white text-center pb-4 mb-4'
              whileHover={{ scale: 1.1 }} // Zoom in effect on hover
              transition={{ duration: 0.2 }} // Transition duration for the scale
            >
              {/* Card Logo */}
              <img src={card.logo} alt={`Logo ${index}`} className='w-16 h-16 mx-auto mb-4' />

              {/* Card Title */}
              <h2 className='font-bold text-lg mb-2'>{card.title}</h2>

              {/* Card Description */}
              <p className='text-gray-600'>{card.description}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Buttons */}
      <div className="flex justify-center space-x-2 mt-4">
        <button
          className="swiper-pagination-bullet w-4 h-4 rounded-full bg-blue-500"
          onClick={() => handlePaginationClick(0)} // Go to first page (index 0)
        ></button>
        <button
          className="swiper-pagination-bullet w-4 h-4 rounded-full bg-blue-500"
          onClick={() => handlePaginationClick(1)} // Go to second page (index 1)
        ></button>
      </div>

      {/* Custom CSS for Pagination */}
      <style>
        {`
          .swiper-pagination {
            display: none; /* Hide default Swiper pagination */
          }

          .swiper-pagination-bullet {
            background: #007aff; /* Bullet color */
          }

          .swiper-pagination-bullet-active {
            background: #ff5722; /* Color for active bullet */
          }
        `}
      </style>
    </div>
    </div>
  );
}
