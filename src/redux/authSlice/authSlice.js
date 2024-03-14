import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser, logIn, logOut, register } from './authOperations';

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.isLoading = false;
};
const handlePending = (state, action) => {
  state.isLoading = true;
};

const authSlice = createSlice({
  name: `auth`,
  initialState: {
    user: { name: null, email: null, password: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
    isLoading: false,
  },
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null, password: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(register.pending, handlePending)
      .addCase(logIn.pending, handlePending)
      .addCase(logOut.pending, handlePending)
      .addCase(fetchCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.rejected, handleRejected)
      .addCase(fetchCurrentUser.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
