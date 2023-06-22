import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';

export const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
};
