import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://goit-task-manager.herokuapp.com/',
});

export const setToken = token => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const delToken = () => {
  instance.defaults.headers.common['Authorization'] = '';
};

export const signUp = createAsyncThunk(
  'auth/signup',
  async (userData, thunkAPI) => {
    try {
      const response = await instance.post('/users/signup', userData);
      console.log('response:', response);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      console.log('error:', error);
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const response = await instance.post('/users/login', userData);
      console.log('responce:', response);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      console.log('error:', error.response);
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await instance.post('/users/logout');
    delToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setToken(persistedToken);
      const response = await instance.get('/users/me');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
