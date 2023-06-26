import styled from 'styled-components';

import { Container } from '@mui/material';

export function ContainerWrapper({ children }) {
  return (
    <Container
      disableGutters={true}
      maxWidth="460px"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        mb: 3,
        py: 6,
        px: 9,
        border: '1px solid #DEDBDB',
        borderRadius: '30px',
        boxShadow: '10px 10px 16px -8px rgba(0, 0, 0, 0.25)',
        maxWidth: '460px',
        bgcolor: '#ffffff',
        alignItems: 'center',
      }}
    >
      {children}
    </Container>
  );
}

export function ContainerPhoneBook({ children }) {
  return (
    <Container
      disableGutters={true}
      maxWidth="650px"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        mx: 'auto',
        py: 5,
        pl: '40px',
        pr: '15px',
        border: '1px solid #DEDBDB',
        borderRadius: '30px',
        boxShadow: '10px 10px 16px -8px rgba(0, 0, 0, 0.25)',
        maxWidth: '600px',
        bgcolor: '#ffffff',
      }}
    >
      {children}
    </Container>
  );
}

export const ContainerTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -1.4px;
  text-align: start;
  margin-bottom: 25px;
`;
export const Accent = styled.span`
  color: #265dba;
`;
