import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import Framer Motion

const productsData = [
  { id: 1, image: 'img5.jpg', title: 'Product 5', price: 300, offerPrice: 280, rating: 4, forText: 'Everyone', withText: 'Pain Relief' },
  { id: 2, image: 'img6.jpg', title: 'Product 6', price: 120, offerPrice: 100, rating: 5, forText: 'Everyone', withText: 'Wellness' },
  { id: 3, image: 'img7.jpg', title: 'Product 7', price: 140, offerPrice: 120, rating: 5, forText: 'Men', withText: 'Strength' },
  { id: 4, image: 'img8.jpg', title: 'Product 8', price: 160, offerPrice: 140, rating: 4, forText: 'Women', withText: 'Health' },
  { id: 5, image: 'img9.jpg', title: 'Product 9', price: 200, offerPrice: 180, rating: 4, forText: 'Everyone', withText: 'Fitness' },
];

const Breadcrumb = () => {
//   const location = useLocation();
  const paths = [
    { name: 'Home', link: '/' },
    { name: 'Collections', link: '/collections' },
  ];

  return (
    <nav className="breadcrumb mb-4 pt-5 px-4">
      {paths.map((path, index) => (
        <span key={index}>
          <Link
            to={path.link}
            className="text-gray-400 hover:text-gray-600"
          >
            {path.name}
          </Link>
          {index < paths.length - 1 && <span className="text-gray-400"> › </span>}
        </span>
      ))}
      <span className="text-black font-bold"> › Migraine & Headache</span>
    </nav>
  );
};

export default function Headache() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <Breadcrumb />
      <h2 className='text-3xl font-bold mb-8 px-4'>Migraine & Headache</h2>

      {/* Product Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {productsData.map((product) => (
          <motion.div
            key={product.id}
            className="border p-4 w-full bg-white shadow-md rounded-lg mx-auto relative"
            initial={{ opacity: 0, scale: 0.9 }} // Initial state
            animate={{ opacity: 1, scale: 1 }} // Animate to this state
            exit={{ opacity: 0, scale: 0.9 }} // Exit animation
            transition={{ duration: 0.3 }} // Transition timing
            whileHover={{ scale: 1.05 }} // Scale up on hover
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
              <span className="text-xl font-bold text-[#465f33]">${product.price}</span>
              <span className="text-sm line-through text-gray-500 ml-2">${product.offerPrice}</span>
            </div>
            <p className="mt-1 font-bold pb-2 text-[#465f33]">FOR: <span className="text-black">{product.forText}</span></p>
            <p className="mt-1 font-bold pb-8 text-[#465f33]">WITH: <span className="text-black">{product.withText}</span></p>
            <button className="mt-4 py-2 px-4 bg-[#465f33] hover:bg-[#294713] text-white rounded-lg w-full">
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
