import { generateMedia } from 'styled-media-query';

const breakpoints = generateMedia({
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1440px',
  xxl: '1920px',
});

export default breakpoints;
