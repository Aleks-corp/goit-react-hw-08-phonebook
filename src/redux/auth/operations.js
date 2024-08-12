import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const instance = axios.create({
  baseURL: 'https://phonebook-goit-project.onrender.com/',
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
      const response = await instance.post('/users/register', userData);
      setToken(response.data.token);
      toast.success('Congratulations! You are successfully signed up!');
      return response.data;
    } catch (error) {
      error.response.data.code === 11000
        ? toast.error(
            `Email: ${error.response.data.keyValue.email} is registered. Please try another or Login.`
          )
        : toast.error(
            `${error.response.data.message ?? error.message}. Please try again.`
          );
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
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
      toast.error(`Email or password in not valid. Please try again.`);
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await instance.post('/users/logout');
    toast.success('You are logged out!');
    delToken();
  } catch (error) {
    toast.error(`${error.message}. Please reload page.`);
    return thunkAPI.rejectWithValue(
      error.response.data.message ?? error.message
    );
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to Login');
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
