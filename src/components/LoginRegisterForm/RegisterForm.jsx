import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from 'redux/auth/operations';
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/600.css';
import { ButtonBox, Register, StyledLink } from './LoginForm.styled';
import { LoadingButton } from '@mui/lab';
import { selectIsLogining } from 'redux/auth/selectors';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log('password:', password !== '');

  const isLoading = useSelector(selectIsLogining);
  const dispatch = useDispatch();

  const formSubmitHandler = async e => {
    e.preventDefault();
    dispatch(signUp({ name, email, password }));
  };
  return (
    <form onSubmit={e => formSubmitHandler(e)}>
      <FormControl fullWidth required size="small" color="primary">
        <InputLabel htmlFor="user">Username</InputLabel>
        <OutlinedInput
          id="user"
          label="Username"
          name="user"
          type="text"
          title="Please enter your Username"
          variant="outlined"
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
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
          title="Please enter your Email"
          error={!(email.includes('@') && email.includes('.')) && email !== ''}
          variant="outlined"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
      </FormControl>
      <FormControl
        fullWidth
        required
        size="small"
        color="primary"
        sx={{ mt: '20px' }}
      >
        <InputLabel htmlFor="password">Password</InputLabel>
        <OutlinedInput
          id="password"
          label="Password"
          name="password"
          type="password"
          error={password.length < 7 && password !== ''}
          title="Minimum allowed length (7)"
          variant="outlined"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
      </FormControl>

      <Register>
        If you already have an account, please{' '}
        <StyledLink to="/login">Login</StyledLink>
      </Register>
      <ButtonBox>
        <LoadingButton
          loading={isLoading}
          variant="contained"
          type="submit"
          disabled={email && password.length >= 7 && name ? false : true}
          sx={{
            m: '0 auto',
            width: '150px',
            fontSize: '16px',
            fontWeight: 600,
            letterSpacing: '1.04px',
          }}
        >
          Register
        </LoadingButton>
      </ButtonBox>
    </form>
  );
}
