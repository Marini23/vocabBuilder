import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../authSlice/authOperations';

const getToken = () => {
  // Replace this with your actual token retrieval logic
  const persistedState = localStorage.getItem('_persist');
  console.log(persistedState);
  if (persistedState) {
    const { token } = JSON.parse(persistedState);
    return token.replace(/"/g, '');
  }
  return null;
};
console.log(getToken());

export const fetchUserWords = createAsyncThunk(
  'contacts/fetchUserWords',

  async (own, thunkAPI) => {
    try {
      // Get the token
      const token = getToken();

      // Add the token to the request headers
      const { data } = await instance.get(`/words/own`, {
        headers: {
          Authorization: `Bearer ${token}`, // Assuming token is in the format "Bearer <token>"
        },
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
