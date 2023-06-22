import styled from 'styled-components';

export const ContactsListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  display: block;
  margin-top: 20px;
  height: 250px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: hsl(0 0% 50%);
`;
