import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { addContact, deleteContact, fetchContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleFulfilled = state => {
  state.error = null;
  state.isLoading = false;
};

const handleFulfilledContacts = (state, action) => {
  state.contactsList = action.payload;
};

const handleFulfilledAddContacts = (state, action) => {
  state.contactsList.push(action.payload);
};

const handleFulfilledDeleteContacts = (state, action) => {
  state.contactsList = state.contactsList.filter(
    contact => contact.id !== action.payload.id
  );
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledContacts)
      .addCase(addContact.fulfilled, handleFulfilledAddContacts)
      .addCase(deleteContact.fulfilled, handleFulfilledDeleteContacts)
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected)
      .addMatcher(action => action.type.endsWith('fulfilled'), handleFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
