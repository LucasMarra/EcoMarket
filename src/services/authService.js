import { users } from '../data/mockData';

let currentUser = null;

export const authService = {
  login: async (email, password) => {
    // TODO: Replace with actual API call
    // const response = await fetch('/api/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) });
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
          currentUser = { ...user };
          delete currentUser.password;
          resolve({ success: true, user: currentUser });
        } else {
          reject({ success: false, message: 'Invalid credentials' });
        }
      }, 500);
    });
  },

  register: async (userData) => {
    // TODO: Replace with actual API call
    // const response = await fetch('/api/auth/register', { method: 'POST', body: JSON.stringify(userData) });
    
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser = {
          id: users.length + 1,
          ...userData,
          points: 0,
          purchases: []
        };
        
        users.push(newUser);
        currentUser = { ...newUser };
        delete currentUser.password;
        
        resolve({ success: true, user: currentUser });
      }, 500);
    });
  },

  logout: () => {
    // TODO: Replace with actual API call
    // await fetch('/api/auth/logout', { method: 'POST' });
    
    currentUser = null;
  },

  getCurrentUser: () => {
    // TODO: Replace with actual API call
    // const response = await fetch('/api/auth/me');
    
    return currentUser;
  },

  isAuthenticated: () => {
    return currentUser !== null;
  }
};

