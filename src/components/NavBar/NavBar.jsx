import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectProfile } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';

import { Button } from '@mui/material';
import logo from 'image/Logo.png';
import { LogoutContainer, Nav, UserEmail } from './NavBar.styled';

export default function NavBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();
  return (
    <Nav>
      <img src={logo} alt="PhoneBook" width="250" />
      <LogoutContainer>
        {profile && <UserEmail>{profile.email}</UserEmail>}
        {isLoggedIn && (
          <Button variant="contained" onClick={() => dispatch(logOut())}>
            LogOut
          </Button>
        )}
      </LogoutContainer>
    </Nav>
  );
}
