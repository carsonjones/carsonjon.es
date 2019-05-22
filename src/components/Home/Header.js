import React from 'react';
import { Box } from 'elements';
import { Container, StyledLogo, Tagline } from './Header.styles';

const Header = () => (
  <Box wrapper styles="position: relative">
    <Container>
      <StyledLogo />
      <Tagline>Product & Design</Tagline>
    </Container>
  </Box>
);

export default Header;
