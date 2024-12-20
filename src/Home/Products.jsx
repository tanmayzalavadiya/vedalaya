import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Sample product data (JSON-like format)
const productsData = {
  "Best Seller": [
    { id: 1, image: 'img1.jpg', title: 'Product 1', price: 100, offerPrice: 80, rating: 4, forText: 'Adults', withText: 'Energy' },
    { id: 2, image: 'img2.jpg', title: 'Product 2', price: 150, offerPrice: 120, rating: 5, forText: 'Men', withText: 'Strength' },
    { id: 3, image: 'img3.jpg', title: 'Product 3', price: 200, offerPrice: 180, rating: 3, forText: 'Women', withText: 'Health' },
    { id: 4, image: 'img4.jpg', title: 'Product 4', price: 250, offerPrice: 230, rating: 5, forText: 'Kids', withText: 'Growth' }
  ],
  "Migraine & Headache": [
    { id: 5, image: 'img5.jpg', title: 'Product 5', price: 300, offerPrice: 280, rating: 4, forText: 'Everyone', withText: 'Pain Relief' }
  ],
  "Daily Wellness": [
    { id: 6, image: 'img6.jpg', title: 'Product 6', price: 120, offerPrice: 100, rating: 5, forText: 'Everyone', withText: 'Wellness' },
    { id: 2, image: 'img2.jpg', title: 'Product 2', price: 150, offerPrice: 120, rating: 5, forText: 'Men', withText: 'Strength' },
    { id: 3, image: 'img3.jpg', title: 'Product 3', price: 200, offerPrice: 180, rating: 3, forText: 'Women', withText: 'Health' },
  ],
  "Male Wellness": [
    { id: 7, image: 'img7.jpg', title: 'Product 7', price: 140, offerPrice: 120, rating: 5, forText: 'Men', withText: 'Strength' }
  ],
  "Women Wellness": [
    { id: 8, image: 'img8.jpg', title: 'Product 8', price: 160, offerPrice: 140, rating: 4, forText: 'Women', withText: 'Health' }
  ],
  "Fitness": [
    { id: 9, image: 'img9.jpg', title: 'Product 9', price: 200, offerPrice: 180, rating: 4, forText: 'Everyone', withText: 'Fitness' }
  ],
  "Nutrition": [
    { id: 10, image: 'img10.jpg', title: 'Product 10', price: 250, offerPrice: 230, rating: 5, forText: 'Adults', withText: 'Nutrition' }
  ]
};

const gradientOptions = [
  'bg-gradient-to-r from-[#00BFFF] to-[#1E90FF]',
  'bg-gradient-to-r from-[#FF9A00] to-[#FF5E3A]',
  'bg-gradient-to-r from-[#AB83E8] to-[#7B2D9B]',
  'bg-gradient-to-r from-[#FF512F] to-[#DD2476]',
  'bg-gradient-to-r from-[#1E90FF] to-[#00BFFF]',
  'bg-gradient-to-r from-[#FF5F6D] to-[#FFC371]',
  'bg-gradient-to-r from-[#00C853] to-[#B2FF59]',
  'bg-gradient-to-r from-[#00BCD4] to-[#B2EBF2]'
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('Best Seller');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const renderProducts = () => {
    const products = productsData[activeCategory];
    return products.map((product) => (
      <motion.div
        key={product.id}
        className="border p-4 w-full bg-white shadow-md rounded-lg mx-auto relative"
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover rounded-md"
        />
        <div className="flex mt-2">
          {Array(product.rating).fill().map((_, index) => (
            <span key={index} className="text-yellow-400">★</span>
          ))}
          {Array(5 - product.rating).fill().map((_, index) => (
            <span key={index} className="text-gray-300">★</span>
          ))}
        </div>
        <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
        <div className="mt-1">
          <span className="text-xl font-bold">${product.price}</span>
          <span className="text-sm line-through text-gray-500 ml-2">${product.offerPrice}</span>
        </div>
        <p className="mt-1 font-bold pb-2 text-[#ed548c]">FOR: <span className="text-black">{product.forText}</span></p>
        <p className="mt-1 font-bold pb-8 text-[#ed548c]">WITH: <span className="text-black">{product.withText}</span></p>
        <motion.button
          className="mt-4 py-2 px-4 bg-[#ed548c] hover:bg-[#f02770] text-white rounded-lg w-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Add to Cart
        </motion.button>
      </motion.div>
    ));
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4 mb-10">
      <h2 className="text-black font-bold text-4xl text-center pt-4">Choose Your Concern</h2>
      <div className="flex justify-center mt-6 space-x-4 flex-wrap">
        {Object.keys(productsData).map((category, index) => (
          <motion.button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`py-2 px-4 rounded-full ${
              activeCategory === category
                ? 'bg-gradient-to-r from-[#4CAF50] to-[#A5D6A7] text-white scale-110'
                : `${gradientOptions[index % gradientOptions.length]} text-white`
            }`}
            whileHover={{ scale: activeCategory === category ? 1.1 : 1.05 }}
            animate={{ scale: activeCategory === category ? 1.2 : 1 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {renderProducts()}
      </motion.div>
    </div>
  );
}
