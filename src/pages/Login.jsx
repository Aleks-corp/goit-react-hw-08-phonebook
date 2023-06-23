import { Button, TextField, Link } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const formSubmitHandler = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
  };
  return (
    <>
      <form onSubmit={e => formSubmitHandler(e)}>
        <TextField
          required
          name="email"
          type="email"
          id="outlined-basic1"
          label="Login"
          variant="outlined"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          required
          name="password"
          type="password"
          id="outlined-basic2"
          label="Password"
          variant="outlined"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <Button variant="outlined" type="submit">
          Login
        </Button>
      </form>
      <Link component={RouterLink} to="/register" underline="hover">
        Registration
      </Link>
    </>
  );
}
