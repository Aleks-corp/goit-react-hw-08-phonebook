import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts, selectIsLoadingAdd } from 'redux/contacts/selectors';
import { LoadingButton } from '@mui/lab';
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { toast } from 'react-hot-toast';
import { ButtonBox } from './PhonebookForm.styled';

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
      toast.error(`${name} is already in contacts.`);

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
    <form onSubmit={e => submitContactHandler(e)}>
      <FormControl fullWidth required size="small" color="primary">
        <InputLabel htmlFor="name">Name</InputLabel>
        <OutlinedInput
          id="name"
          label="Name"
          name="name"
          type="text"
          variant="outlined"
          inputProps={{
            pattern: '[^0-9]*',
          }}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={inputContactHandler}
        />
      </FormControl>

      <FormControl
        fullWidth
        required
        size="small"
        color="primary"
        sx={{ mt: '20px' }}
      >
        <InputLabel htmlFor="number">Number</InputLabel>
        <OutlinedInput
          id="number"
          label="Number"
          name="number"
          type="tel"
          variant="outlined"
          inputProps={{
            pattern: '[^a-zA-Zа-яА-Я]*',
          }}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={inputContactHandler}
        />
      </FormControl>
      <ButtonBox>
        <LoadingButton
          size="small"
          variant="contained"
          type="submit"
          loading={isLoading}
          loadingIndicator="Loading…"
          sx={{
            m: '0 auto',
            width: '220px',
            fontSize: '16px',
            fontWeight: 600,
            letterSpacing: '1px',
          }}
        >
          Add contacts
        </LoadingButton>
      </ButtonBox>
    </form>
  );
}
