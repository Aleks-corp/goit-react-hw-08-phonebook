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
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const inputContactHandler = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
        case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
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

    dispatch(addContact({ name, phone, email }));
    reset();
  };
  const reset = () => {
    setName('');
    setPhone('');
    setEmail('');
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
        <InputLabel htmlFor="phone">Phone</InputLabel>
        <OutlinedInput
          id="phone"
          label="Phone"
          name="phone"
          type="tel"
          variant="outlined"
          inputProps={{
            pattern: '[^a-zA-Zа-яА-Я]*',
          }}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={phone}
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
        <InputLabel htmlFor="email">Email</InputLabel>
        <OutlinedInput
          id="email"
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          inputProps={{
            pattern: '^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
          }}
          title="Please set email correctly"
          value={email}
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
