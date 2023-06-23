import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectIsLoggedIn, selectProfile } from 'redux/auth/selectors';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();
  return (
    <>
      <h1>PhoneBook</h1>
      {profile && <p>{profile.email}</p>}
      {isLoggedIn && (
        <Button variant="outlined" onClick={() => dispatch(logOut())}>
          LogOut
        </Button>
      )}

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
