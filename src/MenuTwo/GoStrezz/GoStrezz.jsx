import React, { useState } from 'react';

// Sample JSON Data
const productData = {
  images: [
    'small1.jpg', 'small2.jpg', 'small3.jpg', 'small4.jpg', 'small5.jpg', 'small6.jpg', 'small7.jpg'
  ],
  mainImage: 'big1.jpg', // Default image
  title: 'GoStrezz',
  subtitle: 'Ayurvedic Medicine for Stress & Anxiety',
  description: 'GoStrezz is an Ayurvedic Proprietary Medicine for boosting Mind Immunity. Since Stress is an external factor, like Gut Immunity we need to enhance our mind immunity to be able to cope up with any kind of stress. Based on the concept of Sattva Therapy, this formulation helps in increasing the Sattvik Guna of the body which helps in providing relief from stress, tension, anxiety, and fatigue.',
  logos: [
    { src: 'logo1.png', title: 'No Side Effect' },
    { src: 'logo2.png', title: 'Researched Ingredients' },
    { src: 'logo3.png', title: 'No Heavy Metals' },
    { src: 'logo4.png', title: 'Non GMO' },
  ],
  packs: [
    {
      label: 'Recommended',
      packTitle: '3 Month Pack',
      quantity: '90 tablets',
      originalPrice: '₹100',
      discountedPrice: '₹80'
    },
    {
      packTitle: '1 Month Pack',
      quantity: '30 tablets',
      originalPrice: '₹40',
      discountedPrice: '₹30'
    }
  ],
  buyButtons: {
    amazon: 'Buy From Amazon',
    addToCart: 'Add To Cart'
  }
};

export default function GoStrezz() {
  const [activeImage, setActiveImage] = useState(productData.mainImage);

  return (
    <>
    <div className='max-w-screen-xl mx-auto p-4 flex gap-4'>
      {/* Left Side: Vertical Line of Small Images */}
      <div className='flex flex-col space-y-4'>
        {productData.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`small-${index}`}
            className='w-16 h-16 object-cover cursor-pointer'
            onMouseEnter={() => setActiveImage(image)}
          />
        ))}
      </div>

      {/* Middle: Big Square Image */}
      <div className='w-2/5'>
        <img src={activeImage} alt="Main Product" className='w-full h-auto object-cover border' />
      </div>

      {/* Right Side: Details of the Medicine */}
      <div className='w-2/5 space-y-4'>
        {/* Titles */}
        <h4 className='text-gray-500 text-xl'>{productData.subtitle}</h4>
        <h2 className='text-4xl font-bold'>{productData.title}</h2>
        <p className='text-gray-700'>{productData.description}</p>

        {/* Logos with Titles */}
        <div className='flex space-x-4'>
          {productData.logos.map((logo, index) => (
            <div key={index} className='flex items-center space-x-2'>
              <img src={logo.src} alt={`logo-${index}`} className='w-8 h-8 object-contain' />
              <span>{logo.title}</span>
            </div>
          ))}
        </div>

        {/* Price Boxes */}
        <div className='grid grid-cols-2  gap-4'>
  {productData.packs.map((pack, index) => (
    <div key={index} className='border p-4 rounded-lg relative overflow-hidden bg-[#ecf4f0]'>
      {/* Displaying the 'Recommended' label only for the first pack */}
      {index === 0 && (
        <div className='absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-full transform translate-x-1/2 -translate-y-1/2'>
          {pack.label}
        </div>
      )}
      <h4 className='font-bold text-2xl'>{pack.packTitle}</h4>
      <p>{pack.quantity}</p>
      <p className='line-through text-gray-500'>{pack.originalPrice}</p>
      <p className='text-lg font-bold text-Black'>{pack.discountedPrice}</p>
    </div>
  ))}
</div>



        {/* Buy Buttons */}
        <div className='grid grid-cols-2 gap-4'>
          <button className='bg-[#385646] hover:bg-[#2c4a39] text-white font-bold py-2 px-4 rounded-full flex items-center justify-center'>
            {productData.buyButtons.amazon}
            <img src='amazon-logo.png' alt="Amazon Logo" className='w-5 h-5 mr-2' />
          </button>
          <button className='bg-white border-2 border-[#385646]  text-[#385646] font-bold py-2 px-4 rounded-full'>
            {productData.buyButtons.addToCart}
          </button>
        </div>
      </div> 
    </div>

    <div className='max-w-screen-xl mx-auto py-4 px-2'>
    <div className='w-full text-center pt-5 pb-5'>
        <h1 className='text-3xl text-black font-bold pb-2'>Only one tablet a day</h1>
        <p className='text-black text-lg  pb-2'>Act before your attack</p>
      </div>

      <div className='w-full flex flex-col md:flex-row gap-6'>
        {/* left */}
      <div className='flex w-full md:w-1/2 border-2 py-4 px-4 rounded-tr-3xl rounded-bl-3xl bg-[#eef2ed] '>
        <div className='flex w-full md:w-[60%] '>
          <div className='flex flex-col'>
        <h1 className='text-black text-xl font-bold'>How to consume?</h1>
        <p className='text-black text-lg pt-3'>Consume one GoStrezz tablet daily at bedtime with water</p>
        </div>
        </div>
        <div className='flex w-full md:w-[40%]'>
        <img src="" alt="" />
        </div>
      </div>

      {/* right */}
      <div className='flex w-full md:w-1/2 border-2 py-2 px-4 rounded-tr-3xl rounded-bl-3xl bg-[#eef2ed]'>
        <div className='flex w-full md:w-[60%] '>
          <div className='flex flex-col'>
        <h1 className='text-black text-xl font-bold'>When to consume?</h1>
        <p className='text-black text-lg pt-3'>For Best results Consume one tablet daily at bedtime for 90 days</p>
        </div>
        </div>
        <div className='flex w-full md:w-[40%]  '>
        <img src="" alt="" />
        </div>
      </div>
      </div>
    </div>

    </>
  );
}
