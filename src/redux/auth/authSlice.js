import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { logIn, logOut, refreshUser, signUp } from './operations';

const handleFulfilled = (state, action) => {
  state.profile = action.payload.profile;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleLogOutFulfilled = state => {
  state.profile = null;
  state.token = '';
  state.isLoggedIn = false;
};

const handleRefreshFulfilled = (state, action) => {
  state.profile = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
const handleRefreshPending = state => {
  state.isRefreshing = true;
};
const handleRefreshRejected = state => {
  state.isRefreshing = false;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
};

const handlePending = state => {
  state.error = '';
};

const authSlice = createSlice({
  name: 'Auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(signUp.fulfilled, handleFulfilled)
      .addCase(logIn.fulfilled, handleFulfilled)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
      .addCase(refreshUser.fulfilled, handleRefreshFulfilled)
      .addCase(refreshUser.pending, handleRefreshPending)
      .addCase(refreshUser.rejected, handleRefreshRejected)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected)
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending),
});

export const authReducer = authSlice.reducer;
