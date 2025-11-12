let cart = [];

export const cartService = {
  getCart: () => {
    // TODO: Replace with actual API call
    // const response = await fetch('/api/cart');
    // return response.json();
    
    return [...cart];
  },

  addToCart: (product, quantity = 1) => {
    // TODO: Replace with actual API call
    // const response = await fetch('/api/cart/add', { method: 'POST', body: JSON.stringify({ productId: product.id, quantity }) });
    
    const existingItem = cart.find(item => item.product.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ product, quantity });
    }
    
    return [...cart];
  },

  updateQuantity: (productId, quantity) => {
    // TODO: Replace with actual API call
    // const response = await fetch(`/api/cart/update/${productId}`, { method: 'PUT', body: JSON.stringify({ quantity }) });
    
    const item = cart.find(item => item.product.id === productId);
    
    if (item) {
      if (quantity <= 0) {
        cart = cart.filter(item => item.product.id !== productId);
      } else {
        item.quantity = quantity;
      }
    }
    
    return [...cart];
  },

  removeFromCart: (productId) => {
    // TODO: Replace with actual API call
    // const response = await fetch(`/api/cart/remove/${productId}`, { method: 'DELETE' });
    
    cart = cart.filter(item => item.product.id !== productId);
    return [...cart];
  },

  clearCart: () => {
    // TODO: Replace with actual API call
    // const response = await fetch('/api/cart/clear', { method: 'DELETE' });
    
    cart = [];
    return [];
  },

  getCartTotal: () => {
    return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  },

  getCartItemsCount: () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  },

  getCartPoints: () => {
    // Calculate total points that would be earned from cart items
    const { sustainabilityLevels } = require('../data/mockData');
    
    return cart.reduce((points, item) => {
      const level = sustainabilityLevels[item.product.sustainability];
      return points + (level.points * item.quantity);
    }, 0);
  }
};

