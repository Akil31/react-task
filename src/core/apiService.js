// import axios from 'axios';
import tokenInterceptor from './tokenInterceptor';

const api = tokenInterceptor();

const apiServiceInstance = {
  // Define your API service functions here
  login: async (User) => {
    try {
      const response = await api.post('/api/default/login', User,
      {
        headers: {
          'Content-Type': 'application/json',
          "APPID": "APPQUEOY6M",
          "lang": "da315627-3ece-2016-c628-b61dc5ee9be0",
          "Access-Control-Allow-Headers":"*",
          "Access-Control-Allow-Origin":"*",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods":"POST"
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getUsers: async () => {
    try {
      const response = await api.post('/api/doctor/doc-list',sessionStorage.getItem('User_id'));
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  // Add more API service functions as needed
};

export default apiServiceInstance;
