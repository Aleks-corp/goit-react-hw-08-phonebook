import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Container } from '@mui/material';

export function LoginContainer({ children }) {
  return (
    <Container
      disableGutters={true}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        m: 'auto',
        py: 6,
        px: 9,
        zIndex: 1000,
        border: '1px solid #DEDBDB',
        borderRadius: '30px',
        boxShadow: '10px 10px 16px -8px rgba(0, 0, 0, 0.25)',
        width: '460px',
        alignItems: 'center',
      }}
    >
      {children}
    </Container>
  );
}

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 24px 48px;
  z-index: 10;
  border: 1px solid #dedbdb;
  border-radius: 30px;
  box-shadow: 10px 10px 16px -8px rgba(0, 0, 0, 0.25);
  width: 460px;
  height: 315px;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -1.4px;
  text-align: center;
  margin-bottom: 25px;
`;
export const Accent = styled.span`
  color: #265dba;
`;

export const Register = styled.p`
  margin-top: 8px;
  font-size: 15px;
  letter-spacing: -1px;
  text-align: center;
  margin-bottom: 30px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 15px;
  color: #265dba;
  text-decoration: none;
  &.active {
    color: orange;
  }
`;
export const ButtonBox = styled.div`
  width: 150px;
  margin: 0 auto;
`;
