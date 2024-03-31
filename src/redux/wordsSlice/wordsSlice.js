import { createSlice } from '@reduxjs/toolkit';
import { fetchUserWords } from './wordsOperations';
import { fetchUserWordsTest } from '../authSlice/authOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const wordsSlice = createSlice({
  name: 'words',
  initialState: {
    wordsList: [],
    currentPage: 1,
    totalPages: null,
    isLoading: false,
    error: null,
    selectedFilter: '',
  },
  reducers: {
    changePage(state) {
      state.currentPage += 1;
    },
    setSelectedFilter: (state, action) => {
      state.selectedFilter = action.payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(fetchUserWords.pending, handlePending)
      .addCase(fetchUserWords.rejected, handleRejected)
      .addCase(fetchUserWords.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.wordsList = action.payload;
      })
      .addCase(fetchUserWordsTest.pending, handlePending)
      .addCase(fetchUserWordsTest.rejected, handleRejected)
      .addCase(fetchUserWordsTest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.wordsList = action.payload;
      }),
});

export const { changePage, setSelectedFilter } = wordsSlice.actions;

export const wordsReducer = wordsSlice.reducer;
