import axios from 'axios';

const API_BASE_URL = 'https://ahd.instapract.ae/web';

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

const apiServiceInstance = {
  // Define your API service functions here
  login: async (username, password) => {
    try {
      const response = await axios.post('/api/default/login', { username, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getUsers: async () => {
    try {
      const response = await apiService.get('/users');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Add more API service functions as needed
};

export default apiServiceInstance;
