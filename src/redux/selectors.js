import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectUser = state => state.auth.user;
export const selectUserId = state => state.auth.user.id;
export const selectUserName = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;
export const selectToken = state => state.auth.token;
export const selectTotalCount = state => state.words.totalCount;
export const selectCategories = state => state.words.categories;
export const selectUserWords = state => state.words.userWordsList;

export const selectIsAuth = createSelector(
  [selectIsLoggedIn, selectToken],
  (isLoggedIn, token) => token && isLoggedIn
);
