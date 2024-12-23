import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';// Import useCart hook
import { motion } from 'framer-motion';



const Breadcrumb = () => {
  const paths = [
    { name: 'Home', link: '/' },
    { name: 'Cart', link: '/Cart' },
  ];

  // const productsData = {
  //   "Best Seller": [
  //     { id: 1, image: 'img1.jpg', title: 'Product 1', price: 100, offerPrice: 80, rating: 4, forText: 'Adults', withText: 'Energy' },
  //     { id: 2, image: 'img2.jpg', title: 'Product 2', price: 150, offerPrice: 120, rating: 5, forText: 'Men', withText: 'Strength' },
  //     { id: 3, image: 'img3.jpg', title: 'Product 3', price: 200, offerPrice: 180, rating: 3, forText: 'Women', withText: 'Health' },
  //     { id: 4, image: 'img4.jpg', title: 'Product 4', price: 250, offerPrice: 230, rating: 5, forText: 'Kids', withText: 'Growth' }
  //   ],
  //   "Migraine & Headache": [
  //     { id: 5, image: 'img5.jpg', title: 'Product 5', price: 300, offerPrice: 280, rating: 4, forText: 'Everyone', withText: 'Pain Relief' }
  //   ],
  //   "Daily Wellness": [
  //     { id: 6, image: 'img6.jpg', title: 'Product 6', price: 120, offerPrice: 100, rating: 5, forText: 'Everyone', withText: 'Wellness' },
  //     { id: 2, image: 'img2.jpg', title: 'Product 2', price: 150, offerPrice: 120, rating: 5, forText: 'Men', withText: 'Strength' },
  //     { id: 3, image: 'img3.jpg', title: 'Product 3', price: 200, offerPrice: 180, rating: 3, forText: 'Women', withText: 'Health' },
  //   ],
  //   "Male Wellness": [
  //     { id: 7, image: 'img7.jpg', title: 'Product 7', price: 140, offerPrice: 120, rating: 5, forText: 'Men', withText: 'Strength' }
  //   ],
  //   "Women Wellness": [
  //     { id: 8, image: 'img8.jpg', title: 'Product 8', price: 160, offerPrice: 140, rating: 4, forText: 'Women', withText: 'Health' }
  //   ],
  //   "Fitness": [
  //     { id: 9, image: 'img9.jpg', title: 'Product 9', price: 200, offerPrice: 180, rating: 4, forText: 'Everyone', withText: 'Fitness' }
  //   ],
  //   "Nutrition": [
  //     { id: 10, image: 'img10.jpg', title: 'Product 10', price: 250, offerPrice: 230, rating: 5, forText: 'Adults', withText: 'Nutrition' }
  //   ]
  // };
  
  return (
    <nav className="breadcrumb mb-4 pt-5">
      {paths.map((path, index) => (
        <span key={index}>
          <Link to={path.link} className="text-gray-400 hover:text-gray-600">
            {path.name}
          </Link>
          {index < paths.length - 1 && <span className="text-gray-400"> › </span>}
        </span>
      ))}
    </nav>
  );
};

const Cart = () => {
    const { cartItems, removeFromCart } = useCart(); // Destructure cartItems and removeFromCart from useCart()

  return (
    <div className="max-w-screen-xl mx-auto">
      <Breadcrumb />
      <h2 className="text-3xl font-bold mb-8">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className='border-solid border-[0.5px] p-5 w-[600px] border-black'>
          <div className='text-center font-bold text-3xl py-10'>Oops, your cart is empty</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {cartItems.map((item, index) => (
          <motion.div
            key={index}
            className="border p-4 w-full bg-white shadow-md rounded-lg mx-auto relative"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="flex mt-2">
              {Array(item.rating).fill().map((_, index) => (
                <span key={index} className="text-yellow-400">★</span>
              ))}
              {Array(5 - item.rating).fill().map((_, index) => (
                <span key={index} className="text-gray-300">★</span>
              ))}
            </div>
            <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
            <div className="mt-1">
              <span className="text-xl font-bold">₹{item.price}</span>
            </div>
            <motion.button
              onClick={() => removeFromCart(item.id)} // Assuming removeFromCart function is provided
              className="mt-4 py-2 px-4 bg-[#ed548c] hover:bg-[#f02770] text-white rounded-lg w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Remove from Cart
            </motion.button>
          </motion.div>
        ))}
      </div>
      
      )}

      <div className="mt-[25px] h-[0.25px] bg-gray-300" />
      <div className="text-xl mt-[10px]">Subtotal ({cartItems.length} items): ₹{cartItems.reduce((total, item) => total + item.price, 0)}</div>
    </div>
  );
};

export default Cart;
