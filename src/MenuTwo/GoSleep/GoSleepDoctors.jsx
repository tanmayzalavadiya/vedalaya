import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import { Pagination } from 'swiper/modules'; // Import Pagination module
import { motion } from 'framer-motion'; // Import motion from Framer Motion

export default function GoSleepDoctors() {
  const cardData = [
    {
      image: 'image1.jpg', // Replace with your image paths
      title: 'Dr. John Doe',
      subtitle: 'Cardiologist',
      description: 'With over 15 years of experience, Dr. John Doe specializes in cardiology and has helped countless patients improve their heart health.',
    },
    {
      image: 'image2.jpg',
      title: 'Dr. Jane Smith',
      subtitle: 'Neurologist',
      description: 'Dr. Jane Smith is an expert in neurology, focusing on treating neurological disorders with a patient-first approach.',
    },
    {
      image: 'image3.jpg',
      title: 'Dr. Mark Lee',
      subtitle: 'Orthopedic Surgeon',
      description: 'Dr. Mark Lee excels in orthopedic surgery, using minimally invasive techniques to ensure faster recovery times for his patients.',
    },
    {
      image: 'image4.jpg',
      title: 'Dr. Lisa Brown',
      subtitle: 'Endocrinologist',
      description: 'Dr. Lisa Brown specializes in endocrinology, providing comprehensive care for diabetes and hormonal disorders.',
    },
  ];

  const swiperRef = useRef(null);

  // Function to control pagination via buttons
  const handlePaginationClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className='max-w-screen-xl mx-auto mb-10'>
      <div className='w-full text-center pt-5 pb-5'>
        <h1 className='text-3xl text-black font-bold pb-2'>A Positive Force From Doctor</h1>
        <p className='text-black text-lg pb-2'>We denounce with righteous indignation and dislike men who are so beguiled and demoralized pleasure of the moment.</p>
      </div>

      {/* Carousel */}
      <Swiper
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        spaceBetween={20} // Space between slides
        slidesPerView={1.25} // Show 1 full card and part of the next one
        loop={false} // Infinite loop
        pagination={{ clickable: false }} // Disable default pagination
        modules={[Pagination]} // Use Pagination module
        className='py-6' // Add padding to the Swiper container
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className='bg-[#eff4f9] shadow-lg rounded-lg p-6 flex'
              // whileHover={{ scale: 1.05 }} // Scale up on hover
              transition={{ type: 'spring', stiffness: 300 }} // Add spring effect
            >
              {/* Left Image Section */}
              <div className='w-1/4 flex justify-center items-center'>
                <img src={card.image} alt={card.title} className='w-64 h-64 object-cover rounded-md' />
              </div>
              {/* Right Text Section */}
              <div className='w-3/4 pl-4'>
                <h2 className='text-2xl font-bold pb-6'>{card.title}</h2>
                <h3 className='text-lg text-gray-600 pb-6'>{card.subtitle}</h3>
                <p className='text-sm text-gray-800'>{card.description}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Buttons */}
      <div className="flex justify-center space-x-2 mt-4">
        {cardData.map((_, index) => (
          <button
            key={index}
            className={`swiper-pagination-bullet w-4 h-4 rounded-full ${index === 0 ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => handlePaginationClick(index)}
          ></button>
        ))}
      </div>

      {/* Custom Styles for Pagination */}
      <style>
        {`
          .swiper-pagination {
            display: none;
          }

          .swiper-pagination-bullet {
            cursor: pointer;
            background-color: #007aff;
          }

          .swiper-pagination-bullet-active {
            background-color: #ff5722;
          }
        `}
      </style>
    </div>
  );
}
