import ContactsItem from 'components/ContactsItem/ContactsItem';
import { ContactsListItem, List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import Loader from 'components/Loader';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { useEffect } from 'react';

const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {error && <p>{error}. Please try again or reload page.</p>}
      {isLoading && <Loader />}
      {filteredContacts.length === 0 && !isLoading && !error && (
        <h2>Your PhoneBook is empty</h2>
      )}
      {filteredContacts.length !== 0 && !isLoading && !error && (
        <List>
          {filteredContacts.map(contact => (
            <ContactsListItem key={contact.id}>
              <ContactsItem
                id={contact.id}
                name={contact.name}
                number={contact.number}
                deleteContactItem={id => dispatch(deleteContact(id))}
              />
            </ContactsListItem>
          ))}
        </List>
      )}
    </>
  );
};
export default ContactsList;
