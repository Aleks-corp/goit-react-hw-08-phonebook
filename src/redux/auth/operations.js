import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
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
      setToken(response.data.token);
      toast.success('Congratulations! You are successfully signed up!');
      return response.data;
    } catch (error) {
      toast.error(`${error.message}. Please try again.`);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const response = await instance.post('/users/login', userData);
      setToken(response.data.token);
      toast.success('You are successfully logged in!');
      return response.data;
    } catch (error) {
      toast.error(`${error.message}. Please try again.`);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await instance.post('/users/logout');
    toast.success('You are logged out!');
    delToken();
  } catch (error) {
    toast.error(`${error.message}. Please try again.`);
    return thunkAPI.rejectWithValue(error.response.data.message);
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
      const response = await instance.get('/users/current');
      return response.data;
    } catch (error) {
      toast.error(`${error.response.statusText}. Please try login.`);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
