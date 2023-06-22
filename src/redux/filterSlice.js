import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    addFilter: {
      reducer(state, action) {
        state.value = action.payload;
      },
    },
    removeFilter: {
      reducer(state) {
        state.value = '';
      },
    },
  },
});

export const { addFilter, removeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
