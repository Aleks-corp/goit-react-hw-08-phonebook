import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/600.css';
import { ButtonBox, Register, StyledLink } from './LoginForm.styled';
import { selectIsLogining } from 'redux/auth/selectors';
import { LoadingButton } from '@mui/lab';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoading = useSelector(selectIsLogining);
  const dispatch = useDispatch();

  const formSubmitHandler = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
  };
  return (
    <form onSubmit={e => formSubmitHandler(e)}>
      <FormControl fullWidth required size="small" color="primary">
        <InputLabel htmlFor="email">Email</InputLabel>
        <OutlinedInput
          id="email"
          label="Email"
          name="email"
          type="email"
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
          variant="outlined"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
      </FormControl>

      <Register>
        If you don’t have an account, please{' '}
        <StyledLink to="/register">Register</StyledLink>
      </Register>
      <ButtonBox>
        <LoadingButton
          size="small"
          variant="contained"
          type="submit"
          loading={isLoading}
          disabled={email && password.length >= 7 ? false : true}
          sx={{
            m: '0 auto',
            width: '150px',
            fontSize: '16px',
            fontWeight: 600,
            letterSpacing: '1.04px',
          }}
        >
          Log in
        </LoadingButton>
      </ButtonBox>
    </form>
  );
}
