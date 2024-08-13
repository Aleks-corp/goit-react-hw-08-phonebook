import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { addContact, deleteContact, fetchContacts } from './operations';

const handlePending = state => {
  state.error = null;
};
const handleRejected = (state, action) => {
  state.error = action.payload;
};

const handlePendingFetchContacts = state => {
  state.isLoadingFetch = true;
};
const handleFulfilledFetchContacts = (state, action) => {
  state.contactsList = action.payload.contacts;
  state.totalHits = action.payload.totalHits;
  state.isLoadingFetch = false;
};
const handleRejectedFetchContacts = state => {
  state.isLoadingFetch = false;
};

const handlePendingAddContacts = state => {
  state.isLoadingAdd = true;
};
const handleFulfilledAddContacts = (state, action) => {
  state.contactsList.push(action.payload);
  state.isLoadingAdd = false;
};
const handleRejectedAddContacts = state => {
  state.isLoadingAdd = false;
};

const handlePendingDeleteContacts = (state, action) => {
  state.contactDelId = action.meta.arg;
};
const handleFulfilledDeleteContacts = (state, action) => {
  state.contactsList = state.contactsList.filter(
    contact => contact._id !== state.contactDelId
  );
  state.contactDelId = false;
};

const handleRejectedDeleteContacts = state => {
  state.contactDelId = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePendingFetchContacts)
      .addCase(fetchContacts.fulfilled, handleFulfilledFetchContacts)
      .addCase(fetchContacts.rejected, handleRejectedFetchContacts)

      .addCase(addContact.pending, handlePendingAddContacts)
      .addCase(addContact.fulfilled, handleFulfilledAddContacts)
      .addCase(addContact.rejected, handleRejectedAddContacts)

      .addCase(deleteContact.pending, handlePendingDeleteContacts)
      .addCase(deleteContact.fulfilled, handleFulfilledDeleteContacts)
      .addCase(deleteContact.rejected, handleRejectedDeleteContacts)

      .addMatcher(
        action =>
          action.type.endsWith('pending') && action.type.startsWith('contacts'),
        handlePending
      )
      .addMatcher(
        action =>
          action.type.endsWith('rejected') &&
          action.type.startsWith('contacts'),
        handleRejected
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
