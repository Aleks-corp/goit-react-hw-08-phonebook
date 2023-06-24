import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { instance } from 'redux/auth/operations';

// const instance = axios.create({
//   baseURL: 'https://648ee9b675a96b66444476a6.mockapi.io',
// });

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/contacts');
      toast.success('Contacts successfully received.');
      return response.data;
    } catch (error) {
      toast.success(
        `${error.message}. Please refresh page or try again later.`
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await instance.post('/contacts', contact);
      toast.success('Contact successfully added.');
      return response.data;
    } catch (error) {
      toast.success(`${error.message}. Please try add again.`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await instance.delete(`/contacts/${id}`);
      toast.success('Contact successfully removed.');
      return response.data;
    } catch (error) {
      toast.success(`${error.message}. Please try add again.`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
