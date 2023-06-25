import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';
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

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const formSubmitHandler = async e => {
    e.preventDefault();
    dispatch(signUp({ name, email, password }));
  };
  return (
    <LoginContainer>
      <Title>
        Please <Accent>Register</Accent> a new account
      </Title>
      <form onSubmit={e => formSubmitHandler(e)}>
        <FormControl fullWidth required size="small" color="primary">
          <InputLabel htmlFor="user">Username</InputLabel>
          <OutlinedInput
            id="user"
            label="Username"
            name="user"
            type="text"
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
          If you already have an account, please{' '}
          <StyledLink to="/login">Login</StyledLink>
        </Register>
        <ButtonBox>
          <Button
            variant="contained"
            type="submit"
            disabled={email && password && name ? false : true}
            sx={{
              m: '0 auto',
              width: '150px',
              fontSize: '16px',
              fontWeight: 600,
              letterSpacing: '1.04px',
            }}
          >
            Register
          </Button>
        </ButtonBox>
      </form>
    </LoginContainer>
  );
}
