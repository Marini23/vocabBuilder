import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { instance } from '../authSlice/authOperations';

// const token = () => {
//   // Replace this with your actual token retrieval logic
//   const persistedState = localStorage.getItem('persist:auth');
//   let token = null;
//   if (persistedState) {
//     const persistAuth = JSON.parse(persistedState);
//     token = persistAuth.token;
//   } else {
//     console.log('No persist:auth data found in localStorage.');
//   }
//   return token;
// };

const baseURL = 'https://vocab-builder-backend.p.goit.global/api';

const axiosInstance = axios.create({
  baseURL,
});

export const setAuthHeader = token => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const addWord = createAsyncThunk(
  'words/addWord',
  async (newWord, thunkAPI) => {
    try {
      const response = await axios.post('/words/create', {
        ...newWord,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchUserWords = createAsyncThunk(
  'contacts/fetchUserWords',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/words/own');
      return data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAllWords = createAsyncThunk(
  'contacts/fetchAllWords',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/words/all');
      return data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editWord = createAsyncThunk(
  'words/editWord',
  async (newFormValues, thunkAPI) => {
    try {
      const wordId = newFormValues.id;
      const response = await axios.patch(`/words/edit/${wordId}`, {
        en: newFormValues.en,
        ua: newFormValues.ua,
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const staticticsWords = createAsyncThunk(
  'words/statistics',
  async (newWord, thunkAPI) => {
    try {
      const response = await axios.get('/words/statistics');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const categoriesWords = createAsyncThunk(
  'words/categories',
  async (newWord, thunkAPI) => {
    try {
      const response = await axios.get('/words/categories');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
