import styled from 'styled-components';
import line from '../image/objects.png';
import elipse from '../image/Ellipse.png';

export const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  z-index: -10000;
  background-image: url(${line});
  background-repeat: no-repeat;
  background-position: left bottom;
`;

export const LayoutBGImage = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  float: right;
  overflow: hidden;
  z-index: -10000;
  background-image: url(${elipse});
  background-repeat: no-repeat;
  background-position: right top;
`;
