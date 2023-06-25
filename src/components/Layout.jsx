import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { LayoutBGImage, LayoutContainer } from './Container.styled';
import NavBar from './NavBar/NavBar';

export const Layout = () => {
  return (
    <LayoutContainer>
      <LayoutBGImage />
      <NavBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </LayoutContainer>
  );
};
