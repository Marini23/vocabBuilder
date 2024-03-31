import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../authSlice/authOperations';

const getToken = () => {
  // Replace this with your actual token retrieval logic
  const persistedState = localStorage.getItem('persist:auth');
  let token = null;
  if (persistedState) {
    const persistAuth = JSON.parse(persistedState);
    token = persistAuth.token;
  } else {
    console.log('No persist:auth data found in localStorage.');
  }
  return token;
};

export const getAuthorizationHeader = () => `Bearer ${getToken()}`;

const baseURL = 'https://vocab-builder-backend.p.goit.global/api';

export const axiosInstance = axios.create({
  baseURL,
});

// Add a request interceptor to dynamically set the authorization header
axiosInstance.interceptors.request.use(
  config => {
    const token = getToken();
    console.log(token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export const fetchUserWords = createAsyncThunk(
  'contacts/fetchUserWords',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get('/words/own');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
