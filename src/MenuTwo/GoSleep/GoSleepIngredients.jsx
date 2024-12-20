import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

export default function GoSleepIngredients() {
  const cardData = [
    { logo: 'logo1.png', title: 'Card 1', subtitle: 'subtitle.' },
    { logo: 'logo2.png', title: 'Card 2', subtitle: 'subtitle.' },
    { logo: 'logo3.png', title: 'Card 3', subtitle: 'subtitle.' },
    { logo: 'logo4.png', title: 'Card 4', subtitle: 'subtitle.' },
    { logo: 'logo5.png', title: 'Card 5', subtitle: 'subtitle.' },
    { logo: 'logo6.png', title: 'Card 6', subtitle: 'subtitle.' },
    { logo: 'logo7.png', title: 'Card 7', subtitle: 'subtitle.' },
    { logo: 'logo8.png', title: 'Card 8', subtitle: 'subtitle.' }
  ];

  const swiperRef = useRef(null);

  const handlePaginationClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className='max-w-screen-xl mx-auto mb-4'>
      <div className='w-full text-center pt-4'>
        <h1 className='text-3xl text-black font-black pb-2'>Ingredients</h1>
        <p className='text-black text-xl pb-4'>BioActive Ingredients</p>
      </div>

      <Swiper
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        spaceBetween={20}
        slidesPerView={6}
        loop={false}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: false }}
        modules={[Autoplay, Pagination]}
        className='py-6'
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className='shadow-lg w-44 h-32 rounded-3xl p-4 bg-white text-center pb-4 mb-4'
              whileHover={{ scale: 1.05 }} // Scale up on hover
              transition={{ type: 'spring', stiffness: 300 }} // Add spring effect
            >
              <h2 className='font-bold text-lg mb-2'>{card.title}</h2>
              <p className='text-gray-600'>{card.subtitle}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center space-x-2 mt-4">
        <button
          className="swiper-pagination-bullet w-4 h-4 rounded-full bg-blue-500"
          onClick={() => handlePaginationClick(0)}
        ></button>
        <button
          className="swiper-pagination-bullet w-4 h-4 rounded-full bg-blue-500"
          onClick={() => handlePaginationClick(1)}
        ></button>
      </div>

      <style>
        {`
          .swiper-pagination {
            display: none;
          }

          .swiper-pagination-bullet {
            background: #007aff;
          }

          .swiper-pagination-bullet-active {
            background: #ff5722;
          }
        `}
      </style>
    </div>
  );
}
