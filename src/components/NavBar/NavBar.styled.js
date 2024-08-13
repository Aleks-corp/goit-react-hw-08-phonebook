import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 72px;
`;

export const LogoutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;

  font-size: 20px;
  font-weight: 600;
`;

export const UserEmail = styled.p`
  margin-right: 20px;
`;

export const UserAvatar = styled.img`
  width: 24px;
  margin-right: 5px;
  border-radius: 5px;
`;
