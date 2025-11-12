import { createContext, useState, useContext, useEffect } from 'react';
import { cartService } from '../services/cartService';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(cartService.getCart());
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartPoints, setCartPoints] = useState(0);

  useEffect(() => {
    updateCartStats();
  }, [cartItems]);

  const updateCartStats = () => {
    setCartTotal(cartService.getCartTotal());
    setCartItemsCount(cartService.getCartItemsCount());
    setCartPoints(cartService.getCartPoints());
  };

  const addToCart = (product, quantity = 1) => {
    const updatedCart = cartService.addToCart(product, quantity);
    setCartItems(updatedCart);
  };

  const updateQuantity = (productId, quantity) => {
    const updatedCart = cartService.updateQuantity(productId, quantity);
    setCartItems(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartService.removeFromCart(productId);
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    const updatedCart = cartService.clearCart();
    setCartItems(updatedCart);
  };

  const value = {
    cartItems,
    cartTotal,
    cartItemsCount,
    cartPoints,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

