import React, { createContext, useContext, useState, useMemo } from 'react';

// Creating the CartContext
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  // Safely initialize cartItems from localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const storedItems = localStorage.getItem("cartItems");

      // Check if storedItems is not null and is a valid JSON string
      if (storedItems) {
        return JSON.parse(storedItems);
      }
      return []; // Return an empty array if no valid data is found
    } catch (error) {
      console.error("Failed to parse localStorage data:", error);
      return []; // Fallback to empty array on error
    }
  });

  // Add item to cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);

      let updatedItems;
      if (existingItem) {
        // If item already exists in cart, increase its quantity by 1
        updatedItems = prevItems.map(cartItem =>
          cartItem.id === item.id && cartItem.quantity > 0 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If item doesn't exist, add it with quantity 1
        updatedItems = [...prevItems, { ...item, quantity: 1 }];
      }

      // Save the updated items to localStorage
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      // Update the cart by setting the item's quantity to 0
      const updatedItems = prevItems.map(item =>
        item.id === id ? { ...item, quantity: 0 } : item
      );

      // Update localStorage with the modified cart
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));

      return updatedItems;
    });
  };


  // const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartCount = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);
  

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,cartCount }}>
      {children}
    </CartContext.Provider>
  );
};



// import React, { createContext, useContext, useState } from 'react';

// // Creating the CartContext
// const CartContext = createContext();

// // Custom hook to use the CartContext
// export const useCart = () => {
//   return useContext(CartContext);
// };

// export const CartProvider = ({ children }) => {
//   // Cart items stored in state
//   const [cartItems, setCartItems] = useState(localStorage.getItem("cartItems") || []);

//   // Add item to cart
//   const addToCart = (item) => {
//     setCartItems((data) => {
//       // Check if the item already exists in the cart
      
//       const prevItems = JSON.parse(data || "[]");
//       const existingItem = prevItems?.find(cartItem => cartItem.id === item.id);
  
//       if (existingItem) {
//         // Increment the quantity if item exists
//         const updatedItems = prevItems?.map(cartItem =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         );
//         localStorage.setItem('cartItems', JSON.stringify(updatedItems)); // Update localStorage
//         return updatedItems;
//       } else {
//         // Add new item with quantity 1
//         const updatedItems = [...prevItems, { ...item, quantity: 1 }];
//         localStorage.setItem('cartItems', JSON.stringify(updatedItems)); // Update localStorage
//         return updatedItems;
//       }
//     });
//   };
  
  

//   // Remove item from cart
//   const removeFromCart = (id) => {
//     setCartItems((prevItems) => {
//       const updatedItems = prevItems?.filter(item => item.id !== id);
//       localStorage.setItem('cartItems', JSON.stringify(updatedItems)); // Update localStorage
//       return updatedItems;
//     });
//   };
  

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart}}>
//       {children}
//     </CartContext.Provider>
//   );
// };
