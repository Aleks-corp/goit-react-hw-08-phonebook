export const selectContacts = state => state.contacts.contactsList;
export const selectIsLoadingFetch = state => state.contacts.isLoadingFetch;
export const selectIsLoadingAdd = state => state.contacts.isLoadingAdd;
export const selectIsLoadingDel = state => state.contacts.contactDelId;
export const selectError = state => state.contacts.error;
export const selectFilterValue = state => state.filter.value;

export const selectFilteredContacts = ({ contacts, filter }) =>
  filter.value.trim()
    ? contacts.contactsList.filter(contact =>
        contact.name.toLowerCase().includes(filter.value.toLowerCase().trim())
      )
    : contacts.contactsList;
