import { users } from '../data/mockData';
import { authService } from './authService';

export const userService = {
  getUserProfile: async (userId) => {
    // TODO: Replace with actual API call
    // const response = await fetch(`/api/users/${userId}`);
    // return response.json();
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find(u => u.id === userId);
        if (user) {
          const userProfile = { ...user };
          delete userProfile.password;
          resolve(userProfile);
        } else {
          reject({ message: 'User not found' });
        }
      }, 300);
    });
  },

  updateUserPoints: (userId, pointsToAdd) => {
    // TODO: Replace with actual API call
    // const response = await fetch(`/api/users/${userId}/points`, { method: 'PUT', body: JSON.stringify({ points: pointsToAdd }) });
    
    const user = users.find(u => u.id === userId);
    if (user) {
      user.points += pointsToAdd;
      
      const currentUser = authService.getCurrentUser();
      if (currentUser && currentUser.id === userId) {
        currentUser.points = user.points;
      }
      
      return user.points;
    }
    return 0;
  },

  addPurchase: (userId, purchase) => {
    // TODO: Replace with actual API call
    // const response = await fetch(`/api/users/${userId}/purchases`, { method: 'POST', body: JSON.stringify(purchase) });
    
    const user = users.find(u => u.id === userId);
    if (user) {
      const newPurchase = {
        id: user.purchases.length + 1,
        date: new Date().toISOString(),
        ...purchase
      };
      user.purchases.push(newPurchase);
      
      const currentUser = authService.getCurrentUser();
      if (currentUser && currentUser.id === userId) {
        currentUser.purchases = user.purchases;
      }
      
      return newPurchase;
    }
    return null;
  },

  getUserPurchases: async (userId) => {
    // TODO: Replace with actual API call
    // const response = await fetch(`/api/users/${userId}/purchases`);
    // return response.json();
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find(u => u.id === userId);
        if (user) {
          resolve(user.purchases || []);
        } else {
          reject({ message: 'User not found' });
        }
      }, 300);
    });
  }
};

