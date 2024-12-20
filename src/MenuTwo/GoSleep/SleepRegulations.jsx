import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination'; // Import pagination styles
import { Autoplay, Pagination } from 'swiper/modules'; // Import Autoplay and Pagination modules

export default function SleepRegulations() {
  // Sample data for logos and titles
  const cardData = [
    { logo: 'logo1.png', title: 'Logo 1' },
    { logo: 'logo2.png', title: 'Logo 2' },
    { logo: 'logo3.png', title: 'Logo 3' },
    { logo: 'logo4.png', title: 'Logo 4' },
    { logo: 'logo5.png', title: 'Logo 5' },
    { logo: 'logo6.png', title: 'Logo 6' },
    { logo: 'logo7.png', title: 'Logo 7' },
    { logo: 'logo8.png', title: 'Logo 8' }
  ];

  const swiperRef = useRef(null); // Create a ref for the Swiper

  // Function to handle pagination button click
  const handlePaginationClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index); // Use the slideTo method to go to the corresponding slide
    }
  };

  return (
    <div className='max-w-screen-xl mx-auto mb-4'>
      <div className='w-full text-center pt-4'>
        <h1 className='text-3xl text-black font-black pb-2'>Our Regulations</h1>
        <p className='text-black text-xl pb-4 mb-4'>These logos represent our adherence to quality standards</p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        onSwiper={(swiper) => { swiperRef.current = swiper; }} // Attach the swiper instance to the ref
        spaceBetween={20} // Space between slides
        slidesPerView={4} // Show 4 cards per page
        loop={false} // Disable infinite loop for better pagination control
        autoplay={{ delay: 5000, disableOnInteraction: false }} // Autoplay slides every 5 seconds
        pagination={{ clickable: false }} // Disable default pagination
        speed={800} // Smooth transition speed
        modules={[Autoplay, Pagination]} // Include Autoplay and Pagination modules
        className='py-6' // Padding for Swiper
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center'>
              {/* Card Logo */}
              <img src={card.logo} alt={`Logo ${index}`} className='w-16 h-16 mb-2' />
              
              {/* Card Title */}
              <h2 className='font-bold text-lg'>{card.title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Buttons - Only Two */}
      <div className="flex justify-center space-x-2 mt-4">
        <button
          className="swiper-pagination-bullet w-4 h-4 rounded-full bg-blue-500"
          onClick={() => handlePaginationClick(0)} // Go to first half (index 0)
        ></button>
        <button
          className="swiper-pagination-bullet w-4 h-4 rounded-full bg-blue-500"
          onClick={() => handlePaginationClick(4)} // Go to second half (index 4)
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
  );
}
