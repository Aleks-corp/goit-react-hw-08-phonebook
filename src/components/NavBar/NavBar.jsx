import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsLogining,
  selectProfile,
} from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';

import logo from 'image/Logo.png';
import { LogoutContainer, Nav, UserEmail } from './NavBar.styled';
import { LoadingButton } from '@mui/lab';

export default function NavBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLogining);
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();
  return (
    <Nav>
      <img src={logo} alt="PhoneBook" width="250" />
      <LogoutContainer>
        {profile && <UserEmail>{profile.email}</UserEmail>}
        {isLoggedIn && (
          <LoadingButton
            loading={isLoading}
            variant="contained"
            onClick={() => dispatch(logOut())}
          >
            LogOut
          </LoadingButton>
        )}
      </LogoutContainer>
    </Nav>
  );
}
