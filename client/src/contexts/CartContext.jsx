import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

// ✅ Export hook early to avoid Fast Refresh issues
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart'));
    if (stored) {
      setOrderItems(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(orderItems));
  }, [orderItems]);

  const addToCart = (item, quantity) => {
    setOrderItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { ...item, quantity }];
    });
  };

  const clearCart = () => {
    setOrderItems([]);
    localStorage.removeItem('cart');
  };

  return (
    <CartContext.Provider value={{ orderItems, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
