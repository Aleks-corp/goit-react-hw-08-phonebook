import { Button, Link, TextField } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/600.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const formSubmitHandler = async e => {
    e.preventDefault();
    dispatch(signUp({ name, email, password }));
  };
  return (
    <>
      <form onSubmit={e => formSubmitHandler(e)}>
        <TextField
          required
          name="user"
          type="text"
          id="outlined-basic"
          label="Username"
          variant="outlined"
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
        />
        <TextField
          required
          name="email"
          type="email"
          id="outlined-basic2"
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
          id="outlined-basic3"
          label="Password"
          variant="outlined"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <Button type="submit">Submit</Button>
      </form>
      <Link component={RouterLink} to="/login" underline="hover">
        Login
      </Link>
    </>
  );
}
