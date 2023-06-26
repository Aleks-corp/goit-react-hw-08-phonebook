import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
