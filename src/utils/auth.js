import axios from 'axios';

export const setupAxiosInterceptors = (store) => {
  axios.interceptors.request.use(
    (config) => {
      const token = store.getState().auth.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        store.dispatch({ type: 'LOGOUT' });
      }
      return Promise.reject(error);
    }
  );
};