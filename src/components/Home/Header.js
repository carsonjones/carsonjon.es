import React from 'react';
import { Box } from 'elements';
import { StyledLogo, Tagline } from './Header.styles';

const Header = () => (
  <Box wrapper styles="position: relative">
    <StyledLogo />
    <Tagline>Product & Design</Tagline>
  </Box>
);

export default Header;
