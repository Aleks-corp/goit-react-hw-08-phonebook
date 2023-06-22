import PropTypes from 'prop-types';
import { SectionContainer } from './Section.styled';

const Section = ({ title, children }) => (
  <SectionContainer>
    <h2>{title}</h2>
    {children}
  </SectionContainer>
);

export default Section;
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
