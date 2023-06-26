import PropTypes from 'prop-types';
import {
  Accent,
  ContainerPhoneBook,
  ContainerWrapper,
  ContainerTitle,
} from './Container.styled';
import styled from 'styled-components';

export const Container = ({ title, accent, children }) => (
  <ContainerWrapper>
    {title && (
      <ContainerTitle>
        {accent && <Accent>{`${accent} `}</Accent>}
        {title}
      </ContainerTitle>
    )}
    {children}
  </ContainerWrapper>
);

export const ContainerPhoneList = ({ title, children }) => (
  <ContainerPhoneBook>
    {title && <ContainerTitle>{title}</ContainerTitle>}
    {children}
  </ContainerPhoneBook>
);

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 1440px;
  font-size: 24px;
  color: #010101;
`;

Container.propTypes = {
  title: PropTypes.string,
  accent: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

ContainerPhoneList.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
