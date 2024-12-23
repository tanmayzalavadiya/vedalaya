import React, { createContext, useContext, useState } from 'react';

// Creating the CartContext
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  // Cart items stored in state
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      // Check if the item already exists in the cart
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
  
      if (existingItem) {
        // Increment the quantity if item exists
        const updatedItems = prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        localStorage.setItem('cartItems', JSON.stringify(updatedItems)); // Update localStorage
        return updatedItems;
      } else {
        // Add new item with quantity 1
        const updatedItems = [...prevItems, { ...item, quantity: 1 }];
        localStorage.setItem('cartItems', JSON.stringify(updatedItems)); // Update localStorage
        return updatedItems;
      }
    });
  };
  
  

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter(item => item.id !== id);
      localStorage.setItem('cartItems', JSON.stringify(updatedItems)); // Update localStorage
      return updatedItems;
    });
  };
  

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
