import axios from 'axios';

const tokenInterceptor = () => {
  // Create an instance of Axios
  const instance = axios.create();

  // Add a request interceptor
  instance.interceptors.request.use(
    config => {
      const token = sessionStorage.getItem('token'); // Retrieve the token from storage
      if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Append the token to the request headers
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export default tokenInterceptor;
