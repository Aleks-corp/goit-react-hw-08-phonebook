import { useState } from 'react';
import { Form, Input, Label } from './PhonebookForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts, selectIsLoadingAdd } from 'redux/contacts/selectors';
import { LoadingButton } from '@mui/lab';

export default function PhonebookForm() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoadingAdd);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputContactHandler = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const submitContactHandler = e => {
    e.preventDefault();
    const availableInContactsList = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );
    if (availableInContactsList) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={submitContactHandler}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={inputContactHandler}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={inputContactHandler}
        />
      </Label>
      <LoadingButton
        size="small"
        variant="contained"
        type="submit"
        loading={isLoading}
        loadingIndicator="Loading…"
      >
        Add contacts
      </LoadingButton>
    </Form>
  );
}
