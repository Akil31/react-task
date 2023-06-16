import axios from 'axios';

const BASE_URL = '/api'; // This matches the proxy configuration in setupProxy.jsn';

const apiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    "Origin": "*",
    "Access-Control-Allow-Origin":"*",
    "Access-Control-Request-Method": "POST, GET, DELETE, PUT",
    "Access-Control-Request-Headers": "*",
    "APPID":"Gem3s12345",
  },
});

const apiServiceInstance = {
  // Define your API service functions here
  login: async (User) => {
    try {
      const response = await apiService.post('/default/login', User);
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
