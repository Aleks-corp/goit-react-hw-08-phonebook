import styled from 'styled-components';

export const ContactsListItem = styled.li`
  margin-bottom: 8px;
  width: 470px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #dedbdb;
  background: #fff;
  box-shadow: 10px 10px 16px -8px rgba(0, 0, 0, 0.25);
  padding: 10px 20px;
`;

export const List = styled.ul`
  display: block;

  margin-top: 20px;
  height: 300px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: hsl(0 0% 50%);
`;
