import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/600.css';

import {
  Accent,
  ButtonBox,
  LoginContainer,
  Register,
  StyledLink,
  Title,
} from './LoginForm.styled';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const formSubmitHandler = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
  };
  return (
    <LoginContainer>
      <Title>
        Please <Accent>Log in</Accent> to your account
      </Title>
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
          <Button
            variant="contained"
            type="submit"
            disabled={email && password ? false : true}
            sx={{
              m: '0 auto',
              width: '150px',
              fontSize: '16px',
              fontWeight: 600,
              letterSpacing: '1.04px',
            }}
          >
            Log in
          </Button>
        </ButtonBox>
      </form>
    </LoginContainer>
  );
}
