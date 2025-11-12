import { products } from '../data/mockData';

export const productsService = {
  getAllProducts: async () => {
    // TODO: Replace with actual API call
    // const response = await fetch('/api/products');
    // return response.json();
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 300);
    });
  },

  getProductById: async (id) => {
    // TODO: Replace with actual API call
    // const response = await fetch(`/api/products/${id}`);
    // return response.json();
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = products.find(p => p.id === parseInt(id));
        if (product) {
          resolve(product);
        } else {
          reject({ message: 'Product not found' });
        }
      }, 300);
    });
  },

  searchProducts: async (searchTerm) => {
    // TODO: Replace with actual API call
    // const response = await fetch(`/api/products/search?q=${searchTerm}`);
    // return response.json();
    
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = products.filter(p => 
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        resolve(filtered);
      }, 300);
    });
  },

  filterProducts: async (filters) => {
    // TODO: Replace with actual API call
    // const response = await fetch('/api/products/filter', { method: 'POST', body: JSON.stringify(filters) });
    // return response.json();
    
    return new Promise((resolve) => {
      setTimeout(() => {
        let filtered = [...products];

        if (filters.category && filters.category !== 'All') {
          filtered = filtered.filter(p => p.category === filters.category);
        }

        if (filters.sustainability) {
          filtered = filtered.filter(p => p.sustainability === filters.sustainability);
        }

        if (filters.searchTerm) {
          filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
            p.description.toLowerCase().includes(filters.searchTerm.toLowerCase())
          );
        }

        resolve(filtered);
      }, 300);
    });
  }
};

