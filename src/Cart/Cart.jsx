import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useCart } from "./CartContext"; // Assuming you're using the CartContext
import { motion } from "framer-motion";

const Breadcrumb = () => {
  const paths = [
    { name: "Home", link: "/" },
    { name: "Cart", link: "/Cart" },
  ];

  return (
    <nav className="breadcrumb mb-4 pt-5">
      {paths.map((path, index) => (
        <span key={index}>
          <Link to={path.link} className="text-gray-400 hover:text-gray-600">
            {path.name}
          </Link>
          {index < paths.length - 1 && (
            <span className="text-gray-400"> › </span>
          )}
        </span>
      ))}
    </nav>
  );
};

const Cart = () => {
  // const { cartItems, removeFromCart } = useCart(); 
  // // Destructure from useCart hook
  const [updatedCart, setUpdatedCart] = useState([]);

  // Get cart items from localStorage on initial load
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setUpdatedCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("subtotal", updatedCart.reduce((total, item) => total + item.quantity, 0))
  }, [updatedCart])

  const handleQuantityChange = (id, change) => {
    const currentCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    
    const updatedCart = currentCart.map((cartItem) => {
      if (cartItem.id === id) {
        return { ...cartItem, quantity: Math.max(1, cartItem.quantity + change) }; // Prevent quantity < 1
      }
      return cartItem;
    });

    // Update the cart in localStorage and state
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    setUpdatedCart(updatedCart);
  };

  const handleRemoveItem = (id) => {
    const currentCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCart = currentCart.filter((item) => item.id !== id);
    
    // Remove item from localStorage and update the state
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    setUpdatedCart(updatedCart);
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <Breadcrumb />
      <h2 className="text-3xl font-bold mb-8">Shopping Cart</h2>

      {updatedCart.length === 0 ? (
        <div className="border-solid border-[0.5px] p-5 w-[600px] border-black">
          <div className="text-center font-bold text-3xl py-10">Oops, your cart is empty</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {updatedCart.map((item) => (
            <motion.div
              key={item.id}
              className="border p-4 w-full bg-white shadow-md rounded-lg mx-auto relative"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="flex mt-2">
                {Array(item.rating)
                  .fill()
                  .map((_, index) => (
                    <span key={index} className="text-yellow-400">★</span>
                  ))}
                {Array(5 - item.rating)
                  .fill()
                  .map((_, index) => (
                    <span key={index} className="text-gray-300">★</span>
                  ))}
              </div>
              <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
              <div className="mt-1">
                <span className="text-xl font-bold">₹{item.price}</span>
              </div>

              {/* Quantity */}
              <div className="mt-1">
                <span className="text-xl font-bold">Quantity:</span>
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="px-2 py-1 bg-red-500 text-white rounded ml-2"
                  disabled={item.quantity <= 1} // Prevent reducing below 1
                >
                  -
                </button>

                <span className="text-xl font-bold mx-4">{item.quantity}</span>

                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="px-2 py-1 bg-green-500 text-white rounded"
                >
                  +
                </button>
              </div>

              <motion.button
                onClick={() => handleRemoveItem(item.id)} // Remove item function
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
      <div className="text-xl mt-[10px]">
      Subtotal ({updatedCart.reduce((total, item) => total + item.quantity, 0)} items): ₹
      {updatedCart.reduce((total, item) => total + item.price * item.quantity, 0)}
      </div>
    </div>
  );
};

export default Cart;


// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "./CartContext"; // Import useCart hook
// import { motion } from "framer-motion";

// const Breadcrumb = () => {
//   const paths = [
//     { name: "Home", link: "/" },
//     { name: "Cart", link: "/Cart" },
//   ];

//   // const productsData = {
//   //   "Best Seller": [
//   //     { id: 1, image: 'img1.jpg', title: 'Product 1', price: 100, offerPrice: 80, rating: 4, forText: 'Adults', withText: 'Energy' },
//   //     { id: 2, image: 'img2.jpg', title: 'Product 2', price: 150, offerPrice: 120, rating: 5, forText: 'Men', withText: 'Strength' },
//   //     { id: 3, image: 'img3.jpg', title: 'Product 3', price: 200, offerPrice: 180, rating: 3, forText: 'Women', withText: 'Health' },
//   //     { id: 4, image: 'img4.jpg', title: 'Product 4', price: 250, offerPrice: 230, rating: 5, forText: 'Kids', withText: 'Growth' }
//   //   ],
//   //   "Migraine & Headache": [
//   //     { id: 5, image: 'img5.jpg', title: 'Product 5', price: 300, offerPrice: 280, rating: 4, forText: 'Everyone', withText: 'Pain Relief' }
//   //   ],
//   //   "Daily Wellness": [
//   //     { id: 6, image: 'img6.jpg', title: 'Product 6', price: 120, offerPrice: 100, rating: 5, forText: 'Everyone', withText: 'Wellness' },
//   //     { id: 2, image: 'img2.jpg', title: 'Product 2', price: 150, offerPrice: 120, rating: 5, forText: 'Men', withText: 'Strength' },
//   //     { id: 3, image: 'img3.jpg', title: 'Product 3', price: 200, offerPrice: 180, rating: 3, forText: 'Women', withText: 'Health' },
//   //   ],
//   //   "Male Wellness": [
//   //     { id: 7, image: 'img7.jpg', title: 'Product 7', price: 140, offerPrice: 120, rating: 5, forText: 'Men', withText: 'Strength' }
//   //   ],
//   //   "Women Wellness": [
//   //     { id: 8, image: 'img8.jpg', title: 'Product 8', price: 160, offerPrice: 140, rating: 4, forText: 'Women', withText: 'Health' }
//   //   ],
//   //   "Fitness": [
//   //     { id: 9, image: 'img9.jpg', title: 'Product 9', price: 200, offerPrice: 180, rating: 4, forText: 'Everyone', withText: 'Fitness' }
//   //   ],
//   //   "Nutrition": [
//   //     { id: 10, image: 'img10.jpg', title: 'Product 10', price: 250, offerPrice: 230, rating: 5, forText: 'Adults', withText: 'Nutrition' }
//   //   ]
//   // };

//   return (
//     <nav className="breadcrumb mb-4 pt-5">
//       {paths.map((path, index) => (
//         <span key={index}>
//           <Link to={path.link} className="text-gray-400 hover:text-gray-600">
//             {path.name}
//           </Link>
//           {index < paths.length - 1 && (
//             <span className="text-gray-400"> › </span>
//           )}
//         </span>
//       ))}
//     </nav>
//   );
// };

// const Cart = () => {
//   const { cartItems, removeFromCart } = useCart(); // Destructure cartItems and removeFromCart from useCart()

//   const cartProducts = JSON.parse(localStorage.getItem("cartItems"));

//   const handleQuantityChange = (id, change) => {
//     // Get the current cart items from localStorage
//     const currentCart = JSON.parse(localStorage.getItem("cartItems")) || [];

//     // Update the quantity of the selected item
//     const updatedCart = currentCart.map((cartItem) => {
//       if (cartItem.id === id) {
//         return {
//           ...cartItem,
//           quantity: cartItem.quantity + change,
//         };
//       }
//       return cartItem;
//     });

//     // Save the updated cart back to localStorage
//     localStorage.setItem("cartItems", JSON.stringify(updatedCart));

//     // Optionally, trigger a re-render or update UI if needed
//     // For example, you might want to manually fetch from localStorage and update the UI
//   };

//   return (
//     <div className="max-w-screen-xl mx-auto">
//       <Breadcrumb />
//       <h2 className="text-3xl font-bold mb-8">Shopping Cart</h2>

//       {cartProducts?.length === 0 ? (
//         <div className="border-solid border-[0.5px] p-5 w-[600px] border-black">
//           <div className="text-center font-bold text-3xl py-10">
//             Oops, your cart is empty
//           </div>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
//           {cartProducts?.map((item, index) => (
//             <motion.div
//               key={index}
//               className="border p-4 w-full bg-white shadow-md rounded-lg mx-auto relative"
//               whileHover={{ scale: 1.05 }}
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-48 object-cover rounded-md"
//               />
//               <div className="flex mt-2">
//                 {Array(item.rating)
//                   .fill()
//                   .map((_, index) => (
//                     <span key={index} className="text-yellow-400">
//                       ★
//                     </span>
//                   ))}
//                 {Array(5 - item.rating)
//                   .fill()
//                   .map((_, index) => (
//                     <span key={index} className="text-gray-300">
//                       ★
//                     </span>
//                   ))}
//               </div>
//               <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
//               <div className="mt-1">
//                 <span className="text-xl font-bold">₹{item.price}</span>
//               </div>

//               {/* qauntity */}

//               <div className="mt-1">
//                 <span className="text-xl font-bold">Quantity:</span>

//                 {/* Decrease Quantity Button */}
//                 <button
//                   onClick={() => handleQuantityChange(item.id, -1)}
//                   className="px-2 py-1 bg-red-500 text-white rounded ml-2"
//                   disabled={item.quantity <= 1} // Prevent reducing below 1
//                 >
//                   -
//                 </button>

//                 <span className="text-xl font-bold mx-4">{item.quantity}</span>

//                 {/* Increase Quantity Button */}
//                 <button
//                   onClick={() => handleQuantityChange(item.id, 1)}
//                   className="px-2 py-1 bg-green-500 text-white rounded"
//                 >
//                   +
//                 </button>
//               </div>

//               <motion.button
//                 onClick={() => removeFromCart(item.id)} // Assuming removeFromCart function is provided
//                 className="mt-4 py-2 px-4 bg-[#ed548c] hover:bg-[#f02770] text-white rounded-lg w-full"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Remove from Cart
//               </motion.button>
//             </motion.div>
//           ))}
//         </div>
//       )}

//       <div className="mt-[25px] h-[0.25px] bg-gray-300" />
//       <div className="text-xl mt-[10px]">
//         Subtotal ({cartItems.length} items): ₹
//         {cartItems.reduce((total, item) => total + item.price, 0)}
//       </div>
//     </div>
//   );
// };

// export default Cart;





// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import { motion } from "framer-motion";

// // const Breadcrumb = () => {
// //   const paths = [
// //     { name: "Home", link: "/" },
// //     { name: "Cart", link: "/Cart" },
// //   ];

// //   return (
// //     <nav className="breadcrumb mb-4 pt-5">
// //       {paths.map((path, index) => (
// //         <span key={index}>
// //           <Link to={path.link} className="text-gray-400 hover:text-gray-600">
// //             {path.name}
// //           </Link>
// //           {index < paths.length - 1 && (
// //             <span className="text-gray-400"> › </span>
// //           )}
// //         </span>
// //       ))}
// //     </nav>
// //   );
// // };

// // const Cart = () => {
// //   // const { cartItems, removeFromCart } = useCart(); // Destructure cartItems and removeFromCart from useCart()
// //   const [updatedCart, setUpdatedCart] = useState([]);

// //   // Get cart items from localStorage on initial load
// //   useEffect(() => {
// //     const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
// //     setUpdatedCart(storedCart);
// //   }, []);

// //   const handleQuantityChange = (id, change) => {
// //     // Get the current cart items from localStorage
// //     const currentCart = JSON.parse(localStorage.getItem("cartItems")) || [];

// //     // Update the quantity of the selected item
// //     const updatedCart = currentCart.map((cartItem) => {
// //       if (cartItem.id === id) {
// //         return {
// //           ...cartItem,
// //           quantity: Math.max(1, cartItem.quantity + change), // Ensure quantity doesn't go below 1
// //         };
// //       }
// //       return cartItem;
// //     });

// //     // Save the updated cart back to localStorage
// //     localStorage.setItem("cartItems", JSON.stringify(updatedCart));

// //     // Update the state to trigger a re-render
// //     setUpdatedCart(updatedCart);
// //   };

// //   const handleRemoveItem = (id) => {
// //     // Get current cart items from localStorage
// //     const currentCart = JSON.parse(localStorage.getItem("cartItems")) || [];

// //     // Filter out the item with the given id
// //     const updatedCart = currentCart.filter((item) => item.id !== id);

// //     // Save the updated cart back to localStorage
// //     localStorage.setItem("cartItems", JSON.stringify(updatedCart));

// //     // Update the state to trigger a re-render
// //     setUpdatedCart(updatedCart);
// //   };

// //   useEffect(() => {
// //     let totalQuantity = 0; // Use a regular variable to accumulate quantity

// //     updatedCart.forEach((item) => {
// //       totalQuantity += item?.quantity || 0; // Accumulate quantity safely
// //     });
// //     // console.log(totalQuantity);
    
// //     localStorage.setItem("totalitems", totalQuantity)
// //     console.log(totalQuantity);
// //   }, [updatedCart]);


  
// //   return (
// //     <div className="max-w-screen-xl mx-auto">
// //       <Breadcrumb />
// //       <h2 className="text-3xl font-bold mb-8">Shopping Cart</h2>

// //       {updatedCart.length === 0 ? (
// //         <div className="border-solid border-[0.5px] p-5 max-w-[600px] border-black">
// //           <div className="text-center font-bold text-3xl py-10">
// //             Oops, your cart is empty
// //           </div>
// //         </div>
// //       ) : (
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
// //           {updatedCart.map((item, index) => (
// //             <motion.div
// //               key={index}
// //               className="border p-4 w-full bg-white shadow-md rounded-lg mx-auto relative"
// //               whileHover={{ scale: 1.05 }}
// //             >
// //               <img
// //                 src={item.image}
// //                 alt={item.title}
// //                 className="w-full h-48 object-cover rounded-md"
// //               />
// //               <div className="flex mt-2">
// //                 {Array(item.rating)
// //                   .fill()
// //                   .map((_, index) => (
// //                     <span key={index} className="text-yellow-400">
// //                       ★
// //                     </span>
// //                   ))}
// //                 {Array(5 - item.rating)
// //                   .fill()
// //                   .map((_, index) => (
// //                     <span key={index} className="text-gray-300">
// //                       ★
// //                     </span>
// //                   ))}
// //               </div>
// //               <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
// //               <div className="mt-1">
// //                 <span className="text-xl font-bold">₹{item.price}</span>
// //               </div>

// //               {/* Quantity Section */}
// //               <div className="mt-1">
// //                 <span className="text-xl font-bold">Quantity:</span>

// //                 {/* Decrease Quantity Button */}
// //                 <button
// //                   onClick={() => handleQuantityChange(item.id, -1)}
// //                   className={`px-2 py-1 bg-red-500 text-white rounded ml-2 ${item.quantity === 1 ? "bg-gray-400" : ""}`}
// //                   disabled={item.quantity <= 1} // Prevent reducing below 1
// //                 >
// //                   -
// //                 </button>

// //                 <span className="text-xl font-bold mx-4">{item.quantity}</span>

// //                 {/* Increase Quantity Button */}
// //                 <button
// //                   onClick={() => handleQuantityChange(item.id, 1)}
// //                   className="px-2 py-1 bg-green-500 text-white rounded"
// //                 >
// //                   +
// //                 </button>
// //               </div>

// //               <motion.button
// //                 onClick={() => handleRemoveItem(item.id)} // Assuming removeFromCart function is provided
// //                 className="mt-4 py-2 px-4 bg-[#ed548c] hover:bg-[#f02770] text-white rounded-lg w-full"
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //               >
// //                 Remove from Cart
// //               </motion.button>
// //             </motion.div>
// //           ))}
// //         </div>
// //       )}

// //       <div className="mt-[25px] h-[0.25px] bg-gray-300" />
// //       <div className="text-xl mt-[10px]">
// //         Subtotal ({updatedCart.length} items): ₹
// //         {updatedCart.reduce((total, item) => total + item.price * item.quantity, 0)}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Cart;
