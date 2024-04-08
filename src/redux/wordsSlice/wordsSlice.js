import { createSlice } from '@reduxjs/toolkit';
import {
  addWord,
  categoriesWords,
  fetchUserWords,
  staticticsWords,
} from './wordsOperations';

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
    totalCount: 0,
    categories: [],
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
      .addCase(addWord.pending, handlePending)
      .addCase(fetchUserWords.rejected, handleRejected)
      .addCase(addWord.rejected, handleRejected)
      .addCase(fetchUserWords.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.wordsList = action.payload;
      })
      .addCase(addWord.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.wordsList.push(action.payload);
      })
      .addCase(staticticsWords.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(categoriesWords.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categories = action.payload;
      }),
});

export const { changePage, setSelectedFilter } = wordsSlice.actions;

export const wordsReducer = wordsSlice.reducer;
